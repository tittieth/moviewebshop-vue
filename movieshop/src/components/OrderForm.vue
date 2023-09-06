<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import  CardInputs  from '../components/CardInputs.vue'

export default {
  components: {
    Form,
    Field,
  },
  methods: {
    onSubmit() {
      console.log('Submitting :(');
    },
  },
};

const selectedPayment = ref("");



</script>

<template>
    <div class="order-form">
        <h2>Dina uppgifter</h2>
        <Form @submit="onSubmit">
                <label>
                    <span>Förnamn</span><br/>
                    <Field name="firstname" type="text" />
                </label>
                <label>
                    <span>Efternamn</span><br/>
                    <Field name="lastname" type="text" />
                </label>
                <label>
                    <span>Adress</span><br/>
                    <Field name="address" type="text" />
                </label>
                <label>
                    <span>Postnummer</span><br/>
                    <Field name="postNumber" type="text" />
                </label>              
                <label>
                    <span>Mailadress</span><br/>
                    <Field name="mail" type="email" />
                </label>        
                <label>
                    <span>Telefonnummer</span><br/>
                    <Field name="phoneNumber" type="tel" />
                </label> 
                <span id="payment-text">Betalsätt</span>
                <div class="payment-method-container">
                    <label>
                      <span>Faktura</span><br />
                      <Field type="radio" name="payment_method" v-model="selectedPayment" value="bill" />
                    </label>
                    <label>
                      <span>Kort</span><br />
                      <Field type="radio" name="payment_method" v-model="selectedPayment" value="card" />
                    </label>            
                </div>

                <CardInputs v-if="selectedPayment === 'card'" />

                <button>Köp</button>   
        </Form>
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
    margin-bottom: 20px
}

form {
    display: flex;
    flex-direction: column;
    padding: 20px;
}

input {
    background-color: #33030D;
    color: #FDE4E4;
    border-radius: 60px;
    border: 1px solid #5A082D;

    margin: 5px 0 30px 0;
    padding: 8px;

    height: 32px;
    width: 240px;
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