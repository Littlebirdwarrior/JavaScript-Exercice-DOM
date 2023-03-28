# Jouons avec le DOM ! 🔢 - JavaScript

<b>Projet-Elan Formation </b> : <br />
Préparation Certification RNCP Développeur Web et Web mobile - 2023

## 🖱️ Construire un petit jeu de click en JavaScript 

![exercice-javascript](https://user-images.githubusercontent.com/82466002/228374228-10fdd4c1-7ea5-44bf-8cb6-b1ca2add3700.gif)

L'objectif de ce jeu est de s'exercer à la manipulation du DOM avec JavaScript. 

## 👍 Les règles du jeu

- La page présente différentes boites contenant chacune un numéro. Ces boites forment une suite arithmétique logique (soit 5 boites : boite n°1, boite n°2, ... boite n°5). Ces boites sont mélangées aléatoirement à chaque chargement de la page.

- Le joueur doit cliquer sur chaque boite dans l'ordre (boite 1 puis boite 2 etc.). Une boite cliquée est validée, son aspect devra changer pour informer visuellement le joueur de son action.

- Si le joueur se trompe de boite (en cliquant sur la 4 juste après avoir cliqué sur la 2, par exemple), le jeu redémarre à zéro. Il lui faudra donc cliquer de nouveau sur la boite 1 et ainsi de suite.

- Une fois que la dernière boite est cliquée dans l'ordre imposé, un message de victoire doit apparaître.
Enfin, si le joueur clique sur une boite précédemment validée (le jeu attendait qu'il clique sur la boite 4 mais le clic a lieu sur la boite 2), un message le prévient que cette boite a déjà été cliquée, mais le jeu ne s'arrête pas pour autant.

## 🧠 Fonctionnalités développées

1. Générer aléatoirement un nombre de boite selon le choix de l'utilisateur<br>
2. Interagir avec l'utilisateur avec des animation CSS,<br>
3. Implémenter un timer et un best score,<br>

## 💡 Languages et outils utilisés

1. HTML5 /CSS3
2. Vanilla JavaScript
