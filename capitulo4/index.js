// tipos objeto
var poet = {
    born: 1932,
    name: "Mary Oliver"
};
poet['born'];
poet.name;
// poet.end
// declaracao de tipos de objeto
var poetLater;
poetLater = {
    born: 1932,
    name: "Mary Oliver"
};
var poetLater2;
poetLater2 = {
    born: 1935,
    name: "Sara Teasdale"
};
var hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
var withFirstName = hasBoth;
var withLastName = hasBoth;
console.log(withFirstName);
console.log(withLastName);
