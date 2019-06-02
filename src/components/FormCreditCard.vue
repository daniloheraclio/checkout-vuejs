<template>
   <form @submit.prevent="pay">
      <div class="form-group">
         <label for="cardholder">Card Holder</label>
         <input 
            type="text" 
            placeholder="John Doe"
            name="cardholder" 
            v-model="card.holder"
            v-validate="{required: true, alpha_spaces : true, min:5}" >
        <span class="validation-error">{{ errors.first('cardholder') }}</span>
      </div>

      <div class="form-group card-flag">
         <label for="cardnumber">Card Number</label>
         <div class="card-type"></div>
         <input
            type="text" 
            placeholder="4242 4242 4242 4242"
            name="cardnumber" 
            v-model="card.number"
            v-validate="{required: true, credit_card : true}">
         <span class="validation-error">{{ errors.first('cardnumber') }}</span>
      </div>

      <div class="form-group col">
         <div class="col-6">
            <label for="expiracy">Expiracy</label>
            <input class="input-card-expiracy" 
            type="text" 
            name="expiracy" 
            placeholder="mm/yyyy"
            v-model="card.expiracyDate"
            v-mask="'##/####'"
            v-validate="{ required: true, falsy: true}">
         <span class="validation-error">{{ errors.first('expiracy') }}</span>
              
         </div>
         <div class="col-6">
            <label for="cvv">CVV</label>
            <input class="input-card-cvv"
               type="text"
               maxlength="4"
               placeholder="303"
               name="cvv" 
               v-model.number="card.cvv"
               v-validate="{required: true, numeric : true, min:3, max: 4}">
            <span class="validation-error">{{ errors.first('cvv') }}</span>
         </div>
      </div>
      
      <button class="btn btn-confirm" >Confirm</button>
      
   </form>
</template>
<script>
import { setTimeout } from 'timers'
import { mask } from 'vue-the-mask'
import { Validator } from 'vee-validate';

let instance = new Validator();

instance.extend('falsy', function(value) {

   //start validation checking the length of expiricy date
   if(value.length == 7) {

      // get four inputed digits
      let inputYear = value.slice(-4);
      let inputMonth = value.substring(0, 2);

      let today = new Date();
      // get four current year digits (yyyy)
      let currentYear = today.getFullYear()
      
      // get two current month digits (mm) and increment 0 if is smaller then 10
      let currentMonth = today.getMonth() + 1 // January is 0
      if(currentMonth < 10) {
         currentMonth = '0' + currentMonth;
      }

      if(inputMonth > 12 || inputYear < currentYear) {
         return false
      }

      if(inputYear == currentYear && inputMonth < currentMonth){
         return false
      }

      if(inputYear == currentYear && inputMonth >= currentMonth){
         return true
      }
      return true
   }
   return false
});

instance.attach({
  name: 'expiracy',
  rules: 'falsy'
});


export default {
   name: 'FormCreditCard',
   directives: {mask},
   data(){
      return {
         currentMonth: '',
         currentYear: '',
         card : {
            holder: '',
            number: null,
            expiracyDate: '',
            cvv: null,
            flag: false
         },
      }
   },
   methods: {
    pay() {
      
      this.$validator.validate().then(valid => {
        if (!valid) {
           
        } else {
           // Succes! Show alert
           this.$swal({
               title: 'Thank you',
               text: 'FOR YOUR PURCHASE',
               type: 'success',
               showCloseButton: true,
            });
            // reset fields
            this.reset();
        }
      })
    },
    
    reset() {
       this.card = {
          holder: '',
            number: '',
            expiracyDate: '',
            date: '',
            cvv: ''
       }
    },
  },
}
</script>

<style lang="less" scoped>
@import "../assets/less/colors";
@import "../assets/less/animation";

form {
   box-sizing: border-box;
   padding: 10px 50px;
   text-align: left;
   margin-bottom: 20px;

   div.form-group {
      margin-bottom: 12px;
   }

   label {
      display: block;
      font-size: 0.75rem;
      padding: 5px 5px;
   }

   .col {
      display: flex;
      width: 450px;
   }
   .col-6 {
      width: 40%;
   }

   input {
      padding: 10px 25px;
      outline: none;
      border-radius: 4px;
      border: none;
      background: #eee;
      width: 100%;
   }

   .card-flag {
      position: relative;
   }
   /* Card type flag */
   .card-type {
      width: 32px;
      height: 21px;
      background: url("../assets/img/cards.png");
      background-repeat: no-repeat;
      position: absolute;
      background-size: 30px;
      background-position: 0 -109px;
      top: 33px;
      right: 8px;
   }

   input.input-card-cvv {
      display: block;
      width: 35%;
      padding: 10px 15px;
      text-align: center;
   }

   input.input-card-expiracy {
      width: 65%;
      border-radius: 4px;
   }

   .btn-confirm {
      padding: 7px 12px;
      background: @primary;
      border-radius: 4px;
      color: #fff;
      box-shadow: 0px 0px 8px 0px rgba(209,209,209,0.8);
      float: right;
      transition: 0.4s;
   }

   .btn-confirm:hover {
      box-shadow: 5px 5px 18px 0px rgba(209,209,209,0.8);
   }

   .validation-error {
      display: block;
      font-size: 0.7rem;
      margin: 0;
      padding-left: 5px;
      color: @error;
   }
   .is-valid {
      color: @darkgrey;
   }

   /* input filds animation alert */
   .is-invalid {
      -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
            animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
   }
}

</style>
