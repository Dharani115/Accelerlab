import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Alert } from "react-native";

const UselessTextInput = () => {
  const [text] = React.useState(null);
  const [password] = React.useState(null);
  const [email] = React.useState(null);

  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Name"


      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Email"
        placeholderTextColor="red"
        keyboardType="email-address"
      />
       <TextInput
        style={styles.input}
        value={text}
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        keyboardType="default"
        returnKeyType='go'
        secureTextEntry
        autoCorrect={false}
      />
      <View style={styles.flex}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop:50,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex:{
    padding: 30,
    margin:10,
  }
});

export default UselessTextInput;