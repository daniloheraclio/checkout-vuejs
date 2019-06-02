<template>
   <div class="container-price">
      <div class="price price-subtotal">
         <p>Subtotal (2 items)</p>
         <p>$ {{ order.subtotal }}</p>
      </div>
      <div class="price price-shipping">
         <p>Shipping</p>
         <p>FREE</p>
      </div>
      <hr />
      <div class="price price-total">
         <h3>Total</h3>
         <h3>$ {{order.subtotal + order.shipping}}</h3>
      </div>
   </div>
</template>

<script>
export default {
      name: 'Price',
      props: ['order'],
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";
@left-panel-width: 500px;
@right-panel-width: 450px;

.container-price{
   text-align: left;
   background: @lightgrey;
   border-bottom-left-radius: 18px;
   border-bottom-right-radius: 18px;

   .price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: @right-panel-width;
      margin: 0 auto;
      color: @grey;
      padding: 4px 0;

      h3 {
         padding: 10px 0 20px;
      }
   }
   hr {
      display: block;
      border: none;
      height: 1px;
      background: @grey;
      width: 450px;
      margin: 10px auto 5px;
   }
   
}

</style>
