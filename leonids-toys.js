   
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