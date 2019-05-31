<template>
  <div class="home">
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

<style lang="less" >
@import "../assets/less/colors";
@left-panel-width: 500px;
@right-panel-width: 450px;

  .home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0px 0px 8px 0px rgba(209,209,209,0.8);
    max-width: @left-panel-width + @right-panel-width;
    border-radius: 18px;
    margin: 0 auto;
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
  .home {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    max-width: 500px;
  }
}
</style>

