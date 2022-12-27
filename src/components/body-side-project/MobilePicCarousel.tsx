import { useEffect, useState } from "react";
import styled from "styled-components";

/* Side Project > Picture Carousel - Mobile */
const MobilePicCarousel = ({ carouselList }: { carouselList: string[] }) => {
  const [count, setCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);
  const carouselLength = carouselList.length;

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCount((prev) => (prev === carouselLength - 1 ? 0 : prev + 1));
        setIsFinal(count === carouselLength - 1);
      },
      count === 0 ? 100 : 5000
    );

    return () => {
      clearInterval(timer);
    };
  }, [count, carouselLength]);

  return (
    <CarouselWrap>
      <CarouselContainer>
        <CarouselItems isFinal={isFinal} count={count}>
          {carouselList.map((item, index) => (
            <CarouselItem src={item} key={index} />
          ))}
        </CarouselItems>
      </CarouselContainer>
    </CarouselWrap>
  );
};

export default MobilePicCarousel;

const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
`;

const CarouselItems = styled.div<{ isFinal: boolean; count: number }>`
  transition: ${(props) => (props.isFinal ? "" : `transform 0.7s ease-in`)};
  transform: ${(props) => `translateX(-${props.count * 100}%)`};
  display: flex;
  flex-direction: row;
`;

const CarouselItem = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
`;
