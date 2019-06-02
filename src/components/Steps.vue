<template>
   <div class="container-steps">
      <div class="steps-icon">
         <ul>
            <li class="step steps-1" ></li>
            <li class="step steps-2" ></li>
            <li class="step steps-3" ></li>
         </ul>
      </div>
       <div>
         <hr />
      </div>
      <div>
         <ul class="steps-label">
            <li>Customer Details</li>
            <li>Payment</li>
            <li>Confirmation</li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Steps'
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";

.container-steps {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: @lightgrey;
   margin: 0;
   width: 500px;
   height: 60px;
   border-top-left-radius: 18px;
   border-top-right-radius: 18px;

   hr {
      border: none;
      width: 270px;
      height: 1px;
      background: @grey;
      transform: translateY(-10px);
   }

   .steps-icon ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 280px;

      .step{
         width: 20px;
         height: 20px;
         border-radius: 50%;
         z-index: 10;
         cursor: pointer;
      }
      .steps-1 {
         background: @primary;
      }
      .steps-2 {
         background: @secondary;
      }
      .steps-3 {
         background: #fff
      }
   }

   ul.steps-label {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 400px;
      
      li {
         font-size: 0.6rem;
         color: @grey;
         width: 130px;
      }
   }
}
</style>


