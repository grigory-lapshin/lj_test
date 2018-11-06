import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { theme } from './UI';

const NewButton = styled.TouchableOpacity`
  position: absolute;
  right: 39;
  bottom: 39;

  align-items: center;
  justify-content: center;

  height: 74;
  width: 74;
  border-radius: 37;
  background: ${theme.blue};
`;

export default ({ onPress }) => (
  <NewButton onPress={onPress}>
    <Ionicons name="md-create" size={26} color="#fff" />
  </NewButton>
);
