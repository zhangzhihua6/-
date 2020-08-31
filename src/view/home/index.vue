<template>
  <div class="g-index">
    首页
  </div>
</template>
<script>
import ECharts from "vue-echarts";
import echarts from "echarts";
import { post, get, baseUrl } from "@/libs/axios-cfg";
export default {
  components: {
    "v-chart": ECharts
  },
  mounted(){
    // this.title=JSON.parse(localStorage.getItem("userInfo")).schoolName;
  },

  data() {
    return {
      title:'',
    };
  },
  created() {
  },
  methods:{
   
    
  }
};
</script>

<style>
.g-index {
  width: 100%;
  height: 100%;
  background: rgba(5, 23, 36, 1);
  border-radius: 15px;
}
.g-index .g-echarts {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.g-index .m-echarts {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* border: 1px solid #999; */
}
.g-index .c-echarts {
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.g-index h3 {
  position: absolute;
  left: 14px;
  top: 14px;
  font-size: 14px;
  color: #fff;
  z-index: 999;
}
.g-index .echarts {
  width: 100%;
  height: 100%;
}
.g-index .center h2 {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #333;
}
.g-index .center {
  display: flex;
  flex-direction: column;
}
</style>
