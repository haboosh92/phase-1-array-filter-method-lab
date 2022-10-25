// Code your solution here
//const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];


function findMatching(arr , str) {
    return  arr.filter((driver)=>{
        return driver.toLowerCase() === str.toLowerCase();  
    })
}

function fuzzyMatch(arr , letter) {
    return arr.filter((driver)=>{
        return driver.startsWith(letter);
    })
}

function matchName(arr , str) {
    return arr.filter((driver)=>{
      if(driver.name === str){
        return driver.name;
      }
    })
}
