// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const emailList = [];
for (let i = 0; i < 10; i++) {
  axios
    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => {
      emailList.push(response.data.response);
    });
}
console.log(emailList);

// 1° creo la lista su HTML con bootstrap
// 2° copio la struttura e la cancello da HTML
// 3° document.getelemetnbyID ("ul")
// 4° ul.innerHTML e metto il pezzo di struttura con solo un item <li>
// 5° nella <li> metto una variabile di appoggio vuota
// 6° ogni email in pratica viene stampata come elemento di una lista perche riassengno la variabile ed aggiungo un pezzo di lista
// 7° quindi mi serve un for o uso quello di sopra mettendolo dentro una funzione
