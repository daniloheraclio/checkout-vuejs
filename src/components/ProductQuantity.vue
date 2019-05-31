<template>
  <div>
    <button @click="addProduct"
            class="btn btn-counter"><span 
            class="operator">+</span></button>
    <p>{{ product.qtt }}</p>
    <button @click="removeProduct"
            class="btn btn-counter"><span 
            class="operator">-</span></button>
  </div>
</template>

<script>
export default {
  name: 'ProductQuantity',
  props: ['product'],
  methods: {
    addProduct() {
      this.product.qtt++;
      this.$emit('update-qtt');
    },
    removeProduct() {
      if(this.product.qtt > 1) {
        this.product.qtt--
        this.$emit('update-qtt');
      }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/less/colors";

.btn-counter {
  width: 1.1rem;
  height: 1.3rem;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  margin-top: 15px;
  margin-bottom: 15px;
  .operator{
    line-height: 1.2;
    font-size: 1rem;
    color: @grey
  }
}
p{
  font-size: 0.8rem;
  font-weight: 700;
}


</style>
