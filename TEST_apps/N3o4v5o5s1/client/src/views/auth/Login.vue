<template>
  <div class="login-page">
    <h1>Login:</h1>
    <div class="form">
      <form class="login-form" @submit.prevent="onSubmit">
        <input type="text" placeholder="username" v-model="login"/>
        <input type="password" placeholder="password" v-model="password"/>
        <button type="submit">login</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        login : "",
        password : ""
      }
    },
    methods : {
      onSubmit() {
        if (this.login.trim() && this.password.trim()) {
          const data = {
            login: this.login,
            password: this.password
          };
          this.axios.post('http://localhost:9091/api/auth/login', data)
            .then(response => {
              localStorage.setItem('userId', response.data.userId);
              localStorage.setItem('jwt',response.data.token);

              if (localStorage.getItem('jwt') !== null) {
                this.$emit('loggedIn');

                if(this.$route.params.nextUrl != null){
                  this.$router.push(this.$route.params.nextUrl)
                } else {
                  this.$router.push('userboard');
                }
              }
            })
            .catch(error => console.error(error.response));
        }
      }
    }
  }
</script>
