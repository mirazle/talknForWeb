export default (state = [], action: { type: string }) => {
  return [action.type, ...state];
};
