import hero from "../src/assets/hero.png";
import border from "../src/assets/border.png";
import groom from "../src/assets/groom.png";
import bride from "../src/assets/bride.png";
import img1 from "../src/assets/img1.png";
import img2 from "../src/assets/img2.png";
import img3 from "../src/assets/img3.png";
import event1 from "../src/assets/event1.png";
import event2 from "../src/assets/event2.png";
import event3 from "../src/assets/event3.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useRef } from "react";

export default function App() {
  const galleryCarouselRef = useRef(null); // Separate ref for gallery carousel
  const eventsCarouselRef = useRef(null); // Separate ref for events carousel

  const options = {
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
    },
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: false,
  };

  const goToPrevGallerySlide = () => {
    galleryCarouselRef.current.prev(); // Move to previous slide in gallery
  };

  const goToNextGallerySlide = () => {
    galleryCarouselRef.current.next(); // Move to next slide in gallery
  };

  const goToPrevEventsSlide = () => {
    eventsCarouselRef.current.prev(); // Move to previous slide in events
  };

  const goToNextEventsSlide = () => {
    eventsCarouselRef.current.next(); // Move to next slide in events
  };

  return (
    <div className="relative bg-white"> 
    <div className="justify-between block min-h-screen px-4 py-8 bg-customRed lg:flex lg:px-28 lg:py-0">
      <div className ="relative flex justify-center my-auto -top-4"> 
        <img src={hero} alt="hero image" className="h-[380px] lg:h-[540px] w-[340px] lg:w-[420px]" />
      </div>
      <div className="relative left-0 my-14 lg:my-auto lg:-left-24">
        <h2 className="max-w-full lg:max-w-[652px] text-[34px] lg:text-[50px] text-white text-center font-imprima">
          We are Inviting you to our Wedding
        </h2>
        <div className="flex my-10 lg:my-10 mx-auto justify-between font-imprima text-white max-w-[300px] lg:max-w-[480px]">
          <div className="block">
            <h2 className="text-[50px] lg:text-[75px] text-center">61</h2>
            <p className="text-[24px] text-center lg:text-[30px] font-bold text-customPink font-rubik">Days</p>
          </div>
          <div className="block">
            <h2 className="text-[50px] lg:text-[75px] text-center">15</h2>
            <p className="text-[24px] text-center lg:text-[30px] font-bold text-customPink font-rubik">Hours</p>
          </div>
          <div className="block">
            <h2 className="text-[50px] lg:text-[75px] text-center">12</h2>
            <p className="text-[24px] text-center lg:text-[30px] font-rubik font-bold text-customPink">Minutes</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center -mt-6">
      <div className="flex justify-center text-[20px] lg:text-[24px] px-8 lg:px-10 py-2 rounded-full bg-customPink text-center text-customRed">
        Get Directions
      </div>
    </div>
    <div className="min-h-screen">
    <div>
      <h2 className="text-customRed text-[32px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-7 lg:mt-20">Gudivada Vari Pelli Sandadi</h2>
    </div>
    <div className="flex justify-center ">
      <img src={border} alt="border" className=" w-[200px] lg:w-auto h-[7px] lg:h-auto" />
    </div>
    <div className="justify-center block gap-32 my-20 lg:flex lg:my-28">
      <div className=" my-5 bg-Pink2 w-[320px] mx-auto lg:mx-0 lg:w-[400px] h-[280px] lg:h-[360px] flex justify-center">
        <div className="">
          <img src={groom} alt="groom" className=" relative mx-auto -top-14 w-[125px] h-[110px] lg:w-[175px] lg:h-[150px]"/>
          <h3 className=" text-center text-customRed font-inder text-[28px] lg:text-[32px] relative -top-10">The Groom</h3>
          <p className=" relative max-w-[300px] lg:max-w-[350px] text-customRed font-imprima -top-6 lg:-top-0 text-[14px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="my-20 lg:my-5 bg-Pink2 w-[320px] mx-auto lg:mx-0 lg:w-[400px] h-[280px] lg:h-[360px] flex justify-center">
        <div className="">
          <img src={bride} alt="bride" className=" relative mx-auto -top-14 w-[125px] h-[110px] lg:w-[175px] lg:h-[150px]"/>
          <h3 className=" text-center text-customRed font-inder text-[28px] lg:text-[32px] relative -top-10">The Bride</h3>
          <p className="relative max-w-[300px] lg:max-w-[350px] text-customRed font-imprima -top-6 lg:-top-0 text-[14px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="min-h-screen px-20">
        <div>
          <h2 className="text-customRed text-[48px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-0 lg:mt-20">Gallery</h2>
        </div>
        <div className="flex justify-center mb-14">
          <img src={border} alt="border" className="w-[200px] lg:h-auto h-[7px]" />
        </div>
        <div className="relative">
          <OwlCarousel ref={galleryCarouselRef} className="owl-theme" {...options}>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img1} alt="image1" className="w-full h-[480px] lg:w-[280px] lg:h-[500px]" />
            </div>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img2} alt="image2" className="w-full h-[480px] lg:w-auto lg:h-[500px]" />
            </div>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img3} alt="image3" className="w-full h-[480px] lg:w-auto lg:h-[500px]" />
            </div>
          </OwlCarousel>
          <button
            onClick={goToPrevGallerySlide}
            className="absolute -left-10 top-[50%] transform -translate-y-1/2 p-5 bg-customPink text-white rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={goToNextGallerySlide}
            className="absolute -right-10 top-[50%] transform -translate-y-1/2 p-5 bg-customPink text-white rounded-full"
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="min-h-screen px-20">
        <div>
          <h2 className="text-customRed text-[48px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-0 lg:mt-20">Events</h2>
        </div>
        <div className="flex justify-center mb-14">
          <img src={border} alt="border" className="w-[200px] lg:h-auto h-[7px]" />
        </div>
        <div className="relative">
          <OwlCarousel ref={eventsCarouselRef} className="owl-theme" {...options}>
          <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl">
                <img src={event1} alt="event1" className="h-[350px] w-full lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h4 className="mt-8 text-[30px] text-center font-inder">Mehandi</h4>
                  <p className="mt-2 text-[15px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[15px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[15px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl">
                <img src={event2} alt="event2" className="h-[350px] w-full lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h4 className="mt-8 text-[30px] text-center font-inder">Haldi</h4>
                  <p className="mt-2 text-[15px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[15px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[15px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl">
                <img src={event3} alt="event3" className="h-[350px] w-[550px] lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h4 className="mt-8 text-[30px] text-center font-inder">Reception</h4>
                  <p className="mt-2 text-[15px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[15px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[15px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
          <button
            onClick={goToPrevEventsSlide}
            className="absolute -left-10 top-[50%] transform -translate-y-1/2 p-5 bg-customPink text-white rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={goToNextEventsSlide}
            className="absolute -right-10 top-[50%] transform -translate-y-1/2 p-5 bg-customPink text-white rounded-full"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
