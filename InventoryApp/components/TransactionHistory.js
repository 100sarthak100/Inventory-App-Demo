import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const TransactionHistory = ({ customContainerStyle, history }) => {

    const showItem = ({ item }) => (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: SIZES.base
            }}
            onPress={() => console.log(item)}
        >
            <Image
                source={icons.transaction}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.primary
                }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                <Text style={{ ...FONTS.h3 }}>{item.description}</Text>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.date}</Text>
            </View>

            <View style={{ flexDirection: 'row', height: "100%", alignItems: 'center' }}>
                <Text style={{ color: item.type == "B" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>
                    {item.amount}
                </Text>
                <Image
                    source={icons.right_arrow}
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.gray
                    }}
                />
            </View>

        </TouchableOpacity>
    )

    return (
        <View style={{
            marginTop: SIZES.padding * 0.75,
            marginHorizontal: SIZES.padding * 0.5,
            paddingVertical: SIZES.padding * 0.5,
            paddingHorizontal: SIZES.padding * 0.75,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...customContainerStyle
        }}>
            <Text style={{ ...FONTS.h25 }}>
                Transaction History
            </Text>
            <FlatList
                contentContainerStyle={{ marginTop: SIZES.radius }}
                scrollEnabled={false}
                data={history}
                keyExtractor={item => `${item.id}`}
                renderItem={showItem}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ width: "100%", height: 1, backgroundColor: COLORS.lightGray }}>
                        </View>
                    )
                }}
            />
        </View>
    )
};

export default TransactionHistory;
