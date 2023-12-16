let singer = "Ella Fitzgerald";
let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

// assignability = capacidade de atribuicao - verifica se se um valor pode ser fornecido a uma chamada de funcao ou a uma variavel. verifica se o valor atribuivel ao tipo esperado para oqual ele e' passado

let firstName = "Whitney";
// firstName.length();

console.log(firstName.length);
firstName = "Carole";
console.log(firstName);
firstName = "Joan";
console.log(firstName);

let lastName = "King";
// lastName = true;

// evolving any - invalida parcialmente a finalidade de verificacao de tipos do TypeScript

let rocker; // type any

rocker = "Joan Jett";
rocker.toUpperCase();
console.log(rocker);

rocker = 19.58;
rocker.toPrecision(1);
console.log(rocker);

// rocker.toUpperCase();

// type annotation - nao afetam o codigo de runtime e nao sao sintaxe js valida, so existem para o typescript

let rocker2: string;
rocker = "Joan Jett";
// rocker2 = 19.58;

let rapper = "Queen Latifah";
rapper.length;
// rapper.push("!");

let cher = {
    firstName: "Cherilyn",
    lastName: "Sarkisian",
}
// cher.middleName;