<template>
  <nav
    class="navbar navbar-expand-lg bg-dark text-light fixed-top px-5 fs-4"
    data-bs-theme="dark"
  >
    <!-- <a
      class="navbar-brand fs-3"
      href="#"
      @click.prevent="isWishlistVisible = false"
      >Books</a
    > -->
    <router-link class="navbar-brand fs-3 me-4" to="/">Home</router-link>
    <router-link class="navbar-brand fs-3 me-4" to="/about">About</router-link>
    <router-link class="navbar-brand fs-3 me-4" to="/contact"
      >Contact</router-link
    >
    <!-- <router-link to="/books">books</router-link> -->

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
        <li class="nav-item pe-2 pt-2">
          <p>
            <span class="me-2">{{ wishlist.items.length }}</span>
            <span v-if="wishlist.items.length == 1">item</span>
            <span v-else>items</span> in wishlist
          </p>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/wishlist">
            <i class="fa-solid fa-heart"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <br />
</template>

<script>
export default {
  name: "navbar",
  props: ["isWishlistVisible", "wishlist"],
};
</script>
