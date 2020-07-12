<template>
    <div class="AllDevice">
	<!-- Top Products-->
      <div class="top-products-area pt-3">
        <div class="container">
          <div class="section-heading d-flex align-items-center justify-content-between">
            <h6 class="ml-1">Device List</h6>
          </div>
          <div class="row">
            <!-- Single Blog Card-->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="card blog-card list-card mb-3">
                <div class="post-img"><img src="../_assets/img/wpes-device.png" alt=""></div>
                <a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>
         		<router-link :to="{path: 'device', query: { id: 1 }}"  class="btn btn-primary btn-sm read-more-btn">Detail</router-link>
                <div class="post-content">
                  <div class="bg-shapes">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                  </div>
                  <a class="post-catagory d-block" href="#">Device 1</a>
                  <router-link class="post-title d-block" :to="{path: 'device', query: { id: 1 }}">Alat untuk Tangki Air Rumah</router-link>
                  <div class="post-meta d-flex align-items-center justify-content-between flex-wrap">
                  <span class="badge badge-success" style="color:white;">Online</span>
                  <span><i class="lni lni-timer"></i>2 min ago</span></div>
                </div>
              </div>
            </div>           
          </div>

          <div class="row">
            <!-- Single Blog Card-->
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="card blog-card list-card mb-3">
                <div class="post-img"><img src="../_assets/img/wpes-device.png" alt=""></div>
                <a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>
                <a class="btn btn-primary btn-sm read-more-btn" href="blog-details.html">Detail</a>
                <div class="post-content">
                  <div class="bg-shapes">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                  </div>
                  <a class="post-catagory d-block" href="#">Device 2</a>
                  <a class="post-title d-block" href="blog-details.html">Alat untuk Tangki Air Toko</a>
                  <div class="post-meta d-flex align-items-center justify-content-between flex-wrap">
                  <span class="badge badge-danger" style="color:white;">Offline</span>
                  <span><i class="lni lni-timer"></i>59 min ago</span></div>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'; //tell will be use this layout

export default {
  name: 'AllDevice',
  created() {
	  this.$emit('update:layout',LayoutDefault);
  },
  data () {
    return {
    }
  }
}
</script>

