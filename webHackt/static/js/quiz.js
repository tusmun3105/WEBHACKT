$(document).ready(function(){
    const questions = [
        {
            question: "What is the capital of France?",
            type : "text",
            choices: ["London", "Berlin", "Madrid", "Paris"],
            correctAnswer: "Paris",
            path:" "
        },
        {
            question: "Which planet is known as the Red Planet?",
            type : "text",
            choices: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: "Mars",
            path:" "
        },
        {
            question: "What is the largest mammal in the world?",
            type : "image",
            choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
            correctAnswer: "Yes",
            path:"AyushNursimooloo\\Pictures\\Saved Pictures\\default.jpg"
        },
        {
            question: "What is the largest mammal in the world?",
            type : "image",
            choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
            correctAnswer: "No",
            path:"AyushNursimooloo\\Pictures\\Saved Pictures\\default.jpg"
        }

    ];

    function checkAnswer(){
        const selectedChoice = document.querySelector('input[name="choice"]:checked');

    }

    $("button.trial").click(function(){
        //content = ""
        //$(".content_kneeboard").empty(); //if there are other elements in this div you want to preserve, keep in mind this will remove those too.
        //$(".content_kneeboard").html(content);
        alert("Hello! I am an alert box!!");
      });

















  
  });