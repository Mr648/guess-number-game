$(document).ready(function () {
    let name  = prompt('Welcome to guess number game! Please enter your name:');
    $("#player").text(name.toString());
});

$(document).ready(function () {

    const MAXIMUM_TRIES = 5;

    const ANSWER = Math.round((Math.random() * 1000));

    let count_tries = MAXIMUM_TRIES;

    $("#answer").text(ANSWER.toString());

    $("#tries").text(MAXIMUM_TRIES.toString());

    $('#show_answer').on('click', function (event) {
        event.preventDefault();
        $("#answer").show();
    });

    $('#close-modal').click(function (event) {
        // event.preventDefault();
        if (count_tries <= 0) {
            setTimeout(function () {
                location.reload();
            }, 2500); // after 2.5 seconds
        }
    });

    $("#guess_number_form").on('submit', function (event) {
        event.preventDefault();
        count_tries--; // decrease 1 try from user tries



        let input = $('#number');
        let value = parseInt(input.val()); // Getter, Accessor


        let level = "warning";
        let message;

        if (value > ANSWER) {
            message = "The number you've entered is greater than answer.";
        } else if (value < ANSWER) {
            message = "The number you've entered is lower than answer.";
        } else {
            message = "Congratulations! your guess was correct.";
            level = "success";
        }

        /*if (count_tries >= MAXIMUM_TRIES) {*/

        if (count_tries <= 0) {
            message = "Oops! you failed to guess the correct number."
                + "<br>The answer was: "
                + ANSWER;

            level = "danger";
        } else {
            $("#tries").text(count_tries.toString());
        }

        $("#message").text(message.toString());

        $("#alert-box").attr('class', 'alert alert-' + level.toString());

        $("#level").text(level.toString().toUpperCase());

        $("#alert-modal").modal("show");
    });
});