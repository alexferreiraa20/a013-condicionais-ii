let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch(nacionalidade){
    case "brasileira" : console.log("Cervejinha Brazuca")
    break;
    case "argentina" : console.log("És tú hermano!!")
    break;
    case "uruguaia" : console.log("Manda carne do churras")
    break;
    case "chilena" : console.log("Chei dos ouro ein")
    break;
    case "colombiana" : console.log("Chocolatim de café móh bom")
    break;
    default :
    console.log("Nacionalidade não encontrada meu bom, tenta novamente")
}











