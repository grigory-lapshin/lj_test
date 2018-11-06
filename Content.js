import React from 'react';
import styled from 'styled-components';

import { Divider, theme } from './UI';

const Container = styled.View`
  flex: 1;
  flex-shrink: 0;
  padding-horizontal: 15;
  padding-vertical: 36;
`;

const Title = styled.Text`
  font-size: 24;
  color: ${theme.grey800};
`;

const Post = styled.Text`
  font-size: 24;
  color: ${theme.grey800};
`;

const Content = ({ title, text }) => (
  <Container>
    <Title>{title}</Title>
    <Divider />
    <Post>{text}</Post>
  </Container>
);

export default Content;
