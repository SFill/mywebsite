<template>
  <div class="home-page">
    <div class="section header">
      <div class="col">
        <div class="my-photo">
          <img src="../assets/my-photo.jpg" class="my-photo__img" />
        </div>
      </div>
      <div class="col header__left">
        <div class="title">
          <div class="title__text">{{ title }}</div>
        </div>
        <nav class="nav-bar">
          <a href="https://t.me/come_on00">Телеграм</a>
          <a href="https://github.com/SFill">Гитхаб</a>
          <router-link to="/blog">Бложик</router-link>
          <a
            href="https://vladimir.hh.ru/resume/6a19f16cff0427335c0039ed1f3073444d5650"
            >CV</a
          >
        </nav>
        <div class="information">
          <p>Пишу на питоне</p>
        </div>
      </div>
    </div>
    <div class="section skills center" id="skills">
      <div class="col center w100">
        <div class="row center">
          <h1>Skills</h1>
        </div>
        <div class="row w100 center chart">
          <SunBurst :options="sunburst" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SunBurst from "../components/SunBurst.vue";

export default {
  name: "HomePage",
  data() {
    return {
      title: "Никита\\ Калгушкин;",
      sunburst: [
        {
          name: "Skills",
          children: [
            {
              name: "Backend",
              children: [
                { name: "Golang" },
                {
                  name: "Python",
                  children: [
                    { name: "Aiohttp" },
                    { name: "Django" },
                    { name: "Flask" },
                  ],
                },
                {
                  name: "REST",
                },
                {
                  name: "Microservices",
                },
                {
                  name: "DB",
                  children: [{ name: "Postgres" }, { name: "Redis" }],
                },
              ],
            },

            {
              name: "Frontend",
              children: [
                { name: "Vue" },
                { name: "Webpack" },
                { name: "Vuex" },
                { name: "Vue router" },
              ],
            },
            { name: "CI", children: [{ name: "Jenkins" }, { name: "Gitlab" }] },
          ],
        },
      ],
    };
  },
  components: {
    SunBurst,
  },
};
</script>

<style scoped>
.section {
  display: flex;
  margin-bottom: 80px;
  margin: 0 auto;
  flex-direction: column;
}

.home-page {
  font-family: "PT Sans";
  font-size: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  justify-content: center;
}
.title {
  font-family: "PT Sans";
  font-size: 32px;
}

.title__text {
  display: table-caption;
  text-align: left;
}
.my-photo {
  max-width: 200px;
  min-width: 180px;
  align-self: center;
}
.my-photo__img {
  width: 100%;
}

.nav-bar {
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
}
.nav-bar > a {
  margin-right: 20px;
  font-size: 20px;
}

.information {
  margin-top: 20px;
  text-align: left;
}
.skills {
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.w50 {
  width: 50%;
}
.w100 {
  width: 100%;
}
.center {
  justify-content: center;
}
.col {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
}
.row {
  display: flex;
  flex-direction: row;
}
.chart {
  height: 80vh;
}
@media only screen and (min-width: 800px) {
  .section {
    flex-direction: row;
  }
  .header__left {
    order: -1;
  }
  .title {
    font-size: 2em;
  }
}
</style>