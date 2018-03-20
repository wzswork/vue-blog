<template>
  <div class="combo">
    <input type="text">
    <ul>
      <li v-for="item in data" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
