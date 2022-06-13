import { createWebHistory, createRouter } from "vue-router";
import DemoBanner from "../components/DemoBanner";

const routes = [
  {
    path: "/",
    name: "DemoBanner",
    component: DemoBanner,
  },
  {
    path: "/tablaBanners",
    name: "TablaBanners",
    component: () => import("../components/TablaBanners"),
  },
  {
    path: "/formularioBanner",
    name: "FormularioBanner",
    component: () => import("../components/FormularioBanner"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
