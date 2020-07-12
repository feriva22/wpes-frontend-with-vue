<template>
    <div class="ForgotPassword">
		<!-- Forgot Password Wrapper-->
      	<div class="login-wrapper d-flex align-items-center justify-content-center text-center">               
		<div class="container">
			<div class="row justify-content-center">
			<div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><img class="big-logo" src="../assets/img/logo-white.png" alt="">
				<!-- Register Form-->
				<div class="register-form mt-5 px-4">
				<form action="forget-password-success.html" method="post">
					<div class="form-group text-left mb-4"><span>Email or Username</span>
					<label for="email"><i class="lni lni-user"></i></label>
					<input class="form-control" id="email" type="text" placeholder="Designing World">
					</div>
					<button class="btn btn-warning btn-lg w-100">Reset Password</button>
				</form>
				</div>
			</div>
			</div>
		</div>
		</div>
    </div>
</template>

<script>

export default {
  name: 'ForgotPassword',
  created() {
	this.$emit('update:layout','div');
  },
  data () {
    return {
    }
  }
}
</script>

