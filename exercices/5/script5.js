function supprimerDoublons(tableau) {
    const uniqueArray = [];
    for (let i = 0; i < tableau.length; i++) {
      if (!uniqueArray.includes(tableau[i])) {
        uniqueArray.push(tableau[i]); // Ajoute l'élément s'il n'est pas déjà présent
      }
    }
    return uniqueArray;
  }
  
  // Exemple d'utilisation
  const tableau = [1, 2, 3, 3, 3, 4, 5, 5];
  const resultat = supprimerDoublons(tableau);
  console.log(resultat); // [1, 2, 3, 4, 5]
  