// TODO el manejo del id para los personajes

// .hash traigo una fraccion de la url
// .slice(1) corto la url y muesto a partir del primer elemento
// .toLocaleLowerCase convierte la cadena a minuscula
// .split separa la cedena de un array y elimina la / para que genere un espacio vacio

const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;

