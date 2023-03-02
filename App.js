import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Track your Goals </Text>
      <View  style={styles.inputView}>
        <TextInput style={styles.textInput}
          value=""
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button style={styles.addButton} title="Add" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInput:{
    borderWidth:1,
    borderColor: '#ccc',
    width: '80%',
  },
  addButton:{
    borderRadius:'50%'
  },
  inputView:{
    width: '80%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
