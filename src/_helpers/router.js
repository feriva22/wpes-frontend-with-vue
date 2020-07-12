import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgotPassword from '@/components/ForgotPassword'
import Home from '@/components/Home'
import AllDevice from '@/components/AllDevice'
import Setting from '@/components/Setting'
import Device from '@/components/Device'


Vue.use(Router)

export const router =  new Router({
  mode: 'history',
  routes: [
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/forgotpassword',
		name: 'ForgotPassword',
		component: ForgotPassword
    },
    {
      path: '/home',
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
	},

	//otherwise redirect to /home
	{ path: '*', redirect: '/home'}
  ]
});

router.beforeEach((to, from, next) => {
	// redirect to login page if not logged in and trying to access a restricted page
	const publicPages = ['/login','/register','/forgotpassword'];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');
  
	if (authRequired && !loggedIn) {
	  return next('/login');
	}
  
	next();
  })
