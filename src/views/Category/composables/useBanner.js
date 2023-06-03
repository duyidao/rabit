import { onMounted, ref } from "vue";
import { getBannerAPI } from "@api/layout";

export function useBanner() {
  const bannerList = ref([]); // 轮播图数组

  const getBannerFn = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };

  onMounted(() => {
    getBannerFn();
  });

  return {
    bannerList
  }
}