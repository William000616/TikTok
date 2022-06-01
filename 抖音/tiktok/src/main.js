import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'vant';

import { Popup,Uploader,Button } from 'vant';

createApp(App).use(Swipe).use(SwipeItem).use(Button).use(Uploader).use(Popup).use(store).use(router).mount('#app')
