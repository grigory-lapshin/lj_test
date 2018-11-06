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
