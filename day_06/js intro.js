// coercion to number : parseInt, Number, unary, +
// coercion to string : toString

// var x = 10
// var y = 10
// if(x==y)  this will compare value  
// if(x===y) this will compare typeof

// Array methods
//accessing elements
/*
console.log(a1.concat(b1))     //returns array
console.log(a1.join(''))      //returns string
console.log(a1.slice(1,4))   //returns array
console.log(a1.indexOf(number))     //return index position
*/


/*
//1
console.log(typeof('w3school'))
console.log(typeof([1,2,3,[4,0]))
*/

/*
//2
array_clone = [1, 2, 4, 0]
array_clone.slice()

array_clone = [1, 2, [4, 0]]
array_clone.slice()
*/

/*
//3
var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};
*/


/*
//4
console.log(myColor.join(','))
console.log(myColor.join('+'))
*/

/*
//5
function count(arr){
    var item
    maxcount = 1
    count = 0
    for(var i=0; i<= arr1.length; i++){
        for(var j=i; j<= arr1.length; j++){
            if(arr1[i] == arr1[j]){
                count++
            }
            if(maxcount<count){
                maxcount = count
                item = arr1[i] 
            }
        }
        count =
    }
}
*/