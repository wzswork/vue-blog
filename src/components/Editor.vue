<template>
  <div class="editor">
    <div class="edit">
      <textarea id="editarea" :value="input" @input="update"></textarea>
    </div>
    <div class="preview">
      <div id="prevarea" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .editor{
    width: 100%;
    .edit{
      float: left;
      width: 50%;
    }
    .preview{
      float: right;
      width: 50%;
    }
  }

</style>

<script>
import marked from 'marked'
export default {
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
  
}
</script>

