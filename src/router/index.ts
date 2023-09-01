import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PageLayout from "@/views/page-layout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 直接跳转到布局页面
  {
    path: '/',
    redirect: '/layout/mapbased-forum',
  },
  {
    path: '/layout',
    redirect: '/layout/mapbased-forum',
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
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/mapbased-forum.vue"),
        name: 'rewardSystem',
      },
      {
        path: 'message-box',
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/message-box.vue"),
        name: 'messageBox',
      },
      {
        path: 'forum',
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/forum.vue"),
        name: 'forum',
      },
      {
        path: 'contact-us',
        component: ()=> import(/* webpackChunkName: "about" */ "@/views/contact-us.vue"),
        name: 'contactUs',
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
