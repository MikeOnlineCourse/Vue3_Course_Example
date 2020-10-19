const { reactive, onMounted, onUnmounted, toRefs } = Vue;
export function useReSizeToRefs() {
  const wh = reactive({
    width: 0,
    height: 0,
  });
  const resize = () => {
    wh.width = window.innerWidth;
    wh.height = window.innerHeight;
  };
  onMounted(() => {
    window.addEventListener("resize", resize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return { ...toRefs(wh) };
}
