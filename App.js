import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

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
});

export default UselessTextInput;