import User from 'api/store/User';

export default (state = new User(), action: { type: string; user: any }) => {
  return action.user ? state.merge(action.user) : state;
};
