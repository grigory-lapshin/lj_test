import React from 'react';
import {
  StyleSheet, Text, View, AsyncStorage, Button, SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import PostEditor from './PostEditor';
import PostsList from './PostsList';

const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Scroll = styled.ScrollView`
  flex: 1;
`;

export default class App extends React.Component {
  state = {
    isLoading: true,
    postsIds: null,
    posts: null,
  };

  render() {
    return (
      <Screen>
        <Scroll>
          <Text>hello world</Text>
          <PostEditor />
          <PostsList />
        </Scroll>
      </Screen>
    );
  }
}

//
