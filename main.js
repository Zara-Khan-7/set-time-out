console.log("I");
setTimeout(() => {
    console.log("Eat");
}, 1000);
console.log("Ice-Cream");
console.log("I");
setTimeout(() => {
    console.log("Eat");
}, 1000);
setTimeout(() => {
    console.log("Icecream");
}, 2000);
// MAKING A FUNCTION
function orderPizza(prepareCb) {
    console.log("Placing Order");
    setTimeout(() => {
        console.log("Order Placed");
        prepareCb();
    }, 3000);
}
function preparePizza(deliveryCb) {
    console.log("Preparing Pizza");
    setTimeout(() => {
        console.log("Pizza is being Prepared!🍕");
        deliveryCb();
    }, 3000);
}
function delivery() {
    setTimeout(() => {
        console.log("Pizza is delivered!🍕");
    }, 3000);
}
orderPizzaProm().then(preparePizzaProm).then(deliverypizzaProm);
// PROMISE BANANY KA TAREEKA
function orderPizzaProm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order Placed");
            resolve("");
        }, 3000);
    });
}
function preparePizzaProm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is being Prepared!🍕");
            resolve("");
        }, 3000);
    });
}
function deliverypizzaProm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pizza is delivered!🍕");
        }, 3000);
    });
}
let result = await orderPizzaProm();
let result1 = await preparePizzaProm();
let result2 = await deliverypizzaProm();
export {};
// // promises k andarcode chain mei chalta hai
// // resolve ko jb b call kreingy to .then chalega
// // resolve ka function hai (.then)
