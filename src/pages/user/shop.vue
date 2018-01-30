<template>
  <section class="Shop">
    <div class="manage_index">
      <p class="user-tips">店铺尚未激活</p>
      <p class="user-tips" v-if="0">你的店铺已被禁用</p>
      <p class="user-tips" v-if="0">店铺已到期，请续费 过期期间不能提现</p>
      <div class="manage-top clear">
        <img src="../../assets/img/touxiangm.png" alt="">
        <div class="top-text">
          <h4>apple</h4>
          <button>进入店铺</button>
          <i class="iconfont icon-shezhi"></i>
        </div>
      </div>
      <div class="manage-today">
        <hr>
        <div class="today-data">
          <div class="data-box">
            <p>542</p>
            <p>今日访客</p>
          </div>
          <div class="data-box">
            <p>12.03</p>
            <p>收入</p>
          </div>
          <div class="data-box">
            <p>542</p>
            <p>累计订单</p>
          </div>
        </div>
      </div>
      <div class="manage-myshop">
        <group-title>店铺管理</group-title>
        <grid :rows="4">
          <grid-item link="#" label="商铺管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="/goods" label="订单管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="会员管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="店铺收入">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="店员管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="文章管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="视频管理">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
          <grid-item link="#" label="支付年费">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>

         <grid-item link="#" label="免单">
            <i slot="icon" class="iconfont icon-qitadingdan"></i>
          </grid-item>
        </grid>
      </div>
           <div class="shop-menu">
        <group>
          <div @click="shopqrcode()">
            <cell title="店铺二维码" is-link>
              <i class="iconfont icon-qrcode" slot="icon"></i>
            </cell>
          </div>
          <div @click="incomeqrcode()">
            <cell title="收款二维码" is-link>
              <i class="iconfont icon-qrcode qr2" slot="icon"></i>
            </cell>
          </div>
        </group>
      </div>
      <button  class="common-btn" @click="inviteqrcode()">邀 请 朋 友 开 店</button>
    </div>
  </section>
</template>
<script>
  import { Divider, Cell, Group, Grid, GridItem, GroupTitle, TransferDomDirective as TransferDom } from 'vux'
  export default {
    components: {
      Divider,
      Cell,
      Group,
      Grid,
      GridItem,
      GroupTitle
    },
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss">
  @import '../../assets/scss/theme.scss';
  .Shop {
    .manage_index {
      padding-bottom: .4rem;
      background-color: #efefef;
      .user-tips {
        background-color: #FFF2C8;
        font-size: 0.12rem;
        padding: 0.05rem 0.1rem;
        color: #3D351E;
        position: relative;
      }
      .manage-top {
        padding: 0.2rem 0.15rem;
        background-color: #fff;
        position: relative;
        img {
          border: 1px solid #efefef;
          width: 0.75rem;
          height: 0.75rem;
          float: left;
          margin-right: 0.1rem;
          border-radius: 0.03rem;
        }
        .top-text {
          float: left;
          h4 {
            margin: 0.16rem 0;
          }
          button {
            background-color: #fff;
            border: 1px solid #ddd;
            font-size: 0.1rem;
            border-radius: 0.1rem;
            padding: 0.03rem 0.15rem;
            color: #666;
          }
          .iconfont {
            position: absolute;
            top: 0.2rem;
            color: $main-color;
            right: 0.15rem;
          }
        }
      }
      .manage-today {
        position: relative;
        height: 0.45rem;
        padding: 0 0.15rem;
        padding: 0.15rem;
        background-color: #fff;
        hr {
          position: absolute;
          top: 0.25rem;
          z-index: 2;
          width: 90%;
          height: 2px;
          border: none;
          background-color: #ddd;
        }
        .today-data {
          position: absolute;
          background-color: #fff;
          z-index: 22;
          width: 80%;
          left: 10%;
          .data-box {
            float: left;
            text-align: center;
            width: 33.3%;
            color: $font-color;
            p:first-child {
              margin-bottom: 0.1rem;
              color: $main-color;
            }
          }
        }
      }
      .manage-myshop {
        margin-top: 0.05rem;
        background-color: #fff;
        .iconfont {
          font-size: 0.24rem;
        }
      }
    }
    .icon-qrcode{
      font-size:0.18rem;
      color:$main-color;
      margin-right:0.05rem;

    }
  }
</style>