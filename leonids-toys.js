   
   const toys =  [
    {
       id: 1,
       name: "He-Man",
       maker: "Super7",
       price: 34.69,
    },
    {
       id: 2,
       name: "Lion-O",
       maker: "LJN",
       price: 80.00,
    },
    {
       id: 3,
       name: "PlayStation 5",
       maker: "Sony",
       price: 499.99
    }

   ]
    
 const xbox = {
       id: 4,
       name: "X-Box: Series X",
       maker: "Microsoft",
       price: 499.99
    }
    
 const wagon = {
        id: 5,
        name: "Radio Flyer Classic Red Wagon",
        maker: "Radio Flyer",
        price: 89.99
    }
    toys.push(xbox)
    toys.push(wagon)
    
    for (toy of toys) {
        console.log(`Name: ${toy.name}, Maker: ${toy.maker}, Price: $${toy.price}`)
    }
    for (toy of toys) {
        console.log(`We have ${toy.name}s from ${toy.maker} in stock. It's available for only $${toy.price}!`)
    }

    for (const toy of toys) {
        toy.price = Math.ceil(toy.price * .05 + toy.price).toFixed(2)
        console.log(`The ${toy.maker} ${toy.name} has increased in price, it cost ${toy.price} dollars.`) 
    }

    const toyToFind = 3;

    for (toy of toys) {
        if (toy.id === toyToFind) {
            console.log(`The item you are looking for is the ${toy.name} made by ${toy.maker}. It is priced at ${toy.price}.`)
        }
    }

    const addToyToInventory = (toyToAdd) => {
        const lastIndex = toys.length -1
        const currentLastToy = toys[lastIndex]
        const maxId = currentLastToy.id
        const idForNewToy = maxId + 1
        toyToAdd.id = idForNewToy
        toys.push(toyToAdd)
    }

    const catan = {
        name: "Catan",
        maker: "Catan Studio",
        price: 41.27
    }

     addToyToInventory(catan)

    console.log(toys)
    
    
    
    
    
    const removeProduct = (toyId) => {
        for (toy of toys) {
            if (toyId === toy.id) {
              const isToyIndex = (toyObj) => toyObj.id === toyId;
            
              toys.splice(toys.findIndex(isToyIndex), 1); 
              console.log(toys)
               console.log(`Item: "${toy.name}", Id: "${toy.id}" has been removed.`)
               
              

            }
           }
          
               
     }
     
        
    
    removeProduct(4)
    
    console.log(toys)
    

    const currentInventory = [
        "Muscle Man",
        "Dora the Scientist",
        "Princess Sparkles",
        "Perry Scope",
        "Explorer Backpack",
        "Space Scout Suit",
        "Geology Mineral Dig Kit",
        "Perry Scope"
    ]
    
    const sellPerryScope = () => {
    
        for (const toy of currentInventory) {
            let availableForPurchase = false
    
            if (toy === "Perry Scope") {
                availableForPurchase = true
            }
        
    
        if (availableForPurchase) {
            console.log("Enjoy your new Perry Scope")
        } else {
            console.log("Beat it loser!")
        }
    }
    }
    
    // sellPerryScope()