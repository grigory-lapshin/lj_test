import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  flex-shrink: 0;
  padding-horizontal: 15;
  padding-vertical: 36;
`;

const Title = styled.Text`
  font-size: 24;
  color: hsl(0, 0%, 55%);
`;

const Divider = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: hsl(0, 0%, 95%);
`;

const Post = styled.Text`
  font-size: 24;
  color: hsl(0, 0%, 55%);
`;

const Content = ({ title, text }) => (
  <Container>
    <Title>{title}</Title>
    <Divider />
    <Post>{text}</Post>
  </Container>
);

export default Content;
