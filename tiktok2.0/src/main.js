import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'vant';

import { Popup } from 'vant';

createApp(App).use(Swipe).use(SwipeItem).use(Popup).use(store).use(router).mount('#app')
