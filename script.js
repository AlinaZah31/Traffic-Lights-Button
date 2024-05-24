    let colors = ["orange", "green", "red"]; 
    let currentIndex = 0;
    function setColor(btn, color) {
        const button = document.getElementById("btn");
        button.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }
    setInterval(setColor, 10000);
