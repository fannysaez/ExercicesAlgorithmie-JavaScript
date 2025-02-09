function augmenterPrix(prix, pourcentage) {
    // Calculer le montant de l'augmentation
    const augmentation = prix * (pourcentage / 100);
    
    // Ajouter l'augmentation au prix initial
    const prixAugmente = prix + augmentation;
    
    // Retourner le prix augmenté
    return prixAugmente;
}

// Exemple d'utilisation
const prixInitial = 100;
const pourcentageAugmentation = 20;
const nouveauPrix = augmenterPrix(prixInitial, pourcentageAugmentation);

console.log(`Le prix augmenté est de : ${nouveauPrix}`);