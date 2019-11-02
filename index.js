var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  newCat =[];
  newCat.push(name);
  
  return(kittens.concat(newCat));
  
}