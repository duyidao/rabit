import { onMounted, ref } from "vue";
import { getTopCategoryAPI } from "@api/category";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({}); // 分类数据
  const route = useRoute(); // 路由对象

  const getTopCategoryFn = async (id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => getTopCategoryFn(route.params.id));

  /**
 * 侦听路由变化，重新调用接口
 * to：当前最新路由参数
 * */
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getTopCategoryFn(to.params.id);
  })

  return {
    categoryData,
  }
}