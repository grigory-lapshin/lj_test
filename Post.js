import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';

import { Divider, theme } from './UI';

import Content from './Content';
import userhead from './assets/userhead.png';
import Userpic from './Userpic';

const Container = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
`;

const Header = styled.View`
  flex-flow: row;
  align-items: center;

  padding-vertical: 30;
  padding-horizontal: 15;

  background: ${theme.grey300};
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
  color: ${theme.blue};
`;

const PubDate = styled.Text`
  margin-top: 8;

  font-size: 24;
  line-height: 24;
  color: ${theme.grey600};
`;

const EditButton = styled.TouchableOpacity``;

const ThreeDots = styled.Text`
  font-size: 20;
  letter-spacing: 2;
  line-height: 16;
  color: ${theme.grey600};

  transform: rotate(90deg);
`;

const Post = (id, title, text, date, navigate) => (
  <Container>
    <Header>
      <Userpic />
      <Info>
        <NameBlock>
          <Userhead source={userhead} />
          <Name>USERNAME</Name>
        </NameBlock>
        {date ? <PubDate>{format(date, ' MMM DD YYYY, hh:mm')}</PubDate> : null}
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
