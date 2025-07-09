setInterval(() => {
    const hopInterval = console.log("Hop");
}, 3000);


setTimeout(() => {
clearInterval(hopInterval); // apstaadina intervaalu
}, 10000);
