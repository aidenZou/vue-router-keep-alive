import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("@/views/Form.vue")
  },
  {
    path: "/result",
    name: "Result",
    component: () => import("@/views/Result.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach:", to.name);

  if (to.name === "Home") {
    store.remove();
  } else if (to.name === "Form") {
    store.add("Form");
  }

  next((vm) => {
    // 通过 `vm` 访问组件实例
    console.log("beforeEach:", vm);
  });
});

export default router;
