<script setup lang="ts">

</script>

<template>
    <div class="order-form">
        <h2>Dina uppgifter</h2>
        <form>
                <label>
                    <span>Förnamn</span><br/>
                    <input type="text" />
                </label>
                <label>
                    <span>Efternamn</span><br/>
                    <input type="text" />
                </label>            
                <label>
                    <span>Mailadress</span><br/>
                    <input type="email" />
                </label>        
                <label>
                    <span>Telefonnummer</span><br/>
                    <input type="tel" />
                </label> 
                <span id="payment-text">Betalsätt</span> <!-- Lägg till v-if om kort är vald, input för kortnummer-->
                <div class="payment-method-container">
                    <label>
                      <span>Swish</span><br />
                      <input type="radio" name="payment_method" />
                    </label>
                    <label>
                      <span>Kort</span><br />
                      <input type="radio" name="payment_method" />
                    </label>            
                </div>
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