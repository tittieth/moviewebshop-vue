<script setup lang="ts">

</script>

<template>
    <form>
        <label>
            <span>Förnamn</span>
            <input type="text" />
        </label>
        <label>
            <span>Efternamn</span>
            <input type="text" />
        </label>
        <label>
            <span>Mailadress</span>
            <input type="email" />
        </label>        
        <label>
            <span>Telefonnummer</span>
            <input type="tel" />
        </label>      
        <span>Betalsätt</span> <!-- Lägg till v-if om kort är vald, input för kortnummer-->
        <label>
            <span>Swish</span>
            <input type="radio" name="payment_method" />
        </label>
        <label>
            <span>Kort</span>
            <input type="radio" name="payment_method"/>
        </label>
    </form>

</template>

<style scoped lang="scss">

</style>