var webstore = {
    el: '#app',
    data: {

    },
    methods: {
        addToCart: function() {
            this.addToCart.push(this.product.id);
        }
    }
}