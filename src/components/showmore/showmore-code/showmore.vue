<template>
  <div class='showmore'>

    <div class="content" :style="{'min-height':minHerght+'px','max-height':autoHeight?'none':maxHeight+'px'}">
      <div ref="content">
        <slot></slot>
      </div>

      <div>
        <button class="btn showBtn" :style="{color:showBtnColor,top:maxHeight-100+'px'}" v-if="showbtn&&!autoHeight" @click="onShowIntroduce">{{showBtntext}}</button>
        <button class="btn hideBtn" :style="{color:hideBtnColor}" v-if="showbtn&&autoHeight" @click="onHiddenIntroduce">{{hideBtntext}}</button>
      </div>
    </div>

  </div>
</template>
 
<script>
export default {
  name: "showmore",

  props: {
    minHerght: {
      type: [String, Number],
      default: "200",
    },

    maxHeight: {
      type: [String, Number],
      default: "400",
    },

    showBtnColor: {
      type: String,
      default: "#49bf8d",
    },
    hideBtnColor: {
      type: String,
      default: "#999",
    },

    showBtntext: {
      type: String,
      default: "查看很多",
    },
    hideBtntext: {
      type: String,
      default: "收起",
    },
  },

  data() {
    return {
      showbtn: false,
      autoHeight: false,
      scrollTop: 0,
    };
  },

  created() {},

  mounted() {
    let height = this.$refs.content.offsetHeight;
    if (height > this.minHerght) {
      this.showbtn = true;
    }
  },

  methods: {
    // 打开
    onShowIntroduce() {
      this.autoHeight = true;
      if (document.documentElement && document.documentElement.scrollTop) {
        this.scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        this.scrollTop = document.body.scrollTop;
      }
    },
    // 收起
    onHiddenIntroduce() {
      this.autoHeight = false;
      scroll(0, this.scrollTop);
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
  overflow: hidden;
}

.btn:hover {
  cursor: pointer;
}
.btn {
  border: none;
  background-color: rgba(0, 0, 0, 0);
}

.showBtn {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 100;
  text-align: center;
  background: linear-gradient(to bottom, rgba(250, 250, 250, 0), #fff);
  padding-top: 80px;
  padding-bottom: 10px;
}
.hideBtn {
  width: 100%;
  height: auto;
  text-align: center;
}

/* 
// minHerght：插件最小的高度、出现显示更多字样的最小高度，如果内容高度小于该高度则显示更多字样不会出现
// maxHeight：出现显示更多字样的高度、如果该高度大于内容高度则会overflow: hidden;
// showBtnColor 按钮颜色
// hideBtnColor 按钮颜色
// showBtntext 按钮文字
// hideBtntext 按钮文字
 */
</style>