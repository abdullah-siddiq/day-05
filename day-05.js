//(01)  https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//Class - Movie

class Movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const m1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const m2 = new Movie("Casino Royale", "Eon Productions");


console.log(m1.title);
console.log(m1.studio);
console.log(m1.rating);
console.log(m2.rating);



//(02)
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
//Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
            this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var cir = new Circle(1.0,"red");
console.log(cir.radiusCircle);
cir.radiusCircle = 3.5
console.log(cir.radiusCircle);
console.log(cir.colorCircle);
cir.colorCircle = "blue";
console.log(cir.colorCircle);
console.log(cir.toString);
console.log(cir.areaCircle);
console.log(cir.circumferenceCircle);

//(03) Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        
    }
}
var p1 = new Person("nimal", "sekar", "03-07-1999" );
var p2 = new Person("mohan", "laal", "04-09-1998" );
var p3 = new Person("mohamed", "saahul", "09-10-2000");
 

console.log(p1.firstname);
console.log(p1.lastname);
console.log(p1.Dob);
 
console.log(p2.firstname);
console.log(p2.lastname);
console.log(p2.Dob);
 
console.log(p3.firstname);
console.log(p3.lastname);
console.log(p3.Dob);
 
 
//(04)write a class to calculate the Uber price.


class UberCalculator {
    constructor() {
      
      this.costPerKilometer = 15;
      
    }
 
    calculatePrice(distance_in_Kilometers) {
      
      const distanceCost = this.costPerKilometer * distance_in_Kilometers;

      return distanceCost;
    }
  }
  
  const calculator = new UberCalculator();
  const distance_in_Kilometers = 6.0;  

  const  Price  = calculator.calculatePrice(distance_in_Kilometers);
  console.log(`Estimated Uber price in LKR:  ${ Price }`);
