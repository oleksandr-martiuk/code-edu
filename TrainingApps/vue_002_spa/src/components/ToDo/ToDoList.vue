<template>
    <div>
        <h2>ToDo List:</h2>
        <ul>
            <ToDoItem 
                v-for="(task, index) of todos"
                v-bind:i="index+1"
                v-bind:key="task.id"
                v-bind:task="task"
                v-on:remove-task="removeTask"
            />
        </ul>
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDo/ToDoItem'
import AddToDo from '@/components/ToDo/AddToDo'

export default {
    props: ['todos'],
    components: {
        ToDoItem,
        AddToDo
    },
    methods: {
        removeTask(id){
            // emitting event to the parent (with property 'id')
            this.$emit('remove-task', id);
        }
    }
}
</script>

<style scope>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
