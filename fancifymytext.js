function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("fancyRadio").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    textArea.value = sentences.join("-Moo.");
}
