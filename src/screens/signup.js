import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {} from '@react-native-segmented-control/segmented-control'
import SegmentedControlTab from 'react-native-segmented-control-tab'

const signup = ({navigation}) => {
    const handleNext5 = ()=> {
        navigation.navigate('Signup2')
    }
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/signup/Group103.png')} style={styles.imageA} />
                <Image source={require('../assets/signup/Signup.png')} style={styles.imageB} />
                <Text style={styles.text}>Hello, I guess you are new around here.</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.leftButton]}>
                    <Text style={styles.buttonText1}>Mentor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.rightButton]}>
                    <Text style={styles.buttonText2} onPress={handleNext5}>Mentee</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Referral Code"
                />
                <Image source={require('../assets/signup/layer1.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Email ID"
                />
                <Image source={require('../assets/signup/Group3.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="First Name"
                />
                <Image source={require('../assets/signup/Group3.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Last Name"
                />
                <Image source={require('../assets/signup/Group3.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Mobile Number"
                />
                <Image source={require('../assets/signup/Group102.png')} style={styles.icon} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputWithIcon}
                    placeholder="Password"
                    secureTextEntry
                />
                <Image source={require('../assets/signup/image.png')} style={styles.icon} />
                
            </View>
            <View>
                <Image source={require('../assets/signup/bysingup.png')} style={{marginLeft:20}}/>
            </View>
            <View>
            <TouchableOpacity style={styles.buttonn}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <View>
                <Text style={{marginLeft:100,color:'#313131'}}>Joined us before? 
                <TouchableOpacity style={styles.add} >
                    <Text style={styles.addition}>Log in</Text>
                </TouchableOpacity>
                
                </Text>
              
                
                
            </View>
            </View>
            
            
        </ScrollView>
    );
}

export default signup;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageA: {
        marginLeft: 25,
        marginTop: 45,
    },
    imageB: {
        marginTop: 20,
        marginRight: 220,
    },
    text: {
        marginRight: 100,
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    button: {
        flex: 1,
        height: 50,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    leftButton: {
        borderRightWidth: 0,
        backgroundColor: 'black',
    },
    rightButton: {
        borderLeftWidth: 0,
    },
    buttonText1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonText2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    inputWithIcon: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingRight: 30, 
    },
    icon: {
        position: 'absolute',
        right: 10,
    },
    buttonn: {
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
});