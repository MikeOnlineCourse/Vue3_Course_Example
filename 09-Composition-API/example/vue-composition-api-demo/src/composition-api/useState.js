import { ref } from "vue";

export function StateTodo() {
  const idx = ref(0);

  const addState = () => {
    idx.value++;
  };

  return {
    idx,
    addState,
  };
}
