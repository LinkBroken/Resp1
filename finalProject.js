// Given code
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
const getPrices= (taxBoolean) => {
    for (var i of dishData){
        var finalPrice;
        if (taxBoolean == true){
            taxBoolean * i
        }
          else if(taxBoolean == false){
            finalPrice = i
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!")
            return "(to "jump out" of the further function execution)"
        }
        console.log("Dish:", i , "Price: $", finalPrice)
    }
}

// Implement getDiscount()
const getDiscount = (taxBoolean, guests) => {
    getPrices(taxBoolean)
    if (typeOf(guests) == number){
        if (guests > 0 and guests < 30){
            var discount = 0
            if (guests < 5){
                discount = 5
            }
              else if(guests >= 5){
                  discount = 10
              }
            else {
                console.log('The second argument must be a number between 0 and 30')

            }
        }
    }
}

// Call getDiscount()
getDiscount(true, 2)
getDiscount(false, 10)
getDiscount()
getDiscount(40)