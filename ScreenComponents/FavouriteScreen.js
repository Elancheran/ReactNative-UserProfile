import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import UserItem from './UserItem';
import { useSelector, useDispatch } from 'react-redux';
import { setLikedUsers } from '../Redux/Actions'


export default function FavouriteScreen({ users }) {

  useEffect(() => {
     console.log('userItem', users)
}, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => <UserItem user={item} />}
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  }
});