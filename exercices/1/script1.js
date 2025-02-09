function calculerMoyenne (array){

    if(array.length === 0){ // Si le tableau est vide (array.lenth === 0), la fonction retourne 0 immédiatement.
        return 0;
    }
    
    //Calcul la somme des éléments du tableau
    let somme = 0; //Initialise la somme à 0 [i], une variable somme est initialisé à 0 et chaque élément est ajouté à cette somme à l'aide de la boucle for
    for (let i=0; i<array.length; i++){
        somme += array[i];
    }
    //retourner la moyenne
    return somme / array.length; //La moyenne est obtenue en divisant la somme totale par le nombre d'éléments dans le tableau (array.length).
    }
    
    //Résultat renvoyé :
    // La fonction retourne la moyenne si le tableau contient des chiffres.
    // Si le tableau est vide, elle retourne 0. :
    
    let tableau = [2, 14, 10, 18, 9.5];
    console.log(calculerMoyenne(tableau)); //Affichera la moyenne du tableau "10.7"
    //Si la note n'est pas présente dans le tableau (vide), fonction (retourne) 0
    let tableauVide = [];
    console.log(calculerMoyenne(tableauVide)); // Affichera : 0
    