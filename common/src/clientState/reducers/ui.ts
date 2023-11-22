import Ui from 'common/clientState/store/Ui';

export default (state = new Ui(), action: { type: string; ui: any }) => {
  return action.ui ? state.merge(action.ui) : state;
};
