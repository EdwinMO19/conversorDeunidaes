document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
  
    convertBtn.addEventListener("click", function() {
      const inputValue = parseFloat(document.getElementById("inputValue").value);
      const inputUnit = document.getElementById("inputUnit").value;
      const outputUnit = document.getElementById("outputUnit").value;
  
      let result;
      
      // Conversión de longitud
      if (inputUnit === "m") {
        if (outputUnit === "km") {
          result = inputValue / 1000;
        } else if (outputUnit === "ft") {
          result = inputValue * 3.281;
        }
      } else if (inputUnit === "km") {
        if (outputUnit === "m") {
          result = inputValue * 1000;
        } else if (outputUnit === "ft") {
          result = inputValue * 3281;
        }
      } else if (inputUnit === "ft") {
        if (outputUnit === "m") {
          result = inputValue / 3.281;
        } else if (outputUnit === "km") {
          result = inputValue / 3281;
        }
      }
      
      // Conversión de peso
      else if (inputUnit === "lb") {
        if (outputUnit === "kg") {
          result = inputValue * 0.453592;
        } else if (outputUnit === "oz") {
          result = inputValue * 16;
        }
      } else if (inputUnit === "kg") {
        if (outputUnit === "lb") {
          result = inputValue * 2.20462;
        } else if (outputUnit === "oz") {
          result = inputValue * 35.274;
        }
      } else if (inputUnit === "oz") {
        if (outputUnit === "lb") {
          result = inputValue * 0.0625;
        } else if (outputUnit === "kg") {
          result = inputValue / 35.274;
        }
      }
      
      // Conversión de temperatura
      else if (inputUnit === "c") {
        if (outputUnit === "f") {
          result = (inputValue * 9/5) + 32;
        }
      } else if (inputUnit === "f") {
        if (outputUnit === "c") {
          result = (inputValue - 32) * 5/9;
        }
      }
  
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <p>Resultado: ${result.toFixed(2)} ${outputUnit}</p>
      `;
    });
  });
  