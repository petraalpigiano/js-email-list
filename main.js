// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const emailListEl = document.getElementById("email-list");
const emailList = [];

for (let i = 0; i < 10; i++) {
  axios
    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => {
      emailList.push(response.data.response);
      let emails = ``;
      for (let i = 0; i < emailList.length; i++) {
        const currentEmail = emailList[i];
        emails += `<li class="list-group-item text-center">${currentEmail}</li>`;
      }
      emailListEl.innerHTML = emails;
    });
}
console.log(emailList);
