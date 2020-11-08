<template>
  <div class="home">
    <img alt="Vue logo" style='width:300px;height:400px' src="../assets/test.jpg">
    <h2>沈沁瑶 爱吃蔬菜和水果 哈哈 ！</h2>
    <h2 style='color:#000'>沈沁瑶老师在床上蹦蹦跳跳！</h2>
    <Test></Test>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src


@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted(){

  }
}
</script>
