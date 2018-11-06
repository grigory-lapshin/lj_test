import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Button, FlatList,
} from 'react-native';
import styled from 'styled-components';

import { retrievePostsList } from './storage';

const Container = styled.View`
  border: 1px solid green;
  flex: 1;
`;

const Post = (title, text) => (
  <Container>
    <Text>{title}</Text>
    <Text>{text}</Text>
  </Container>
);

class PostsList extends React.Component {
  state = {
    isLoaded: false,
    posts: null,
  };

  componentDidMount = async () => {
    const posts = await retrievePostsList();
    console.log('posts', posts);
    if (Object.prototype.toString.call(posts) === '[object Array]') {
      this.setState({ posts, isLoaded: true });
    }
  };

  render() {
    const { isLoaded, posts } = this.state;
    return isLoaded ? (
      <FlatList
        data={posts}
        renderItem={({ item: { title, text } }) => Post(title, text)}
      />
    ) : (
      <Text>no data</Text>
    );
  }
}

export default PostsList;
