<template>
  <section>
    <swiper :options="swiperOption" class='box'>
      <swiper-slide v-for="v in swipers"><img :src="v" class="img" style="width:100%;height:2.3rem"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <chartjs-line :labels="mylabels" :datasets="comparedata">
    </chartjs-line>
    <div>
      添加

    </div>
    <div style="margin-top:100px;">

    </div>

  </section>
</template>
<script>
  export default {
    components: {


    },
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false,
          loop: true,
          mainimg: '',
          detailimgs: [],
        },
        mylabels: ["06-20", "06-30", "07-10", "07-20", "07-30"], //折线图横坐标数据
        comparedata: [
          {
            label: "投资人数",
            fill: false,
            lineTension: 0,
            backgroundColor: "#37C4E7",
            borderColor: "#37C4E7",
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#37C4E7",
            pointHoverBorderColor: "#37C4E7",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [11, 18, 14, 8, 13, 14], //投资人数数据
            spanGaps: false,
          },
          {
            label: "借款人数",
            fill: false,
            lineTension: 0,
            backgroundColor: "#F29055",
            borderColor: "#F29055",
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#F29055",
            pointHoverBorderColor: "#F29055",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [9, 14, 13, 14, 20, 16], //借款人数数据
            spanGaps: false,
          }],

        swipers: ['/static/discount.png', '/static/discount1.png', '/static/discount.png']
      }
    },
    mounted() {
      setTimeout(() => {
        this.asyncCount = 5
      }, 1000)
      this.getlist();
    },//保证DOM渲染，这里必须加一个延时!
    methods: {
      getlist() {
        this.$http.get('api/home').then((res) => {
          console.log(res);
        })
      },
      imageuploaded(res) {
        if (res.code == 200) {
          this.detailimgs.push(res.data);
        }
      },
      upimg: function () {
        this.$eventhub.$emit('upimg', true, (res) => {
          this.mainimg = res
        })
      },
      upDetailImg: function () {
        this.$eventhub.$emit('upimg', true, (res) => {
          this.detailimgs.push(res);
        })
      }
    }
  }

</script>
<style lang="scss">
  .box {
    height: 2.3rem;
  }

  .iconplus {
    box-sizing: border-box;
    display: inline-block;
    padding: 0.2rem 0.2rem;
    border: 1px solid red;
  }
</style>