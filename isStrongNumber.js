function isStrongNumber(num) {

    let numAux = 0;

    for (let i = 0; i < num.toString().length; i++) {
        numAux = numAux + Number(factorial(num.toString().charAt(i)));
    }

    if (numAux == num) {

        return "Strong!";
    } else {

        return "Not strong !"
    }
}

function factorial(num) {
    total = 1;
    for (let x = 1; x <= num; x++) {
        total = total * x;
    }
    return total;
};