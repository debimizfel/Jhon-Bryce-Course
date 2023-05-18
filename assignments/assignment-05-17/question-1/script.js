//* 1
function raised() {
    const number_box = document.getElementById("number_box");
    const num = +number_box.value;
    number_box.style.backgroundColor = "aqua";

    alert(num ** 3);
}

//* 2
function sum() {
    const number1_box = document.getElementById("number1_box");
    const number2_box = document.getElementById("number2_box");

    const num1 = +number1_box.value;
    const num2 = +number2_box.value;

    const sum = num1 + num2;

    alert(sum);

    return sum;
}

function average() {
    let sum = sum();

    // const number1_box = document.getElementById("number1_box");
    // const number2_box = document.getElementById("number2_box");

    // const num1 = +number1_box.value;
    // const num2 = +number2_box.value;

    // const sum = num1 + num2;

    const avg = sum / 2;

    alert(avg);
}