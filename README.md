# Voici un site créé en HTML, CSS et JS par moi-même et mon collaborateur [Lilian Brosset](https://github.com/Redgakill)
[Site Web](https://theotimalberteau.github.io/formation-html/)


# COURS HTML/CSS/JS

## 1 HTML
### a. Structure de base d'une page html : 

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Première Page</title>
</head>
<body>
    <h1>Bienvenue sur mon site !</h1>
    <p>Ceci est un paragraphe.</p>
    <a href="https://example.com">Lien vers un site</a>
    <img src="image.jpg" alt="Description de l'image">
</body>
</html>
```

### b. Balises essentielles :

|Balise|Description|
|---|---|
|```<h1>``` à ```<h6>```|Titres (h1 = plus grand, h6 = plus petit)|
|```<p>```|Paragraphe|
|```<a href="">```|Lien hypertexte|
|```<img src="" alt="">```|Image (alt pour le texte de remplacement)|
|```<ul>```,```<ol>```,```<li>```|Listes non ordonnées et ordonnées|
|```<table>```,```<tr>```,```<td>```|Tableaux|
|```<form>```,```<input>```|Formulaires|
|```<div>```|Conteneur générique|
|```<span>```|Texte inline sans signification sémantique|


## 2 CSS

### Trois façons d'ajouter du CSS

#### a. CSS en ligne (éviter si possible)
```html
<p style="color: blue;">Texte en bleu</p>
```

#### b. CSS interne (dans style du HTML)
```html
<style>
    p { color: blue; }
</style>
```

#### c. CSS externe (fichier .css, recommandé)
```css
p {
    color: blue;
}
```

### Sélecteurs CSS de base : 

|Sélecteur|Exemple|Description|
|---|---|---|
|```*```|```* {}```|Sélectionne tout|
|```h1```|```h1 {}```|Tous les ```<h1>```|
|```.classe```|```.rouge {}```|Tous les éléments avec class="rouge"|
|```#id```|```#unique {}```|Élément avec id="unique"|
|```element1 element2```|```div p {}```|Tous les ```<p>``` dans un div ```<div>```|
|```element 1, element 2```|```h1, h2 {}```|Tous les ```<h1>``` et les ```<h2>```|

### Propriétés CSS essentielles : 
```css
/* Couleur et arrière-plan */
color: red; /* Texte en rouge */
background-color: yellow; /* Fond jaune */

/* Mise en page */
width: 100px; /* Largeur */
height: 50px; /* Hauteur */
margin: 10px; /* Marge */
padding: 20px; /* Espacement interne */

/* Texte */
font-size: 16px; /* Taille de police */
text-align: center; /* Alignement */
```

## 3 JS

### Insertion de JavaScript
#### Dans le HTML (pas recommandé) : 
```html
<button onclick="alert('Bonjour !')">Clique</button>
```

#### Dans un script interne : 
```html
<script>
    alert("Bonjour !");
</script>
```

#### Dans un fichier externe (.js recommandé) : 
```js
alert("Bonjour !");
```

### Commandes JS de base
#### a. Variables
```js
let nom = "Alice"; // Variable modifiable
const age = 25; // Variable constante
```

#### b. Sélectionner un élément HTML
```js
document.getElementById("monId"); // Sélection par ID
document.querySelector(".maClasse"); // Sélection par classe
```

#### c. Modifier un événement 
```js
document.getElementById("monId").textContent = "Nouveau texte";
document.getElementById("monId").style.color = "red";
```

#### d. Ajouter un événement
```js
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});
```

#### e. Conditions
```js
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

#### f. Boucles
```js
for (let i = 0; i < 5; i++) {
    console.log("Nombre " + i);
}
```

#### g. Fonctions
```jsfunction direBonjour(nom) {
    return "Bonjour " + nom;
}
console.log(direBonjour("Alice"));
```