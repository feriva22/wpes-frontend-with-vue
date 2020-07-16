<template>
    <div class="Device">     
		<div class="product-description pb-3">
        <!-- Product Title & Meta Data-->
        <div class="product-title-meta-data bg-white mb-3 py-3">
          <div class="container">
            <h5 class="post-title">{{ device.name }}</h5><a class="post-catagory mb-3 d-block" href="#">Device {{ device.iddevice }}</a>
            <div class="post-meta-data d-flex align-items-center justify-content-between">
              <a class="d-flex align-items-center" href="#">
                <span class="badge badge-success" style="color:white;">Registered</span>
                <span ><i class="lni lni-cog"></i> Setting</span>
              </a>
              <!--<span><i class="lni lni-timer"></i>Updated 4 min ago</span>-->
            </div>
          </div>
        </div>
        <div class="post-content bg-white py-3 mb-3">
          <div class="container">
            <h6>Chart Sensor Ketinggian Air</h6>
            <div >
              <canvas ref="chart_1"></canvas>
            </div>
           
          </div>
        </div>

        <div class="post-content bg-white py-3 mt-2 mb-3">
          <div class="container">
            <h6>Chart Sensor Kekeruhan Air</h6>
            <div >
              <canvas ref="chart_2"></canvas>
            </div>
           
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LayoutDetail from '../layouts/LayoutDetail'; //tell will be use this layout
import * as Chartjs from 'chart.js/dist/Chart.bundle';
import { deviceService } from '../_services';
import moment from 'moment';

const formatDate = 'YYYY-MM-DD hh:mm:ss';
export default {
  name: 'Device',
  created() {
	  this.$emit('update:layout',LayoutDetail);
	  this.$store.dispatch('navigation/change', 'device');
	  this.$store.dispatch('device/getDetail',this.$route.query.id);
	  
  },
  computed: {
	  device() {
		  return this.$store.state.device.deviceDetail;
	  }
  },
  watch: {
	  device: function(value){
		  //render chart
	  	this.renderWaterLevelChart(value.iddevice);
	  	this.renderTurbidityChart(value.iddevice);
	  }
  },
  mounted() {
	  moment().locale('id');
	  //id data
	  this.ctx_waterlevel = this.$refs.chart_1.getContext('2d');
	  this.ctx_turbidity =  this.$refs.chart_2.getContext('2d');
	  
  },
  methods: {
	  renderWaterLevelChart(id_device){
		deviceService.getSensorData(id_device,'WATER_LEVEL',this.startDate.format(formatDate),this.endDate.format(formatDate))
				.then(resp => {
					let data_obj = resp.data.map(item => {
						return { x: item.time, y: item.value }
					});
					let configWaterLevel = this.configChartjs;
					configWaterLevel.data.datasets[0].data = data_obj;
					new Chartjs(this.ctx_waterlevel, configWaterLevel);
				});
	  },
	  renderTurbidityChart(id_device){
		deviceService.getSensorData(id_device,'TURBIDITY',this.startDate.format(formatDate),this.endDate.format(formatDate))
		.then(resp => {
			let data_obj = resp.data.map(item => {
				return { x: item.time, y: item.value}
			});
			let configTurbidity = this.configChartjs;
			configTurbidity.data.datasets[0].data = data_obj;
			configTurbidity.options.scales.yAxes[0].scaleLabel.labelString = 'Status';
			new Chartjs(this.ctx_turbidity, configTurbidity);
		});
	  }
  },
  data () {
    return {
		endDate: moment(),
		startDate: moment().subtract(2,'week'), //default value 5 day ago
		colorChartjs: Chartjs.helpers.color,
		ctx_waterlevel: null ,
		ctx_turbidity: null,
		configChartjs: {
			type: 'line',
			data: {
				datasets: [{
					label: 'Dataset with point data',
					backgroundColor: '#fffffff',
					borderColor: '#0000FF',
					fill: false,
					data: [],
				}]
			},
			options: {
				responsive: true,
				legend: { display: false},
				title: {
					display: false,
					text: 'Chart.js Time Point Data'
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							parser : formatDate,
							tooltipFormat: 'll HH:mm'
						},
						scaleLabel: {
							display: true,
							labelString: 'Waktu'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'cm'
						}
					}]
				}
			}
		}
    }
  }
}
</script>

