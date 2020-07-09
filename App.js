import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TextInput, Alert } from 'react-native';
import Header from './header';
import Questions from './questions';

export default function App() {
  const [questions,setQuestions] = useState([
    {text: '1+1',  key: '1'},
    {text: '7x3',  key: '2'},
    {text: '21/4', key: '3'},
    {text: '6%4',  key: '4'},
  ]);
  const [answers, setAnswers] = useState([
    {text: '=2',    key:'1'},
    {text: '=21',   key:'2'},
    {text: '=5.25', key:'3'},
    {text: '=1',    key:'4'},
  ]);
  const [ans1, setans1] = useState();
  const [ans2, setans2] = useState();
  const [ans3, setans3] = useState();
  const [ans4, setans4] = useState();

  const checkAnswers = ( val1, val2, val3, val4 ) => {
    if (val1=="2" && val2=="21" && val3=="5.25" && val4=='1'){
      Alert.alert(
        "Your Score:","4/4",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
    else{
      Alert.alert(
        "Your Score:","Failed!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
      <View style={styles.questions}>
        <Text>Example: 2+3=6</Text>
        <Text>TYPE ANSWERS IN THE SPACE BELOW</Text>
        <View style={styles.list}>
          <FlatList  
            data={questions}
            renderItem={({ item }) => (
              <Questions Qs={item}/>
            )}
          />
        <View style={styles.questions}>
          <Text>ANSWER FOR QUESTION 1</Text>
          <TextInput style={styles.input} placeholder="Answer Q1 here" onChangeText={text => setans1(text)}></TextInput>
          <Text>ANSWER FOR QUESTION 2</Text>
          <TextInput style={styles.input} placeholder="Answer Q2 here" onChangeText={text => setans2(text)}></TextInput>
          <Text>ANSWER FOR QUESTION 3</Text>
          <TextInput style={styles.input} placeholder="Answer Q3 here" onChangeText={text => setans3(text)}></TextInput>
          <Text>ANSWER FOR QUESTION 4</Text>
          <TextInput style={styles.input} placeholder="Answer Q4 here" onChangeText={text => setans4(text)}></TextInput>
          <Button onPress={() => checkAnswers(ans1,ans2,ans3,ans4)} title="CHECK ANSWERS" />
        </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questions: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10 
  },
  list: {
    marginTop: 20,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1
  }
});
