import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AllDevice from '@/components/AllDevice'
import Setting from '@/components/Setting'
import Device from '@/components/Device'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
	},
	{
	  path: '/alldevice',
	  name: 'AllDevice',
	  component: AllDevice
	},
	{
		path: '/device',
		name: 'Device',
		component: Device
	},
	{
	 path: '/setting',
	 name: 'Setting',
	 component: Setting
	}
  ]
})
