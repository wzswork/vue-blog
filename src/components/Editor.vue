<template>
<div class="container markdown">
  <div class="title">
    <h2>文章编辑</h2>
    <ul>
      <li><label for="title">标题：</label> <input type="text" id="title" v-model="blogTitle"></li>
      <li><label>标签：</label><combo-selector></combo-selector></li>
      <li><label for="digest">摘要：</label><textarea id="digest" v-model="digest"></textarea></li>
    </ul>
  </div>
  <hr>
  <div class="editor">
    <div class="edit">
      <div class="auto-textarea">
        <pre>{{blogContent}}</pre>
        <textarea id="editarea"  @input="update" v-model="blogContent"></textarea >
      </div>
    </div>
    <div class="preview">
      <div id="prevarea" v-html="compiledMarkdown"></div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
  .container{
    margin: 0 auto;
    width: 1280px;
  }
  @media screen and (max-width: 1281px) {
    .container{
      width: 100%;
    }
  }

  hr{
    height: 1px;
    background-color: #888;
  }

  .title{
    h2 {
      text-align: center;
    }

    li{
      padding-left: 61px;
      margin-bottom: 20px;
      min-height: 20px;
    }

    label{
      font-size: 14px;
      width: 60px;
      display: block;
      float: left;
      margin-left: -61px;
    }

    #title{
      width: 500px;
      padding: 4px 16px;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #e7e7e7;
    }

    #digest{
      width: 800px;
      height: 100px;
      border: 1px solid #e7e7e7;
      border-radius: 4px;
      padding: 8px 16px;
      font-size: 14px;
    }
  }

  .editor{
    display: flex;
    justify-content:space-between;
    .edit{
      width: 48%;
      height: 100%;
      #editarea{
        width: 100%;
        height: 100%;
        min-height: 500px;
        font-size: 14px;
        padding: 16px 8px;
      }
    }
    .preview{
      width: 48%;
      height: 100%;
      background: #fff;
      #prevarea{
        width: 100%;
        height: 100%;
        min-height: 500px;
        padding: 16px 8px;
      }
    }
  }

  .auto-textarea{
    position: relative;
    pre{
      visibility: hidden;
    }

    textarea{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }

</style>

<script>
import marked from 'marked'
import _ from 'lodash'
import comboSelector from './ComboSelector'

import '../public/css/markdown.scss'

export default {
  data() {
    return {
      input: '',
      blogTitle: '',
      digest: '',
      blogContent:'',
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
  },
  components:{
    comboSelector
  }
}
</script>

