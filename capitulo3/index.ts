// EITHER OR - UNION TYPE

let mathematician = Math.random() > 0.5
    ? undefined
    : "Mark Goldberg";

let thinker: string | null = null;
if (Math.random() > 0.5) {
    thinker = "Susane Langer";
}

let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
physicist.toString();
// physicist.toUpperCase();
// physicist.toFixed();

// NARROWING

// type guard - verificacao logica utilizada para estreitamento de tipos

// ESTREITAMENTO POR ATRIBUICAO

let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // ok - string
// admiral.toFixed();

let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase(); // ok - string
// inventor.toFixed();

// VERIFICACAO CONDICIONAL

// type of scientist: number | string
let scientist = Math.random() > 0.5
    ? "Rosalind Franklin"
    : 51;

if (scientist === "Rosalind Franklin") {
    scientist.toUpperCase(); // ok
}

// scientist.toUpperCase();

// VERIFICACOES COM TYPEOF

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (typeof researcher === "string") {
    researcher.toUpperCase(); // ok - string
}

if (!(typeof researcher === "string")) {
    researcher.toFixed(); // ok - number
} else {
    researcher.toUpperCase(); // ok - string
}

typeof researcher === "string"
    ? researcher.toUpperCase()
    : researcher.toFixed();

// TIPOS LITERAIS - o tipo de valor que eh sabiadamente um valor especifico de um primitivo, em vez de qualquer um dos valores desse primitivo

// const x let

const philosopher = "Hypatia"; // type "Hypatia"
let philosopher2 = "Hypatia" // type string

// tipo primitivo eh como uma uniao de todos os valores literais correspondentes a ele possiveis. conjunto de todos valores.
// as anotacoes de tipos uniao podem combinar literais e primitivos. ex:

let lifespan: number | "ongoing" | "uncertain";

lifespan = 89; // ok - number
lifespan = "ongoing"; // ok - "ongoing"
// lifespan = true;

// CAPACIDADE DE ATRIBUICAO DE LITERAIS

let specificallyAda: "Ada";
specificallyAda = "Ada"; // ok

// specificallyAda = "Byon"

let someString = "";
// specificallyAda = someString;

someString = ":)";

// VERIFICACAO ESTRITA DE NULOS

let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;

// nameMaybe.toLowerCase();

// ESTRITAMENTO POR VERDADES ? e &&

let geneticist = Math.random() > 0.5
    ? "Barbara McClintock"
    : undefined // sempre falso

if (geneticist) {
    geneticist.toUpperCase(); // ok - string 
}

// geneticist.toUpperCase();

geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase();

// VARIAVEIS SEM VALORES INICIAIS

let mathematician2: string;

// mathematician2?.length;
mathematician2 = "Mark Goldberg";
mathematician2.length;

// ALIASES DE TIPO

/* let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined; */

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

// ALIASES DE TIPO NAO SAO JAVASCRIPT - nao sao compilados para a saida JS. Existem apenas no sistema de tipos do TS. so existem como uma estrutura do tempo de desenvolvimento.

// COMBINANDO ALIASES DE TIPO

type Id = number | string;
type IdMaybe = Id | undefined | null;