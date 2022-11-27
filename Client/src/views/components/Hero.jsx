import { useState } from 'react';
import arrow from '../../assets/arrow_light.svg'
import SliderCard from './SliderCard';

const sliderContents = [
  {
    id: 1,
    title: "Unlock the power of your people", 
    description: "PoLearn Business is trusted by 12.5K+ companies around the world", 
    link: "Request a demo",
    url:""
  },
  {
    id: 2,
    title: "Unlock your to people", 
    description: "PoLearn Business is trusted by 12.5K+ companies around the world", 
    link: "Request a demo",
    url:""
  }
]


const Hero = () => {
  const [index, setIndex] = useState(0)
  const [slide1Class, setSlide1Class ] = useState("slide-content active")
  const [slide2Class, setSlide2Class ] = useState("slide-content")
  const [slideWrapperClass, setSlideWrapperClass ] = useState("slider-bg-wrapper")
  const [slide1, setSlide1] = useState(sliderContents[0])
  const [slide2, setSlide2] = useState(sliderContents[1])

  const setActive = (id) => { 
    if(id === 1){
      setSlide1Class("slide-content active")
      setSlide2Class("slide-content")
    } else {
      setSlide1Class("slide-content")
      setSlide2Class("slide-content active")
    }
  }

  const setWrapperActive = (id) => {
    setSlideWrapperClass(`slider-bg-wrapper active-${ id }`)
  }

  const slide = (e) => {
    let sender = e.target
    switch (sender.id) {
      case 'right-arrow':
        moveRight()
        break
      case 'left-arrow':
        moveLeft()
        break
      default:
        break;
    }
  }

  const moveLeft = () => {  
    
    if(index > 0){
      if(index % 2 === 0){
        setSlide2(sliderContents[index - 1])
        setActive(2)
      }
      else{
        setSlide1(sliderContents[index - 1])
        setActive(1)
      }
      setWrapperActive(index - 1)
      setIndex(index - 1)
    }
  }

  const moveRight = () => { 
    if(index < sliderContents.length - 1){
      if(index % 2 === 0){
        setSlide2(sliderContents[index + 1])
        setActive(2)
      }
      else{
        setSlide1(sliderContents[index + 1])
        setActive(1)
      }
      setWrapperActive(index + 1)
      setIndex(index + 1)
    }
  }

  return ( 
    <>
    <section className="hero">
      <div className="container">
        <div className="hero">
          <div className="slider">
            <div className={ slideWrapperClass }>
              {
                sliderContents.map((s, i) => (
                  <div
                    style={{
                      backgroundImage: `url(/slide_${i + 1}.jpg)`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                    key={ s.id } className={ "slide-bg slide-bg-" + i }>
                  </div>
                ))
              }
            </div>
            <div className="slider-cards">
              <SliderCard slide={ slide1 } className={ slide1Class }/>
              <SliderCard slide={ slide2 } className={ slide2Class }/>
            </div>
          </div>
          <div className="filter"></div>
          <button className="left" id="left-arrow" onClick={ slide }><img id="left-arrow" src={ arrow } alt="" /></button>
          <button className="right" id="right-arrow" onClick={ slide }><img id="right-arrow" src={ arrow } alt="" /></button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero;
