<template>
  <nav
    class="navbar navbar-expand-lg bg-dark text-light fixed-top px-5 py-2"
    data-bs-theme="dark"
  >
    <router-link class="navbar-brand fs-3 me-5" to="/">Home</router-link>
    <router-link class="navbar-brand fs-3 me-5" to="/about">About</router-link>
    <router-link class="navbar-brand fs-3 me-5" to="/contact"
      >Contact
    </router-link>
    <router-link class="navbar-brand fs-3 me-5" to="/books">books</router-link>
    <!--    <button @click="bookStore.increment">+</button>-->
    <!--    <button @click="bookStore.increment">-</button>-->
    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto text-center">
        <li class="nav-item">
          <router-link class="navbar-brand fs-3 ms-3" to="/wishlist">
            <span style="position: relative; display: inline-block">
              <i class="fa-solid fa-heart"></i>
              <span class="badge count">{{
                bookStore.wishlist.items.length
              }}</span>
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand fs-3 ms-3" to="/cart">
            <span style="position: relative; display: inline-block">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="badge count">{{ bookStore.cart.items.length }}</span>
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="!authenticationStore.isAuthenticated"
            class="btn ms-3 fs-5 text-center"
            to="/login"
            >Login
          </router-link>
          <button
            v-else
            type="button"
            class="btn ms-3 fs-5 text-center"
            @click="authenticationStore.logout"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <br />
</template>

<script>
import { useBookStore } from "@/stores/store";
import { useAuthenticationStore } from "@/stores/auth";

export default {
  name: "navbar",
  // props: ["isWishlistVisible", "wishlist"],
  data: () => ({
    bookStore: useBookStore(),
    authenticationStore: useAuthenticationStore(),
  }),
};
</script>
