<template>
  <div id="mainApp" class="container-fluid">
    <NavbarComponent
      :isWishlistVisible="isWishlistVisible"
      :wishlist="wishlist"
    />
    <router-view
      :addOrRemoveToWishlist="addOrRemoveToWishlist"
      :books="books"
      :cart="cart"
      :formatCurrency="formatCurrency"
      :wishlist="wishlist"
    />
    <!-- <BodyComponent
      :addOrRemoveToWishlist="addOrRemoveToWishlist"
      :books="books"
      :cart="cart"
      :formatCurrency="formatCurrency"
      :isWishlistVisible="isWishlistVisible"
      :wishlist="wishlist"
    />  
    <WishlistComponent
      :addOrRemoveToWishlist="addOrRemoveToWishlist"
      :wishlist="wishlist"
    /> -->
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import BodyComponent from "./components/BodyComponent.vue";
import WishlistComponent from "./components/WishlistComponent.vue";
import books from "./books";

export default {
  name: "App",
  components: {
    BodyComponent,
    NavbarComponent,
    WishlistComponent,
  },
  data: () => ({
    books: books,
    isWishlistVisible: false,
    wishlist: { items: [] },
    cart: { items: [] },
  }),

  methods: {
    addOrRemoveToWishlist(book) {
      let index = this.wishlist.items.findIndex(
        (item) => item.book.id === book.id
      );

      if (index === -1) {
        this.wishlist.items.push({ book: book });
      } else {
        this.wishlist.items.splice(index, 1);
      }
    },

    formatCurrency(value) {
      return Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "EGP",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
};
</script>

<style>
.a {
  text-decoration: none;
}

.btn {
  background: radial-gradient(
    circle,
    rgb(201, 172, 255) 0%,
    rgb(255, 188, 249) 100%
  );
}

.btn:hover {
  background: radial-gradient(
    circle,
    rgb(201, 172, 255) 0%,
    rgb(255, 188, 249) 100%
  );
  box-shadow: 5px 5px 20px #df36ee, -5px -5px 20px #df36ee;
}

.inWishlist {
  background: radial-gradient(
    circle,
    rgb(240, 10, 60) 0%,
    rgb(184, 4, 160) 100%
  );
  box-shadow: 5px 5px 20px rgb(240, 10, 60), -5px -5px 20px rgb(184, 4, 160);
}
</style>
