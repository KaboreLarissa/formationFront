//section des variables


const annuler = document.querySelector(".btnAnnuler");
const envoyer= document.querySelector(".btnEnvoyer");
const nom = document.querySelector(".nom");
const prenom = document.querySelector(".prenom");
const fichier = document.querySelector(".file");
const errorNom = document.querySelector(".errorNom");
const errorPrenom = document.querySelector(".errorPrenom");
const errorFile = document.querySelector(".errorFile");
const result = document.querySelector(".result");

//section des fonctions

function Initialisation(nom,prenom,fichier){
    nom.value="";
    prenom.value="";
    fichier.value="";
    errorNom.textContent="";
    errorPrenom.textContent="";
    errorFile.textContent="";
}

function VerifierTexte(text,champs){
    const regex=/^[a-zA-Z\s]+$/;
    if(!regex.test(text.value.trim())){
        if(champs==="nom"){
            errorNom.textContent=`le champs ${champs} doit etre une chaine de caractère`;
            return [false,""];
        }
        if(champs==="prenom"){
            errorPrenom.textContent=`le champs ${champs} doit etre une chaine de caractère`;
            return [false,""];
        }  
    }
    else{
        if(champs==="nom"){
            errorNom.textContent="";
            return [true,text.value];
        }
        if(champs==="prenom"){
            errorPrenom.textContent="";
            return [true,text.value];

        }
    }
}

annuler.addEventListener("click",function (){
    Initialisation(nom,prenom,fichier);

} );

envoyer.addEventListener("click", function(){     
    const valueNom =  VerifierTexte(nom,"nom");
    const valuePrenom = VerifierTexte(prenom,"prenom");
    const valueFichier = fichier.files[0];
    
    if(!valueFichier){
        errorFile.textContent="veuillez selectionner un fichier";
        return;
    }

    
    else{
        const spanResultMsg=document.createElement("span");
        spanResultMsg.textContent = "Message envoyé avec succès : " + valueNom[1] + ", " + valuePrenom[1] + ", " + valueFichier.name;      
        result.appendChild(spanResultMsg); 
              
    }
    
}
)


