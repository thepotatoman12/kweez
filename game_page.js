steak1_name = localStorage.getItem("steak1_name");
steak2_name = localStorage.getItem("steak2_name");
steak1_score = 0;
steak2_score = 0;
document.getElementById("steak1_name").innerHTML = steak1_name + " = ";
document.getElementById("steak2_name").innerHTML = steak2_name + " = ";
document.getElementById("steak1_score").innerHTML = steak1_score;
document.getElementById("steak1_score").innerHTML = steak2_score;
document.getElementById("steak_answer").innerHTML = "Answer turn equal to " + steak2_name;
document.getElementById("steak_question").innerHTML = "Question turn equal to " + steak1_name;

function send() {
    get_word = document.getElementById("textt").value;
    word = get_word.toLowerCase();
    console.log(word);


    charAt1 = word.charAt(1);
    console.log(charAt1);
    wordlength = Math.floor(word.length / 2);
    charAt2 = word.charAt(wordlength);
    console.log(charAt2);

    takeaway_length = word.length - 1;
    charAt3 = word.charAt(takeaway_length);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "?");
    remove_charAt2 = remove_charAt1.replace(charAt2, "?");
    remove_charAt3 = remove_charAt2.replace(charAt3, "?");
    console.log(remove_charAt3 + "blah blah blah");

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("textt").value = "";
}
question_turn = "steak1";
answer_turn = "steak2";

function check() {
    get_word = document.getElementById("input_check_box").value
    answer = get_word.toLowerCase()
    console.log(answer + "oaoaoaoaooaoaoaoaoaoaoa")
    if (answer == word) {
        if (answer_turn == "steak1") {
            steak1_score = steak1_score + 1;
            document.getElementById("steak1_score").innerHTML = steak1_score;
        } else {
            steak2_score = steak2_score + 1;
            document.getElementById("steak2_score").innerHTML = steak2_score;
        }

    }
    if (question_turn == "steak2") {
        question_turn == "steak1"
        document.getElementById("steak_question").innerHTML = "questyion TuRn - " + steak1_name;
    } else {
        question_turn == "steak2"
        document.getElementById("steak_question").innerHTML = "questyion TuRn - " + steak2_name;
    }
    if (answer_turn == "steak2") {
        answer_turn == "steak1"
        document.getElementById("steak_answer").innerHTML = "ansqwer TuRn - " + steak1_name;
    } else {
        answer_turn == "steak2"
        document.getElementById("steak_answer").innerHTML = "ansqwer TuRn - " + steak2_name;
    }
    document.getElementById("output").innerHTML = "";
}