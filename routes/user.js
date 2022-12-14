import Vue from 'vue'
import defaultLayout from '../layouts/default'

import loginPage from '../pages/login'

export default () => [
	{
		path: '/login',
		component: loginPage,
		name: 'user'
	}
]