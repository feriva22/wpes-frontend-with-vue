<template>
  <component :is="layout">
	<div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
	  <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
export default {
  name: 'app',
  computed: {
	  alert() {
		  return this.$store.state.alert;
	  }
  },
  watch:{
	  $route(to,from){
		// clear alert on location change
        this.$store.dispatch('alert/clear');
	  }
  },
  data() {
	  return {
		  layout: 'div'
	  }
  }
}
</script>
