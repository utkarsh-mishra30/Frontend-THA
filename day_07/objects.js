// In JS every variable is considered as Object.

/*
//1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 }
console.log(Object.keys(student))
*/

/*
//2
var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);
*/

/*
//3
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student).length)
*/

/*
//4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
if(library[i].readingStatus){
    console.log("Already read " + title + "by "+ author);
}
else{
    console.log("You have to read "+ title + "by "+ author);
}
*/

/*
//5
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function() {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));
*/