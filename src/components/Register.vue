<template>
    <div class="Register">
      	<!-- Register Wrapper Area-->
		<div class="login-wrapper d-flex align-items-center justify-content-center text-center">
		<!-- Background Shape-->
		<div class="background-shape"></div>
		<div class="container">
			<div class="row justify-content-center">
			<div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><img class="big-logo" src="../assets/img/logo-white.png" alt="">
				<!-- Register Form-->
				<div class="register-form mt-5 px-4">
				<form action="otp.html" method="post">
					<div class="form-group text-left mb-4"><span>Username</span>
					<label for="username"><i class="lni lni-user"></i></label>
					<input class="form-control" id="username" type="text" placeholder="Designing World">
					</div>
					<div class="form-group text-left mb-4"><span>Email</span>
					<label for="email"><i class="lni lni-envelope"></i></label>
					<input class="form-control" id="email" type="email" placeholder="help@example.com">
					</div>
					<div class="form-group text-left mb-4"><span>Password</span>
					<label for="password"><i class="lni lni-lock"></i></label>
					<input class="input-psswd form-control" id="registerPassword" type="password" placeholder="********************">
					</div>
					<button class="btn btn-primary btn-lg w-100">Register Now</button>
				</form>
				</div>
				<!-- Login Meta-->
				<div class="login-meta-data">
				<p class="mt-3 mb-0">Already have an account?<router-link to="/login" class="ml-1">Login</router-link></p>
				</div>
			</div>
			</div>
		</div>
		</div>
    </div>
</template>

<script>

export default {
  name: 'Register',
  created() {
	this.$emit('update:layout','div');
  },
  data () {
    return {
    }
  }
}
</script>

