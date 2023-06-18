import Vue from 'vue'
import { router } from './routes.js'
import App from './App.vue'
import '/node_modules/bootstrap-4-grid/scss/grid.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faTrashCan,
	faPenToSquare,
	faCheck,
} from '@fortawesome/free-solid-svg-icons'
import './assets/styles/main.scss'
library.add(faTrashCan, faPenToSquare, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
