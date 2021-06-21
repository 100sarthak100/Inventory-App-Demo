import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback, StatusBar, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const OTPScreen = ({navigation}) => {
    const lengthInput = 5;
    let textInput = useRef(null);
    let clockCall = null;
    const defaultCountDown = 30;
    const [internalValue, setInternalValue] = useState("");
    const [countdown, setCountDown] = useState(defaultCountDown);
    const [enableResend, setEnableResend] = useState(false);
    const [focusInput, setFocusInput] = useState(true);

    const onChangeText = (val) => {
        setInternalValue(val);
        if(val.length === lengthInput) {
            navigation.navigate('Home');
        }
    }

    const onResendOTP = () => {
        if (enableResend) {
            setCountDown(defaultCountDown);
            setEnableResend(false);
            clearInterval(clockCall);
            clockCall = setInterval(() => {
                if (countdown === 0) {
                    setEnableResend(true);
                    setCountDown(0);
                    clearInterval(clockCall);
                } else {
                    setCountDown(countdown - 1);
                }
            }, 1000)
        }
    }

    const onChangeNumber = () => {
        // setInterval("");
        navigation.navigate('Signup');
    }

    useEffect(() => {
        clockCall = setInterval(() => {
            if (countdown === 0) {
                setEnableResend(true);
                setCountDown(0);
                clearInterval(clockCall);
            } else {
                setCountDown(countdown - 1);
            }
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    });

    useEffect(() => {
        textInput.focus();
    }, []);

    const onChangeFocus = () => {
        setFocusInput(true);
    }

    const onChangeBlur = () => {
        setFocusInput(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Input OTP code sent via SMS</Text>
                    <View>
                        <TextInput
                            ref={(input) => textInput = input}
                            style={{ width: 0, height: 0 }}
                            value={internalValue}
                            onChangeText={onChangeText}
                            maxLength={lengthInput}
                            returnKeyType="done"
                            keyboardType="numeric"
                            // focusable={true}
                            // onFocus={onChangeFocus}
                            // onBlur={onChangeBlur}
                            // autoFocus={true}
                        />
                        <View style={styles.containerInput}>
                            {
                                Array(lengthInput).fill().map((data, index) => (
                                    <View
                                        style={{
                                            ...styles.cellView,
                                            borderBottomColor: index === internalValue.length ? COLORS.gray : COLORS.primary
                                        }}
                                        key={index}
                                    >
                                        <Text
                                            style={styles.cellText}
                                            onPress={() => textInput.focus()}>
                                            {internalValue && internalValue.length > 0 ? internalValue[index] : ""}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>

                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={onChangeNumber}>
                            <View style={styles.btnChangeNumber}>
                                <Text style={styles.textChange}>Change Number</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onResendOTP}>
                            <View style={styles.btnResend}>
                                <Text style={{
                                    ...styles.textResend,
                                    color: enableResend ? COLORS.secondary : COLORS.gray
                                }}>
                                    Resend OTP ({countdown}s)</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

export default OTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    header: {
        ...FONTS.h2,
        marginBottom: 48,
        marginTop: 50
    },
    containerAvoidingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1
    },
    cellText: {
        ...FONTS.body2,
        textAlign: 'center',
        // fontSize: 16
    },
    bottomView: {
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'flex-end'
    },
    btnChangeNumber: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textChange: {
        ...FONTS.body3,
        color: COLORS.secondary,
        alignItems: 'center',
        // fontSize: 15
    },
    btnResend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textResend: {
        ...FONTS.body3,
        alignItems: 'center',
        // fontSize: 15
    }
})
