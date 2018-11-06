import React from 'react';
import {
  StyleSheet, Text, View, AsyncStorage, Button, SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import { createStackNavigator } from 'react-navigation';
import PostEditor from './PostEditor';
import PostsList from './PostsList';

export default createStackNavigator(
  {
    List: PostsList,
    Editor: PostEditor,
  },
  {
    initialRouteName: 'List',
  },
);
