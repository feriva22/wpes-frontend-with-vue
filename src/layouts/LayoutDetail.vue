<template>
  <div class="LayoutDetail">
	<!-- Preloader
    <div class="preloader" id="preloader">
      <div class="spinner-grow text-secondary" role="status">
        <div class="sr-only">Loading...</div>
      </div>
    </div>-->

	<!-- Header Area-->
    <div class="header-area" id="headerArea">
	  <div class="container h-100 d-flex align-items-center justify-content-between">
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
	 <!--
    <div class="footer-nav-area" id="footerNav">
      <div class="container h-100 px-0">
        <div class="suha-footer-nav h-100">
          <ul class="h-100 d-flex align-items-center justify-content-between">
            <li ><router-link to="/"><i class="lni lni-home"></i>Home</router-link></li>
            <li ><router-link to="/alldevice"><i class="lni lni-display-alt"></i>Devices</router-link></li>
            <li ><router-link to="/setting"><i class="lni lni-cog"></i>Settings</router-link></li>
          </ul>
        </div>
      </div>
    </div>
	-->

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
		}
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




