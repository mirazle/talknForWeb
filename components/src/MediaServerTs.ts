import PostMessage from 'common/PostMessage';

type ParamsType = {
  id: string;
  ch: string;
  href: string;
  audios: HTMLAudioElement[];
  videos: HTMLVideoElement[];
};

const paramsInit = {
  id: '',
  ch: '',
  href: '',
  audios: [],
  videos: [],
};

// Workerとして独立させる(読み込んだComponent分実行されてしまう)

export default class MediaServer {
  [key: string]: any;
  public initId = '';
  public ch: string | null = null;
  public status = '';
  public components: { [key: string]: any } = {};
  public audios: HTMLAudioElement[];
  public videos: HTMLVideoElement[];
  public handleEventSrc: string[] = [];
  public file: any = null;
  public searchingId = null;
  public searchingIds: { [key: string]: number } = {};
  public maxSearchingCnt = 30;
  public playIntervalId: null | number = null;
  public searchingCnt = 0;
  public pointerTime = 0;
  public isLog = false;
  get currentTime() {
    return this.file ? Math.floor(this.file.currentTime * 10) / 10 : 0;
  }
  static get SECOND_INTERVAL() {
    return 200;
  }
  static get STATUS_SEARCH() {
    return 'SEARCH';
  }
  static get STATUS_STANBY() {
    return 'STANBY';
  }
  static get STATUS_PLAY() {
    return 'PLAY';
  }
  static get STATUS_ENDED() {
    return 'ENDED';
  }
  static get STATUS_STOP() {
    return 'STOP';
  }
  static get P_ORTAL_KEY() {
    return 'PORTAL';
  }
  static get CLIENT_KEY() {
    return 'CLIENT';
  }
  static get COMPONENTS_KEY() {
    return 'COMPONENTS';
  }
  constructor(initId = ' windowMediaServer') {
    this.initId = initId;

    // postMessage to ids.
    this.init = this.init.bind(this);
    this.onError = this.onError.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.postMessage = this.postMessage.bind(this);

    // methods.
    this.setStatus = this.setStatus.bind(this);
    this.setClientParams = this.setClientParams.bind(this);
    this.setRelationElms = this.setRelationElms.bind(this);
    this.searching = this.searching.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.ended = this.ended.bind(this);
    this.log = this.log.bind(this);

    this.init();

    this.listenMessage();
  }

  listenMessage() {
    window.addEventListener('message', this.onMessage);
    window.addEventListener('messageerror', this.onError);
  }

  setStatus(status: string, called = '') {
    this.status = status;
    this.log('SET STATUS ' + called);
  }

  init() {
    this.ch = null;
    this.setStatus(MediaServer.STATUS_STANBY);
    this.reset();

    window.removeEventListener('message', this.onMessage);
    window.removeEventListener('messageerror', this.onError);
  }

  reset() {
    Object.keys(this.searchingIds).forEach((id) => {
      window.clearInterval(this.searchingIds[id]);
    });
    window.clearInterval(Number(this.playIntervalId));

    this.components = {};
    this.audios = [];
    this.videos = [];
    this.handleEventSrc = [];
    this.file = null;
    this.searchingIds = {};
    this.playIntervalId = null;
    this.searchingCnt = 0;
  }

  setRelationElms(id?: string) {
    if (id && this.components[id]) {
      this.components[id] = {
        params: { ...paramsInit },
      };
    }

    if (this.videos.length === 0) {
      this.videos = Array.from(window.document.querySelectorAll('video'));
    }
    if (this.audios.length === 0) {
      this.audios = Array.from(window.document.querySelectorAll('audio'));
    }
  }

  setClientParams(params: any) {
    if (params && params.id) {
      this.components[params.id].params = params;
    }
  }

  onMessage(e: any) {
    if (e.data && e.data.type) {
      if (e.data.type === PostMessage.MEDIA_CLIENT_TO_MEDIA_SERVER_TYPE) {
        const { method, params } = e.data;
        if (this.file && this.file[method] && typeof this.file[method] === 'function') {
          this.file[method]();
        } else {
          if (this[method] && typeof this[method] === 'function') {
            this.setRelationElms(params.id);
            this.setClientParams(params);
            this[method](params.id);
          }
        }
      }
    }
  }

  onError(e: any) {
    console.warn(e);
  }

  postMessage(id: string) {
    const type = PostMessage.MEDIA_SERVER_TO_MEDIA_CLIENT_TYPE;
    const params = {
      ch: this.ch,
      status: this.status.toLowerCase(),
      currentTime: this.currentTime,
    };
    window.postMessage({ id, type, params });
  }

  searching(id: string) {
    if (!id) {
      console.warn('Please Set id TalknMediaServer ');
      return false;
    }

    if (this.searchingIds[id] && Number(this.searchingIds[id]) > 0) {
      window.clearInterval(this.searchingIds[id]);
    }

    // this.reset();
    this.setStatus(MediaServer.STATUS_SEARCH, `start searching ${id}`);
    this.searchingCnt = 0;
    this.playIntervalId = null;
    this.audios = [];
    this.videos = [];
    this.handleEventSrc = [];
    const handleEventsWrap = (mediaType: 'audios' | 'videos') => {
      let isHandle = false;

      this[mediaType].forEach((media: HTMLMediaElement) => {
        if (isHandle) return;
        this[mediaType].forEach((iframeMedia) => {
          if (isHandle) return;
          if (media.src.indexOf(iframeMedia.src) >= 0) {
            if (!this.handleEventSrc.includes(media.src)) {
              this.handleEventSrc.push(media.src);
              this.handleEvents(id, media);
              isHandle = true;
            }
          }
        });
      });
      return isHandle;
    };

    this.searchingIds[id] = window.setInterval(() => {
      this.setRelationElms(id);

      const hasAudio = Boolean(this.audios.length);
      const hasVideo = Boolean(this.videos.length);

      let isHandleEvents = false;
      if (this.searchingCnt < this.maxSearchingCnt) {
        if (this.videos.length > 0 && hasVideo) {
          isHandleEvents = handleEventsWrap('videos');
          if (isHandleEvents) {
            window.clearInterval(this.searchingIds[id]);
            this.setStatus(MediaServer.STATUS_STANBY, `searched video ${id}`);
          }
        }

        if (this.audios.length > 0 && hasAudio) {
          isHandleEvents = handleEventsWrap('audios');
          if (isHandleEvents) {
            window.clearInterval(this.searchingIds[id]);
            this.setStatus(MediaServer.STATUS_STANBY, `searched audio ${id}`);
          }
        }
      } else {
        window.clearInterval(this.searchingIds[id]);
        this.setStatus(MediaServer.STATUS_ENDED, `search to ended ${id}`);
      }
      this.searchingCnt++;
    }, MediaServer.SECOND_INTERVAL);
  }

  handleEvents(id: string, media: HTMLMediaElement) {
    media.addEventListener('play', (e: any) => this.play(id, e));
    media.addEventListener('pause', (e: any) => this.pause(id, e));
    media.addEventListener('ended', (e: any) => this.ended(id, e));
  }

  play(id: string, e: any) {
    this.file = e.srcElement;
    this.ch = this.file.currentSrc.replace('http:/', '').replace('https:/', '') + '/';
    this.setStatus(MediaServer.STATUS_PLAY, 'play');
    this.postMessage(id);

    this.playIntervalId = window.setInterval(() => {
      this.postMessage(id);
    }, MediaServer.SECOND_INTERVAL);
  }

  pause(id: string, e: any) {
    if (this.status !== MediaServer.STATUS_STANBY) {
      this.setStatus(MediaServer.STATUS_STANBY, 'pause');
      window.clearInterval(Number(this.playIntervalId));
      this.postMessage(id);
    }
  }

  ended(id: string, e: any) {
    this.setStatus(MediaServer.STATUS_ENDED, 'ended');
    window.clearInterval(Number(this.playIntervalId));
    this.postMessage(id);
    Object.keys(this.searchingIds).forEach((id) => {
      window.clearInterval(this.searchingIds[id]);
    });
  }

  log(label: string, called?: string) {
    if (this.isLog) {
      console.log(`@@@@@@@@@@@ ${label} ${this.status} [${called}] ch: ${this.ch} time: ${this.pointerTime} @@@`);
    }
  }
}
