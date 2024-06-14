<template>
  <div id="cart">
    <br /><br /><br /><br />
    <div class="card shadow bg-body-tertiary rounded">
      <div class="card-header">
        <h2 class="text-center">Cart</h2>
      </div>
      <div class="card-body">
        <h2
          v-if="bookStore.cart.items.length === 0"
          class="text-danger m-4 fs-3 text-center"
        >
          No Books In Cart Now, You Can Add
        </h2>

        <table v-else class="table table-bordred table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ISBN</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Tax</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in bookStore.cart.items" :key="item.book.id">
              <td>{{ item.book.name }}</td>
              <td>{{ item.book.ISBN }}</td>
              <td>{{ bookStore.formatCurrency(item.book.price) }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ bookStore.formatCurrency(item.book.price * 0.1) }}</td>
              <td>
                {{
                  bookStore.formatCurrency(
                    item.book.price * 0.1 + item.book.price * item.quantity
                  )
                }}
              </td>
              <td>
                <button
                  class="btn btn-danger p-2 me-2"
                  @click="bookStore.decreasequantity(item)"
                >
                  -
                </button>
                <button
                  class="btn btn-danger p-2 me-2"
                  :disabled="item.book.quantity < 0"
                  @click="bookStore.increasequantity(item)"
                >
                  +
                </button>
                <button
                  class="btn btn-danger p-2 me-2"
                  @click="bookStore.removeFromCart(item.book)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from "@/stores/store";

export default {
  name: "cart",
  data: () => ({
    bookStore: useBookStore(),
  }),
};
</script>
