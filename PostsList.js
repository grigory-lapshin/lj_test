import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Button, FlatList,
} from 'react-native';
import styled from 'styled-components';
import format from 'date-fns/format';

import { Screen, Scroll } from './UI';
import { retrievePostsList } from './storage';
import Post from './Post';

class PostsList extends React.Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'List',
    headerRight: <Button onPress={() => navigate('Editor')} title="New" />,
    headerBackTitle: null,
  });

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
    const {
      navigation: { navigate },
    } = this.props;
    return (
      <Screen>
        <Scroll>
          {isLoaded ? (
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={posts}
              keyExtractor={(e, index) => String(index)}
              renderItem={({
                item: {
                  id, title, text, date,
                },
              }) => Post(id, title, text, date, navigate)
              }
            />
          ) : (
            <Text>no data</Text>
          )}
        </Scroll>
      </Screen>
    );
  }
}

export default PostsList;
