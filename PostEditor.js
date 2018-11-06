import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Button,
} from 'react-native';
import styled from 'styled-components';

import { Screen, Scroll } from './UI';
import { addPost, storePost, retrivePost } from './storage';

const Container = styled.View`
  margin-bottom: 30;
`;

const TitleInput = styled.TextInput`
  border: 1px solid;

  margin-bottom: 10;
`;

const PostTextInput = styled.TextInput`
  border: 1px solid;

  height: 100;
`;

export default class Editor extends React.Component {
  static navigationOptions = {
    title: 'New Post',
    headerRight: <Button onPress={this.savePost} title="Submit" />,
  };

  state = {
    isLoaded: false,
    title: '',
    text: '',
    date: '',
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    if (id !== 'NO-ID') {
      const { title, text, date } = await retrivePost(id);
      this.setState({ title, text, date });
    }
  };

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
          <Container>
            <TitleInput value={title} onChangeText={value => this.setState({ title: value })} />
            <PostTextInput
              value={text}
              onChangeText={value => this.setState({ text: value })}
              multiline
              numberOfLines={10}
            />
          </Container>
        </Scroll>
      </Screen>
    );
  }
}
