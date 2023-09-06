<script setup lang="ts">

</script>

<template>
    <div>
        <label>
            <span>Kortnummer</span><br/>
            <input type="text" />
        </label> 
        <label>
            <span>Datum/år</span><br/>
            <input type="date" class="small-input" />
        </label>
        <label>
            <span>CVC</span><br/>
            <input type="text" class="small-input" />
        </label>                 
    </div>

</template>

<style scoped lang="scss">
  .small-input {
    max-width: 100px;
  }
</style>