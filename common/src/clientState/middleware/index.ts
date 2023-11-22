import Sequence from 'common/Sequence';
import conf from 'common/conf';
import define from 'common/define';
import util from 'common/util';

import App from 'api/store/App';
import Posts from 'api/store/Posts';

import Ui from '../store/Ui';

const transitionNotif = 300;
const transitionNotifDisp = 3000;

declare global {
  interface Window {
    talknWindow: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
  interface Math {
    easeInOutQuad: any;
  }
}

export default {
  updateAction: (store: any) => (next: any) => (action: any) => {
    const state = store.getState();
    action.ui = action.ui ? { ...state.ui, ...action.ui } : state.ui;
    action.app = action.app ? { ...state.app, ...action.app } : state.app;

    if (functions[action.type as keyof typeof functions]) {
      action = functions[action.type as keyof typeof functions](state, action);
    }

    if (action) {
      next(action);
    }
  },
};

const functions = {
  'API_TO_CLIENT[REQUEST]:getMore': (state: any, action: any) => {
    action.ui.isLoading = true;
    return action;
  },
  'API_TO_CLIENT[EMIT]:getMore': (state: any, action: any) => {
    action.ui.isLoading = false;
    return action;
  },
  'API_TO_CLIENT[REQUEST]:fetchPosts': (state: any, action: any) => {
    // action.ui.isLoading = true;
    return action;
  },
  'API_TO_CLIENT[REQUEST]:changeThread': (state: any, action: any) => {
    action.ui.isLoading = true;
    return action;
  },
  'API_TO_CLIENT[EMIT]:fetchPosts': (state: any, action: any) => {
    action.ui.isLoading = false;
    action.ui.detailCh = action.thread.ch;
    if (!action.app.isLinkCh) {
      switch (action.ui.extensionMode) {
        case Ui.extensionModeBottom:
          if (!action.ui.isOpenPosts && !action.ui.isDispPosts) {
            const transition = transitionNotif * 4 + transitionNotifDisp;
            window.talknWindow.ext.to('openNotif', Sequence.UNKNOWN, { transition });
          }
          break;
        case Ui.extensionModeModal:
          if (!action.app.isMediaCh && action.posts.length > 0) {
            const id = action.posts[action.posts.length - 1]['_id'];
            const post = action.posts[action.posts.length - 1]['post'];
            const stampId = action.posts[action.posts.length - 1]['stampId'];
            let favicon = action.posts[action.posts.length - 1]['favicon'];
            favicon = Sequence.HTTPS_PROTOCOL + '//' + conf.assetsIconPath + util.getSaveFaviconName(favicon);

            window.talknWindow.ext.to('openNotif', Sequence.UNKNOWN, {
              id,
              post,
              stampId,
              favicon,
              addUnreadCnt: action.posts.length,
            });
          }
          break;
      }
    }
    return action;
  },
  'API_TO_CLIENT[BROADCAST]:post': (state: any, action: any) => {
    const postLength = action.posts.length - 1;
    switch (action.ui.extensionMode) {
      case Ui.extensionModeBottom:
        if (!action.ui.isOpenPosts && !action.ui.isDispPosts) {
          const transition = transitionNotif * 4 + transitionNotifDisp;
          window.talknWindow.ext.to('openNotif', { transition });
        }
        break;
      case Ui.extensionModeModal:
        if (action.posts.length > 0) {
          const id = action.posts[postLength]['_id'];
          const post = action.posts[postLength]['post'];
          const stampId = action.posts[postLength]['stampId'];
          let favicon = action.posts[postLength]['favicon'];
          favicon = Sequence.HTTPS_PROTOCOL + '//' + conf.assetsIconPath + util.getSaveFaviconName(favicon);
          window.talknWindow.ext.to('openNotif', Sequence.UNKNOWN, {
            id,
            post,
            stampId,
            favicon,
            addUnreadCnt: action.posts.length,
          });
        }
        break;
    }
    return action;
  },
  'CLIENT_TO_API[EMIT]:getMore': (state: any, action: any) => {
    action.ui.isLoading = true;
    return action;
  },
  'ON_CLICK_MULTISTREAM': (state: any, action: any) => {
    const posts = Posts.getDispPosts(action);
    const postLength = posts && posts.length ? posts.length : 0;
    if (postLength > 0 && state.ranks.length > 0) {
      action.ranks = state.ranks.map((mi: any) => {
        if (state.app.rootCh === mi.ch) {
          return {
            ...mi,
            favicon: posts[postLength - 1].favicon,
            post: posts[postLength - 1].post,
            stampId: posts[postLength - 1].stampId,
          };
        } else {
          return mi;
        }
      });
    }
    return action;
  },
  'NEXT_POSTS_TIMELINE': (state: any, action: any) => {
    const postsTimelineKey = action.postsTimeline.length - 1;
    const id = action.postsTimeline[postsTimelineKey]['_id'];
    const post = action.postsTimeline[postsTimelineKey]['post'];
    const stampId = action.postsTimeline[postsTimelineKey]['stampId'];
    let favicon = action.postsTimeline[postsTimelineKey]['favicon'];
    favicon = Sequence.HTTPS_PROTOCOL + '//' + conf.assetsIconPath + util.getSaveFaviconName(favicon);
    if (window.talknWindow) {
      window.talknWindow.ext.to('openNotif', Sequence.UNKNOWN, {
        id,
        post,
        stampId,
        favicon,
      });
    }

    action.postsTimeline = [...state.postsTimeline, ...action.postsTimeline];
    return action;
  },
  'TOGGLE_DISP_POSTS_SUPPORTER': (state: any, action: any) => {
    state.ui.isOpenPostsSupporter = !state.ui.isOpenPostsSupporter;
    return action;
  },
  'TOGGLE_LINKS': (state: any, action: any) => {
    action.ui.isOpenLinks = !state.ui.isOpenLinks;
    return action;
  },
  'ON_CLICK_TOGGLE_POSTS': (state: any, action: any) => {
    action.ui.isOpenPosts = action.ui.isOpenPosts ? action.ui.isOpenPosts : Ui.getIsOpenPosts(action.ui);
    return action;
  },
  'ON_CLICK_TOGGLE_DISP_DETAIL': (state: any, action: any) => {
    const threadDetail = state.threads[action.app.detailCh];
    action.threadDetail = { ...threadDetail };
    return action;
  },
  'OFF_TRANSITION': (state: any, action: any) => {
    action.ui.height = App.getHeight();
    action.ui.isOpenPosts = action.ui.isOpenPosts ? action.ui.isOpenPosts : Ui.getIsOpenPosts(action.ui);
    return action;
  },
  'ON_TRANSITION_END': (state: any, action: any) => {
    action.ui.height = Ui.getHeight();
    action.ui.isOpenPosts = Ui.getIsOpenPosts(action.ui);
    return action;
  },
  'ON_RESIZE_START_WINDOW': (state: any, action: any) => {
    action.ranks = state.ranks;
    return action;
  },
  'ON_RESIZE_END_WINDOW': (state: any, action: any) => {
    action.ranks = state.ranks;
    return action;
  },
  'ON_CLICK_TO_MULTI_THREAD': (state: any, action: any) => {
    action.ui.isLoading = !action.ui.isLoading;
    return action;
  },
  'ON_CLICK_TOGGLE_DISP_MENU': (state: any, action: any) => {
    action.ui.isOpenMenu = !action.ui.isOpenMenu;
    return action;
  },
  'TOGGLE_DISP_SET_CH_MODAL': (state: any, action: any) => {
    action.ui.isOpenSetChModal = !state.ui.isOpenSetChModal;
    return action;
  },
  'TOGGLE_DISP_BOARD': (state: any, action: any) => {
    action.ui.isOpenBoard = !state.ui.isOpenBoard;
    return action;
  },
  'OPEN_NEW_POST': (state: any, action: any) => {
    action.ui.isOpenNewPost = true;
    return action;
  },
  'TOGGLE_BUBBLE_POST': (state: any, action: any) => {
    action.ui.isBubblePost = !state.ui.isBubblePost;
    return action;
  },
  'CLOSE_NEW_POST': (state: any, action: any) => {
    action.ui.isOpenNewPost = false;
    return action;
  },
  'OPEN_INNER_NOTIF': (state: any, action: any) => {
    action.ui.openInnerNotif = action.ui.openInnerNotif === '' ? define.noInnerNotif : action.ui.openInnerNotif;
    return action;
  },
  'ON_CHANGE_INPUT_POST': (state: any, action: any) => {
    const inputPost = action.ui.inputPost;
    window.talknWindow.ext.to('setInputPost', Sequence.UNKNOWN, { inputPost });
    return action;
  },
  'GET_CLIENT_METAS': (state: any, action: any) => {
    let updateFlg = false;
    // let { clientMetas } = action;
    let clientMetas = action;
    let { serverMetas } = state.thread;
    action.thread = {};
    // Metas
    Object.keys(clientMetas).forEach((key, i) => {
      if (clientMetas[key] && clientMetas[key] !== '' && serverMetas[key] !== clientMetas[key]) {
        if (!action.thread.serverMetas) {
          action.thread.serverMetas = {};
        }
        updateFlg = true;
        action.thread.serverMetas[key] = clientMetas[key];
      }
    });
    if (updateFlg) {
      action.threadDetail = { ...state.threadDetail };
      action.threadDetail.serverMetas = {
        ...action.threadDetail.serverMetas,
        ...action.thread.serverMetas,
      };
      console.log(action.thread.serverMetas);
      return action;
    }
  },
};
