<template>
  <div id="wishlist">
    <br /><br /><br /><br />
    <h2 v-if="wishlist.items.length == 0" class="text-danger fs-3 text-center">
      No Books In Wishlist Now, You Can Added
    </h2>
    <table v-else class="table table-bordred table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">ISBN</th>
          <th scope="col">Author</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in wishlist.items">
          <td>{{ item.book.name }}</td>
          <td>{{ item.book.ISBN }}</td>
          <td>{{ item.book.author }}</td>
          <td>
            <button
              class="btn btn-danger p-2"
              @click="addOrRemoveToWishlist(item.book)"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "wishlist",
  props: ["addOrRemoveToWishlist", "wishlist"],
};
</script>
