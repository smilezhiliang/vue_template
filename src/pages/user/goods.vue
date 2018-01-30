<template>
  <section class="Goods">
    <!--轮播图-->
    <!--商品信息-->
    <div class="goods-info-con">
      <div class="title-con">
        <div class="goods-info">
          <p>苹果中国 iPhone 7 Plus 128G 红色特别版 移动联通电信4G手机</p>
        </div>
        <div class="btn-collection">
          <i class="iconfont icon-shoucang"></i>
        </div>
      </div>
      <p class="price">5688~6288元</p>
    </div>
    <div class="shop-info-con">
      <div class="jump">
        <div class="shop-img">
          <img src="../../assets/img/touxiangm.png">
        </div>
        <div class="shop-info">
          <p>苹果中国</p>
        </div>
        <div class="btn-look-shop">
          <i class="iconfont icon-weiguanzhu"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    components: {

    },
    data() {
      return {



      }
    }
  }

</script>
<style lang="scss">
  @import "../../assets/scss/theme.scss";
  .goods-info-con {
    background-color: #fff;
    padding: .1rem;
    .title-con {
      display: flex;
      justify-content: space-between;
    }
    .goods-info {
      width: calc(100% - .26rem);
      /*计算*/
      p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*看下*/
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: .16rem;
      }
    }
    .btn-collection {
      padding: 0.01rem 0.05rem;
      border-left: 1px solid #ccc;
      display: flex;
      align-items: center;
      i {
        font-size: 0.16rem;
        color: #F0AD4E;
      }
    }
    .price {
      padding: 0.1rem 0;
      color: $main-color;
      font-size: .16rem;
    }
    .shop-info-con{
      display:flex;
      justify-content:space-between;
      margin-top:.1rem;
      align-items:center;
      padding:.1rem;
    }
  }
</style>