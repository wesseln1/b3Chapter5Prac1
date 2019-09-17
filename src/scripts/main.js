// Use the filter method to get all the big spenders in the main array into a new one.

// Array to contain all the big spenders
let allOrders = []
const bigSpenders = businesses.filter(business => {
    business.orders.forEach(order => {
        allOrders.push(order)
        return allOrders
    }); 
})

bigSpenders.push(allOrders)
// bigSpenders.push(order)
    // bigSpenders.push(order)

console.log(bigSpenders);