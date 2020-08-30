const cardButtons = document.querySelectorAll('.card button');
// console.log(cardButtons)
const modalOuter = document.querySelector('.modal-outer')
const modalInner = document.querySelector('.modal-inner')


// handle card button function 

function handleCardButtonClick(event) {
    const button = event.currentTarget; // the clicked button
    const card = button.closest('.card') // the card of the button. use closest and not parent.
    const imgSrc = card.querySelector('img').src // grab the img src
    const desc = card.dataset.description // get img dada- description 
    const name = card.querySelector('h2').textContent;
   
    //populate the modal with a new info 
    modalInner.innerHTML = ` 
    <img width: "600" heigth: "600" src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
    ` ;
    // don't forget HTML in caps letters!!!

    // show the modal 
    modalOuter.classList.add('open');

    // console.log('yep')
}


function closeModal(){
    modalOuter.classList.remove('open');
}

//how to tell if the click was outside the modal: 
modalOuter.addEventListener('click', function(event){
    const isOutside = !event.target.closest('.modal-inner'); //return false if he find something => inside
    if(isOutside) {
        closeModal();
    }
})

window.addEventListener('keydown', (event)=> {
    if(event.key === 'Escape') {
        closeModal();
    }
})

//loop on each button
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick ));