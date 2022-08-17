import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import img1 from "../../assets/imagens/do-it.png";
import img2 from "../../assets/imagens/tic.png";
import img3 from "../../assets/imagens/easymovie.png";
import img4 from "../../assets/imagens/organizze.png";
import img5 from "../../assets/imagens/refri.png";
import img6 from "../../assets/imagens/bv.png";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Data = [
  { img: img1, title: "Do It", url1: "https://do-it-react.vercel.app/" },
  {
    img: img2,
    title: "Tic",
    url2: "https://tic-tac-toe-react.vercel.app/",
  },
  {
    img: img3,
    title: "EasyMovie",
    url3: "https://easy-movie-react.vercel.app/",
  },

  {
    img: img4,
    title: "Organizze",
    url4: "https://organizze-react.vercel.app/",
  },
  {
    img: img5,
    title: "Refri",
    url5: "https://refri-react.vercel.app/",
  },
  {
    img: img6,
    title: "BV",
    url6: "https://bv-react.vercel.app/",
  },
];

export default function SwiperComponent() {
  return (
    <Box
      maxW={"1360px"}
      border={"1px solid red"}
      margin={{ base: "initial", md: "auto" }}
      align={"center"}
      justify={"space-around"}
      
      bg={"#003140"}
      gap={20}
    >
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        style={{ width: "80%", height: "80%" }}
      >
        {Data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                padding: "0",
              }}
              src={item}
              alt={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
