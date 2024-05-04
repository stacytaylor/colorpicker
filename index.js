let color1 = document.getElementById("color-1")
let hexcode1 = document.getElementById("hex-code-1")
let color2 = document.getElementById("color-2")
let hexcode2 = document.getElementById("hex-code-2")
let color3 = document.getElementById("color-3")
let hexcode3 = document.getElementById("hex-code-3")
let color4 = document.getElementById("color-4")
let hexcode4 = document.getElementById("hex-code-4")
let color5 = document.getElementById("color-5")
let hexcode5 = document.getElementById("hex-code-5")  

document.getElementById("get-btn").addEventListener("click", getColorInfo)

function getColorInfo() {
    let hexColor = document.getElementById("base-color").value
    let color = hexColor.substring(1)
    let mode = document.getElementById("color-select").value
    let hexArray = []
    
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
  .then(response => response.json())
  .then(data => {
      for (let i=0; i<5; i++) {
          hexArray.push(data.colors[i].hex.value)
      }
      
        color1.style.backgroundColor = hexArray[0]
        hexcode1.textContent = hexArray[0]
        
        color2.style.backgroundColor = hexArray[1]
        hexcode2.textContent = hexArray[1]
        
        color3.style.backgroundColor = hexArray[2]
        hexcode3.textContent = hexArray[2]
        
        color4.style.backgroundColor = hexArray[3]
        hexcode4.textContent = hexArray[3]
        
        color5.style.backgroundColor = hexArray[4]
        hexcode5.textContent = hexArray[4]
      })      
}




