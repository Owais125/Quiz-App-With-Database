var firebaseConfig = {
    apiKey: "AIzaSyCCG92iLsvryAYL3ywiIgPncg89Ddnf5PA",
    authDomain: "quizappdatabase-c7c73.firebaseapp.com",
    databaseURL: "https://quizappdatabase-c7c73-default-rtdb.firebaseio.com",
    projectId: "quizappdatabase-c7c73",
    storageBucket: "quizappdatabase-c7c73.appspot.com",
    messagingSenderId: "75577978106",
    appId: "1:75577978106:web:ad19c963c208ce55a1ed43"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);



var questions=[
    {
    question:"The number of methods to solve aquadratic equation is:",
    option1:"1",
    option2:"2",
    option3:"3",
    option4:"4",
    correctAns:"3"

}
,
{   
question:"Sum of the cube roots of unity is:",
option1:"0",
option2:"1",
option3:"-1",
option4:"3",
correctAns:"0"

},
{   
    question:"In a ratio a: b, a is called:",
    option1:"Relation",
    option2:"antecedent",
    option3:"Consequent",
    option4:"None of these",
    correctAns:"antecedent"
    
    },
{   
        question:"How many types of variations are there?",
        option1:"One",
        option2:"Two",
        option3:"Three",
        option4:"Four",
        correctAns:"Two"
        
        },

{   
            question:" The set having only one element is called:",
            option1:"Null set",
            option2:"power set",
            option3:"Singleton set",
            option4:"subset",
            correctAns:"Singleton set"
            
            },
{   
                question:"A subset of AxA is called……in A.",
                option1:"Set",
                option2:"relation ",
                option3:"Function ",
                option4:"into function",
                correctAns:"relation"
                
                },

]
var questionsSerirs = document.getElementById("one")
var para = document.getElementById("para")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")
var btn = document.getElementById("btn")
var quesSerirs = 1
var index=0;
var score=0;
var getOptions = document.getElementsByName("options")
var timer = document.getElementById("timer")

var min = 1;
var sec = 59;



setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
    sec--
    if(sec<0){
        min--;
        sec = 59    
    }
    if(min<0){
        min= 1;
        sec = 59;
        nextQuestion()
    }
},1000)










function nextQuestion(){

    for(var i = 0 ;i<getOptions.length ;i++)
    {
        if(getOptions[i].checked)
        {
            var selectedValue = getOptions[i].value;
            var selectedQues = questions[index - 1]["question"];
            // console.log(selectedQues)  Get Question
            var selectedAns = questions[index-1]["option" + selectedValue];
            // console.log(selectedAns) Get Answer
            var correctAns = questions[index - 1]["correctAns"];
            // console.log(correctAns) Correct Answer
            if(selectedAns == correctAns){
                score++
                // console.log(score)
            }
                
var obj={
    Questuon:selectedQues,
    SelectedAnswer:selectedAns,
    CorrectAnswer:correctAns
}

var key=firebase.database().ref("Question").push().key


firebase.database().ref("Question").child(key).set(obj)

        }

        getOptions[i].checked = false;
    }









    
    var percentage = ((score / questions.length)*100).toFixed(2)


    btn.disabled = true;
    
    if(index > questions.length - 1){
        if(percentage >=60 && percentage <= 100){
            Swal.fire(
                'Good job!',
                'your percentage is '+percentage,
                'success'
              )

        // console.log("your percentage is " + percentage )
        }
        else if(percentage >=0 && percentage <= 60){
            Swal.fire({
                icon: 'error',
                title: 'your percentage is ' +percentage,
                text: 'Batter Luck Next Time',
                // footer: '<a href="">Why do I have this issue?</a>'
              })



        }

    }


else{

para.innerHTML = questions[index].question;
opt1.innerText = questions[index].option1;
opt2.innerText = questions[index].option2;
opt3.innerText = questions[index].option3;
opt4.innerText = questions[index].option4;
questionsSerirs.innerHTML=quesSerirs;

quesSerirs++

index++
}

}

function reset(){
    min = 2;
    sec = "00";
   timer.innerHTML = `${min}:${sec}`;

}


function clicked()
{
    

    btn.disabled = false


}


// var obj={
//     Questuon:selectedQues,
//     SelectedAnswer:selectedAns,
//     CorrectAnswer:correctAns
// }

// var key=firebase.database().ref("Question").push().key


// firebase.database().ref("Question").child(key).set(obj)

