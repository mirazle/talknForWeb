import Posts from 'api/store/Posts';

import { HookProps, actions } from 'components/container/Thread/GlobalContext';
import { isValidKey } from 'components/utils/obj';

export type Type = string[];
export const init: Type = [];

export default (hookProps: HookProps) => {
  const hookActionKey = String(hookProps.state.apiLog[0]);
  if (isValidKey(hookActionKey, hookActions)) {
    hookActions[hookActionKey](hookProps);
  }
};

const hookActions = {
  'SERVER_TO_API[EMIT]:tune': async ({ setAction }: HookProps) => {
    setAction(actions.apiResponseTuning);
  },
  'SERVER_TO_API[EMIT]:fetchPosts': async ({ action, bools, state, setAction, setBools, setPostsTimeline }: HookProps) => {
    const { app, apiLog, thread, ranks, posts } = state;

    if (action === actions.apiRequestFetch) {
      const dispPosts = Posts.getDispPosts(state);
      setBools((p) => ({ ...p, catchFetchPost: true }));
      setPostsTimeline(dispPosts);
    } else if (action === actions.apiRequestChangeThread) {
      setPostsTimeline(state.posts);
      setAction(actions.apiResponseChangeThread);
    }
  },

  'SERVER_TO_API[EMIT]:rank': async (props: HookProps) => {
    const { bools, state, setBools, setMenuRank } = props;
    const { app, apiLog, thread, ranks, posts } = state;
    setMenuRank(ranks);
    setBools((p) => ({ ...p, catchRanks: true }));
  },

  'SERVER_TO_API[EMIT]:getMore': async ({ state, postsTimeline, setAction, setPostsTimeline }: HookProps) => {
    const { app, apiLog, thread, ranks, posts } = state;
    setPostsTimeline(posts.concat(postsTimeline));
    setAction(actions.apiResponseGetMore);
  },
  'SERVER_TO_API[BROADCAST]:post': async ({ state, postsTimeline, setAction, setPostsTimeline }: HookProps) => {
    const { app, apiLog, thread, ranks, posts } = state;
    if (app.isRootCh) {
      setPostsTimeline(postsTimeline.concat(posts));
      setAction(actions.apiResponsePost);
    } else {
      if (posts[0].ch === thread.ch) {
        setPostsTimeline(postsTimeline.concat(posts));
        setAction(actions.apiResponsePost);
      }
    }
  },
  'SERVER_TO_API[EMIT]:changeThreadDetail': async ({ action, state, setAction }: HookProps) => {
    const { app, apiLog, thread, ranks, posts } = state;
    if (action === actions.apiRequestChangeThreadDetail) {
      setAction(actions.apiResponseChangeThreadDetail);
    }
  },
};

export type ParamsType = { [key: string]: string | number };
