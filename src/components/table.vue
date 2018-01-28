<template>
<div>
  <input type="text" v-model="this.$store.state.message">
  <button @click="change">change</button>
  <button @click="$store.commit('change')">change2</button>
</div>
</template>

<script>
export default {
  data () {
      return {
          msg: this.$store.state.message
      }
  },
  methods: {
      change: function() {
          this.$store.state.message = 'changed'
          alert(store.state.message)
      }
  }
}
</script>
