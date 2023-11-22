export default (state = {}, action: { type: string; setting: any }) => {
  return action.setting ? { ...action.setting } : state;
};
