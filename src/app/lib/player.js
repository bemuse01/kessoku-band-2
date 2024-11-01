export default class{
    constructor({set, get, data, index}){
        this.audio = null
        this.loaded = false
        this.set = set
        this.get = get
        this.data = data
        this.index = index
        this.isEnd = false

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
        this.audio.addEventListener('timeupdate', () => this.onTimeupdate())
    }


    // set
    setSrc(src){
        this.audio.src = src
    }
    setCurrentTime(time){
        if(isNaN(time)) return
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
    getLoop(){
        return this.audio.loop
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
    }
    toggleLoop(){
        this.audio.loop = !this.audio.loop
        this.set({isLoop: this.audio.loop})
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

        this.set({duration: 0})
    }
    onLoad(){
        this.set({isLoaded: true})
        this.set({duration: this.getDuration()})
        this.setLoaded(true)

        if(this.isEnd && !this.audio.loop){
            this.play()
        }

        this.isEnd = false
    }
    // end
    onEnd(){
        this.set({isPlaying: false})
        this.isEnd = true
        if(!this.audio.loop) this.get().increaseIdx(this.data.length - 1)
    }
    onPlay(){
        this.set({isPlaying: true})
    }
    onTimeupdate(){
        this.set({currentTime: this.getCurrentTime()})
    }
}