<template>
    <div class="Device">     
		<div class="product-description pb-3">
        <!-- Product Title & Meta Data-->
        <div class="product-title-meta-data bg-white mb-3 py-3">
          <div class="container">
            <h5 class="post-title">Alat untuk Tangki Air Rumah</h5><a class="post-catagory mb-3 d-block" href="#">Device {{idDevice}}</a>
            <div class="post-meta-data d-flex align-items-center justify-content-between">
              <a class="d-flex align-items-center" href="#">
                <span class="badge badge-success" style="color:white;">Registered</span>
                <span ><i class="lni lni-cog"></i> Setting</span>
              </a>
              <span><i class="lni lni-timer"></i>Updated 4 min ago</span>
            </div>
          </div>
        </div>
        <div class="post-content bg-white py-3 mb-3">
          <div class="container">
            <h6>Chart Sensor Ketinggian Air</h6>
            <div >
              <canvas id="canvas"></canvas>
            </div>
           
          </div>
        </div>

        <div class="post-content bg-white py-3 mt-2 mb-3">
          <div class="container">
            <h6>Chart Sensor Kekeruhan Air</h6>
            <div >
              <canvas id="canvas-2"></canvas>
            </div>
           
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LayoutDetail from '../layouts/LayoutDetail'; //tell will be use this layout

export default {
  name: 'Device',
  created() {
	  this.$emit('update:layout',LayoutDetail);
  },
  mounted() {
	  this.idDevice = this.$route.query.id;
	  this.isCommonPage = false;
  },
  data () {
    return {
		idDevice: null
    }
  }
}
</script>

