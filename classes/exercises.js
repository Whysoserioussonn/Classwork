// Cat class

class Cat
{
constructor(breed,furColor,age)
{
this.breed = breed;
this.furColor = furColor;
this.age = age;
this.meowing = false;
this.scratching = false;
this.attacking = false;

}
meow()
    {
        this.meowing = true;
        console.log('Meow!')
    }

scratch()
{
    this.scratching = true;
    console.log('scratches ear')
}
attackbugs()
{
    this.attacking =false;
    console.log('taps bug with paw')

}

}

const sofia = new Cat('red cat', 'orange', '4')
const garfield = new Cat('persian', 'orange', '7')

console.log(sofia, garfield)
sofia.meow()
sofia.attackbugs()
sofia.scratch()
garfield.meow()
garfield.attackbugs()
garfield.scratch()


//2) Pirate class