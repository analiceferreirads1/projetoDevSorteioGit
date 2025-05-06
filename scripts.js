
const winAudio = new Audio('./sounds/win-sound.mp3');

  function generateNumber() {
      const min = Math.ceil(document.querySelector(".input-min").value);
      const max = Math.floor(document.querySelector(".input-max").value);
      const resultElement = document.getElementById("result-number");
  
      if (isNaN(min) || isNaN(max) || min > max) {
          resultElement.textContent = "Digite valores válidos.";
          resultElement.style.animation = "none";
          return;
      }
  
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      resultElement.textContent = `Resultado: ${result}`;
  
      resultElement.style.animation = "none";
      void resultElement.offsetWidth;
      resultElement.style.animation = "pulseWin 0.6s ease-in-out";
  
      winAudio.play();
      
    // Estoura os confetes
      confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
      });
  }