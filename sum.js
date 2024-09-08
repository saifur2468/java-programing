let num = 60;
let sum = 0;
while (num <= 100) {
    if (num % 2 === 0) {
        console.log(`even number: ${num}`);
    } else {
        console.log(`odd number: ${num}`);
    }
    sum += num;  
    console.log(`Current sum: ${sum}, Current number: ${num}`);
    num++;
}

