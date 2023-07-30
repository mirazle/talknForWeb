import Sequence from 'common/Sequence';
import conf from 'common/conf';

import Thread from 'api/store/Thread';

export default class Html {
  constructor(params) {
    const findType = params && params.findType ? params.findType : Thread.findTypeHtml;
    const ogpImage = conf.ogpImages[findType] ? conf.ogpImages[findType] : conf.ogpImages[Thread.findTypeHtml];

    return {
      protocol: { type: String, default: Sequence.TALKN_PROTOCOL },
      contentType: { type: String, default: 'talkn/ch' },
      serverMetas: {
        'title': { type: String, default: 'talkn' },
        'keywords': { type: String, default: 'talkn, live communication, live cnt, live magazine, blockchain, ai, art, internet' },
        'description': { type: String, default: conf.description },
        'talkn:config': { type: String, default: '' },
        'og:type': { type: String, default: '' },
        'og:title': { type: String, default: 'talkn' },
        'og:image': { type: String, default: ogpImage },
        'og:description': { type: String, default: conf.description },
        'og:locale': { type: String, default: '' },
        'fb:app_id': { type: String, default: '' },
        'fb:page_id': { type: String, default: '' },
        'twitter:app:country': { type: String, default: '' },
        'twitter:card': { type: String, default: '' },
        'twitter:title': { type: String, default: '' },
        'twitter:description': { type: String, default: '' },
        'twitter:site': { type: String, default: '' },
        'twitter:image': { type: String, default: '' },
        'twitter:app:name:iphone': { type: String, default: '' },
        'twitter:app:id:iphone': { type: String, default: '' },
        'twitter:app:url:iphone': { type: String, default: '' },
        'twitter:app:name:googleplay': { type: String, default: '' },
        'twitter:app:id:googleplay': { type: String, default: '' },
        'twitter:app:url:googleplay': { type: String, default: '' },
        'al:ios:app_name': { type: String, default: '' },
        'al:ios:app_store_id': { type: String, default: '' },
        'al:ios:url': { type: String, default: '' },
        'al:android:app_name': { type: String, default: '' },
        'al:android:app_store_id': { type: String, default: '' },
        'al:android:package': { type: String, default: '' },
        'al:android:url': { type: String, default: '' },
      },
      links: { type: [], default: [] },
      h1s: { type: [], default: [] },
      h2s: { type: [], default: [] },
      h3s: { type: [], default: [] },
      h4s: { type: [], default: [] },
      h5s: { type: [], default: [] },
      iframes: { type: [], default: [] },
      audios: { type: [], default: [] },
      videos: { type: [], default: [] },
    };
  }
}
