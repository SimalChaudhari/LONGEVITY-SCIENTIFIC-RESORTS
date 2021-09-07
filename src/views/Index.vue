<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <H1 class="heading_text">LONGEVITY SCIENTIFIC RESORTS <br> <H2> by Longevity In Time</H2></H1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-tabs">
        <div>
          <Row :gutter="25">
            <i-col span="6" offset="3">
              <Card>
                <img src="@/assets/img/Person7.jpg"/>
                <h2>John Wilson</h2>
              </Card>
            </i-col>
            <i-col span="6">
              <Card>
                <img src="@/assets/img/Person8.jpg"/>
                <h2>Robert Davis</h2>
              </Card>
            </i-col>
            <i-col span="6">
              <Card>
                <img src="@/assets/img/Person9.jpg"/>
                <h2>Nora Taylor</h2>
              </Card>
            </i-col>
          </Row>
          <div class="textClass">
            <h3>
              <h2>Longevity Scientific Resorts:</h2> a network of uninhabited island hotels across the mild climate 
              territories around the world with focus on longevity treatments & clinical trials. Besides the 
              traditional standard package of hotel/resorts/rehab services with spa, beauty, cosmetology, 
              fitness we plan to deliver to our customers the latest longevity technologies & treatments and 
              offer participation in the breakthrough longevity clinical trials. To avoid early death -
              <h2>Lifetime health tracking included.</h2>
            </h3>
          </div>
        </div>
      </div>
      <div class="section section-white">
          <Row :gutter="30" style="padding: 15% 0% 15% 0%">
            <i-col span="10" offset="2">
              <Card style="background-color: #eeeeee">
                <h2>
                  Longevity factors
                </h2>
                <ul>
                  <Card>▪ Mild climate</Card>
                  <Card>▪ Social connections</Card>
                  <Card>▪ Social recognition</Card>
                  <Card>▪ Work, creativity & intellectual development</Card>
                  <Card>▪ Fitness & wellness activity</Card>
                </ul>
              </Card>
            </i-col>
            <i-col span="10">
              <Card style="background-color: #eeeeee">
                <h2>
                  Our services
                </h2>
                <ul>
                  <Card>▪ 30 days + stay in an over-water villa</Card>
                  <Card>▪ Tracking 30 days before stay & lifetime after stay</Card>
                  <Card>▪ Access only to designated customers</Card>
                  <Card>▪ Nutrition plan designed by leading longevity scientists</Card>
                  <Card>▪ Longevity treatments conducted by leading scientists</Card>
                </ul>
              </Card>
            </i-col>
          </Row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/House_interior.jpg")
    }
  },
  data() {
    return {
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">

.textClass {
  padding: 8%;
}
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
