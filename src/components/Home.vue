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


            <div class="row" >
              <!-- Single Catagory Card-->
              <div class="col-12">
                <div class="card mb-3 top-product-card">
                  <div class="card-body">
                    <span class="badge badge-success">Device {{device.iddevice}}</span>
                    <div :ref="'gaugeArea'+device.iddevice" class="product-thumbnail d-block">
                    </div>
                    <a class="product-title d-block" href="single-product.html">Status Sensor Ketinggian Air</a>
                    <p >Terakhir Update : <span>{{ summaryLastUpdate }}</span></p>
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
import { deviceService } from '../_services';
import moment from 'moment';

export default {
  name: 'Home',
  beforeDestroy() {
	clearInterval(this.intervalChart);
  },
  created() {
	  this.$emit('update:layout',LayoutDefault);
	  this.$store.dispatch('navigation/change', 'home' );
	  this.$store.dispatch('users/getDetail', this.id_user );
	  this.$store.dispatch('device/getDetail',1);
  },
  computed: {
	  user() {
		  return this.$store.state.users.loggedUser;
	  },
	  device() {
		  return this.$store.state.device.deviceDetail;
	  },
  },
  watch: {
	  device: function(value){
		  if(typeof(value.iddevice) !== 'undefined'){
			  this.initGaugeChartWater(this.$refs.gaugeArea1,value.iddevice);
			  setInterval(() => {
				  this.updateLastUpdateStat();
			  },1000)
			  this.intervalChart = setInterval(() => {
			  	this.initGaugeChartWater(this.$refs.gaugeArea1,value.iddevice);
			  },5000);
		  }
	  }
  },
 
  mounted() {
	moment().locale('id');

  },
  data () {
    return {
	  id_user: this.$store.state.authentication.user.id,
      waterLevelOption: {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        arcColors: ['red','yellow' ,'green'],
        arcDelimiters: [25,50],
        rangeLabel: ['0', '100'],
	  },
	  minFull: 5,
	  maxCapacity: 40,
	  gaugeChartElement : null,
	  lastTimeUpdate: null,
	  summaryLastUpdate: null,
	  intervalChart: null
    }
  },
  methods: {
	  updateLastUpdateStat(){
		  this.summaryLastUpdate = moment(this.lastTimeUpdate,'YYYY-MM-DD HH:mm:ss').fromNow();
	  },
	  initGaugeChartWater(element,id_device){
		  deviceService.getSensorData(id_device,'WATER_LEVEL',null,null,1)
				.then(resp => {
					//revert value if current value is 100% of maxCapacity so water is empty
					let additionalMinFull = this.minFull/this.maxCapacity*100;
					let current_percentage = parseInt(Math.abs((parseFloat(resp.data[0].value)/this.maxCapacity*100) - (100+additionalMinFull)));
					if(current_percentage > 100 ) {current_percentage = 100};
					this.waterLevelOption.centralLabel = current_percentage+'%';
					if(typeof(element) !== 'undefined'){
					  this.lastTimeUpdate = moment().format('YYYY-MM-DD HH:mm:ss') ;
					  if(this.gaugeChartElement == null){
						this.gaugeChartElement = GaugeChart.gaugeChart(element, 300, this.waterLevelOption);
					  }else {
						  this.gaugeChartElement.removeGauge();
						  this.gaugeChartElement = GaugeChart.gaugeChart(element, 300, this.waterLevelOption);
					  }
					  this.gaugeChartElement.updateNeedle(current_percentage);
					}
				});

		  
	  }
  }
}
</script>

