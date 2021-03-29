import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/StyledComponents';
import Header from 'Components/atoms/Header';
import Paragraph from 'Components/atoms/Paragraph';
import SliderControls from 'Components/molecules/SliderControls';
import Slide from 'Components/molecules/Slide';
import { companies } from 'utils/Companies';
import gsap from 'gsap';

const StyledWrapper = styled(Wrapper)`
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  height: ${({ text }) => text && '20vh'};
  align-items: ${({ text }) => text && 'center'};
  overflow: ${({ slides }) => slides && 'hidden'};
`;

const StyledParagraph = styled(Paragraph)`
  width: 60%;
`;

const ReviewSection = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    // const slides = wrapper.current.childNodes;
    // const widthSlide = slides[0].clientWidth
    console.log(wrapper.current.childNodes);

    gsap.set([wrapper.current.childNodes], { autoAlpha: 1 });
  });

  return (
    <StyledWrapper>
      <Header>Testemonials</Header>
      <StyledWrapper text row>
        <StyledParagraph>
          Our core values are at the heart of all that we do. They are integrated into our dauly
          work lives and help us to remember our customers alway comes first, the last thank you
          should always come from us
        </StyledParagraph>
        <SliderControls wrapper={wrapper} />
      </StyledWrapper>
      <StyledWrapper row slides ref={wrapper}>
        {companies.map((item) => (
          <Slide item={item} key={item.name} />
        ))}
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default ReviewSection;
