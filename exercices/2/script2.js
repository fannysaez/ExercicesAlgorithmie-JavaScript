function calcTotalTTC(prixHTUnitaire, quantite) {
    const tauxTVA = 0.20; // Taux de TVA à 20%
    // Calcul du total HT
    const totalHT = prixHTUnitaire * quantite; //pour obtenir le totalHT, j'ai le prixHT unitaire multiplié par la quantité ce qui donne le résultat
    // Calcul du total TTC
    const totalTTC = totalHT * (1 + tauxTVA);
    //(1 + tauxTVA) :
    // Cela signifie ajouter 1 au taux de TVA pour obtenir un facteur multiplicatif.
    // Si la TVA est de 20 % (0.20), on calcule : 1+ 0.20 = 1.20
    
     // Calcul de la TVA
    const montantTVA = totalHT * tauxTVA;
    return totalTTC.toFixed(2); // Retourne le total TTC arrondi à 2 décimales
  }
  
  // Exemple d'utilisation
  const prixHTUnitaire = 50; // Prix HT unitaire de 50€
  const quantite = 3; // 3 produits
  console.log("Le total TTC est de : " + calcTotalTTC(prixHTUnitaire, quantite) + " €");
  