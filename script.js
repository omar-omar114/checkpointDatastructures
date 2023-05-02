/**** Checkpoint Introduction to Data Structures and Procedural programming****/

var array1= [3,1,7,9];
var array2= [2,4,1,9,3];


var array3= array1.filter((item) => array2.indexOf(item) === -1);
var array4= array2.filter((item) => array1.indexOf(item) === -1);


var array5 = [...array3, ...array4];
var sum=0;

for(var i=0; i< array5.length; i++){
      sum+=array5[i];
}