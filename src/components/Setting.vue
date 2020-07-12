<template>
    <div class="Setting">
	  <div class="container">
        <!-- Settings Wrapper-->
        <div class="settings-wrapper py-3">
          <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-alarm"></i><span>Notifications</span></div>
                <div class="data-content">
                  <div class="toggle-button-cover">
                    <div class="button r">
                      <input class="checkbox" type="checkbox" checked>
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-night"></i><span>Night Mode</span></div>
                <div class="data-content">
                  <div class="toggle-button-cover">
                    <div class="button r">
                      <input class="checkbox" id="darkSwitch" type="checkbox">
                      <div class="knobs"></div>
                      <div class="layer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-world"></i><span>Language</span></div>
                <div class="data-content"><a href="language.html">English<i class="lni lni-chevron-right"></i></a></div>
              </div>
            </div>
          </div>
          <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-question-circle"></i><span>Support</span></div>
                <div class="data-content"><a class="pl-4" href="support.html"><i class="lni lni-chevron-right"></i></a></div>
              </div>
            </div>
          </div>
          <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-lock"></i><span>Password<span>Updated 2 month ago</span></span></div>
                <div class="data-content"><a href="change-password.html">Change<i class="lni lni-chevron-right"></i></a></div>
              </div>
            </div>
          </div>
		  <div class="card settings-card">
            <div class="card-body">
              <!-- Single Settings-->
              <div class="single-settings d-flex align-items-center justify-content-between">
                <div class="title"><i class="lni lni-lock"></i><span>Logout</span></div>
                <div class="data-content"><router-link to="/login"><i class="lni lni-chevron-right"></i></router-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'; //tell will be use this layout

export default {
  name: 'Setting',
  created() {
	  this.$emit('update:layout',LayoutDefault);
  },
  data () {
    return {
    }
  }
}
</script>

