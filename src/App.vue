<template>
  <div class="flip">
    <h1>flip preview</h1>
    <Flip :options="options" wrapperClass="wrapperClass">
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
      <div class="img"
        style="background-image:url(https://duerstatic.cdn.bcebos.com/oss/20230717/background__w1280_h720_837K.593e3ed.png);">
      </div>
    </Flip>
  </div>
</template>
  
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
<script>
import Flip from "../output/flip-vue-es.js";
export default {
  components: {
    Flip,
  },
  data() {
    return {
      options:{
        display: 'single',
        corners: 'all',
        acceleration: true,
        elevation: 50
      }
    };
  },
  mounted() {
  },
};
</script>
  
<style>
.flip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapperClass {
  width: 1280px !important;
  height: 720px !important;
}

.img {
  background-size: 100% 100%;
}
</style>