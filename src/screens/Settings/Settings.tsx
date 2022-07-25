import React from 'react';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';

async function logout() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <Button title="Sign out" onPress={() => logout()} />
    </View>
  );
};

export default Settings;
