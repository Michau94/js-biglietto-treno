
console.log('ok', Vue);

const root = new Vue({
    el: '#freccia',
    data: {
        priceKm: 0.21,
        distance: null,
        age: null,
        initPrice: null,
        discount: null,
        price: null,

    },
    methods: {
        calculatePrice() {
            if (isNaN(this.age) || isNaN(this.distance) || this.distance < 1 || this.age < 1) {
                alert('Per favore inserire solo numeri e riprovare')
            } else {


                // total price

                this.initPrice = this.distance * this.priceKm;
                console.log('Initial cost: ', this.initPrice);

                // discont system


                if (this.age < 18) {
                    this.discount = (this.initPrice * (20 / 100)).toFixed(2);
                    this.price = (this.initPrice - this.discount).toFixed(2);
                    console.log('Underage Discount: -20% ', discount);
                    console.log('Total Price: ', this.price);
                }
                else if (this.age > 65) {
                    this.discount = (this.initPrice * (40 / 100)).toFixed(2);
                    this.price = (this.initPrice - this.discount).toFixed(2);
                    console.log('Senior Discount -40%', discount);
                    console.log('Total Price: ', this.price);

                }
                else {
                    this.price = this.initPrice.toFixed(2);
                    this.discount = 0;
                    console.log('No Discount!');
                    console.log('Total Price: ', this.price);
                }
            }
        }
    }
});