import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/StyledComponents';
import { companies } from 'utils/Companies';
import Header from 'Components/atoms/Header';
import Paragraph from 'Components/atoms/Paragraph';
import SliderControls from 'Components/molecules/SliderControls';
import Slide from 'Components/molecules/Slide';

const StyledWrapper = styled(Wrapper)`
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  height: ${({ text }) => (text ? '20vh' : '100%')};
  align-items: ${({ text }) => text && 'center'};
  overflow: ${({ slides }) => slides && 'hidden'};
`;

const StyledParagraph = styled(Paragraph)`
  width: 60%;
`;

const ReviewSection = () => (
  <StyledWrapper>
    <Header>Testemonials</Header>
    <StyledWrapper text row>
      <StyledParagraph>
        Our core values are at the heart of all that we do. They are integrated into our dauly work
        lives and help us to remember our customers alway comes first, the last thank you should
        always come from us
      </StyledParagraph>
      <SliderControls />
    </StyledWrapper>
    <StyledWrapper row slides>
      {companies.map((item) => (
        <Slide item={item} key={item.name} />
      ))}
    </StyledWrapper>
  </StyledWrapper>
);

export default ReviewSection;
