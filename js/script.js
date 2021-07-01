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

var age = parseInt(prompt('Quanti anni hai?', '18'));


//pseido validazione

if (isNaN(age) && (isNaN(distance)) || (distance < 1) || (age < 1)) {
    alert('Per favore inserire solo numeri e riprovare')
    document.getElementById('greeting').innerHTML = 'Per favore riprovare! Altrimenti non si parte!'
} else {
    alert('Dati inseriti correttamente')

    // total price

    var initPrice = distance * priceKm;
    console.log('Initial cost: ', initPrice);

    // discont system

    var discount;
    var price;


    if (age < 18) {
        discount = initPrice * (20 / 100);
        price = initPrice - discount;
        console.log('Underage Discount: -20% ', discount);
        console.log('Total Price: ', price);
    }
    else if (age > 65) {
        discount = initPrice * (40 / 100);
        price = initPrice - discount;
        console.log('Senior Discount -40%', discount);
        console.log('Total Price: ', price);

    }
    else {
        price = initPrice;
        discount = 0;
        console.log('No Discount!');
        console.log('Total Price: ', price);
    }

    
    //print price for journey
    
    document.getElementById('price').innerHTML = initPrice.toFixed(2);
    document.getElementById('discount').innerHTML = discount.toFixed(2);
    document.getElementById('totalprice').innerHTML = price.toFixed(2);
    
    document.getElementById('greeting').innerHTML = 'In carrozzaaaaa! Michau vi augura buon viaggio!' 
}