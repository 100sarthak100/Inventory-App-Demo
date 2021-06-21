import React, { useState, useRef, useEffect } from 'react';
import { View, KeyboardAvoidingView, TextInput, Modal, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, TouchableOpacity, SafeAreaView, FlatList, TouchableOpacityBase } from 'react-native';
import { Countries } from '../constants/Countries';
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';


const Signup = ({ navigation }) => {
    let textInput = useRef(null);
    const defaultCodeCountry = "+91";
    const defaultMaskCountry = "99999 99999";
    const [phoneNumber, setPhoneNumber] = useState();
    const [focusInput, setFocusInput] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [dataCountries, setDataCountries] = useState(Countries);
    const [codeCountry, setCodeCountry] = useState(defaultCodeCountry);
    const [placeholder, setPlaceholder] = useState(defaultMaskCountry);

    const onShowHideModal = () => {
        console.log("close");
        setModalVisible(true);
        console.log(modalVisible);
    }

    const filterCountries = (value) => {
        if (value) {
            const countryData = dataCountries.filter((obj) =>
                (obj.en.indexOf > -1 || obj.dialCode.indexOf(value) > -1)
            )
            setDataCountries(countryData);
        } else {
            setDataCountries(Countries);
        }
    }

    const onCountryChange = (item) => {
        setCodeCountry(item.dialCode);
        setPlaceholder(item.mask);
        onShowHideModal();
    }

    let renderModal = () => {
        return (
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.filterInputContainer}>
                            <TextInput
                                autoFocus={true}
                                onChangeText={filterCountries}
                                placeholder="Filter"
                                value={codeCountry}
                                focusable={true}
                                style={styles.filterInputStyle}
                            />
                        </View>
                        <FlatList
                            style={{ flex: 1 }}
                            data={dataCountries}
                            extraData={dataCountries}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={
                                ({ item }) => (
                                    <TouchableOpacity onPress={() => onCountryChange(item)}>
                                        <View style={styles.countryModalStyle}>
                                            <View style={styles.modalItemContainer}>
                                                <Text style={styles.modalItemName}>{item.en}</Text>
                                                <Text style={styles.modalItemDialCode}>{item.dialCode}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        />
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButtonStyle}>
                        <Text style={styles.closeTextStyle}>CLOSE</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </Modal>
        )
    }

    const onChangePhone = (num) => {
        setPhoneNumber(num);
    }

    const onPressContinue = () => {
        if (phoneNumber && phoneNumber.length === 10) {
            navigation.navigate('OTPScreen');
        }
    }

    const onChangeFocus = () => {
        setFocusInput(true);
    }

    const onChangeBlur = () => {
        setFocusInput(false);
    }

    useEffect(() => {
        textInput.focus();
    }, [])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={{...styles.header, ...FONTS.h1}}>Enter your Phone Number</Text>
                    <View
                        style={{
                            ...styles.containerInput,
                            borderBottomColor: focusInput ? COLORS.primary : COLORS.gray
                        }}
                    >
                        <TouchableOpacity onPress={onShowHideModal}>
                            <View style={styles.openDialogView}>
                                <Text style={{ ...FONTS.body2 }}>{codeCountry + " |"}</Text>
                            </View>
                        </TouchableOpacity>
                        {renderModal()}
                        <TextInput
                            ref={(input) => textInput = input}
                            style={{...styles.phoneInput, ...FONTS.body2}}
                            placeholder={placeholder}
                            keyboardType="numeric"
                            value={phoneNumber}
                            onChangeText={onChangePhone}
                            secureTextEntry={false}
                            onFocus={onChangeFocus}
                            onBlur={onChangeBlur}
                            autoFocus={focusInput}
                        />
                    </View>

                    <View style={styles.viewBottom}>
                        <TouchableOpacity onPress={onPressContinue}>
                            <View
                                style={{
                                    ...styles.btnContainer,
                                    backgroundColor: phoneNumber == undefined || phoneNumber.length !== 10 ? COLORS.gray : COLORS.primary
                                }}
                            >
                                <Text style={{...styles.textContinue, ...FONTS.h3}}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View style={styles.btnContainer}>
                                <Text style={styles.textGoToHome}>Go to Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-start"
    },
    header: {
        // fontSize: 36,
        marginBottom: 48,
        marginTop: 50
    },
    containerInput: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        borderRadius: 1,
        alignItems: 'center',
        borderBottomWidth: 1
    },
    openDialogView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneInput: {
        marginLeft: 5,
        flex: 1,
        height: 50,
        // fontSize: 20
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    btnContainer: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContinue: {
        color: 'white',
        alignItems: 'center'
    },
    modalContainer: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        flex: 1,
        backgroundColor: 'white'
    },
    filterInputStyle: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        color: '#424242'
    },
    countryModalStyle: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: 1,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalItemContainer: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'row',

    },
    modalItemName: {
        flex: 1,
        fontSize: 16
    },
    modalItemDialCode: {
        fontSize: 16
    },
    filterInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButtonStyle: {
        padding: 12,
        alignItems: 'center'
    },
    closeTextStyle: {
        padding: 5,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    textGoToHome: {
        ...FONTS.body4,
        color: COLORS.secondary,
        alignItems: 'center',
        // fontSize: 15
    },
});

export default Signup;


