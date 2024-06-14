import { defineStore } from "pinia";
import books from "../books";

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    counter: 10,
    books: books,
    wishlist: { items: [] },
    cart: { items: [] },
  }),

  // methods
  actions: {
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

    checkexistence(book) {
      return this.cart.items.some((iitem) => iitem.book.id === book.id);
    },

    addToCart(book) {
      if (!this.checkexistence(book)) {
        // Product does not exist in the cart
        this.cart.items.push({
          book: book,
          quantity: 1,
        });
      } else {
        // Product already exists in the cart, increment its quantity
        const existingItem = this.cart.items.find(
          (item) => item.book.id === book.id
        );
        if (existingItem) {
          existingItem.quantity++;
        }
      }

      book.quantity--;
      console.log(book.quantity);
    },

    removeFromCart(book) {
      let index = this.cart.items.findIndex((item) => item.book.id === book.id);

      if (index !== -1) {
        this.cart.items.splice(index, 1);
      } else {
        console.error(`Book not found in the cart: ${book.id}`);
      }
    },

    formatCurrency(value) {
      return Intl.NumberFormat("en-EG", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(value);
    },

    decreasequantity(item) {
      item.quantity--;

      if (item.quantity === 0) {
        const index = this.cart.items.findIndex(
          (iitem) => iitem.book.id === item.book.id
        );
        this.cart.items.splice(index, 1);
      }

      item.book.quantity++;
      console.log(item.quantity, item.book.quantity);
    },

    increasequantity(item) {
      if (item.book.quantity > 0) {
        item.quantity++;
        item.book.quantity--;
        console.log(item.quantity, item.book.quantity);
      }
    },

    gettotalprice() {
      let totalprice = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalprice +=
          this.cart.items[i].book.price * this.cart.items[i].quantity;
      }
      return totalprice;
    },
  },
});
