// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// card tilt hover effect 

const card = document.querySelectorAll('.card')
const titlMove = (x, y) => `perspective(50px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

card.forEach(card => {
  const height = card.clientHeight
  const width = card.clientWidth

  card.addEventListener('mousemove', (e) => {
    const x = 0
    const y = 0
    const multiplier = 2

    const xRotate = multiplier * ((x-width/2)/width)
    const yRotate = multiplier * ((x-height/2)/height)

    card.style.transform = titlMove(xRotate, yRotate)
  })

  card.addEventListener('mouseout', () => card.style.transform = titlMove(0, 0))
})