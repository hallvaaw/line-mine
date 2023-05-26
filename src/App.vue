<script setup lang="ts">
import Plot from './components/Plot.vue'
</script>

<template>
    <h1>Hello world</h1>
    <div>
        <select id="dropdown" name="dropdown">
            <option disabled selected>Select tissue</option>
            <option value="brain">Brain</option>
            <option value="liver">Liver</option>
        </select>
    </div>
  <Plot />
</template>

<style>
#dropdown {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 160px;
    font-size: 22px;
}
</style>
