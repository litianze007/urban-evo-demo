import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PageLayout from "@/views/page-layout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 直接跳转到布局页面
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: "/layout",
    name: "layout",
    component: PageLayout,
    children: [
      //
      {
          path: 'mapbased-forum',
          component: ()=> import(/* webpackChunkName: "about" */ "@/views/mapbased-forum.vue"),
          name: 'mapForum',
      },
      {
        path: 'reward-system',
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
        name: 'rewardSystem',
      },
      {
        path: 'message-box',
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/HomeView.vue"),
        name: 'messageBox',
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
