<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCategoryFilterAPI, getSubCategoryAPI } from "@api/category";
import GoodsItem from "@/views/Home/components/GoodsItem.vue";

const subCategoryData = ref({});
const route = useRoute();
const getCategoryFilterFn = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  subCategoryData.value = res.result;
};

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

const handleClick = (e) => {
  subCategoryObj.value.sortField = e;
  getSubCategoryFn();
};

// 滚动到底部
const infiniteScrollFn = (e) => {
  subCategoryObj.value.page += 1;
  getSubCategoryFn();
};

onMounted(() => getCategoryFilterFn());
onMounted(() => getSubCategoryFn());
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${subCategoryData.parentId}` }"
          >{{ subCategoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="subCategoryObj.sortField" @tab-change="handleClick">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="infiniteScrollFn" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodsList" :goods="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
