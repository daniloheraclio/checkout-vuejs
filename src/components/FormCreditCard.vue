<template>
   <form @submit.prevent="pay">
      <div class="form-group">
         <label for="cardholder">Card Holder</label>
         <input class="input-card-holder"
            type="text" 
            placeholder="John Doe"
            name="cardholder" 
            v-model="card.holder"
            v-validate="{required: true, alpha_spaces : true, min:5}" >
        <span class="validation-error">{{ errors.first('cardholder') }}</span>
      </div>

      <div class="form-group">
         <label for="cardnumber">Card Number</label>
         <input class="input-card-number"
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
import {mask} from 'vue-the-mask'
import { Validator } from 'vee-validate';

Validator.extend('truthy', {
  getMessage: field => 'Enter one valid expiricy date.',
  validate: value => value = 'danilo'
});

let instance = new Validator({ trueField: 'truthy' });

// Also there is an instance 'extend' method for convenience.
instance.extend('falsy', function(value) {
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

   if(inputYear < currentYear) {
      return false
   }

   if(inputYear == currentYear && inputMonth <= currentMonth){
      return false
   }

   if(inputYear == currentYear && inputMonth > currentMonth){
      return true
   }
   return true
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
            cvv: null
         },
      }
   },
   methods: {
    pay() {
      //this.confirmation = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
           console.log(valid);
           console.log(typeof(this.card.expiracyDate));
        } else {
           setTimeout(() => {
            // Use sweetalert2
            this.$swal({
               title: 'Thank you',
               text: 'FOR YOUR PURCHASE',
               type: 'success',
               showLoaderOnConfirm: true,
               showCloseButton: true,
            });

            // reset the values
            this.reset();
           }, 500)
            
              
        }
      });
    },
    
    reset() {
       this.card = {
          holder: '',
            number: '',
            expiracyDate: '',
            date: '',
            cvv: ''
       }
    }
  },
  mounted(){
   //   let today = new Date();
   //   this.currentYear = today.getFullYear()
     
   //   let month = today.getMonth() + 1 // January is 0
   //   if(month < 10) {
   //      month = '0' + month;
   //   }
   //   this.currentMonth = month;
  } 
}
</script>

<style lang="less" scoped>
@import "../assets/less/animation";

form {
   box-sizing: border-box;
   padding: 10px 50px;
   text-align: left;
   margin-bottom: 20px;
}

label {
   display: block;
   font-size: 0.7rem;
   padding: 0 0 5px 5px;
}
.slash {
   display: inline-block;
   padding: 1px 0 6px;
   background: #eee;
   border-top: 2px solid #eee; 
}
.label-expiracy {
   width: 175px;
}

.form-group {
   margin-bottom: 12px;
}
.col {
   display: flex;
   width: 450px;
}
.col-6 {
   width: 40%;
}

input {
   padding: 7px 15px;
   outline: none;
   border-radius: 4px;
   border: none;
   background: #eee;
   width: 100%;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

.input-card-expiracy {
   width: 65%;
   border-radius: 4px;
}
.input-card-cvv {
   display: block;
   width: 35%;
}

.btn-confirm {
   padding: 7px 12px;
   background: #6fea97;
   border-radius: 4px;
   color: #fff;
   box-shadow: 0px 0px 8px 0px rgba(209,209,209,0.8);
   float: right;
   transition: 0.4s;
}

.btn-confirm:hover {
   background: #6fe095;
}  

.validation-error {
   display: block;
   font-size: 0.7rem;
   margin: 0;
   padding-left: 5px;
   color: red;
}
.is-valid {
   color: #444
}

 /* loader */
 .lds-dual-ring {
  display: inline-block;
  width: 15px;
  height: 15px;
}
.lds-dual-ring:after {
  content: " ";
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 1px;
  border-radius: 50%;
  border: 1px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* input filds animation alert */
.is-invalid {
	-webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

/* Sweet Alert */
.swal2-header,
.swal2-content {
   font-family: sans-serif;
}

</style>
