var singer = "Ella Fitzgerald";
var bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";
// assignability = capacidade de atribuicao - verifica se se um valor pode ser fornecido a uma chamada de funcao ou a uma variavel. verifica se o valor atribuivel ao tipo esperado para oqual ele e' passado
var firstName = "Whitney";
// firstName.length();
console.log(firstName.length);
firstName = "Carole";
console.log(firstName);
firstName = "Joan";
console.log(firstName);
var lastName = "King";
// lastName = true;
// evolving any - invalida parcialmente a finalidade de verificacao de tipos do TypeScript
var rocker; // type any
rocker = "Joan Jett";
rocker.toUpperCase();
console.log(rocker);
rocker = 19.58;
rocker.toPrecision(1);
console.log(rocker);
// rocker.toUpperCase();
// type annotation - nao afetam o codigo de runtime e nao sao sintaxe js valida, so existem para o typescript
var rocker2;
rocker = "Joan Jett";
