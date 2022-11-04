function changeBackground(element) {
    element.style.background = "green";
    element.innerHTML = "Hello block! This is text";
    element.style.color = "skyblue";
    element.style.textAlign = "center";
    element.style.textShadow = "2px 10px red";
    nameText(element);
}

function nameText(element) {
    element.style.textTransform = "uppercase";
    element.style.fontSize ="30px";
}

function changeText(element) {
    element.style.textAlign = "left";
}
