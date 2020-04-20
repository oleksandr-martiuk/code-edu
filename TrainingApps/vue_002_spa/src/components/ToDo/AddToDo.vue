<template>
    <div>
        <h2>Create new Task:</h2>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title">
            <button
                type="submit"
                class="pointer"
            >Create</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const id = this.$uuid.v4();
                const task = {
                    id: id,
                    title: this.title,
                    description: '',
                    completed: false
                }
                this.title = '';
                console.log('onSubmit: ', task);
                this.$emit('create-task', task);
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }
    input {
        width: 90%;
    }
</style>
