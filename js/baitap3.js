function checkPrime() {
    var num = parseInt(prompt("Nhập một số để kiểm tra:"));

    if (isNaN(num) || num <= 1) {
        alert(num + " không phải là số nguyên tố.");
        return;
    }

    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(num + " là số nguyên tố.");
    } else {
        alert(num + " không phải là số nguyên tố.");
    }
}
