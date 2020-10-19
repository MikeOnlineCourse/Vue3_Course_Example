const { ref, onMounted, onUnmounted } = Vue;
export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  const update = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("click", update);
  });
  onUnmounted(() => {
    window.removeEventListener("click", update);
  });
  return { x, y };
}
