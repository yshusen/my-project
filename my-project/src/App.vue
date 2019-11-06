<template>
  <div id="app">
<!--    <Head/>-->
    <keep-alive>
      <!--保持状态,vue会自行缓存当前状态,如果需要保持状态可以在路由下添加meta字段-->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
  // import Head from './components/Head'

  export default {
    name: 'App',
    // components: {Head}
  }
</script>

<style>
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr,
  address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var,
  b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
  tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav,
  section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  html, body, #app{
    width: 100%;
    height: 100%;
  }

  body {
    line-height: 1;
  }
#app{
  overflow: auto;
}
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  nav ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  /* change colors to suit your needs */
  ins {
    background-color: #ff9;
    color: #000;
    text-decoration: none;
  }

  /* change colors to suit your needs */
  mark {
    background-color: #ff9;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  del {
    text-decoration: line-through;
  }

  abbr[title], dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* change border color to suit your needs */
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #cccccc;
    margin: 1em 0;
    padding: 0;
  }

  input, select {
    vertical-align: middle;
  }
</style>
