<template>
  <div class="LayoutDefault">
	<!-- Preloader
    <div class="preloader" id="preloader">
      <div class="spinner-grow text-secondary" role="status">
        <div class="sr-only">Loading...</div>
      </div>
    </div>-->

	<!-- Header Area-->
    <div class="header-area" id="headerArea">
      <div v-if="isCommonPage" class="container h-100 d-flex align-items-center justify-content-between">
        <!-- Logo Wrapper-->
        <div class="logo-wrapper" v-on:click="setActive('home')"><router-link to="/home"><img src="../assets/img/logo-small.png" alt=""></router-link></div>
        <!-- Search Form-->
        <div class="top-search-form">
          <form action="" method="POST">
            <input class="form-control" type="search" placeholder="Enter your keyword">
            <button type="submit"><i class="lni lni-search"></i></button>
          </form>
        </div>
        <!-- Navbar Toggler-->
        <div class="suha-navbar-toggler d-flex flex-wrap" id="suhaNavbarToggler"><span></span><span></span><span></span></div>
      </div>

	  <div v-else class="container h-100 d-flex align-items-center justify-content-between">
        <!-- Back Button-->
        <div class="back-button"><a v-on:click="backPage()"><i class="lni lni-arrow-left"></i></a></div>
        <!-- Page Title-->
        <div class="page-heading">
          <h6 class="mb-0">Detail {{ device.name }}</h6>
        </div>
        <!-- Navbar Toggler-->
        <div class="suha-navbar-toggler d-flex justify-content-between flex-wrap" id="suhaNavbarToggler"><span></span><span></span><span></span></div>
      </div>
    </div>
    <!-- Sidenav Black Overlay-->
    <div class="sidenav-black-overlay"></div>
    <!-- Side Nav Wrapper-->
    <div class="suha-sidenav-wrapper" id="sidenavWrapper">
      <!-- Sidenav Profile-->
      <div class="sidenav-profile">
        <div class="user-profile"><img src="../assets/img/9.jpg" alt=""></div>
        <div class="user-info">
          <h6 class="user-name mb-0">Suha Jannat</h6>
          <p class="available-balance">Balance <span>$<span class="counter">523.98</span></span></p>
        </div>
      </div>
      <!-- Sidenav Nav-->
      <ul class="sidenav-nav">
        <li><a href="profile.html"><i class="lni lni-user"></i>My Profile</a></li>
        <li><a href="notifications.html"><i class="lni lni-alarm lni-tada-effect"></i>Notifications<span class="ml-3 badge badge-warning">3</span></a></li>
        <li><a href="pages.html"><i class="lni lni-empty-file"></i>All Pages</a></li>
        <li><a href="wishlist-grid.html"><i class="lni lni-heart"></i>My Wishlist</a></li>
        <li><a href="settings.html"><i class="lni lni-cog"></i>Settings</a></li>
        <li><a href="intro.html"><i class="lni lni-power-switch"></i>Sign Out</a></li>
      </ul>
      <!-- Go Back Button-->
      <div class="go-home-btn" id="goHomeBtn"><i class="lni lni-arrow-left"></i></div>
    </div>

    <div class="page-content-wrapper">
		<slot/>	<!-- Content -->
	</div>

	 <!-- Footer Nav-->
    <div class="footer-nav-area" id="footerNav">
      <div class="container h-100 px-0">
        <div class="suha-footer-nav h-100">
          <ul class="h-100 d-flex align-items-center justify-content-between">
            <li v-on:click="setActive('home')" :class="{ active: isActive('home') }"><router-link to="/home"><i class="lni lni-home"></i>Home</router-link></li>
            <li v-on:click="setActive('alldevice')" :class="{ active: isActive('alldevice') }"><router-link to="/alldevice"><i class="lni lni-display-alt"></i>Devices</router-link></li>
            <li v-on:click="setActive('setting')" :class="{ active: isActive('setting') }"><router-link to="/setting"><i class="lni lni-cog"></i>Settings</router-link></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  created() {
	  
  },
  data () {
    return {
		activeItem: 'home',
		device: {
			name: 'Device 1'
		},
		isCommonPage: true
    };
  },
  methods: {
	isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
	},
	backPage: function(){
		this.$router.go(-1);
	}
  }
}
</script>




