import Setting from 'api/store/Setting';

export default (state = new Setting(), action: { type: string; setting: any }) => {
  return action.setting ? state.merge(action.setting) : state;
};
