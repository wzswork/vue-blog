<template>
  <div class="combo">
    <input type="text">
    <ul>
      <li v-for="item in lists" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
     
  }
</script>
