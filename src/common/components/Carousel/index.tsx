import { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styles from './Carousel.module.scss';

type CarouselProps = {
  slides: Array<string>
};

export default function Carousel({ slides }: CarouselProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(slides.length);

  function nextSlide(event: React.SyntheticEvent) {
    event.preventDefault();
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  }

  const prevSlide = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  // const updateCurrentImage = (event) => {
  //   event.preventDefault();
  //   const {name} = event.target;
  //   setCurrent(name);
  // };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.carouselImage}>
          <Image
            src={slides[slideIndex]}
            alt="Home page photo not found"
            fill
            priority
            sizes="300px"
          />
        </div>
        <div className={styles.carouselControls}>
          <button
            onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          {/* <div className='carousel-indicator-div'>
            {
              slides.map((slide, index) => {
                return (
                  <div
                    className={`carousel-indicator ${index === slideIndex ? 'current-indicator' : null}`}
                    key={index}
                    name={index}
                  // onClick={updateCurrentImage}
                  />
                )
              })
            }
          </div> */}
          <button
            onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}