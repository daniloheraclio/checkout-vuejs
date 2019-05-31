<template>
  <div id="app">
    <div class="leftPanel">
      <Steps />
      <Products />
    </div>
    <div class="rightPanel">
      <FormPayment />
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import Steps from '@/components/Steps.vue'
import Products from '@/components/Products.vue'
import FormPayment from '@/components/FormPayment.vue'

export default {
  name: 'Home',
  components: {
    Steps,
    Products,
    FormPayment
  },
}
</script>

<style lang="less">
@import "./assets/less/colors";
@left-panel-width: 500px;
@right-panel-width: 450px;
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.btn {
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 8px 0px rgba(209,209,209,0.8);
  max-width: @left-panel-width + @right-panel-width;
  border-radius: 18px;
  margin: 50px auto;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  .leftPanel {
    background: @lightgrey;
    max-width: @left-panel-width;
    border-radius: 18px;
  } & .rightPanel {
    max-width: @right-panel-width;
  }
}

  /* Medium screens */
@media all and (max-width: 999px) {
  #app {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    max-width: 500px;
  }
}

</style>
