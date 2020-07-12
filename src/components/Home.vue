<template>
    <div class="Home">
	  <!-- Hello Div -->
	  <br>
	  <div class="container ">
        <div class="card discount-coupon-card border-0">
          <div class="card-body">
            <div class="coupon-text-wrap d-flex align-items-center p-0">
              <h5 class="text-white pr-3 mb-0">HELLO</h5>
              <p class="text-white pl-3 mb-0">{{ user.full_name }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Livetime monitoring-->
      <div class="product-catagories-wrapper pt-3">
        <div class="container">
          <div class="section-heading">
            <h6 class="ml-1">LiveTime Monitoring</h6>
          </div>
          <div class="product-catagory-wrap">
            <div class="row">
              <!-- Single Catagory Card-->
              <div class="col-12">
                <div class="card mb-3 top-product-card">
                  <div class="card-body">
                    <span class="badge badge-success">Device 1</span>
                    <div ref="gaugeArea" class="product-thumbnail d-block">
                    </div>
                    <a class="product-title d-block" href="single-product.html">Status Sensor Ketinggian Air</a>
                    <p >Update Terakhir : <span>1 min ago</span></p>
                    <a class="btn btn-primary btn-sm" href="#"><i class="lni lni-eye"></i></a>
                  </div>
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
import * as GaugeChart from 'gauge-chart/dist/bundle.js';

export default {
  name: 'Home',
  created() {
	  this.$emit('update:layout',LayoutDefault);
	  this.$store.dispatch('users/getDetail', this.id_user );
  },
  computed: {
	  user() {
		  return this.$store.state.users.loggedUser;
	  },
  },
  mounted() {
	  this.initGaugeChart(this.$refs.gaugeArea);
  },
  data () {
    return {
	  id_user: this.$store.state.authentication.user.id,
		// Properties of the gauge
      waterLevelOption: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        arcColors: ['red','yellow' ,'green'],
        arcDelimiters: [30,60],
        rangeLabel: ['0', '100'],
        centralLabel: '50%',
      }
    }
  },
  methods: {
	  initGaugeChart(element){
		  GaugeChart.gaugeChart(element, 300, this.waterLevelOption).updateNeedle(50)
	  }
  }
}
</script>

