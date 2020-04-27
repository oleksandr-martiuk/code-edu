<template>
  <div>
    <ul>
      <h1>My tasks:</h1>
      <OwnTaskItem
        v-for="(task, i) of tasks"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:index="i"
        v-on:remove-user-task="removeUserTask"
        v-on:complete-user-task="completeUserTask"
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
      removeUserTask(id){
        this.$emit('remove-user-task', id);
      },
      completeUserTask(id) {
        this.$emit('complete-user-task', id);
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
