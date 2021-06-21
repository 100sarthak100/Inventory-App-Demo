import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, Platform, FlatList, Image, ImageBackground, TouchableOpacity, TouchableNativeFeedback, LogBox } from 'react-native';

import { StockAlert, TransactionHistory } from '../components';
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

import { useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/products';

// Status bar styles
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Home = ({ navigation }) => {
    const [inventoryStats, setInventoryStats] = useState(dummyData.inventoryStats);
    const [transHistory, setTransHistory] = useState(dummyData.inventoryTransactions);

    // TODO - implement redux here
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    // Header component
    const renderHeader = () => {

        let TouchableCmp = TouchableOpacity;

        if (Platform.OS === 'android' && Platform.Version >= 21) {
            TouchableCmp = TouchableNativeFeedback;
        }

        // renderItem component for the flat list
        const renderItem = ({ item, index }) => (
            <TouchableCmp style={styles.touchable} activeOpacity={0.8} onPress={() => navigation.navigate("CategoryDetail", { category: item })}>
                <View style={{ ...styles.card, marginLeft: index == 0 ? SIZES.radius : 0 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={item.image}
                                resizeMode='stretch'
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: SIZES.base, alignItems: 'flex-end' }}>
                            <View>
                                <Text style={{ ...FONTS.h3 }}>{item.category}</Text>
                            </View>
                            <View>
                                <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.totalProducts} Items</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: SIZES.radius }}>
                        <Text style={{ ...FONTS.h3, paddingLeft: 5 }}>₹ {item.totalAmount}</Text>
                    </View>
                </View>
            </TouchableCmp>
        )

        return (
            <View style={{
                width: "100%",
                height: 250,
                ...styles.shadow
            }}>
                <StatusBar
                    animated={true}
                    backgroundColor={COLORS.primary}
                    barStyle={STYLES[0]}
                    showHideTransition={TRANSITIONS[0]}
                    hidden={false}
                />

                <ImageBackground
                    source={images.banner2}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >

                    {/* Header Bar */}
                    <View
                        style={{
                            marginTop: SIZES.base,
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: SIZES.base
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => console.log("Notification on pressed")}
                        >
                            <Image
                                source={icons.notification_white}
                                resizeMode='contain'
                                style={{ flex: 1 }}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Balance */}
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: SIZES.base + 5
                        }}
                    >
                        <Text
                            style={{ color: COLORS.white, ...FONTS.h3 }}
                        >
                            Your Inventory Value
                        </Text>
                        <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1 }}>
                            ₹ {dummyData.inventoryPortfolio.totalInventoryValue}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>
                            {dummyData.inventoryPortfolio.totalProducts} Items
                        </Text>
                    </View>

                    {/* Inventory Stats */}
                    <View style={{
                        position: 'absolute',
                        bottom: "-30%",
                        zIndex: 3
                    }}>
                        <View style={{ margin: 0, padding: 0, alignItems: 'flex-start' }}>
                            <Text style={{ marginLeft: SIZES.base * 2, color: COLORS.white, ...FONTS.h25 }}>
                                Inventory Stats
                            </Text>
                        </View>
                        <FlatList
                            contentContainerStyle={{ marginTop: 0 }}
                            data={inventoryStats}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }

    // Stock Alert render function
    const renderAlert = () => {
        return (
            <StockAlert />
        )
    }

    // Notice render function
    const renderNotice = () => {
        return (
            <View style={{
                marginTop: SIZES.padding * 0.75,
                marginHorizontal: SIZES.padding * 0.5,
                paddingVertical: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding * 0.75,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.secondary,
                ...styles.shadow
            }}>
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Create Online Store</Text>
                <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body4, lineHeight: 18 }}>
                    Expand your business by creating your online store.
                </Text>
                <TouchableOpacity
                    style={{ marginTop: SIZES.base }}
                    onPress={() => console.log("Learn more")}
                >
                    <Text style={{
                        textDecorationLine: 'underline', color: COLORS.green, ...FONTS.h3
                    }}>
                        Learn More
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    // Transaction history render function
    const renderTransHistory = () => {
        return (
            <TransactionHistory
                customContainerStyle={{ ...styles.shadow }}
                history={transHistory}
            />
        )
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: 100 }}>
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransHistory()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    card: {
        // for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4.65,
        shadowOpacity: 0.30,
        // for ios

        // for android
        elevation: 8,
        // for android

        borderRadius: 10,
        width: 150,
        height: 100,
        margin: 10,
        marginTop: 5,
        position: "relative",
        justifyContent: "flex-start",
        flex: 1,
        paddingVertical: SIZES.base + 3,
        paddingHorizontal: SIZES.base + 3,
        paddingRight: SIZES.base * 2,
        marginRight: SIZES.radius,
        backgroundColor: COLORS.white,
        zIndex: 2,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    },
    touchable: {
        width: "100%",
        overflow: 'hidden',
        borderRadius: 10
    },
    imageContainer: {
        padding: 1,
        margin: 1
    }
})

export default Home;