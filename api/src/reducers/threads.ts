import Threads from 'api/store/Threads';

export default (state = new Threads(), action: { type: string; threads: any }) => {
  return action.threads ? state.merge(action.threads) : state;
};
