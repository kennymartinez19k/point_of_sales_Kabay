import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import { useTranslation } from 'react-i18next';
import { addUser, changePassword, changeUser } from '../actions/userAction'



class Button extends React.Component {
  render() {
    const { onPress, title = 'Save' } = this.props;
    // const { t } = useTranslation();
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Button</Text>
        </Pressable>
      );
    }
 }
class Login extends React.Component {
   render() {
    // const { t } = useTranslation();
   
     
     return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login.png')}
        />
        <Text>Lista {Object.keys(this.props)}</Text>
        <Text>Lista {this.props.user.users}</Text>
        <Text>{this.props.user.username}</Text>
        <TextInput
          style={styles.TextInput}
          // placeholder={t('login:user')}
          onChangeText={text => this.props.changeUser(text)} value={this.props.user.username}
        />
        <TextInput
          style={styles.TextInput}
          // placeholder={t('login:password')}
          onChangeText={text => this.props.changePassword(text)} value={this.props.user.password}
        />
        <StatusBar style="auto" />
        <Button
          // title={t('login:login')}
          onPress={() => this.props.addUser()}
        />
    </View>
     );
   }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    subtitle: {
      fontSize: 16,
      color: 'gray',
  
    },
    titleHelper:{
      fontSize: 13,
      color: '#a9a9a9',
      marginTop: 40,
      marginBottom: 10
    },
    TextInput:{
      width: '80%',
      height: 50,
      padding: 10,
      paddingStart: 20,
      backgroundColor: '#fff',
      color: '#333',
      marginTop: 15,
      borderWidth: 1,
      borderColor: '#ccc'
      
    },
    logo:{
      marginTop: 20,
      width: 200,
      height: 50
  
    },
    button:{
      padding: 10,
      borderRadius: 10,
      width: 200,
      marginTop: 20,
      backgroundColor: '#6F70FF',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    text:{
      color: '#fff'
    },
    location:{
      marginBottom: 10,
    }
  });

  const mapStateToProps = (state) => {
    const { user } = state
    return { user }
  };

  function mapDispatchToProps(dispatch){
    return {
      addUser: bindActionCreators(addUser, dispatch),
      changePassword: bindActionCreators(changePassword, dispatch),
      changeUser: bindActionCreators(changeUser, dispatch),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
