import Button from "@/components/public/Button"
import PlayShape from "@/components/shapes/PlayShape"
import NextShape from "@/components/shapes/nextShape"


const ControlButtonBox = () => {
    const buttonBoxClass = 'control-button-box w-full h-[30%] flex justify-center items-center relative drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] gap-[10px]'

    // buttons
    const buttonPublicClass = ' aspect-square h-full'

    // play button
    const playButtonClass = 'control-play-button pl-[7.5px] pr-[2.5px] py-[5px] hover:opacity-[0.6]' + buttonPublicClass

    // previous button
    const prevButtonClass = 'control-prev-button scale-x-[-1] p-[11px]' + buttonPublicClass

    // next button
    const nextButtonClass = 'control-next-button p-[11px]' + buttonPublicClass


    return(
        <div
            className={buttonBoxClass}
        >

            <Button
                className={prevButtonClass}
            >
                <NextShape />
            </Button>

            <Button
                className={playButtonClass}
            >
                <PlayShape />
            </Button>

            <Button
                className={nextButtonClass}
            >
                <NextShape />
            </Button>

        </div>
    )
}


export default ControlButtonBox