import App from 'api/store/App';

export default (state = new App(), action: { type: string; app: any }) => {
  return action.app ? new App(action.app) : state;
};
