<template>
  <component :is="layout">
	  <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
export default {
  name: 'app',
  data() {
	  return {
		  layout: 'div'
	  }
  }
}
</script>
