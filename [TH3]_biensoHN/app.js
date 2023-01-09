const checkLicensePalateInHanoi = (licensePalate)=>{
    const array =['29','30','31','32'];
    for (const value of array) {
        if(licensePalate.startsWith(value)) {
            return true;
        }
    }
    return false;
}
const listLicensePalate =['29p1-1233','31p1-1234','17p3-29838','33H2-2222'];
let listLicensePalteInHaNois= [];

for (const value of listLicensePalate) {
    if (checkLicensePalateInHanoi(value)) {
        listLicensePalteInHaNois.push(value);
    }
}
console.log('bien ha noi',listLicensePalteInHaNois)