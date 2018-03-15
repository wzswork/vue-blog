<template>
  <div class="editor">
    <div class="title">
      <ul>
        <li><label for="title"></label> <input type="text" id="title" v-model="blogTitle"></li>
        <li></li>
        <li><label for="digest"></label><textarea id="digest" cols="30" rows="10"></textarea></li>
      </ul>
    </div>
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
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    .edit{
      float: left;
      width: 50%;
      height: 100%;
      #editarea{
        width: 100%;
        height: 100%;
      }
    }
    .preview{
      float: right;
      width: 50%;
      height: 100%;
      background: #fff;
      #prevarea{
        width: 100%;
        height: 100%;
        
      }
    }
  }

</style>

<script>
import marked from 'marked'
import _ from 'lodash'
export default {
  data() {
    return {
      input: '# hello'
    }
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

