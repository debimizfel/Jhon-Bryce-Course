function change_color(color) {

    const back_color = document.getElementById("back_color");

    back_color.style.backgroundColor = color;
    localStorage.setItem("color", color);
}

function load_color() {

    const old_color = localStorage.getItem("color");
    change_color(old_color);

}






