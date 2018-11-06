import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import {
  Screen, Scroll, theme, Divider,
} from './UI';
import { addPost, storePost, retrivePost } from './storage';

import Userpic from './Userpic';

import userhead from './assets/userhead.png';

const Header = styled.View`
  flex-flow: row;
  align-items: center;

  padding-vertical: 30;
  padding-horizontal: 15;
`;

const NameBlock = styled.View`
  flex-grow: 0;

  flex-flow: row;
  align-items: center;

  margin-left: 28;

  padding-horizontal: 30;
  padding-vertical: 15;

  background: ${theme.grey300};
  border-radius: 75;
`;

const Userhead = styled.Image`
  height: 30;
  width: 30;
`;

const Name = styled.Text`
  margin-left: 16;

  font-size: 24;
  line-height: 36;
  text-transform: lowercase;
  color: ${theme.blue};
`;

const Content = styled.View`
  flex: 1;
  flex-shrink: 0;
  padding-horizontal: 15;
  padding-bottom: 36;
`;

const TitleInput = styled.TextInput`
  font-size: 24;
  color: ${theme.black};

  margin-bottom: 10;
`;

const PostTextInput = styled.TextInput`
  font-size: 24;
  color: ${theme.black};

  height: 100;
`;

const Submit = styled.TouchableOpacity`
  padding-horizontal: 15;
`;

const SubmitButton = ({ onPress, disabled }) => (disabled ? (
  <Submit onPress={onPress} disabled={disabled}>
    <Ionicons name="md-send" size={26} color={theme.grey600} />
  </Submit>
) : (
  <Submit onPress={onPress}>
    <Ionicons name="md-send" size={26} color={theme.blue} />
  </Submit>
));

export default class Editor extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Post',
    headerRight: (
      <SubmitButton
        onPress={navigation.getParam('savePost')}
        disabled={navigation.getParam('submitDisabled')}
      />
    ),
  });

  state = {
    title: '',
    text: '',
  };

  componentDidMount = async () => {
    const { navigation } = this.props;

    const id = navigation.getParam('id', 'NO-ID');
    if (id !== 'NO-ID') {
      const { title, text } = await retrivePost(id);
      this.setState({ title, text });
    }

    const { title } = this.state;
    const submitDisabled = title === '';

    navigation.setParams({ savePost: this.savePost });
    navigation.setParams({ submitDisabled });
  };

  componentDidUpdate(prevProps, prevState) {
    const { title } = this.state;
    const { title: prevTitle } = prevState;
    const { navigation } = this.props;

    if (title !== '' && title !== prevTitle) {
      navigation.setParams({ submitDisabled: false });
    }

    if (title === '' && title !== prevTitle) {
      navigation.setParams({ submitDisabled: true });
    }
  }

  savePost = () => {
    const { title, text } = this.state;
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    const date = new Date();
    if (id !== 'NO-ID') {
      storePost(id, {
        title,
        text,
        date,
      });
    } else {
      addPost({
        title,
        text,
        date,
      });
    }
    navigation.navigate('List');
  };

  render() {
    const { title, text } = this.state;

    return (
      <Screen>
        <Scroll>
          <Header>
            <Userpic />
            <NameBlock>
              <Userhead source={userhead} />
              <Name>username</Name>
            </NameBlock>
          </Header>
          <Content>
            <TitleInput
              value={title}
              onChangeText={value => this.setState({ title: value })}
              autoFocus
            />
            <Divider />
            <PostTextInput
              value={text}
              onChangeText={value => this.setState({ text: value })}
              multiline
              numberOfLines={10}
            />
          </Content>
        </Scroll>
      </Screen>
    );
  }
}
