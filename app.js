const container = document.querySelector('#board')
const numberOfSquares = 504
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#e929a0', '#ecef52', '#1e7f31', '#3473de', '#dc0fc4']

for (let index = 0; index < numberOfSquares; index++) {
    let newSquare = document.createElement('div')
    newSquare.classList.add('square')
    container.append(newSquare)

    newSquare.addEventListener('mouseover',setColor) 
    
    newSquare.addEventListener('mouseleave', removeColor)

}

function getRandomColor () {
    const index = Math.floor(colors.length * Math.random())
return colors[index]
}

function setColor(event) {
    const elem = event.target
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
        
}

function removeColor(event) {
    const elem = event.target
    elem.style.backgroundColor = 'rgba(128, 128, 128, 0.185)'
    elem.style.boxShadow = `0 0 2px #000`
}

