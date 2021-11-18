async function main() {
    const modal = document.querySelector('.modal')
    const modalPara = document.querySelector('.modal__para')
    const modalHead = document.querySelector('.modal__heading')
    const modalCloseButton = document.querySelector('.modal__closeBtn')
    const darkModeBtn = document.querySelector('.darkModeBtn')
    const speakBtn = document.querySelector(".modal__speakBtn")
    const buttonContainer = document.querySelector('.buttonsContainer')

    // fetching rhymes data from data.json 
    const response = await fetch('./data.json');
    const data = await response.json()
    const rhymesData = data.data;

    // add buttons to html based on data in rhyme data 
    rhymesData.forEach((rhymeData, id) => {
        // create a new button
        let addedButton = document.createElement('button');

        // give properties to that button
        addedButton.id = `modalButton--${id}`
        addedButton.className = 'modal__button';
        addedButton.textContent = rhymeData.name;

        // place the created button inside button__container
        buttonContainer.appendChild(addedButton)

        // add an event listener to our appended new button
        addedButton.addEventListener('click', function () {
            modalPara.textContent = rhymeData.song
            modalHead.textContent = rhymeData.name
            modal.classList.remove('modal--hidden')
        })
    })

    // when close button is pressed hide modal, stop TTS if playing and rename speakBtn 
    modalCloseButton.addEventListener('click', function () {
        modal.classList.add('modal--hidden')
        responsiveVoice.cancel();
        speakBtn.textContent = "speak";
    })

    // when darkMode Btn is pressed give dark-mode styles to html
    darkModeBtn.addEventListener('click', function () {
        document.querySelector('html').classList.toggle('dark-mode')
    })

    // when speak button clicked, if playing stop playing else speak
    speakBtn.addEventListener("click", function () {
        if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel();
            speakBtn.textContent = "speak";
        } else {
            responsiveVoice.speak(modalPara.textContent, "UK English Female", {
                onend: () => {
                    speakBtn.textContent = "speak";
                }
            })
            speakBtn.textContent = "🔊 playing";
        }
    })
}

// run main function
main()