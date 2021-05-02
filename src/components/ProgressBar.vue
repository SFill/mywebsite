<template>
  <div class="progress-bar">
    <div class="progress-bar__bar">
      <div
        class="progress-bar__bar__item"
        :style="{
          width: level + '%',
        }"
      >
        <div class="progress-bar__title">
          <div class="progress-bar__label">{{title}}</div>
          <div class="progress-bar__percent">{{level}}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    level: Number,
    title: String
  },
  name: "ProgressBar",
};
</script>
<style scoped>
.progress-bar {
  display: flex;
  flex-flow: column;
  min-width: 200px;
  padding: 10px;
}
.progress-bar .progress-bar__title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
}
.progress-bar .progress-bar__title div:first-child {
  padding-left: 8px;
}
.progress-bar .progress-bar__title div:last-child {
  padding-right: 8px;
}

.progress-bar .progress-bar__bar {
  background: rgb(215, 217, 223);
  height: 30px;
  border-radius: 20px;
}
.progress-bar .progress-bar__bar .progress-bar__bar__item {
  background: rgb(12, 67, 231);
  height: inherit;
  border-radius: inherit;
}
</style>