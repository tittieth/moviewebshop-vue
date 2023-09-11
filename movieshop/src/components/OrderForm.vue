<script setup lang="ts">
import { ref } from 'vue';
import  CardInputs  from '../components/CardInputs.vue'

interface IPayment {
  firstname: string;
  lastname: string;
  adress: string;
  postNumber: string;
  email: string;
  phoneNumber: string;
}

  const payment = ref<IPayment>({firstname: "", lastname: "", adress: "", postNumber: "", email: "", phoneNumber: ""})


  const selectedPayment = ref("");



  function handleSubmit() {
    console.log("payment:", payment);

    if (/^[a-zA-Z]+$/.test(payment.value.firstname) 
      && /^[a-zA-Z]+$/.test(payment.value.lastname) 
      && /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(payment.value.email) 
      && /^[A-ZÅÄÖa-zåäö]+\s+\d+$/.test(payment.value.adress) 
      && /^07[\d]{1}-?[\d]{7}$/.test(payment.value.phoneNumber)) {
      console.log("ja");
    }
     else {
      console.log(payment.value.adress);
      console.log(/^[a-zA-Z]+$/.test(payment.value.firstname));
      console.log(/^[a-zA-Z]+$/.test(payment.value.lastname));
      console.log(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(payment.value.email));
      console.log(/^[A-ZÅÄÖa-zåäö]+\s+\d+$/.test(payment.value.adress));
    }  
  }

  function formatPhoneNumber(value: string) {
    let phoneNumber = value.replace(/\D/g, '');

    // const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, '$1 $2 $3 $4');
    const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(?=\d{2})/g, '$1 $2');

    payment.value.phoneNumber = formattedPhoneNumber;
  }
    

</script>

<template>
    <div class="order-form">
        <h2>Dina uppgifter</h2>
        <form @submit.prevent="handleSubmit">
                <label>
                    <span>Förnamn</span><br/>
                    <input name="firstname" type="text" v-model="payment.firstname" placeholder="Anders" required/>
                </label>
                <label>
                    <span>Efternamn</span><br/>
                    <input name="lastname" type="text" v-model="payment.lastname" placeholder="Johnsson" required/>
                </label>
                <label>
                    <span>Adress</span><br/>
                    <input name="address" type="text" v-model="payment.adress" placeholder="Sjövägen 1" required/>
                </label>
                <label>
                    <span>Postnummer</span><br/>
                    <input name="postNumber" type="text" v-model="payment.postNumber" pattern="[0-9]{3} [0-9]{2}" placeholder="123 45" required/>
                </label>              
                <label>
                    <span>Mailadress</span><br/>
                    <input name="email" type="email" v-model="payment.email" placeholder="anders.johnsson@mail.se" required/>
                </label>        
                <label>
                    <span>Telefonnummer</span><br/>
                    <input name="phoneNumber" type="tel" v-model="payment.phoneNumber" placeholder="070 123 45 67" required @input="() => formatPhoneNumber(payment.phoneNumber)"/>
                </label> 
                <span id="payment-text">Betalsätt</span>
                <div class="payment-method-container">
                    <label>
                      <span>Faktura</span><br />
                      <input type="radio" name="payment_method" v-model="selectedPayment" value="bill" required/>
                    </label>
                    <label>
                      <span>Kort</span><br />
                      <input type="radio" name="payment_method" v-model="selectedPayment" value="card" />
                    </label>            
                </div>

                <CardInputs v-if="selectedPayment === 'card'" />

                <button>Köp</button>   
        </form>
    </div>

</template>

<style scoped lang="scss">

.order-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 50px;
}

form {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

button {
    max-width: 100px;
}

.payment-method-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    padding: 20px;
    
    span {
        margin-right: 20px;
    }

    input {
        max-width: 50px;
        height: 16px;
    }
}

@media screen and (min-width: 1024px) {
  .order-form {
    background-color: #9D0B28;
  }

  form {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    gap: 30px;
  }

  h2 {
    font-size: 48px;
  }

  button {
    font-size: 24px;
    min-width: 150px;
    height: 48px;
  }

  input {
    height: 40px;
  }

  span {
    font-size: 24px;

  }

  #payment-text {
    position: relative;
    left: 85%;
  }

  .payment-method-container {
    position: relative;
    left: -50%;
  }
}
</style>