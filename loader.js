var scoreObj = document.getElementsByClassName("score");
for (var i in scoreObj) {
    ABCJS.renderAbc(scoreObj[i], scoreObj[i].innerHTML);
}