import LoadingContainer from './components/LoadingContainer'

export default function Home(){
  
    const homeClass = 'w-screen h-screen absolute'

    return(
        <div className={homeClass}>

            <LoadingContainer />
            
        </div>
    )
}
