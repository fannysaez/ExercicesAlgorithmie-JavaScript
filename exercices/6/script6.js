let n = 1;  // Remplace 1 par le nombre que tu veux
function tableauMultiplication(n){
    for (let i = 1; i <= 12; i++) { // La boucle parcourt les valeurs de 1 à 12.
        console.log(`${n} x ${i} = ${n * i}`); //Affiche chaque multiplication dans le format demandé.
      }
}

//exemple
tableauMultiplication(1);
//${n} → affiche la valeur de n (ici 2)
// ${i} → affiche la valeur de i (ici 3)
// ${n * i} → calcule le produit de n et i (ici 2 * 3 = 6)