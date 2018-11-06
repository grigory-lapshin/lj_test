import { AsyncStorage } from 'react-native';

export const storePost = async (id, value) => {
  try {
    await AsyncStorage.setItem(id, JSON.stringify(value, null));
  } catch (error) {
    console.log(error.message);
  }
};

export const retrivePost = async (id) => {
  try {
    const post = await AsyncStorage.getItem(id);
    if (post !== null) {
      const value = JSON.parse(post);
      return { ...value, id };
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addPost = async (value) => {
  const now = new Date();
  const id = now.valueOf();
  try {
    await storePost(String(id), value);
  } catch (error) {
    console.log(error.message);
  }
};

export const retrieveIds = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.log(error.message);
  }
};

export const retrievePostsList = async () => {
  try {
    const keys = await retrieveIds();
    const postsRaw = await AsyncStorage.multiGet(keys);
    const posts = postsRaw.reduce((acc, i) => {
      const id = i[0];
      const value = JSON.parse(i[1]);
      const post = { ...value, id };
      return [...acc, post];
    }, []);
    console.log('retrivePosts', posts);
    return posts;
  } catch (error) {
    console.log(error.message);
  }
};

export default retrievePostsList;

export const clearData = async () => {
  const keys = await AsyncStorage.getAllKeys();
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.log(error.message);
  }
};
