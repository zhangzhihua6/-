<template>
  <div>
    <Row>
      <Col span="4">
        <Tree :data="data1"></Tree>
      </Col>
      <Col span="20">
        <div>视频播放页面</div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { post, get } from "@/libs/axios-cfg";
export default {
  data() {
    return {
      data1: [
        {
          title: "监控点",
          expand: true,
          children: [
            {
              title: "上分小学",
              expand: true,
              children: [
                {
                  title: "校门口",
                },
                {
                  title: "教学楼",
                },
              ],
            },
            {
              title: "书香小学",
              expand: true,
              children: [
                {
                  title: "校门口",
                },
                {
                  title: "教学楼",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {},
  created() {},
  methods: {},
};
</script>
