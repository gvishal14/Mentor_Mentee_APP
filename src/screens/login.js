import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const login = ({navigation}) => {
  const handleNext4 = ()=>{
    navigation.navigate('Signup')
  }
    return (
        <View>
            <Image source={require('../assets/login/Group93.png')} style={styles.image} />
            {/* <Image source={require('../assets/login/Lli.png')} style={styles.image} /> */}
            <Text style={styles.text}>Welcome Back, you've been missed!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Id"
                />
                <Image source={require('../assets/login/Vector7.png')} style={styles.icon} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Image source={require('../assets/login/Group2.png')} style={styles.icon} />
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.rememberContainer}>
                    <Image source={require('../assets/login/Rectangle51.png')} style={styles.picture} />
                    <Text style={styles.rememberText}>Keep me signed up</Text>
                </View>
                <Text style={styles.forgotText}>Forgot password</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.rowContainer}>
                <Text style={styles.sign}>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.add} onPress={handleNext4}>
                    <Text style={styles.addition}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    image: {
        marginLeft: 40,
        marginTop: 40,
    },
    text: {
        marginLeft: 40,
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    icon: {
        marginLeft: 5,
    },
    input: {
        flex: 1,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 40,
        marginVertical: 10,
        marginTop: 60,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picture: {
        marginRight: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 10,
    },
    sign: {
        marginRight: 5,
    },
    add: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addition: {
        color: 'black',
        fontWeight: 'bold',
    },
});