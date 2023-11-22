import Analyze from 'api/store/Analyze';

export default (state = new Analyze(), action: { type: string; analyze: any }) => {
  return action.analyze ? state.merge(action.analyze) : state;
};
