const app = Vue.createApp({
    data: () => ({
        books: books,
        isWishlistVisible: false,
        wishlist: { items: [] },
	cart: { items: [] },
    }),
    methods: {
        addOrRemoveToWishlist(book) {
            let index = this.wishlist.items.findIndex(item => item.book.id === book.id);

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
                minimumFractionDigits: 0
            }).format(value);
        }
    },
});

app.mount("#mainApp");

