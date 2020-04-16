// - UNOOOO Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// - DUEEEEE Stampare a schermo attraverso il for in tutte le proprietà;
// - TREEEEE Creare un array di oggetti di studenti.
// - QUATTROOOO Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - CINQUEEEE  Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// UNOOOOOOO

var studenteUno = {
  "nome": "Gianmarco",
  "cognome": "Montanari",
  "eta": 27,
};

var studenteDue = {
  "nome": "Marco",
  "cognome": "Gandolfi",
  "eta": 22,
};

var studenteTre = {
  "nome": "Roberto",
  "cognome": "Buffa",
  "eta": 43,
};


// DUEEEEEEEEEE

for (var key in studenteUno){

  console.log(studenteUno[key]);
}

console.log("----------------------------------");



// TREEEEEEEEE

var studenti = [studenteUno, studenteDue, studenteTre];

// QUATTROOOO

for (var key in studenti){
  studenteAttuale = studenti[key];
  console.log((parseInt(key)+1) + " " + studenteAttuale.nome);
  console.log( studenteAttuale.cognome);
}
console.log("----------------------------------");

// CINQUEEEEE

var nuovoStudente = {
  "nome": prompt("inserire nuovo nome"),
  "cognome": prompt("inserire nuovo cognome"),
  "eta": parseInt(prompt("inserire nuova età")),
};

studenti.push(nuovoStudente);

console.log(studenti);
