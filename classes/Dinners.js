class Dinner
{
    constructor(appetizer, entree, dessert )
    {

    this.appetizer = appetizer
    this.entree = entree
    this.dessert = dessert
    }

  }

class Chef //factory object to create new dinners
{
    newDinner(appetizer, entree, dessert)
    {
        return new Dinner(appetizer, entree, dessert)  
    }
       
}

const chef = new Chef();
chef.newDinner()

const dinner1 = new Dinner('friess','chicken','cake') 
const dinner2 = new Dinner('sdfsa','dsfsadf','dsfsadf')

console.log(dinner1)
console.log(dinner2)