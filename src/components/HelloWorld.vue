<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store';


const store = useStore()
const count = ref(0)
const showCount = computed(() => {
  return store.getters['getCount']
})
const addBtn = () => {
  store.commit('setCount', ++count.value)
}
</script>

<template>
  <h1>{{ showCount }}</h1>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <button type="button" @click="addBtn">新增</button>
</template>

<style scoped>
</style>
