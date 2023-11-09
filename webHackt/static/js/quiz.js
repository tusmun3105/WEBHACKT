const questions = [
    {
        question: "Why is it important for users to be cautious about the websites they visit and verify website URLs??",
        type : "text",
        choices: ["To support cybercriminal activities", "Try to give money", "To prevent fraud", "Paris"],
        correctAnswer: "To support cybercriminal activities",
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

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    let quizHeader = "<h1 id=\"questionText\">Why is it important for users to be cautious about the websites they visit and verify website URLs?</h1>";
   
}

$(document).ready(function(){

    let currentQuestionIndex = 0;
      $(".form-control").click(function(){
        SubmitText = "Submit";
        NextText = "Next";
        TextType = "text";
        ImageType = "image";
        BtnText=$(this).text();
        if(BtnText == SubmitText){
            value = $("input[name='fav_language']:checked").val();
            if(value == questions[currentQuestionIndex]['correctAnswer'])
            {
                $("#correctAnswer").text("Correct");
                $(this).text("Next");
                currentQuestionIndex++;
            }
            else
            {   
                text = "Wrong!! the correct answer is : " + questions[currentQuestionIndex]['correctAnswer']
                $("#correctAnswer").text(text);
                $(this).text("Next");
                currentQuestionIndex++
            }
        }
        else if (BtnText == NextText)
        {
            $("#questionText").text(questions[currentQuestionIndex]['question'])
            $(this).text("Submit");
            $("#correctAnswer").text("");
            if(questions[currentQuestionIndex]['type'] == TextType)
            {
                var length = questions[currentQuestionIndex]['choices'].length;
                text = ``;
                for (let i = 0; i < length; i++)
                {
                    text = text+`<div class="answer"><input type="radio" id="ans`+i+`" name="fav_language" value="`+questions[currentQuestionIndex]['choices'][i]+`">
                           <label for="ans`+i+`">`+questions[currentQuestionIndex]['choices'][i]+`</label></div>` 
                  
                }
                           
                $(".text-question").html(text);     
            }
            else if(questions[currentQuestionIndex]['type'] == ImageType)
            {

            }
    }
    
        //let newHeader =questions[1]['question'];
        //$("#questionText").text(newHeader);
    });

















  
  });