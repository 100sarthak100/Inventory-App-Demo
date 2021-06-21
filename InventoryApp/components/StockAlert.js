import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const StockAlert = ({ customContainerStyle }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: SIZES.padding * 3.5,
                marginHorizontal: SIZES.padding * 0.5,
                paddingVertical: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding * 0.75,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                ...customContainerStyle,
                ...styles.shadow
            }}
        >
            <Image
                source={icons.notification_color}
                style={{
                    width: 27,
                    height: 27
                }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                <Text style={{ ...FONTS.h3 }}>Set Stock Alert</Text>
                <Text style={{ ...FONTS.body4 }}>Get notified when your inventory stock is low.</Text>
            </View>

            <Image 
                source={icons.right_arrow}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
            />
        </TouchableOpacity>
    )
};

export default StockAlert;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8
    }
});