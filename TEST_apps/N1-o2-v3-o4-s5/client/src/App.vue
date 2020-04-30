<template>
  <div id="app">
    <Header/>
    <router-view id="routes"/>
  </div>
</template>

<script>
import Header from '@/components/main/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width: 800px;
  }
  div.static {
    position: static;
    border: 3px solid #73AD21;
  }
  #routes {
    padding: 20px;
    margin: auto;
  }

  h1 {
    color: white;
    text-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  h2 {
    color: rgb(0, 173, 226);
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  .login-page {
    width: 360px;
    padding: 0;
    margin: 0;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 20px;
    padding: 25px 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: rgb(83,131,211);
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form button:hover {
    background: rgb(68, 110, 182);
  }
  .form button:active {
    background: rgb(52, 84, 139);
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  .form .register-form {
    display: none;
  }
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
  .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
  }
  .container .info {
    margin: 50px auto;
    text-align: center;
  }
  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }
  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }
  .container .info span a {
    color: #000000;
    text-decoration: none;
  }
  .container .info span .fa {
    color: #EF3B3A;
  }

  /* task item */
  .btn {
    font-size: 14px;
    font-weight: bold;
    border: 0.5px solid rgb(41,44,47);
    margin: 0 10px 0 0;
    cursor: pointer;
  }

  .btn-add-item {
    background: rgb(83,131,211);
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
    border: 0.5px solid rgb(41,44,47);
    margin: 0 10px 0 0;
    cursor: pointer;
  }
  .btn-add-item:hover {
    background: rgb(68, 110, 182);
  }
  .btn-add-item:active {
    background: rgb(52, 84, 139);
  }
  .btn-rm-item {
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  .btn-rm-item:hover {
    color: red;
  }
  .btn-rm-item:active {
    color: red;
  }

  .complete {
    background-color: yellowgreen;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background: #202020;
    background-image: url("./assets/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
</style>
