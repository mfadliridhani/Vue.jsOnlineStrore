
// var product = {
//     "name": "Bamboo Thermal Ski Coat",
//     "description": "You'll be the most environmentally",
//     "price": "99",
//     "image": "https://hplussport.com/wp-content/uploads/2016/12/"
// }

var app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2']
        }
    },

    mounted: function () {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    },

    methods: {
        addItem: function (product) {
            this.cart.push(product);
        }
    }
});