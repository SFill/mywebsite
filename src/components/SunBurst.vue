<template>
  <div class="chart">
    <div v-if="!chart">
      <Loader />
    </div>
    <div class="chart__content"></div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  props: ["options", "Anychart"],
  name: "VueAnychart",
  components: {
    Loader,
  },
  data() {
    return {
      chart: null,
    };
  },
  async mounted() {
    if (!this.chart && this.options) {
      await this.init();
    }
  },
  methods: {
    removeSeries() {
      if (this.chart.getSeriesCount()) {
        this.chart.removeSeriesAt(0);
      }
    },
    removeAllSeries() {
      if (this.chart.getSeriesCount()) {
        this.chart.removeAllSeries();
      }
    },
    addSeries(data) {
      this.delegateMethod("addSeries", data);
    },
    delegateMethod(name, data) {
      if (!this.chart) {
        console.error(
          `Cannot call [$name] before the chart is initialized. Set prop [options] first.`,
          this
        );
        return;
      }
      return this.chart[name](data);
    },
    async init() {
      if (!this.chart && this.options) {
        let _Anychart = this.Anychart || (await import("anychart"));
        this.chart = new _Anychart.sunburst(this.options, "as-tree");
        this.chart.labels().position("circular");
        this.chart.calculationMode("ordinal-from-leaves");

        this.chart.container(this.$el.querySelector(".chart__content")).draw();
      }
    },
  },
  watch: {
    options: function (options) {
      if (!this.chart && options) {
        this.init();
      } else {
        this.chart.dispose();
        this.chart = null;
        this.init();
      }
    },
    chart: function () {},
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
};
</script>
<style scoped>
.chart {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.chart__content {
  width: inherit;
  height: inherit
}
</style>