const modal = document.querySelector('.modal')
const modalPara = document.querySelector('.modal__para')
const modalHead = document.querySelector('.modal__heading')
const modalButtons = document.querySelectorAll('.modal__button')
const modalCloseButton = document.querySelector('.modal__closeBtn')
const darkModeBtn = document.querySelector('.darkModeBtn')
const speakBtn = document.querySelector(".modal__speakBtn")
let fishSong = `One, two, three, four, five, Once I caught a fish alive, Six, seven, eight, nine, ten, Then I let go again. Why
did you let it go? Because it bit my finger so. Which finger did it bite? This little finger on the right`

let abcSong = `A B C D E F G
H I J K L M N O P
Q R S T U V
W X Y and Z

Now I know my ABCs
Next time won’t you sing with me`

let sheepSong = `Baa, baa black sheep
Have you any wool
Yes sir, yes sir
Three bags full.

One for my master
And one for my dame
And one for the little boy
Who lives down the lane.
`
modalButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.textContent == "Fish song") {
            modalPara.textContent = fishSong;
            modalHead.textContent = "Fish Song"
            speakBtn.addEventListener("click", function () {
                responsiveVoice.speak(fishSong);
            })
        } else if (btn.textContent == "ABC song") {
            modalPara.textContent = abcSong;
            modalHead.textContent = "Alphabet Song"
            speakBtn.addEventListener("click", function () {
                responsiveVoice.speak(abcSong);
            })
        } else if (btn.textContent == "Sheep song") {
            modalPara.textContent = sheepSong;
            modalHead.textContent = "Baa Baa Black Sheep"
            speakBtn.addEventListener("click", function () {
                responsiveVoice.speak(sheepSong);
            })
        }
        modal.classList.remove('modal--hidden')
    })
})

modalCloseButton.addEventListener('click', function () {
    modal.classList.add('modal--hidden')
    responsiveVoice.cancel();
})
darkModeBtn.addEventListener('click', function () {
    document.querySelector('html').classList.toggle('dark-mode')
})
speakBtn.addEventListener('click', function () {

})