import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCategoryFilterAPI } from "@api/category";

export function useCategoryFilter() {
  const subCategoryData = ref({});
  const route = useRoute();
  console.log(route);

  const getCategoryFilterFn = async () => {
    const res = await getCategoryFilterAPI(route.params.id);
    subCategoryData.value = res.result;
  };
  onMounted(() => getCategoryFilterFn());

  return {
    subCategoryData
  }
}