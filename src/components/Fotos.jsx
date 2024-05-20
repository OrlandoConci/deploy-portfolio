import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function Fotos({array}) {
    console.log("props: ", array);

    return(
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
            {array ? array.map(link => <img 
                    src={link}
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%',
                    }}
                />)
            : <h1 className="text-center py-10">Error al cargar la imágen</h1>}
            
        </Carousel>
    )
}

export default Fotos;