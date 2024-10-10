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
import venue from "../src/assets/venue.png";
import b from "../src/b.png";

export default function App() {
  const galleryCarouselRef = useRef(null);
  const eventsCarouselRef = useRef(null);

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
    galleryCarouselRef.current.prev();
  };

  const goToNextGallerySlide = () => {
    galleryCarouselRef.current.next();
  };

  const goToPrevEventsSlide = () => {
    eventsCarouselRef.current.prev();
  };

  const goToNextEventsSlide = () => {
    eventsCarouselRef.current.next();
  };

  return (
    <div className="relative bg-white "> 
    <div className="justify-between block min-h-screen px-4 py-8 bg-customRed lg:flex lg:px-28 lg:py-0">
      <div className ="relative flex justify-center my-auto -top-4"> 
        <img src={hero} alt="hero image" className="h-[380px] lg:h-[540px] w-[340px] lg:w-[420px]" />
      </div>
      <div className="relative left-0 my-14 lg:my-auto lg:-left-24">
        <h2 className="max-w-full lg:max-w-[652px] text-[32px] lg:text-[50px] text-white text-center font-imprima">
          We are Inviting you to our Wedding
        </h2>
        <div className="flex my-10 lg:my-10 mx-auto justify-between font-imprima text-white max-w-[300px] lg:max-w-[480px]">
          <div className="block">
            <h1 className="text-[40px] lg:text-[75px] text-center">61</h1>
            <p className="text-[16px] text-center lg:text-[30px] font-bold text-customPink font-rubik">Days</p>
          </div>
          <div className="block">
            <h1 className="text-[40px] lg:text-[75px] text-center">15</h1>
            <p className="text-[16px] text-center lg:text-[30px] font-bold text-customPink font-rubik">Hours</p>
          </div>
          <div className="block">
            <h1 className="text-[40px] lg:text-[75px] text-center">12</h1>
            <p className="text-[16px] text-center lg:text-[30px] font-rubik font-bold text-customPink">Minutes</p>
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
      <div className=" my-5 bg-Pink2 w-[320px] mx-auto lg:mx-0 lg:w-[400px] h-[310px] lg:h-[360px] flex justify-center">
        <div className="">
          <img src={groom} alt="groom" className=" relative mx-auto -top-14 w-[125px] h-[110px] lg:w-[175px] lg:h-[150px]"/>
          <h3 className=" text-center text-customRed font-inder text-[28px] lg:text-[32px] relative -top-10">The Groom</h3>
          <p className=" relative max-w-[300px] lg:max-w-[350px] text-customRed font-imprima -top-6 lg:-top-0 text-[16px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="my-20 lg:my-5 bg-Pink2 w-[320px] mx-auto lg:mx-0 lg:w-[400px] h-[310px] lg:h-[360px] flex justify-center">
        <div className="">
          <img src={bride} alt="bride" className=" relative mx-auto -top-14 w-[125px] h-[110px] lg:w-[175px] lg:h-[150px]"/>
          <h3 className=" text-center text-customRed font-inder text-[28px] lg:text-[32px] relative -top-10">The Bride</h3>
          <p className="relative max-w-[300px] lg:max-w-[350px] text-customRed font-imprima -top-6 lg:-top-0 text-[16px] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="min-h-screen px-20 mt-8 lg:mt-0">
        <div>
          <h2 className="text-customRed text-[32px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-0 lg:mt-20">Gallery</h2>
        </div>
        <div className="flex justify-center mb-14">
          <img src={border} alt="border" className="w-[120px] lg:h-auto h-[4px]" />
        </div>
        <div className="relative">
          <OwlCarousel ref={galleryCarouselRef} className="owl-theme" {...options}>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img1} alt="image1" className="w-[400px] h-[480px] lg:w-[280px] lg:h-[500px]" />
            </div>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img2} alt="image2" className="w-[400px] h-[480px] lg:w-[280px] lg:h-[500px]" />
            </div>
            <div className="flex justify-center mx-0 lg:mx-4">
              <img src={img3} alt="image3" className="w-[400px] h-[480px] lg:w-[280px] lg:h-[500px]" />
            </div>
          </OwlCarousel>
          <button
            onClick={goToPrevGallerySlide}
            className="absolute -left-16 lg:-left-14 top-[50%] transform -translate-y-1/2 p-5 w-12 h-12 bg-customPink text-white rounded-full"
          >
            <i class="fa-solid fa-chevron-left relative -top-2"></i>
          </button>
          <button
            onClick={goToNextGallerySlide}
            className="absolute -right-16 lg:-right-14 top-[50%] transform -translate-y-1/2 p-5 w-12 h-12 bg-customPink text-white rounded-full"
          >
            <i class="fa-solid fa-chevron-right relative -top-2"></i>
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center h-96 bg-customRed -top-40 lg:-top-0">
        <div className="">
          <h3 className=" text-white my-4 font-inder text-[28px]">Are You Attending?</h3>
          <div className=" bg-white flex my-4 justify-center text-customRed text-[24px] font-inder py-0.5 rounded-3xl">I am attending</div>
        </div>
      </div>
      <div className="min-h-screen px-0 lg:px-20">
        <div>
          <h2 className="text-customRed text-[32px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-0 lg:mt-20">Events</h2>
        </div>
        <div className="flex justify-center mb-14">
          <img src={border} alt="border" className="w-[120px] lg:h-auto h-[4px]" />
        </div>
        <div className="relative">
          <OwlCarousel ref={eventsCarouselRef} className="owl-theme" {...options}>
          <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl lg:w-[280px] w-[280px]">
                <img src={event1} alt="event1" className="h-[350px] w-[400px] lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h3 className="mt-8 text-[28px] text-center font-inder">Mehandi</h3>
                  <p className="mt-2 text-[16px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[16px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[16px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl lg:w-[280px] w-[280px]">
                <img src={event2} alt="event2" className="h-[350px] w-[400px] lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h3 className="mt-8 text-[28px] text-center font-inder">Haldi</h3>
                  <p className="mt-2 text-[16px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[16px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[16px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="block bg-lightPink rounded-3xl lg:w-[280px] w-[280px]">
                <img src={event3} alt="event3" className="h-[350px] w-[400px] lg:w-[300px]" />
                <div className="w-full text-customRed">
                  <h3 className="mt-8 text-[28px] text-center font-inder">Reception</h3>
                  <p className="mt-2 text-[16px] font-imprima text-center">Saturday 28, 2023</p>
                  <p className="font-imprima text-[16px] text-center">02.00pm - 10.00pm</p>
                  <p className="mt-2 text-[16px] text-center mb-10">Sadashiv Peth, Pune</p>
                </div>
              </div>
            </div>
          </OwlCarousel>
          <button
          onClick={goToPrevEventsSlide}
          className="absolute z-50 left-1 lg:-left-10 top-[50%] transform -translate-y-1/2 w-12 h-12 bg-customPink text-white rounded-full"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button
          onClick={goToNextEventsSlide}
          className="absolute z-50 right-1 lg:-right-10 top-[50%] transform -translate-y-1/2 w-12 h-12 bg-customPink text-white rounded-full"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>

        </div>
      </div>
      <div className="min-h-screen ">
      <div>
          <h2 className="text-customRed text-[32px] lg:text-[60px] tracking-normal lg:tracking-wide text-center font-bellefair mt-0 lg:mt-20">Our Story</h2>
        </div>
        <div className="flex justify-center mb-14">
          <img src={border} alt="border" className="w-[120px] lg:h-auto h-[4px]" />
        </div>
        <div className="flex items-center justify-center ">
  <div>
    <div className="relative flex items-center justify-center mb-10">
      <img src={b} alt="left" className="z-10 w-20 h-20 my-auto" />
      <div className="ml-8 lg:ml-20 bg-lightPink min-h-36 lg:min-h-44 w-[260px] lg:w-[420px] px-4 rounded-2xl">
        < h4 className="text-center font-bellefair text-[24px] mt-2">How we met</h4>
        <p className="text-center font-bellefair text-[16px] mt-3 lg;mt-6">
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
        </p>
      </div>
      <div className="absolute left-[36px] top-20 h-full w-[1px] bg-customRed z-0"></div>
    </div>

    <div className="relative flex items-center justify-center mt-10">
      <img src={b} alt="left" className="z-10 w-20 h-20 my-auto" />
      <div className="ml-8 lg:ml-20 bg-lightPink min-h-36 lg:min-h-44 w-[260px] lg:w-[420px] px-4 rounded-2xl">
        <h4 className="text-center font-bellefair text-[24px] mt-2">How we met</h4>
        <p className="text-center font-bellefair text-[16px] mt-3 lg;mt-6">
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
        </p>
      </div>
      <div className="absolute left-[36px] top-20 h-full w-[1px] bg-customRed z-0"></div>
    </div>

    <div className="relative flex items-center justify-center mt-10">
      <img src={b} alt="left" className="z-10 w-20 h-20 my-auto" />
      <div className="ml-8 lg:ml-20 bg-lightPink min-h-36 lg:min-h-44 w-[260px] lg:w-[420px] px-4 rounded-2xl">
        <h4 className="text-center font-bellefair text-[24px] mt-2">How we met</h4>
        <p className="text-center font-bellefair text-[16px] mt-3 lg;mt-6">
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
      <div className="relative top-0 block max-w-full min-h-screen gap-20 px-10 py-10 lg:top-16 lg:px-20 lg:py-0 lg:flex bg-customRed">
        <img src={venue} alt="venue" className="my-auto rounded-xl"/>
        <div className="my-24 lg:my-24">
          <h1 className=" text-[40px] lg:text-[120px] tracking-widest font-bellefair text-white">Venue.</h1>
          <p className=" max-w-full lg:max-w-[450px] my-6 text-[16px] lg:text-[26px] font-inder text-white">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w</p>
          <button className=" text-customRed bg-white font-bellefair text-[24px] px-10 rounded-full my-8 py-1 text-center">Locate</button>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <div>
          <h1 className=" text-[40px] lg:text-[50px] font-bellefair text-center text-customRed">We are excited</h1>
          <p className=" text-[16px] lg:text-[30px] font-bellefair text-customRed text-center my-6 max-w-[300px] lg:max-w-[700px]">s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <div className="flex justify-center mt-10 lg:mt-14">
            <button className=" text-[24px] font-bellefair text-center px-8 rounded-full py-2 lg:py-0.5 bg-customRed text-white">Back to top</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center min-h-16 bg-customRed">
        <p className=" text-white font-bellefair text-[16px] lg:text-[24px] my-auto">A personalised experience with ❤️ by eSubhalekha.com</p>
      </div>
    </div>
  );
}
