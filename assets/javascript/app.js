var rightAnswers = 0;
var wrongAnswers = 0;
var timer = 500;




$(document).ready(function () {
    $("#start").on("click", function () {
        $(".questions").show();
        start();
        function start() {
            $("#time-left").html("time left " + timer);
            var timer = 500;
            timer = setInterval(decrement, 1000);
            decrement();
        };

        function decrement() {
            //  Decrease number by one.
            timer--;
            $("#time-left").html("Time left: " + timer + " seconds ");
            //  Once number hits zero...
            if (timer === 0) {
                //  ...run the stop function.
                stop();
                //  Alert the user that time is up.
                alert("Time Up!");
            }
        };
    })

    $("#finish").on("click", function () {
        if ($('input[name=q1]:checked').val() === "London") {
            rightAnswers++;
        } else {
            wrongAnswers++;
        };

        if ($('input[name=q2]:checked').val() === "Moscow") {
            rightAnswers++;
        } else {
            wrongAnswers++;
        };
        if ($('input[name=q3]:checked').val() === "Everest") {
            rightAnswers++;
        } else {
            wrongAnswers++;
        };
        if ($('input[name=q4]:checked').val() === "Nile") {
            rightAnswers++;
        } else {
            wrongAnswers++;
        };
        $(".questions").hide();
        $(".results").html("<h2>" + "Right answers: " + rightAnswers + "<h2>" + "Wrong answers: " + wrongAnswers);
        
    })

})






