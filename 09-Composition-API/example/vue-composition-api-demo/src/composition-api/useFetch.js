import { ref, reactive } from "vue";
import axios from "axios";

export function useFetchs(apiUrl = "") {
  const fetchData = reactive({ data: [] });
  const isLoad = ref(false);
  const errorLog = ref("");
  axios
    .get(apiUrl)
    .then((res) => {
      isLoad.value = true;
      fetchData.data = res.data;
    })
    .catch((error) => {
      errorLog.value = error.request.statusText;
    });

  return { fetchData, isLoad, errorLog };
}
