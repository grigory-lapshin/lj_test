import React from 'react';
import { MaskedViewIOS } from 'react-native';
import styled from 'styled-components';

import userpic from './assets/userpic.png';

const Pic = styled.Image`
  height: 85;
  width: 85;
`;

const Mask = styled.View`
  background-color: transparent;
  flex: 0;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.View`
  margin-top: 85;
  height: 85;
  width: 85;
  border-radius: 43;
  background: black;
`;

const Userpic = () => (
  <MaskedViewIOS
    style={{ flex: 0 }}
    maskElement={(
      <Mask>
        <Circle />
      </Mask>
)}
  >
    <Pic source={userpic} />
  </MaskedViewIOS>
);

export default Userpic;
