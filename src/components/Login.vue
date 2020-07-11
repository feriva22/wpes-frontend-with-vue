<template>
    <div class="Login">
      	<!-- Login Wrapper Area-->
		<div class="login-wrapper d-flex align-items-center justify-content-center text-center">
		<!-- Background Shape-->
		<div class="background-shape"></div>
		<div class="container">
			<div class="row justify-content-center">
			<div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><img class="big-logo" src="../assets/img/logo-white.png" alt="">
				<!-- Register Form-->
				<div class="register-form mt-5 px-4">
				<form action="/home" method="get">
					<div class="form-group text-left mb-4"><span>E-mail</span>
					<label for="email"><i class="fa fa-envelope"></i></label>
					<input class="form-control" id="email" type="email" placeholder="info@example.com">
					</div>
					<div class="form-group text-left mb-4"><span>Password</span>
					<label for="password"><i class="lni lni-lock"></i></label>
					<input class="form-control" id="password" type="password" placeholder="********************">
					</div>
					<router-link :to="{path : '/home'}" class="btn btn-primary btn-lg w-100">Login</router-link>
				</form>
				</div>
				<!-- Login Meta-->
				<div class="login-meta-data"><router-link :to="{path: '/forgotpassword'}" class="forgot-password d-block mt-3 mb-1"> Forgot Password?</router-link>
				<p class="mb-0">Didn't have an account?<router-link :to="{path: '/register'}"  class="ml-1">Register Now</router-link></p>
				</div>
			</div>
			</div>
		</div>
		</div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  created() {
	this.$emit('update:layout','div');
  },
  data () {
    return {
    }
  }
}
</script>

