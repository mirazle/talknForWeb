export default (state: string[] = [], action: { type: string; componentDidMounts: string }) => {
  if (action.componentDidMounts) {
    state.push(action.componentDidMounts);
  }
  return state;
};
