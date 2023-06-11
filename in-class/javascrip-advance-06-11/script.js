function test_1() {
    const f_get_avg = get_avg;
    const avg = f_get_avg(2, 4, 6);
    alert("Avg: " + avg);
}

function get_avg(n1, n2, n3) {
    const avg = (n1 + n2 + n3) / 3;
    return avg;
}

//* --------------------

function test_2() {
    display_result(get_sum);
    display_result(get_avg);
}

function display_result(fun) {
    const arr = [1, 2, 3, 4, 5];
    const result = fun(arr);
    alert(result);
}

function get_sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function get_avg(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    const avg = sum / arr.length;
    return avg;
}




