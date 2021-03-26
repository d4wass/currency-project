import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Cake } from 'assets/company/birthday-cake-solid.svg';
import { ReactComponent as Brain } from 'assets/company/brain-solid.svg';
import { ReactComponent as Cat } from 'assets/company/cat-solid.svg';
import { ReactComponent as Coffee } from 'assets/company/coffee-solid.svg';
import { ReactComponent as Dice } from 'assets/company/dice-solid.svg';
import { ReactComponent as Dna } from 'assets/company/dna-solid.svg';
import { ReactComponent as Drumstick } from 'assets/company/drumstick-bite-solid.svg';
import { ReactComponent as Flask } from 'assets/company/flask-solid.svg';

const StyledLogo = styled.svg`
  height: 60px;
  width: 60px;

  path {
    fill: #fff;
  }
`;

export const companies = [
  {
    logo: 'Cake',
    name: 'Birthday Helpers',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 4,
  },
  {
    logo: 'Brain',
    name: 'Brainiac',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 5,
  },
  {
    logo: 'Cat',
    name: 'Zoology',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 4,
  },
  {
    logo: 'Coffee',
    name: 'Coffee Adicts',
    content:
      'Curabitur suscipit volutpat justo, convallis imperdiet metus vulputate quis. Duis convallis orci id libero sollicitudin, vel pretium est luctus. Nam pharetra nibh quam. Aliquam vehicula sed felis a ultricies. Mauris condimentum lorem quis nulla eleifend, consectetur pulvinar purus pellentesque.',
    rating: 5,
  },
  {
    logo: 'Dice',
    name: 'Dicer',
    content:
      'Curabitur suscipit volutpat justo, convallis imperdiet metus vulputate quis. Duis convallis orci id libero sollicitudin, vel pretium est luctus. Nam pharetra nibh quam. Aliquam vehicula sed felis a ultricies. Mauris condimentum lorem quis nulla eleifend, consectetur pulvinar purus pellentesque.',
    rating: 4,
  },
  {
    logo: 'Dna',
    name: 'Check your mates',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 4,
  },
  {
    logo: 'Drumstick',
    name: 'Drumstick Eaters',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 4,
  },
  {
    logo: 'Flask',
    name: 'Flask Inc.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere dignissim condimentum. Donec magna tellus, bibendum et ullamcorper id, blandit eu nisl. Ut venenatis aliquam elementum. Ut eget ante erat. Mauris ipsum ligula, convallis fringilla quam ac, efficitur tempor sem.',
    rating: 5,
  },
];

export const addLogo = (logo) => {
  switch (logo) {
    case 'Cake':
      return <StyledLogo as={Cake} />;
    case 'Brain':
      return <StyledLogo as={Brain} />;
    case 'Cat':
      return <StyledLogo as={Cat} />;
    case 'Coffee':
      return <StyledLogo as={Coffee} />;
    case 'Dice':
      return <StyledLogo as={Dice} />;
    case 'Dna':
      return <StyledLogo as={Dna} />;
    case 'Drumstick':
      return <StyledLogo as={Drumstick} />;
    case 'Flask':
      return <StyledLogo as={Flask} />;
    default:
      return <div />;
  }
};
