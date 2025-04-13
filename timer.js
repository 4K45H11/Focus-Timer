const timerText = document.querySelector('#timer')

const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')
const resumeBtn = document.querySelector('#resumeBtn')

const selectTime = document.getElementById('selectTime')

const bell = new Audio(`./resources/bell.mp3`)

let totalTimerTime = (selectTime.value)*60*1000 //total time selected.
//console.log(totalTimerTime)
selectTime.addEventListener('change', () => {
    totalTimerTime = (selectTime.value)*60*1000
    //console.log(totalTimerTime)
})

let minutes = 0
let seconds = 0

//timeouts for music and aleart
let time;
let aleart;

let interValId; //declaring in higher scope to access from different functions.
let timeOutId;
let timeLeft;
let currentTimerTotalTime ;

pauseBtn.disabled = true
resumeBtn.disabled = true

const timerLogic = (totalTime) => {

    currentTimerTotalTime = totalTime/(60*1000)
    timeLeft = totalTime

    interValId = setInterval(() => {
        seconds += 1
        if (seconds == 60) {
            minutes++
            seconds = 0
        }
        let displayText
        (seconds < 10) ? displayText = '0' + seconds : displayText = seconds
        timerText.textContent = (minutes < 10) ? `0${minutes}:${displayText}` : `${minutes}:${displayText}`

        //console.log(displayText)
        timeLeft -= 1000
       // console.log(timeLeft)
    }, 1000)

    timeOutId = setTimeout(() => {
        clearInterval(interValId)
        taskCompletion()
        console.log('stopped')
        console.log(currentTimerTotalTime)
    }, totalTime)

    
}

startBtn.addEventListener('click', () => {

    timerLogic(totalTimerTime)
    startBtn.disabled = true
    pauseBtn.disabled = false
    resumeBtn.disabled = false
})

resetBtn.addEventListener('click', () => {
    console.log('reset btn pressed and all interval and timeout stopped')

    clearInterval(interValId)
    clearTimeout(timeOutId)
    clearTimeout(time)
    clearTimeout(aleart)

    startBtn.disabled = false
    pauseBtn.disabled = true
    resumeBtn.disabled = true

    minutes = 0
    seconds = 0
    timeLeft = 0

    pauseBtn.style.display = 'inline-block'
    resumeBtn.style.display = 'none'

    timerText.textContent = `00:00`
})

pauseBtn.addEventListener('click', () => {

    if(timeLeft === 0){
        alert('please reset the timer')
    }

    clearInterval(interValId)
    clearTimeout(timeOutId)
    console.log('timer paused.')
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'inline-block'

})


resumeBtn.addEventListener('click', () => {

    if(timeLeft === 0){
        alert('please reset the timer')
    }

    console.log('timer resumed')
    pauseBtn.style.display = 'inline-block'
    resumeBtn.style.display = 'none'

    timerLogic(timeLeft)

})


const taskCompletion = ()=>{
    if(timeLeft === 0){
        bell.play()
        time= setTimeout(()=>{
            bell.pause()
        },7800)
        aleart= setTimeout(()=>{
            alert(`Congratulations! You stayed in focus for ${currentTimerTotalTime} minutes continuously. You can reset and start again.`)
        },7900)
        
        pauseBtn.disabled = true
    }

}


