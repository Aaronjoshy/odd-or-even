document.write("<h2>Odd or Even Numbers from 0 to 15:</h2>");

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even<br>");
    } else {
        document.write(i + " is odd<br>");
    }
} 