// ----------- OBLIGATORY: -----------
// TODO: update css styles
// TODO: split 'AllTaskList' and 'UserTaskList'
// TODO: 
// TODO: 
// TODO: 

// ----------- OPTIONAL: -----------
// TODO: add alert 'Error message' from the server
// TODO: add validation of 'required' fields (Registration, Login, Task creating)
// TODO: limit the length of the field 'title' & 'description'
// TODO: make 'description' longer and higher
// TODO: fix 'Header'
// TODO: (BL) ALL-LASTS LIST ---> disable button is task already in use by somebody else
// TODO: 
// TODO: 
// TODO: 

import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
