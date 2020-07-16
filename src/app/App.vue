<template>
  <component :is="layout">
	  <router-view :layout.sync="layout"/>
  </component>
</template>

<script>

export default {
  name: 'app',
  created() {
	  //this.$store.dispatch('alert/error','testing');
  },
  computed: {
	  alert() {
		  const alertState = this.$store.state.alert;
		  if(alertState.type !== null){
			  if(alertState.type == 'error'){
				  this.$awn.alert(alertState.message);
			  }
			  else if(alertState.type == 'success'){
				  this.$awn.success(alertState.message);
			  }
			  else if(alertState.type == 'confirm'){
				  this.$awn.confirm(
  				    alertState.message,
  				    alertState.onOk,
  				    false,
  				    {
  				      labels: {
  				        confirm: alertState.labels
  				      }
  				    }
  				  )
			  }
		  }
	  }
  },
  watch:{
	  /*$route(to,from){
		// clear alert on location change
        this.$store.dispatch('alert/clear');
	  }*/
	  alert: function(newAlert, oldAlert){
		  console.log(newAlert,oldAlert);
	  }
  },
  data() {
	  return {
		  layout: 'div'
	  }
  }
}
</script>

