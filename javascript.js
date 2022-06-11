//creation des variables
var BITCOIN, ETHERUM, SOLANA, POLCADOT, TEZOS;

// creation des variable resultats

var BITCOIN_RESULTAT , ETHERUM_RESULTAT , SOLANA_RESULTAT , POLCADOT_RESULTAT , TEZOS_RESULTAT ;

//atribution des valeurs
BITCOIN=17674407;
ETHERUM=1086056;
SOLANA=25720211;
POLCADOT=5737;
TEZOS=1371;

// recuperation du button , montant

var button , montant , valeur; 

button = document.getElementById('convertisseur');
montant = document.getElementById('montant');



// detection du cliquage

button.onclick = function(){
    valeur = Number(montant.value);

    /* CONVERTION DES VALEURS SAISIRS */
   
    // BITCOIN 
    BITCOIN_RESULTAT = valeur / BITCOIN;

    // ETHERUM
    ETHERUM_RESULTAT= valeur / ETHERUM; 

    //SOLANA
    SOLANA_RESULTAT= valeur / SOLANA;

    //POLCADOT
    POLCADOT_RESULTAT= valeur / POLCADOT;

    //TEZOS
    TEZOS_RESULTAT= valeur / TEZOS;

    /* AFFICHAGE DES VALEURS */

    var montant_show ;

    montant_show = document.getElementsByClassName('montant');
    
    for (const element of montant_show) {
        element.innerHTML=valeur;
    }

    /* AFFICHAGE DES RESULTATS */

    // BITCOIN
    document.getElementById('btc').innerHTML = BITCOIN_RESULTAT.toPrecision(7);

    //ETHERUM
    document.getElementById('eth').innerHTML =ETHERUM_RESULTAT.toPrecision(7);

    //SOLANA
    document.getElementById('sol').innerHTML=SOLANA_RESULTAT.toPrecision(7);

    //POLCADOT
    document.getElementById('dot').innerHTML=POLCADOT_RESULTAT.toPrecision(7);

    //TEZOS
     document.getElementById('xtz').innerHTML=TEZOS_RESULTAT.toPrecision(7);

    

    
} 