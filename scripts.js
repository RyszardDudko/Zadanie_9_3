var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var txtCharsAfter = txt.replace('Velociraptor', 'Dinosaur');

var partOfTxt = txt.slice(0, 73);
console.log(partOfTxt);