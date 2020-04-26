<template>
  <li v-bind:class="{disabled: task.complete}">
    <span v-bind:class="{done: task.complete}">
    <button class="btn-add-item">&check;</button>
    <strong>{{index + 1}}. </strong>{{task.title | uppercase}}</span>
    <button class="btn-rm-item" v-on:click="$emit('remove-task', task.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid rgb(83,131,211);
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem;
    margin-bottom: .3rem;
  }

  .done {
    text-decoration: line-through;
    color: white;
  }

  .disabled {
    background-color: rgb(138,138,147);
  }
</style>
