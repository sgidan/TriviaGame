


// $("#startbtn").on("click", start);

// // $(setTimeout(timeUp, 1000 * 30)



// function start() {



//     function timeUp() {

//         $("#time-left").append("<h2>Time's Up!</h2>");
//         console.log("time is up");
//     }
//     }
var questionsArr = [
    {
        Q: "How many colours are there in a rainbow?",
        A: ["7", "5", "8"],
        correctAns: 0,
    },
    {
        Q: "What do you call a time span of one thousand years?",
        A: ["Decade", "Millennium", "Year"],
        correctAns: 1,
    },
    {
        Q: "How many degrees are found in a circle?",
        A: ["30", "60", "90"],
        correctAns: 0,
    },
    {
        Q: "The Dewey Decimal system is used to categorise what?",
        A: ["Books", "Cars", "Websites"],
        correctAns: 0,
    },
]

questionsArr.forEach(function (question, questionsIndex) {

    var col = $('<div class="col-6">');
    var card = $('<div class="card">');
    var header = $('<div class="card-header">').text(question.Q);
    var name = questionsIndex;
    col.append(card);
    card.append(header);

    question.A.forEach(function (answers, answersIndex) {
        var span = $('<span>');

        var radioBtn = $('<input  class="radio" type="radio"  name="' + questionsIndex + '"index="' + answersIndex + '"/>');
        span.append(radioBtn, answers);

        card.append(span);

        console.log(answers);

    });

    $('.row').append(col);

});

$('.radio').on('click', function () {
    var questionsIndex = $(this).attr('name');
    var answersIndex =$(this).attr('index');

    console.log(questionsIndex, answersIndex);
    

    
});

var userScore;





