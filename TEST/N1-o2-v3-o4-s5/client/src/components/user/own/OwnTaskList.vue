<template>
  <div>
    <ul>
      <h1>My tasks:</h1>
      <OwnTaskItem
        v-for="(task, i) of tasks"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="i"
        v-on:remove-task="removeTask"
      />
    </ul>
  </div>
</template>

<script>
  import OwnTaskItem from '@/components/user/own/OwnTaskItem'

  export default {
    props: ['tasks'],
    components: {
      OwnTaskItem
    },
    methods: {
      removeTask(id) {
        this.$emit('remove-task', id)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
