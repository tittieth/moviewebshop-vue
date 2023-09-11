<script setup lang="ts">

</script>

<template>
    <div>
        <label>
            <span>Kortnummer</span><br/>
            <input type="text" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required/>
        </label> 
        <label>
            <span>Datum/år</span><br/>
            <input type="date" class="small-input" required />
        </label>
        <label>
            <span>CVC</span><br/>
            <input type="text" class="small-input" pattern="[0-9]{3}" required/>
        </label>                 
    </div><br/>

</template>

<style scoped lang="scss">

    div {
        display: flex;
        flex-direction: column;
    }

  .small-input {
    max-width: 130px;
  }
</style>