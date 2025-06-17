<template>
  <div class="hello">
    <div>{{t('hello')}}</div>
    <button @click="change">切换</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n-bridge'

const  {t,locale} = useI18n()
function change(){
  console.log(locale.value);
  locale.value =locale.value==='en'?'zh':'en'
}
</script>

<style scoped>

</style>
