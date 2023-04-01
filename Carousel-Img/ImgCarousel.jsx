import './default.scss'
import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export const CarouselContainer = (props) => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const rightHandleEvent = () => {
        setSliderIndex(sliderIndex + 1)
        if (sliderIndex + 1 >= calculateSliderPage()) setSliderIndex(0)
    }
    const leftHandleEvent = () => {
        const itemCount = document.querySelector('.img-previews').children.length
        setSliderIndex(sliderIndex - 1)
        if (sliderIndex - 1 < 0) {
            setSliderIndex(calculateSliderPage() - 1)
        }
    }

    const calculateSliderPage = () => {
        const itemCount = document.querySelector('.img-previews').children.length
        const { itemPerScreen } = props

        return Math.ceil(itemCount / itemPerScreen)
    }

    return (
        <div className={'img-carousel'}>
            <div className={'img-preview'}>
                <img src={props.children[0].props.src}/>
            </div>
            <div className={'preview-container'}>
                <div className={'handle-left handle'} onClick={leftHandleEvent}>
                    <IoChevronBack />
                </div>
                <div className={'img-previews'} style={{ transform: `translateX(calc(${sliderIndex} * -100%))` }}>
                    {React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { itemPerScreen: props.itemPerScreen });
                    })}
                </div>
                <div className={'handle-right handle'} onClick={rightHandleEvent}>
                    <IoChevronForward />
                </div>
            </div>
        </div>
    )
}

export const CarouselItem = (props) => {
    const setActiveElm = (index) => {
        const previews = document.querySelectorAll('.preview')
        previews.forEach(prev => prev.classList.remove('active'))

        const activeElm = document.querySelector(`.elm-${index}`)
        activeElm.classList.add('active')
    }
    const targetActive = (src, index) => {
        const imgPreview = document.querySelector('.img-preview img')

        imgPreview.src = src
        setActiveElm(index)
    }

    return (
        <img src={props.src}
             onLoad={() => setActiveElm(0)} className={"preview elm-" + props.index}
             data-index={props.index}
             onClick={() => targetActive(props.src, props.index)}
             style={{ maxWidth: `calc(100% / ${props.itemPerScreen})` }}
        />
    );
}