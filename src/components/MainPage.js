import React from "react"
import {Carousel} from "react-bootstrap"

function MainPage(props){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
    return(
        <Carousel variant="white">
            {props.list.map(x =>{
          return(
            <Carousel.Item interval={2500}>

                <img 
                    className="d-block cimages"
                    src ={`https://storage.googleapis.com/mp2k-images/images/c${x.img}.jpg`}
                    alt={x.title}/>

                 <Carousel.Caption className="caption">
                    <h3>{x.title}</h3>
                </Carousel.Caption>

            </Carousel.Item>
  
          )
      })}

        </Carousel>
    
    )

}


export default MainPage