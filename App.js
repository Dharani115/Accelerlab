import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        Welcome to the very start of your React Native journey!
         If you're looking for environment setup instructions, 
         they've moved to their own section. Continue reading for
          an introduction to the documentation, Native Components,
          React, and more!
          </Text>
          <Text style={styles.text}>
          Many different kinds of people use React Native: from 
          advanced iOS developers to React beginners, to people 
          getting started programming for the first time in their 
          career. These docs were written for all learners, no matter 
          their experience level or background.
          </Text>
          <Text style={styles.text}>
          How to use these docs
          You can start here and read through these docs linearly 
          like a book; or you can read the specific sections you need. 
          Already familiar with React? You can skip that section—or 
          read it for a light refresher.

        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    paddingTop: 50,
  },
});

export default App;