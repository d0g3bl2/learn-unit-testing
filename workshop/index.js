// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// function makeUrl(name) {
//   return "https://pokeapi.co/api/v2/" + name;
// }

// *******************

function searchParamsToObject (url) {
 const objInstance =  new URLSearchParams(url);
 const obj = Object.fromEntries(objInstance); 
 console.log(Array.isArray(obj))//false
 console.log(objInstance instanceof URLSearchParams)//true
 console.log(objInstance instanceof Object)//true
 console.log(obj);
 console.log(Object.entries(obj));
 console.log(typeof(obj));

}

searchParamsToObject("name=oliver&email=hello@oliverjam.es");

