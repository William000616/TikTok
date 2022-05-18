import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'vant';

import { Search } from 'vant';

createApp(App).use(Swipe).use(SwipeItem).use(Search).use(store).use(router).mount('#app')
