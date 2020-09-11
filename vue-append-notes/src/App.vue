<template>
<div id="app">
  <button @click="run">运行</button>
  <div ref="output"></div>
  <div>
    <div v-for="n in nodes" :key="n">{{n}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      n: 1000,
      nodes: []
    }
  },
  created() {
    this.t1 = 0
    this.t2 = 0
    this.total = 0
  },
  updated() {
    this.t2 = performance.now()
    this.$refs.output.textContent = this.t2 - this.t1 + 'ms'
  },
  methods: {
    run() {
      this.t1 = performance.now()
      for (let i = 0; i < this.n; i++) {
        this.nodes.push(this.total + i)
      }
      this.total += this.n
    }
  }
}
</script>

<style>

</style>
