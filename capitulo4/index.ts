// tipos objeto
const poet = {
    born: 1932,
    name: "Mary Oliver"
};

poet['born']
poet.name
// poet.end

// declaracao de tipos de objeto
let poetLater: {
    born: number;
    name: string;
};

poetLater = {
    born: 1932,
    name: "Mary Oliver"
};

// poetLater = "Sappho";

// apelidos de tipos
type Poet = {
    born: number;
    name: string;
}

let poetLater2: Poet;

poetLater2 = {
    born: 1935,
    name: "Sara Teasdale"
};

// poetLater2 = "Emily Dickinson"

// tipagem estrutural
type WithFirstName = {
    firstName: string;
}

type WithLastName = {
    lastName: string;
}

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
}

let withFirstName: WithFirstName = hasBoth;

let withLastName: WithLastName = hasBoth;

console.log(withFirstName)
console.log(withLastName)