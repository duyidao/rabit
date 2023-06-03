import { ref, onMounted } from "vue";
import { getSubCategoryAPI } from "@api/category";
import { useRoute } from "vue-router";

export function useSubCategory() {
  const route = useRoute();
  const subCategoryObj = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: "publishTime",
  });
  const goodsList = ref([]);

  const disabled = ref(false); // 是否需要继续刷新，为true则不需要
  const getSubCategoryFn = async () => {
    const res = await getSubCategoryAPI(subCategoryObj.value);
    goodsList.value = [...goodsList.value, ...res.result.items];

    // 数据加载完毕
    if (
      subCategoryObj.value.page * subCategoryObj.value.pageSize >=
      res.result.counts
    ) {
      disabled.value = true;
    }
  };
  onMounted(() => getSubCategoryFn());

  return {
    subCategoryObj,
    goodsList,
    disabled,
    getSubCategoryFn
  }
}