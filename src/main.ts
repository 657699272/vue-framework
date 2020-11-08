import { createApp } from 'vue'
import { Vue } from 'vue-class-component'
import App from './App.vue'
import router from './router'
import store from './store'
import '@shenbinghui/vue-ui-components-shenbinghui-test'

createApp(App).use(store).use(router).mount('#app')
