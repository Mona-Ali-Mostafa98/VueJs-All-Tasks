<template>
  <div id="Books" class="mt-5">
    <!-- <div class="row text-center border border-1 m-5 shadow p-3 bg-body rounded">
      <h2 class="col">Books</h2>
    </div> -->

    <div
      class="row justify-content-center align-items-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-2"
    >
      <div v-for="book in books" class="col-12 col-sm-6 col-lg-4" :key="book.id">
        <div class="card m-2 h-100 shadow-lg">
          <img
            :src="book.image"
            :title="book.name"
            alt="Image 1"
            class="border border-1 rounded"
            style="height: 40vh"
          />
          <h2 class="card-title text-center text-primary m-2">
            {{ book.name }}
          </h2>
          <div class="card-body">
            <div class="row fs-5">
              <div class="col-6">
                <div class="row">
                  <div class="col-12 my-2">
                    <i class="fa-solid fa-check text-primary me-3"></i
                    >{{ book.category }}
                  </div>
                  <div class="col-12 my-2">
                    <i class="fa-solid fa-check text-primary me-3"></i>
                    <span
                      :class="[
                        book.pagesNo >= 100 ? 'text-success' : 'text-danger',
                      ]"
                      >{{ book.pagesNo }}</span
                    >
                  </div>
                  <div class="col-12 my-2">
                    <i class="fa-solid fa-check text-primary me-3"></i>
                    {{ book.ISBN }}
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-12 my-2">
                    <i class="fa-solid fa-check text-primary me-3"></i>
                    {{ book.author }}
                  </div>
                  <div class="col-12 my-2">
                    <i class="fa-solid fa-check text-primary me-3"></i>
                    {{ formatCurrency(book.price) }}
                  </div>
                  <div class="col-12 my-2">
                    <div class="row justify-content-around align-items-center">
                      <button
                        :class="[
                          wishlist.items.find(
                            (item) => item.book.id === book.id
                          )
                            ? 'btn inWishlist col-4 fs-5'
                            : 'btn col-4 fs-5',
                        ]"
                        @click="addOrRemoveToWishlist(book)"
                      >
                        <i class="fa-solid fa-heart"></i>
                      </button>
                      <button
                        :class="[
                          cart.items.find((item) => item.book.id === book.id)
                            ? 'btn inWishlist col-4 fs-5'
                            : 'btn col-4 fs-5',
                        ]"
                        @click="addToCart(book)"
                      >
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "body",
  props: [
    "addOrRemoveToWishlist",
    "books",
    "cart",
    "formatCurrency",
    "isWishlistVisible",
    "wishlist",
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
