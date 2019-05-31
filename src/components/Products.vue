<template>
   <div class="container-products">
      <div>
         <h2 v-if="products.length !== 0">Order Sumary</h2>
         <h2 v-else class="add-products" >Add products to your cart.</h2>
      </div>
      <div v-for="product in products" :key="product.id">
         <Product v-on:update-quantity="subTotal"
                  v-on:del-product="delProduct"
                  :product="product" />
      </div>
      <Price :order="order" v-if="products.length !== 0"/>
   </div>
</template>

<script>
import Product from './Product.vue';
import Price from '@/components/Price.vue'
import productsjson from '@/assets/products.json'

export default {
   name: 'Products',
   components: {
      Product,
      Price
   },
   created() {
      this.subTotal();
   },
   data(){
      return{
         products: productsjson,
         order: {
            items: 0,
            subtotal: 0,
            shipping: 0,
            total: 0
         },
      }
   },
   methods: {
      // updateQtt() {
      //    this.order.subTotal = 0;

      //    this.products.forEach(product => 
      //       this.order.subTotal += product.qtt * product.price);
         
      // },
      // Calculate subtotal
      subTotal() {
         this.order.subtotal = this.products
            .map(product => product.price * product.qtt)
            .reduce((acc, el) => {
               return acc + el;
            }, 0)
      },
      // Remove item from list
      delProduct(id) {
         this.products = this.products.filter(product => product.id !== id);
         this.subTotal();
      }
   },
   
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";

.container-products {
   background: @lightgrey;
   width: 500px;
   margin: 0 auto;
   border-bottom-left-radius: 18px;
   border-bottom-right-radius: 18px;
   h2 {
      color: @darkgrey;
   }
   .add-products {
      margin: 40px auto;
   }
}
</style>
