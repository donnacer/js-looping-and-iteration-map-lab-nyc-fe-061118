// Code your solution in this file.

// function lowerCaseDrivers(){
//   return drivers.map(driver)
// }


function createNameObject(name){
  let nameArray =name.split(" ")
  let firstName=nameArray[0]
  let lastName= nameArray[1]


  return {firstName:firstName, lastName:lastName}
}  
  function nameToAttributes(nameList){
    return nameList.map(createNameObject)
    
    
  }
  