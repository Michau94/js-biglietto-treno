/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

/* STEP
1 - prompt per richiedere età e km da percorrere. (valori salvati in var).

2- calcolo del prezzo totale effettuando km inseriti * prezzo a km 0.21;

3- condizionale che sottrae al prezzo totale 20% se minorenni e 40% se over 65. (utilizzare var età fornito da utente).

4-stampa del risultato con sole 2 cifre decimali. (da cercare.)

5- validazione prompt (eventualmente).

*/

//km request
var priceKm = 0.21;
var distance = parseInt(prompt('Che distanza (km) percorrerai?', '10'));

// age request

var age = parseInt(prompt('Quanti anni hai?'));

// total price

var totalPrice = distance * priceKm; 
console.log( 'Initial cost: ', totalPrice);

// discont system

var discount;

if (age < 18){
    discount = totalPrice * (20 / 100);
    totalPrice = totalPrice - discount; 
    console.log('Underage Discount: -20% ', discount);
    console.log('Total Price: ', totalPrice);
}
else if ( age > 65){
    discount = totalPrice * (40 / 100);
    totalPrice = totalPrice - discount; 
    console.log('Senior Discount -40%', discount);
    console.log('Total Price: ', totalPrice);

} 
else{
    totalPrice = totalPrice;
    console.log('No Discount!');
    console.log('Total Price: ', totalPrice);
}


