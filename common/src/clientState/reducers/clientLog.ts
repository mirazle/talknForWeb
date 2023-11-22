export default (state = [], action: { type: string }) => {
  return action.type !== 'COMPONENT_DID_MOUNTS' ? [action.type, ...state] : state;
};
