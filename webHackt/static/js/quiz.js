const questions = [
    {
        question: "Why is it important for users to be cautious about the websites they visit and verify website URLs?",
        type : "text",
        choices: ["To support cybercriminal activities", "Try to give money", "To prevent fraud"],
        correctAnswer: "To prevent fraud",
        message:'To prevent fraud'
    },
    {
        question: "What is the largest mammal in the world?",
        type : "image",
        correctAnswer: "Yes",
        path:'static/images/imagesQues/smallemail.png',
        correctPath:'static/images/imagesQues/smallemailcorrect.png',
        message : 'The sender address is \'efacks.com\', is misspelled'
    },
    {
        question: "What should you do if your computer is infected with ransomware?",
        type : "text",
        choices: ["Pay the ransom immediately to recover your files.", "Disconnect from the internet and seek professional assistance.", "Ignore it and hope the attacker will release your files."],
        correctAnswer: "Disconnect from the internet and seek professional assistance.",
        message:'Disconnect from the internet, isolate the infected device, and seek professional assistance.'
    },

    {
        question: "If you fall for a phishing scam, what should you do to limit the damage?",
        type : "text",
        choices: [" Delete the phishing email.", "Try to give money", "Unplug the computer.This will get rid of any malware", "Change any compromised passwords."],
        correctAnswer: "Change any compromised passwords.",
        message:'Change any compromised passwords.'
    },
    {
        question: "Is this a scam?",
        type : "image",
        correctAnswer: "Yes",
        path:'static/images/imagesQues/message.png',
        correctPath:'static/images/imagesQues/message.png',
        message:'Never send money or give credit card details, online account details, or copies of important personal documents to anyone you don’t know or trust'
    },
    {
        question: "Is this a scam?",
        type : "image",
        correctAnswer: "No",
        path:'static/images/imagesQues/mailNotScam.png',
        correctPath:'static/images/imagesQues/mailNotScam.png',
        message:' Rather than asking you to click on a link in the email, the company instructs you to type their web address into your browser to log in'
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
                $("#correctAnswer").text("Correct" + questions[currentQuestionIndex]['message']);
                $("#correctAnswer").css("color", "green");
                $(this).text("Next");
                currentQuestionIndex++;
                score++;
            }
            else
            {   
                text = "Wrong!! the correct answer is : " + questions[currentQuestionIndex]['message'];
                $("#correctAnswer").text(text);
                $("#correctAnswer").css("color", "red");
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
                $("#correctAnswer").text("Correct. "+ questions[currentQuestionIndex]['message']);
                $("#correctAnswer").css("color", "green");
                imageSrc =questions[currentQuestionIndex]['correctPath']
                $(".image-question img").attr("src", imageSrc); 
                currentQuestionIndex++;
                score++;
            } else {
                text = "Wrong!! the correct answer is : " + questions[currentQuestionIndex]['message'];
                $("#correctAnswer").text(text);
                $("#correctAnswer").css("color", "red");
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