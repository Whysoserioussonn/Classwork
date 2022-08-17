// Exercise 1
class Governor
{

    static name = 'Chief';
    static state = 'New Jersey';
    static country = 'USA';
    static declareEmergency() {
      return 'Emergency happening ,stay indoors';
    }
    static RunforReelection()
    {
        return 'Hit the Campaign trail'
    }
    
    }
    
    console.log(Governor.name);
    
    console.log(Governor.declareEmergency());
    
    console.log(Governor.state);
    
    console.log(Governor.RunforReelection());
    

    //class person
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        working() {
            return this.name + " is working, ";
        }
        eating() {
            return this.name + " is eating";
        }
        sleeping() {
            return this.name + " is sleeping";
        }
    }
    class Postalworker extends Person {
        constructor(name, age) {
            super(name, age);
        }
        driving() {
            return this.name +
              " is driving mail truck";
        }
        working() {
            return super.working() + ' delivering mail.';
        }
    }
    class Chief extends Person {
        constructor(name, age) {
            super(name, age);
        }
        working() {
            return this.name +
              " Training new recruits";
        }
        takingabreak() {
            return super.working() + ' on his tan at a tanning booth';
        }
    }