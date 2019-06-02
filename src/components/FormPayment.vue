<template>
   <div class="container-payment">
      <h3>Payment</h3>
      <FormCreditCard />
   </div>
</template>

<script>
import FormCreditCard from './FormCreditCard'

export default {
   name: 'FormPayment',
   components: { FormCreditCard },
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";
@left-panel-width: 500px;
@right-panel-width: 450px;

.container-payment {
   display: flex;
   flex-direction: column;
   width: @right-panel-width;
   height: 100%;
   border-top-right-radius: 18px;
   border-bottom-right-radius: 18px;

   h3{
      margin: 60px auto 20px;
   }
}


</style>


