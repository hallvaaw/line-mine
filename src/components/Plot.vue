<template>
    <div id="scatter-plot">
        <Scatter :data="data" :options="options" />
    </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js'
import { Scatter } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(LinearScale, PointElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Scatter
  },
  data() {
    return chartConfig
  }
}
</script>

<style>
#scatter-plot {
    height: 800px;
    width: 1200px;
}
</style>
