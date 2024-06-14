<template>
  <div id="mainApp" class="container-fluid">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import BodyComponent from "./components/BodyComponent.vue";
import WishlistComponent from "./components/WishlistComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

export default {
  name: "App",
  components: {
    BodyComponent,
    NavbarComponent,
    WishlistComponent,
    CartComponent,
    LoginComponent,
  },
};
</script>

<style>
.a {
  text-decoration: none;
}

.btn {
  background: radial-gradient(circle, #c76ca5 0%, #b8e8f2 100%);
}

.btn:hover {
  background: radial-gradient(circle, #c76ca5 0%, #b8e8f2 100%);
  box-shadow: 5px 5px 20px #c76ca5, -5px -5px 20px #c76ca5;
}

.navbar-brand,
.card-title,
.fa-check {
  color: #c76ca5;
}

.navbar-brand:hover {
  color: rgb(255, 188, 249);
}

.added-to-cart,
.added-to-wishlist {
  background: radial-gradient(circle, #e91e63 0%, #c76ca5 100%);
  box-shadow: 5px 5px 20px #e91e63, -5px -5px 20px #c76ca5;
}

.count {
  position: absolute;
  top: -4px;
  right: -20px;
  background-color: #fe98ae;
  color: black;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding: 5px;
  font-size: 15px;
}
</style>
