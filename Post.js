import React from 'react';
import { Text, MaskedViewIOS } from 'react-native';
import styled from 'styled-components';
import format from 'date-fns/format';

import Content from './Content';

import userpic from './assets/userpic.png';
import userhead from './assets/userhead.png';

const Container = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
`;

const Header = styled.View`
  flex-flow: row;
  align-items: center;

  padding-vertical: 30;
  padding-horizontal: 15;

  background: hsl(0, 0%, 95%);
`;

const Userpic = styled.Image`
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

const Userhead = styled.Image`
  height: 30;
  width: 30;
`;

const Info = styled.View`
  margin-left: 18;
  flex-flow: column;
  flex-grow: 10;
`;

const NameBlock = styled.View`
  flex-flow: row;
  align-items: center;
`;

const Name = styled.Text`
  margin-left: 16;

  font-size: 24;
  line-height: 36;
  text-transform: uppercase;
  color: lightblue;
`;

const PubDate = styled.Text`
  margin-top: 8;

  font-size: 24;
  line-height: 24;
  color: hsl(0, 0%, 65%);
`;

const EditButton = styled.TouchableOpacity``;

const ThreeDots = styled.Text`
  font-size: 20;
  letter-spacing: 2;
  line-height: 16;
  color: hsl(0, 0%, 65%);

  transform: rotate(90deg);
`;

const Post = (id, title, text, date, navigate) => (
  <Container>
    <Header>
      <MaskedViewIOS
        maskElement={(
          <Mask>
            <Circle />
          </Mask>
)}
      >
        <Userpic source={userpic} />
      </MaskedViewIOS>
      <Info>
        <NameBlock>
          <Userhead source={userhead} />
          <Name>USERNAME</Name>
        </NameBlock>
        {date ? <PubDate>{format(date, ' MMM DD YYYY, HH:MM')}</PubDate> : null}
      </Info>
      <EditButton
        onPress={() => navigate('Editor', {
          id,
        })
        }
      >
        <ThreeDots>•••</ThreeDots>
      </EditButton>
    </Header>
    <Content title={title} text={text} />
  </Container>
);

export default Post;
