import Thread from 'api/store/Thread';

export default (state = new Thread({}, {}), action: { type: string; threadDetail: any }) => {
  return action.threadDetail ? state.merge(action.threadDetail) : state;
};
