import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Button,
} from 'react-native';
import styled from 'styled-components';

import { addPost } from './storage';

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
  state = {
    title: '',
    text: '',
  };

  savePost = () => {
    const { title, text } = this.state;
    const date = new Date();
    addPost({ title, text, date });
  };

  render() {
    const { title, text } = this.state;
    return (
      <Container>
        <TitleInput value={title} onChangeText={value => this.setState({ title: value })} />
        <PostTextInput
          value={text}
          onChangeText={value => this.setState({ text: value })}
          multiline
          numberOfLines={10}
        />
        <Button title="submit" onPress={this.savePost} />
      </Container>
    );
  }
}
