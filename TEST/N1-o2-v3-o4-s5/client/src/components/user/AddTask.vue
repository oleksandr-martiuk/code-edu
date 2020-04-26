<template>
  <div class="form">
    <form class="login-form" @submit.prevent="onSubmit">
      <input type="text" placeholder="title" v-model="title"/>
      <input type="text" placeholder="description" v-model="description"/>
      <button type="submit">create new task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          title: this.title,
          description: this.description
        }

        this.$emit('create-task', newTask);
        this.title = '';
        this.description = '';
      }
    }
  }
}
</script>
