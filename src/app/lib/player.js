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
        this.audio.addEventListener('loadstart', () => this.onLoadStart())
        this.audio.addEventListener('canplaythrough', () => this.onLoad())
        this.audio.addEventListener('ended', () => this.onEnd())
        this.audio.addEventListener('play', () => this.onPlay())
    }


    // set
    setSrc(src){
        this.audio.src = src
    }
    setCurrentTime(time){
        this.audio.currentTime = time
    }
    setVolume(volume){
        this.audio.volume = volume
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
    getVolume(){
        return this.audio.volume
    }
    getDuration(){
        return this.audio.duration
    }
    getCurrentTime(){
        return this.audio.currentTime
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
        // this.set({isLoaded: false})
    }


    // event
    onLoadStart(){
        const {readyState} = this.audio

        if(readyState === 4){
            this.set({isLoaded: true})
            this.setLoaded(true)
        }else{
            this.set({isLoaded: false})
            this.setLoaded(false)
        }
    }
    onLoad(){
        this.set({isLoaded: true})
        this.setLoaded(true)
    }
    onEnd(){
        this.set({isPlaying: false})
    }
    onPlay(){
        this.set({isPlaying: true})
    }
}