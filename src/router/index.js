import { createWebHistory, createRouter } from "vue-router";
import HomeSlider from "../components/HomeSlider";

const routes = [
  {
    path: "/",
    name: "HomeSlider",
    component: HomeSlider,
  },
  {
    path: "/modificar/:id",
    name: "ModificarImagen",
    component: () => import("../components/Modificar"),
  },
  {
    path: "/crear",
    name: "CrearImagen",
    component: () => import("../components/Crear"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
