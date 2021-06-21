import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { useSelector } from 'react-redux';

import { HeaderBar, CategoryLabel } from '../components';

import { dummyData, COLORS, SIZES, FONTS, icons } from '../constants';

const Inventory = () => {
    const products = useSelector(state => state.products);
    console.log(products);
    // const [products, setProducts] = useState(dummyData.products);

    const renderProducts = ({ item, index }) => (
        <View style={styles.card}>
            <View style={{ marginRight: 5, paddingRight: 5 }}>
                <TouchableOpacity style={styles.touchable} activeOpacity={0.8} onPress={() => console.log("item")}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.imageFile }}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.productNameText}>{item.productName}</Text>
                        <Text style={styles.productQtyText}>Qty: {item.productQty}</Text>
                        <Text style={styles.productPriceText}>₹ {item.productPrice}</Text>
                        <Text style={styles.productInStockText}>In stock</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                width: 50, height: 50, padding: 0,
                margin: 0,
                position: "absolute",
                right: -17,
                top: 10
            }}>
                <TouchableOpacity
                    style={ styles.touchable } activeOpacity={0.8}
                    onPress={() => console.log("edit")}
                >
                    <Image
                        source={icons.more}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>

    )

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
        }}>

            <HeaderBar title="Inventory" left={false} right={false} />

            <View >
                <FlatList
                    contentContainerStyle={{ marginTop: 2, paddingBottom: 170 }}
                    data={products}
                    renderItem={renderProducts}
                    keyExtractor={item => `${item._id}`}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    )
};

export default Inventory;

const styles = StyleSheet.create({
    touchable: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center'
    },
    card: {
        width: "95%",
        height: 120,
        margin: 10,
        padding: 3,
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
    },
    image: {
        width: 110,
        height: 90,
        borderRadius: 10
    },
    imageContainer: {
        padding: 2,
        margin: 5
    },
    textContainer: {
        padding: 2,
        margin: 5
    },
    productNameText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    productQtyText: {
        fontSize: 15,
    },
    productPriceText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    productInStockText: {
        fontSize: 15,
        color: COLORS.secondary
    }
})
