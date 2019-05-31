<template>
   <div class="container-product">
      <img :src="product.img" />
      <ul class="product-details">
         <li>
            <h4>{{ product.title }}</h4>
         </li>
         <li class="product-color">
            <span class="product-color-icon"></span>
            <p>{{ product.color }}</p>
         </li>
         <li>
            <h4>${{ product.price }}</h4>
         </li>
      </ul>
      <ProductQuantity v-on:update-qtt="updateQtt"
                      :product="product"/>
      <div class="btn-remove" @click="$emit('del-product', product.id)">X</div>
   </div>
</template>

<script>
import ProductQuantity from './ProductQuantity.vue';
export default {
   name: 'Product',
   components: {
      ProductQuantity
   },
   props: ['product'],
   methods: {
      updateQtt(){
         this.$emit('update-quantity');
      }
   }
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";

.container-product {
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   max-width: 450px;
   background: #ffffff;
   border-radius: 20px;
   padding: 0 20px;
   margin: 20px auto;
      img {
         width: 130px;
         height: 100%;
         margin-right: 30px;
      }
      h4 {
         font-size: 1.15rem;
      }
      ul.product-details {
         color: @darkgrey;
         width: 260px;

            li {
               text-align: left;
               padding: 5px 0;
            }
            
            li.product-color {
               display: flex;
               flex-direction: row;
               align-items: center;
               font-size: 0.8rem;
               color: @grey;

               .product-color-icon {
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  background: #fff;
                  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
                  margin-right: 10px;
               }
               
            }
      }
} &.btn-remove {
   position: absolute;
   left: 438px;
   width: 26px;
   height: 26px;
   border-radius: 6px;
   background: @grey;
   line-height: 1.7;
   color: #fff;
   cursor: pointer;
   transition: 0.3s;

   &:hover {
      transform: translateX(2px);
      transform: rotate(90deg);
      background: @primary;
   }
}
</style>
