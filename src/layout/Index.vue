<template>
  <a-layout class="app">
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang='ts'>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'

let selectedKeys = ref<string[]>(['1'])
let openKeys = ref<string[]>(['sub1'])
</script>

<style lang='scss' scoped>
  .app{
    height: 100%;
  }
</style>