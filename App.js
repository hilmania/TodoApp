import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Picker } from 'react-native';

class App extends React.Component {
  state = {
    text: "",
    todo: [],
    done: 'OnProgress',
  }

  tambahTodo = () => {
    var newTodo = {
      text:this.state.text,
      done:this.state.done
    };
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: "", done: 'OnProgress'});
  }

  hapusTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  tampilTodos = () => {
    return this.state.todo.map(t=> {
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.hapusTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return (
      <View style={styles.generalStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.header}>Todo App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}/>
          <Picker
            selectedValue={this.state.done}
            style={styles.inputStyle}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({done: itemValue})
            }>
            <Picker.Item label="OnProgress" value="OnProgress" />
            <Picker.Item label="Done" value="Done" />
          </Picker>
          <Button
            style={styles.buttonStyle}
            title="Tambah Todo"
            color="black"
            onPress={this.tambahTodo}/>
          <View style={{marginTop: 100}}/>
            {this.tampilTodos()}
        </View>
      </View>
    );
  }  
}

const styles = {
  generalStyle: {
    backgroundColor: "grey",
    flex: 1
  },
  innerStyle: {
    marginTop: 30,
    alignItems: 'stretch',
    justifyContent: "center",
    margin: 10,
  },
  inputStyle: {
    height: 40,
    marginTop: 30,
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 1
  },
  buttonStyle: {
    marginTop: 40,
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'white'
  }
}

export default App;