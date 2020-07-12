<template>
    <div class="Home">
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
  },
  mounted() {
	  this.initGaugeChart(this.$refs.gaugeArea);
  },
  data () {
    return {
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

