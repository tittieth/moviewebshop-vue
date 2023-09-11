<script setup lang="ts">

</script>

<template>
    <div>
        <label>
            <span>Kortnummer</span><br/>
            <input type="text" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required/>
        </label><br/>
        <label>
            <span>Datum/år</span><br/>
            <input type="date" class="small-input" required />
        </label>
        <label>
            <span>CVC</span><br/>
            <input type="text" class="small-input" pattern="[0-9]{3}" required/>
        </label>                 
    </div>

</template>

<style scoped lang="scss">

    div {
        display: grid;
        grid-template-columns: 50% 50%;
        position: relative;
        margin-left: 20%;
    }

    label {
        margin-left: -65px;
    }
  .small-input {
    max-width: 130px;
    margin-right: 65px;
  }
</style>