import { createRouter, createWebHistory } from "vue-router";
import BodyComponent from "@/components/BodyComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import WishlistComponent from "@/components/WishlistComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: BodyComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComponent,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: WishlistComponent,
  },
  //   {
  //     path: "/books",
  //     name: "books",
  //     component: books,
  //   },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
