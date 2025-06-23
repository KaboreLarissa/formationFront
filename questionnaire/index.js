const quiz = [
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Arctique", "Indien", "Pacifique"],
        answer: "Pacifique"
    },
    {
        question: "Quelle est la capitale du Canada ?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
        answer: "Ottawa"
    },
    {
        question: "Qui a peint la Joconde ?",
        options: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Donatello"],
        answer: "Léonard de Vinci"
    },
    {
        question: "Combien y a-t-il de planètes dans le système solaire ?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        options: ["O", "Or", "Au", "Ag"],
        answer: "Au"
    },
    {
        question: "Quel langage de programmation est utilisé pour le développement web côté client ?",
        options: ["Python", "JavaScript", "PHP", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Quelle est la monnaie du Japon ?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Dans quel pays se trouve la Tour de Pise ?",
        options: ["Espagne", "Grèce", "Italie", "France"],
        answer: "Italie"
    },
    {
        question: "Quel est l’élément le plus abondant dans l’univers ?",
        options: ["Hydrogène", "Oxygène", "Carbone", "Hélium"],
        answer: "Hydrogène"
    },
    {
        question: "Quel est le plus long fleuve du monde ?",
        options: ["Amazon", "Nil", "Yangtsé", "Mississippi"],
        answer: "Amazon"
    }
];

// recuperation des sections html
const sectionQuestion= document.querySelector(".question");
const responses= document.querySelector(".responses");
const Score= document.querySelector(".score");
let currentIndex= 0;
let score= 0;

//fonctions
function showQuestion (){
    const currentQuestion = quiz[currentIndex];
    sectionQuestion.textContent = currentQuestion.question;
    responses.innerHTML = "";
    Score.textContent= `Votre score est: ${score} / ${currentIndex} `;
    currentQuestion.options.forEach(option =>{
        const btn = document.createElement("button");
        btn.textContent= option;
        btn.className = "btn";
        btn.addEventListener("click",function(){
            handleAnswer(btn,option,currentQuestion.answer);
            
        });
        responses.appendChild(btn);
});


};
function handleAnswer(btn,option,answer){
    const allOption= document.querySelectorAll(".btn");
    allOption.forEach(opt =>opt.onClick=null);
    if(option===answer){
        btn.classList.add("correct");
        score++;
    }
    else{
        btn.classList.add("incorrect");
        allOption.forEach(opt =>{
            if(opt.textContent=== answer){
                opt.classList.add("correct");
            }

        });
    }
    setTimeout(()=>{
        currentIndex++;
        if(currentIndex< quiz.length){
            showQuestion();
        }
        else{
            sectionQuestion.textContent= "Quiz terminé";
            responses.innerHTML="";
            Score.textContent = `Votre score final est: ${score} / ${quiz.length}`;
            
        }
    },5000);
    
};

showQuestion();