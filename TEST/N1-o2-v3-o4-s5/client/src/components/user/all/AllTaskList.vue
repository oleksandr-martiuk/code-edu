<template>
  <div>
    <ul>
      <h1>All tasks:</h1>
      <AllTaskItem
        v-for="(task, i) of tasks"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="i"
        v-on:remove-task="removeTask"
        v-on:add-user-task="addUserTask"
      />
    </ul>
  </div>
</template>

<script>
  import AllTaskItem from '@/components/user/all/AllTaskItem'

  export default {
    props: ['tasks'],
    components: {
      AllTaskItem
    },
    methods: {
      removeTask(id) {
        this.$emit('remove-task', id)
      },
      addUserTask(id) {
        this.$emit('add-user-task', id)
      },
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
