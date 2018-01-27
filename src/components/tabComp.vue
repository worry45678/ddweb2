<template>
<div>
  <h1>component</h1>
  <p>{{ content }}</p>
</div>
</template>

<script>
export default {
  props: ['type','content'],
  data() {
    return {
        msg: 'message'
    }
  },
}
</script>
