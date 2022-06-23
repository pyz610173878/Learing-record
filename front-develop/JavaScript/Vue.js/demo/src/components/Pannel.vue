<template>
  <div>
    <div class="title">
      <h4>芙蓉楼送辛渐</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <div class="container" v-show="isShow">
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
      <h1>{{ (title = name) }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      isShow: false,
      name: "owlyyds",
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}
.title h4 {
  line-height: 2;
  margin: 0;
}
.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}
.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}
</style>