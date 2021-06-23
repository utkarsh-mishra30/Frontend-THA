// Object.create
// Getters and setters
/*
var car = {
    name: 'Lambo'
    get getCarPrice(){
        console.log('Car price is 3 crore')
    },
    set setCarName(carname){
        this.name = carname;
    },
    drive: function(item){
        console.log('I will drive' this.name, item);
    }
}
*/

//Object.assign and spread operator
//Object.assign(obj2, obj1)
// arr = [1,2,3,4,5]
// arr2 = [...arr]   spread operator used to clone objects

//Rest Parameters
/*
function sumOfItems(...c){
    console.log(c)
}
console.log(sumOfItems(1,2,3,4,5))    //It will print full array.Elements will be assigned to c

function sumOfItems(a,b, ...c){
    console.log(c)
}
console.log(sumOfItems(1,2,3,4,5))    //It will print [3,4,5] as we want c as output. First two elements will be assigned to a and b.
*/

//Arguments objects
/*
function someFunction(a,b,c){
    console.log(arguments)
}
someFunction(10, 23,44,55)
It will output arguments as object. It will return key value pair of index and position. 
*/