const questions = [
    {
        question: "Why is it important for users to be cautious about the websites they visit and verify website URLs??",
        type : "text",
        choices: ["To support cybercriminal activities", "Try to give money", "To prevent fraud", "Paris"],
        correctAnswer: "To support cybercriminal activities",
    },
    {
        question: "What is the largest mammal in the world?",
        type : "image",
        correctAnswer: "Yes",
        path:'static/images/imagesQues/smallemail.png',
        correctPath:'static/images/imagesQues/smallemailcorrect.png'
    },
    {
        question: "Which planet is known as the Red Planet?",
        type : "text",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        type : "image",
        correctAnswer: "No",
        path:'static/images/imagesQues/smallemail.png',
        correctPath:'static/images/imagesQues/smallemailcorrect.png'
    },
    {
        question: "Why is it important for users to be cautious about the websites they visit and verify website URLs??",
        type : "text",
        choices: ["To support cybercriminal activities", "Try to give money", "To prevent fraud", "Paris"],
        correctAnswer: "To support cybercriminal activities",
    }

];

// function showQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionText.textContent = currentQuestion.question;
//     let quizHeader = "<h1 id=\"questionText\">Why is it important for users to be cautious about the websites they visit and verify website URLs?</h1>";
   
// }

let currentQuestionIndex = 0;
let numQuestion = questions.length;
let score = 0 ;

$(document).ready(function(){

    $("#submitButton").click(function(){
        $(window).scrollTop(0);
        SubmitText = "Submit";
        NextText = "Next";
        TextType = "text";
        ImageType = "image";
        showScore = "Show score";
        BtnText=$(this).text();

        if(BtnText == SubmitText){
            value = $("input[name='fav_language']:checked").val();
            if(value == questions[currentQuestionIndex]['correctAnswer'])
            {
                $("#correctAnswer").text("Correct");
                $(this).text("Next");
                currentQuestionIndex++;
                score++;
            }
            else
            {   
                text = "Wrong!! the correct answer is : " + questions[currentQuestionIndex]['correctAnswer'];
                $("#correctAnswer").text(text);
                $(this).text("Next");
                currentQuestionIndex++
            }
        }
        else if (BtnText == NextText)
        
        {   
            
            if (currentQuestionIndex <= numQuestion-1){ 
            $("#questionText").text(questions[currentQuestionIndex]['question']);
            //$(this).text("Submit");
            $("#correctAnswer").text("");
            if(questions[currentQuestionIndex]['type'] == TextType) {
                $(this).text("Submit");
                if ($('.image-question').is(':visible')) {
                    $('.image-question').hide();
                }
                
                $('.text-question').show();
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
                if ($('.text-question').is(':visible')) {
                    $('.text-question').hide();
                }
                
                $('.image-question').show();
                //$('.image-question').hide();
                imageSrc =questions[currentQuestionIndex]['path']
                $(".image-question img").attr("src", imageSrc); 
                $(".image-question img").show(); 
                $(this).hide();
                $('.image-question-buttons').show();
            }
        } else{
            text = `out of ` + numQuestion;
            $('.scoreScreen').show();
            $('#score').text(score);
            // $(this). attr('disabled', true);
            $('.question-card').hide()
        }
    }
    
    });
//let newHeader =questions[1]['question'];
//$("#questionText").text(newHeader);

        $(".imageButton").click(function(){
            var value = $(this).val();

            if (value == questions[currentQuestionIndex]['correctAnswer']) {
                $("#correctAnswer").text("Correct");
                imageSrc =questions[currentQuestionIndex]['correctPath']
                $(".image-question img").attr("src", imageSrc); 
                currentQuestionIndex++;
                score++;
            } else {
                text = "Wrong!! the correct answer is : " + questions[currentQuestionIndex]['correctAnswer']
                $("#correctAnswer").text(text);
                imageSrc =questions[currentQuestionIndex]['correctPath']
                $(".image-question img").attr("src", imageSrc); 
                currentQuestionIndex++
            }

            $('.image-question-buttons').hide();
            $("#submitButton").show();
            $("#submitButton").text("Next");

        });

        $(document).ready(function(){
            $("#retakeButton").click(function(){
                window.location.href = "http://localhost:5000/trial";
            });
        });
        
       

  });