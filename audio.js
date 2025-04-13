//musics
const rain = new Audio(`./resources/rain.mp3`)
const forest = new Audio(`./resources/forest.mp3`)
const piano = new Audio(`./resources/piano.mp3`)

//let currentMusic;

//play buttons
const rainBtn = document.getElementById('rainBtn')
const forestBtn = document.getElementById('forestBtn')
const lakeBtn = document.getElementById('lakeBtn')

//contol boxes
const rainControl = document.getElementById('rainControl')
const forestControl = document.getElementById('forestControl')
const pianoControl = document.getElementById('pianoControl')

//rain controls
const rainPause = document.getElementById('rainPause')
const rainResume = document.getElementById('rainResume')
const rainReset = document.getElementById('rainReset')

//forest controls
const forestPause = document.getElementById('forestPause')
const forestResume = document.getElementById('forestResume')
const forestReset = document.getElementById('forestReset')

//piano controls
const pianoPause = document.getElementById('pianoPause')
const pianoResume = document.getElementById('pianoResume')
const pianoReset = document.getElementById('pianoReset')

//volume control
const rainVolume = document.getElementById('rainVolume')
const forestVolume = document.getElementById('forestVolume')
const pianoVolume = document.getElementById('pianoVolume')

//operations on rain genre

//playing the rain music
rainBtn.addEventListener('click',()=>{

    //visible operations
    rainControl.style.display = 'block'
    console.log('rain btn clicked')
    rainBtn.disabled = true
    forestBtn.disabled = true
    lakeBtn.disabled = true

    //music conrols operations
    rainPause.disabled = false
    rainResume.disabled = true

    //functional oprations
    rain.play()
    rain.loop = true


})

//pausing the rain music
rainPause.addEventListener('click',()=> {
    rain.pause()

    rainPause.disabled = true
    rainResume.disabled = false
})

//resuming the rain music
rainResume.addEventListener('click',()=>{
    rain.play()

    rainResume.disabled = true
    rainPause.disabled = false
})

//reseting the rain music
rainReset.addEventListener('click',()=>{

    rainControl.style.display = 'none'
    rainBtn.disabled = false
    forestBtn.disabled = false
    lakeBtn.disabled = false

    //music control operations

    rainPause.disabled = false

    //music operations
    rain.volume = 0.5
    rain.pause()
    rain.currentTime = 0


})

//adjusting the rain music volume
rainVolume.addEventListener('change',()=>{
    rain.volume = rainVolume.value
})

//operations on forest genre

forestBtn.addEventListener('click',()=>{

    forestControl.style.display = 'block'
    console.log('forest btn clicked')
    rainBtn.disabled = true
    forestBtn.disabled = true
    lakeBtn.disabled = true

    //music conrols operations
    forestPause.disabled = false
    forestResume.disabled = true
    
    //functional oprations
    forest.play()
    forest.loop = true
})

forestPause.addEventListener('click',()=>{
    forest.pause()

    forestPause.disabled = true
    forestResume.disabled = false
})

forestResume.addEventListener('click',()=>{
    forest.play()

    forestResume.disabled = true
    forestPause.disabled = false
})

forestReset.addEventListener('click',()=>{
    
    forestControl.style.display = 'none'
    rainBtn.disabled = false
    forestBtn.disabled = false
    lakeBtn.disabled = false

    //music control operations

    forestPause.disabled = false

    //music operations
    forest.volume = 0.5
    forest.pause()
    forest.currentTime = 0
})

forestVolume.addEventListener('change',()=>{
    forest.volume = forestVolume.value
})

//operations on piano genre

lakeBtn.addEventListener('click',()=>{

    pianoControl.style.display = 'block'
    console.log('lake btn clicked')
    rainBtn.disabled = true
    forestBtn.disabled = true
    lakeBtn.disabled = true

    //music conrols operations
    pianoPause.disabled = false
    pianoResume.disabled = true

    //functional oprations
    piano.disabled = false
    piano.play()
    piano.loop = true
})

pianoPause.addEventListener('click',()=>{
    piano.pause()

    pianoPause.disabled = true
    pianoResume.disabled = false
})

pianoResume.addEventListener('click',()=>{
    piano.play()

    pianoResume.disabled = true
    pianoPause.disabled = false
})

pianoReset.addEventListener('click',()=>{

    pianoControl.style.display = 'none'
    rainBtn.disabled = false
    forestBtn.disabled = false
    lakeBtn.disabled = false

    //music control operations

    pianoPause.disabled = false

    //music operations
    piano.volume = 0.5
    piano.pause()
    piano.currentTime = 0
    piano.disabled = true
})

pianoVolume.addEventListener('change',()=>{
    piano.volume = pianoVolume.value
})


