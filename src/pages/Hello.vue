<template>
  <section class="Hello">
    <div class="search_bar">
      <div class="text_edit">
        <input type="text" placeholder="搜索城市">
      </div>
      <i class="iconfont icon-search"></i>
    </div>
      <swiper loop auto :list="demo07_list" :aspect-ratio="180/360" :index="demo07_index" dots-position="center"></swiper>
  </section>
</template>
<script>
  import { Swiper } from 'vux';
   const demoList=[{
       url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    },
    {
       url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    },
    {
       url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    }
    ]
  export default {
  components: {
      Swiper,
    },
    data() {
      return {
demo07_list: demoList,
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .vux-indicator.custom-bottom {
  bottom: 30px;
}
  .Hello {
    .search_bar {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      padding: 0.05rem 0.1rem;
      background-color: #ccc;
      font-size: 0.12rem;
      text-align: left;
      font-weight: normal;
      font-style: normal;
      .text_edit {
        height: 0.28rem;
        border-radius: 0.08rem;
        background-color: #fff;
        input {
          font-size: 0.12rem;
          box-sizing: border-box;
          outline: none;
          border: none;
          height: 100%;
          width: 100%;
          line-height: 100%;
          background-color: transparent; /*背景颜色为透明*/
          text-align: inherit;/*继承父元素的text-align*/
          padding: 0 0.26rem;
        }
      }
      .iconfont {
        font-size: 0.14rem;
        position: absolute;
        top: 0.06rem;
        left: 0.2rem;
        line-height: 0.28rem;
        color: #666;
      }
    }
  }
</style>