<template>
  <div>
    <AddToDo v-on:create-task="createTask"/>
    <router-link to="/">Home</router-link>
    <hr>
    <select v-model="taskFilter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
    </select>
    <Loader v-if="loading"/>
    <!-- @ helps to exchange v-on -->
    <!-- : helps to exchange v-bind: -->
    <ToDoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-task="removeTask"
        @create-task="createTask"
    />
    <p v-else>No Todos!</p>
  </div>
</template>

<script>
import AddToDo from '@/components/ToDo/AddToDo';
import ToDoList from '@/components/ToDo/ToDoList';
import Loader from '@/components/Loader';

export default {
    name: 'App',
    data() {
        return {
            todos: [],
            loading: true,
            taskFilter: 'all'
        };
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    console.log('Todos.vue ---> fetch(): ', json);
                    this.todos = json;
                    this.loading = false;
                }, 500);
            });
    },
    // 'watch' helps us look at fild we wanna follow with
    // watch: {
    //     taskFilter(value) { // name of watcher should be the same with name of field
    //         console.log(value);
    //         switch(value) {
    //             case 'all':
    //                 this.filteredTodos = this.todos;
    //                 break;
    //             case 'completed':
    //                 this.filteredTodos = this.todos.filter(item => item.completed);
    //                 break;
    //             case 'not-completed':
    //                 this.filteredTodos = this.todos.filter(item => !item.completed);
    //                 break;
    //         }
    //         console.log('filteredTodos: ', this.filteredTodos);
    //     }
    // },
    // function registered in the field 'computed' is field of such component
    computed: {
        filteredTodos() {
            if (this.taskFilter === 'all') {
                return this.todos;
            } else if (this.taskFilter === 'completed') {
                return this.todos.filter(t => t.completed);
            } else if (this.taskFilter === 'not-completed') {
                return this.todos.filter(t => !t.completed);
            }
        }
    },
    methods: {
        removeTask(id){
            this.todos = this.todos.filter(item => item.id !== id);
        },
        createTask(task) {
            this.todos = [...this.todos, task];
        }
    },
    components: {
        AddToDo,
        ToDoList,
        Loader
    }
}
</script>
