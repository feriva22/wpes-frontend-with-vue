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

export default {
  name: 'Device',
  created() {
	  this.$emit('update:layout',LayoutDetail);
  },
  mounted() {
	  this.idDevice = this.$route.query.id;

	  //render chart
	  var ctx = this.$refs.chart_1.getContext('2d');
	  var ctx2 = this.$refs.chart_2.getContext('2d');
	  new Chartjs(ctx, this.configChartjs);
	  new Chartjs(ctx2, this.configChartjs);
  },
  data () {
    return {
		idDevice: null,
		colorChartjs: Chartjs.helpers.color,
		configChartjs: {
			type: 'line',
			data: {
				datasets: [{
					label: 'Dataset with string point data',
					backgroundColor: '#fffffff',
					borderColor: '#000000',
					fill: false,
					data: [{
						x: 1,
						y: 10123
					}, {
						x: 12,
						y: 123
					}],
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
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Date'
						},
						ticks: {
							major: {
								fontStyle: 'bold',
								fontColor: '#FF0000'
							}
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'value'
						}
					}]
				}
			}
		}
    }
  }
}
</script>

