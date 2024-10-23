export default class{
    constructor(set){
        this.audio = null
        this.loaded = false
        this.set = set

        this.init()
    }


    // init
    init(){
        this.create()
    }


    // create
    create(){
        this.audio = new Audio()
        this.audio.volume = 0.5
        this.audio.addEventListener('canplaythrough', () => this.onLoad()) 
    }


    // set
    setSrc(src){
        this.audio.src = src
    }
    setCurrentTime(){
        
    }
    setVolume(){

    }
    setLoaded(newValue){
        this.loaded = newValue
    }


    // get
    get(){
        return this.audio
    }
    isLoaded(){
        return this.loaded
    }
    isPaused(){
        return this.audio.paused
    }


    // action
    play(){
        this.audio.play()
        this.set({isPlaying: true})
    }
    pause(){
        this.audio.pause()
        this.set({isPlaying: false})
    }
    change(src){
        this.setSrc(src)
        this.setLoaded(false)
        this.set({isLoaded: false})
    }


    // event
    onLoad(){
        this.set({isLoaded: true})
        this.setLoaded(true)
    }
}