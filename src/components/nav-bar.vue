<template>
  <div class="nav-bar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo">
    </div>

    <div class="right-box">
      <div class="flex-box">
        <div class="function-title btn" :class="{ active: path.includes('mapbased-forum') }"
          @click="toRouter('/layout/mapbased-forum')">
          <span>
            Map-based Forum
          </span>
        </div>
      </div>
      <div class="flex-box">
        <div class="function-title btn" :class="{ active: path.includes('reward-system') }"
          @click="toRouter('/layout/reward-system')">
          <span>
            Reward System
          </span>
        </div>
      </div>
      <div class="flex-box">
        <div class="function-title btn" :class="{ active: path.includes('message-box') }"
          @click="toRouter('/layout/message-box')">
          <span>
            Message-Box
          </span>
        </div>
      </div>
    </div>

    <div class="avatar">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {

  path: string = this.$route.path;

  toRouter(path: string) {
    this.$router.push({
      path,
    });
  }

  @Watch('$route.path', { immediate: true, deep: true })
  doHandlePath(val: string) {
    this.path = val;
  }
}
</script>



<style lang="less" scoped>
a {
  text-decoration: none;
}

.nav-bar {
  position: relative;
  width: 100%;
  height: 25vh;
  // background: blue;
  display: flex;
  justify-content: flex-end;
  .logo{
    position: absolute;
    width:20vh;
    top: 30px;
    left:40px;
    img{
      width:100%;
    }
  }

  .avatar{
    position:absolute;
    top: 5vh;
    right:3vw;
    width: 80px;
    height:80px;
    border-radius: 50%;
    border: 4px solid black;
    background: url("../assets/avatar.png") no-repeat top;
    cursor: pointer;
    background-size:100px;
  }
  .right-box {
    position: absolute;
    // background-color: red;
    display: flex;
    justify-content: flex-start;
    font-family: "Times New Roman", Times, serif;
    height: 100%;
    width: 55%;
    right: 0;
    padding: 6vh 5vw;

    .flex-box {
      // background-color: green;
      margin-left: 3vw;

      .function-title {
        cursor: pointer;

        // background-color: #101316;
        background-color: transparent;
        color: rgb(19, 18, 18);
        font-size: 22px;
        font-weight: bold;
        transition: all .5s ease-in-out;

        &:active {
          background-color: rgb(19, 18, 18);
          color: whitesmoke;
        }
      }

      .active {
        background-color: rgb(19, 18, 18);
        color: whitesmoke;
      }
    }
  }


}

.btn {
  padding: 10px 20px;
  border-radius: 50px;
}

/* 版心标签 */
.wrap {
  width: 1520px;
  margin: 0 auto;
}

.right-box {
  display: flex;
  height: 100%;
}
</style>
