//fonction qui evalue le chiffre et renvoi la sortie
function calculer ()
{
    let a =
        Document.getElementById("output").value
    let b = eval(a)
        document.getElementById("output").value = b
}
//fonction qui affiche la valeur
function afficher(val)
{
    document.getElementById("output").value+=val
}
// fonction qui efface l'ecran
function effacer()
{
    document.getElementById("output").value=""
}