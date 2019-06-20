

var questionsArr = [
    {
        Q: "How many colours are there in a rainbow?",
        A: ["7", "5", "8"],
        correctAns: "7",
    },
    {
        Q: "What do you call a time span of one thousand years?",
        A: ["Decade", "Millennium", "Year"],
        correctAns: "Millennium",
    },
    {
        Q: "How many degrees are found in a circle?",
        A: ["30", "60", "90"],
        correctAns: "30",
    },
    {
        Q: "The Dewey Decimal system is used to categorise what?",
        A: ["Books", "Cars", "Websites"],
        correctAns: "Books",
    },
]

questionsArr.forEach(function (question) {

    var col = $('<div class="col-6">');
    var card = $('<div class="card">');
    var header = $('<div class="card-header">').text(question.Q);



    col.append(card);
    card.append(header);

    question.A.forEach(function (answers) {
        var span = $('<span>');

        var radioBtn = $('<input type="radio" name ="rbtnCount"/>');
        span.append(radioBtn,answers);

        card.append(span);

        console.log(answers);
    });

    $('.row').append(col);




    // console.log(question.Q);
    // console.log(question.A);
    // console.log(question.correctAns);
});



// for (let i = 0; i < questionsArr.length; i++) {
//     console.log[i]
//     console.log(questionsArr[i].A)

//     let currentAns = questionsArr[i].A;
//     for (let j = 0; j < currentAns.length; j++){
//         console.log(currentAns[j]);
//     }
// }

// questionsArr.forEach(function(element) {

// })



//index[i].A[]
//store answers with index value
var time = 20

function startGame() {

}