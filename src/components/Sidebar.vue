<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in labels" :key="item.id">
        item.name
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    labels: state => state.labels,
  }
}
</script>

