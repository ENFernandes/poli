var poli = ["ana", "roma me tem amor", "sopapos", 'teste', 'coisa'];
var cont=0;
var poss;
var fL
var sL
var aux
var maxP
var minP = 0;

function verify(poss) {
    if(cont==0) {
    aux = poli[poss];
    maxP = aux.length-1;
    cont++;
    }
    fL = aux.charAt(minP)
    sL = aux.charAt(maxP);
    if (maxP-minP <= 2) {
        console.log("boa");
        console.log(`Primeira: ${fL}, segunda: ${sL}`);
        console.log(aux);
    }
    else {
        if(fL == sL) {
            console.log(`Primeira: ${fL}, segunda: ${sL}`);
            console.log(aux);
            maxP=maxP-1;
            minP=minP+1;
            verify(poss);
        }
        else
        {
            console.log("Boa na mesma mas não é o mesmos Boa ok?");
            
        }
    } 
}
verify(2);