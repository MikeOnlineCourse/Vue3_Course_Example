const { ref, onMounted, onUnmounted } = Vue;
export function useReSize() {
  const width = ref(0);
  const height = ref(0);

  const resize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("resize", resize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });
  return { width, height };
}
