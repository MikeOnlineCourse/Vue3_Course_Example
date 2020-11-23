// actions
export default {
  handOpenState(context) {
    const isOpen = !context.state.isOpen;
    context.commit("OpenState", isOpen);
  },
};
