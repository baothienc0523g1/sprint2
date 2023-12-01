import {useEffect} from "react";
import '../../style/banner.css'

export default function Banner() {
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    let slideIndex = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, [])

    // Next/previous controls
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }


    return (
        <div className="banner">
            <>
                <div className="slideshow-container">
                    <div className="mySlides zz-fade">
                        <img src="https://assets.intleflorist.com/site/in12900001/Homepage/banner3.jpg"
                             style={{width: "100%"}}/>
                    </div>
                    <div className="mySlides zz-fade">
                        <img src="https://assets.intleflorist.com/site/in12900001/Homepage/banner2.jpg"
                             style={{width: "100%"}}/>
                    </div>
                    <div className="mySlides zz-fade">
                        <img src="https://assets.intleflorist.com/site/in12900001/Homepage/banner1.jpg"
                             style={{width: "100%"}}/>
                    </div>
                    <a className="prev" onClick={() => plusSlides(-1)}>

                    </a>
                    <a className="next" onClick={() => plusSlides(1)}>

                    </a>
                </div>
                <br/>
                <div style={{textAlign: "center"}}>
                    <span className="dot" onClick={() => currentSlide(1)}/>
                    <span className="dot" onClick={() => currentSlide(2)}/>
                    <span className="dot" onClick={() => currentSlide(3)}/>
                </div>
            </>

        </div>
    )
}
