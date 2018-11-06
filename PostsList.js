import React from 'react';
import {
  StyleSheet, Text, View, TextInput, AsyncStorage, Button, FlatList,
} from 'react-native';
import styled from 'styled-components';
import format from 'date-fns/format';

import { Screen, Scroll } from './UI';
import { retrievePostsList } from './storage';

const Container = styled.View`
  border: 1px solid green;
  flex-grow: 1;
  flex-shrink: 0;
`;

const Post = (id, title, text, date, navigate) => (
  <Container>
    <Text>{title}</Text>
    <Text>{text}</Text>
    {date ? <Text>{format(date)}</Text> : null}
    <Button
      title="Edit"
      onPress={() => navigate('Editor', {
        id,
      })
      }
    />
  </Container>
);

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
