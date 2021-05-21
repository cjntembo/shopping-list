

/* Grocery Run
You open your refrigerator on Saturday morning and are immediately forlorn when you stare at the largely empty shelves. You need to make a run to the supermarket.

Setup
cd ~/workspace
mkdir shopping-list
cd shopping-list
touch shopping.js

code .


High Priority Items
Open shopping.js and declare a variable whose value will be an array filled with objects. Each object will represent an item that you first think of when you go to the store.

Common items are:

Milk
Eggs
Pizza rolls
A protein
Your favorite fruit
Sandwich buns
Condiments
You can create as many objects as you like. Make sure each one has a primary key and a price property. The rest of the properties are completely up to you.

When you've added the objects to your array and use console.log() to output the array to the terminal. Run your code and make sure so errors are displayed. */

const shoppingLists = [
  {
    id: 1,
    item: "Milk",
    price: 1.97,
    quantity: 1
  },
  {
    id: 2,
    item: "Eggs",
    price: 1.48,
    quantity: 2
  },
  {
    id: 3,
    item: "Pizza ROlls",
    price: 2.87,
    quantity: 2
  },
  {
    id: 4,
    item: "Beef",
    price: 12.45,
    quantity: 3
  },
  {
    id: 5,
    item: "Mangos",
    price: 5.45,
    quantity: 1
  },
  {
    id: 6,
    item: "Brioche Bread",
    price: 3.47,
    quantity: 2
  },
  {
    id: 7,
    item: "Mustard",
    price: .97,
    quantity: 1
  }
]

// console.log(shoppingLists)


/* Now That I Think About It...
After you wrote the initial, high-priority list of items you need to buy at the supermarket, you realize that there are lower-priority ones, and then there downright "wants".

You realize that the list might get very long, and you don't want to keep track of the primary key for each object that gets added to your shopping list.

Write a function named addToShoppingList that will add a new grocery item to your array. The function should add an id property to the grocery object that you provide as an argument when the function is invoked.

Also add a dateCreated property to the object whose value will be the current date and time.

Use your function to add 5 new items to your shopping list with a variety of prices ranging from $4 to $16. */

const addToShoppingList = (shoppingList) => {

  shoppingList.id = getNextId()
  shoppingList.date = creatDate()


  shoppingLists.push(shoppingList)
  
}

const getNextId = () =>{

  // get index of last item in array
  const lastIndex = shoppingLists.length -1  
  // get the last object in the array 
  const currentshoppingList = shoppingLists[lastIndex]
  // get id property value of last toy
  const maxID = currentshoppingList.id

  // increase the current max id by 1
  const idForNewShoppingList = maxID + 1

  return idForNewShoppingList

}

const creatDate = () => {
  let today = new Date()
  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  // console.log(today);
  
  return today
}


const lowPriority1 =   {
    item: "Cheese",
    price: 5.25,
    quantity: 2
  }

  const lowPriority2 = {
    item: "Hydrponic Lettuce",
    price: 4.01,
    quantity: 1
  }

  lowPriority3 = {
    item: "Yogurt",
    price: 6.96,
    quantity: 3
  }

const want1 = {
    item: "Cake",
    price: 15.98,
    quantity: 1
  }

const want2 = {
    item: "CHOCOLATE",
    price: 5.98,
    quantity: 5
  }



addToShoppingList (lowPriority1)
addToShoppingList (lowPriority2)
addToShoppingList (lowPriority3)
addToShoppingList (want1)
addToShoppingList (want2)

// the below coding is to push two arrays together
// shoppingList.push.apply(shoppingList, lowPriority, wants)

//  console.log (shoppingLists)

 /* Filtering Your Grocery List
Now that you have a comprehensive grocery list, and are using your glorious function to add new items to it, it may be time to reevaluate some of the more expensive items on your list.

Show Only High Ticket Items
Use a for..of loop and an if() condition inside it to only display the items that cost more than $8 (if you don't have any items currently more expensive than that, go change a couple).

Now that you can display the more expensive items on your list, you can do some soul searching and think about if you really need four boxes of coffee cake snacks. */

groceryToFind = 8.00

const findExpensiveGrocerys = () => {
  const expensiveGrocerys = []

  for (const shoppingList of shoppingLists) {
    if(shoppingList.price >= groceryToFind) {
      expensiveGrocerys.push(shoppingList)
    }
  }
  console.log(expensiveGrocerys);
  return expensiveGrocerys
}
console.log(findExpensiveGrocerys())
