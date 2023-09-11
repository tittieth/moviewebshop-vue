<script setup lang="ts">

</script>

<template>
    <div>
        <label class="cardNumber">
            <span>Kortnummer</span><br/>
            <input type="text" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required/>
        </label><br/>
        <label class="date">
            <span>Datum/år</span><br/>
            <input type="date" class="small-input" required />
        </label><br/>
        <label class="cvc">
            <span>CVC</span><br/>
            <input type="text" class="small-input" pattern="[0-9]{3}" required/>
        </label>                 
    </div><br/>

</template>

<style scoped lang="scss">

@media screen and (min-width: 1024px) {

    div {
        display: grid;
        grid-template-columns: 50% 50%;
        position: relative;
        margin-left: 20%;
    }

    label {
        margin-left: -95px;
    }

    .cardNumber {
        margin-left: -56px;
    }

    .date, .cvc {
        position: absolute;
        margin-top: 0;
    }

    .date {
        margin-left: 247px;
    }

    .cvc {
        margin-left: 395px;
    }
}

  .small-input {
    max-width: 130px;
    margin-right: 65px;
  }
</style>