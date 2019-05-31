import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';



Vue.use(VueSweetalert2);
 
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  },
  events: 'change|blur|submit'
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
