<template>
  <div>
    <AddTask @create-task="createTask"/>
    <hr>
    <div id="container">
      <div class="task-list">
        <Loader v-if="loader.own" />
        <div v-else-if="ownTasks.length">
          <OwnTaskList v-bind:tasks="ownTasks"/>
        </div>
        <p v-else>No tasks!</p>
      </div>
      <div class="task-list">
        <Loader v-if="loader.all" />
        <div v-else-if="allTasks.length">
          <AllTaskList
            v-bind:tasks="allTasks"
            @remove-task="removeTask"
          />
        </div>
        <p v-else>No tasks!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import AddTask from '@/components/user/AddTask';
  import Loader from '@/components/common/Loader';
  import AllTaskList from '@/components/user/all/AllTaskList';
  import OwnTaskList from '@/components/user/own/OwnTaskList';

  export default {
    name: 'app',
    data() {
      return {
        allTasks: [],
        ownTasks: [],
        loader: {all: true, own: true},
        filter: 'all',
        token: '',
        userId: null,
        headers: {'Authorization': ''}
      }
    },
    mounted() {
      this.getAuthParams();
      this.getAllTasks();
      this.getUserTasks();
    },
    methods: {
      getAuthParams(){
        this.token = localStorage.getItem('jwt');
        this.userId = localStorage.getItem('userId');
        this.headers = {'Authorization': this.token};
      },
      getAllTasks(){
        this.axios.get('http://localhost:9091/api/tasks', {headers: this.headers})
          .then(response => {
            this.allTasks = response.data;
            if (this.allTasks.length)
              this.loader.all = false;
          })
          .catch(error => console.error(error.response));
      },
      getUserTasks(){
        this.axios.get('http://localhost:9091/api/user-tasks', {headers: this.headers})
          .then(response => {
            this.ownTasks = response.data
            if (this.ownTasks.length)
              this.loader.own = false;
          })
          .catch(error => console.error(error.response));
      },
      createTask(data) {
        this.axios.post('http://localhost:9091/api/tasks', data, {headers: this.headers})
          .then(response => this.getAllTasks())
          .catch(error => console.error(error.response));
      },
      removeTask(id) {
        console.log('REMOVE TASK ---> ', id);
        this.axios.delete(`http://localhost:9091/api/tasks/${id}`, {headers: this.headers})
          .then(response => this.getAllTasks())
          .catch(error => console.error(error.response));
      }
    },
    components: {
      AllTaskList,
      OwnTaskList,
      AddTask,
      Loader
    }
  }
</script>

<style scoped>
  .task-list {
    width: 49%
  }
  #container {
    display: flex;
    justify-content: space-between;
  }
</style>