import BootOption from 'api/store/BootOption';

export default (state = new BootOption(), action: { type: string; bootOption: any }) => {
  return action.bootOption ? state.merge(action.bootOption) : state;
};
