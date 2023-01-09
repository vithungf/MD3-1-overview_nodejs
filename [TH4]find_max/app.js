const array=[2,3,6,456,2,76,1000,123,888];
let max = array[0];
for(const value of array){
    if(value>max){
        max = value;
    }
}
console.log(max);