import React from 'react';
import { View, Image, Text } from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const CategoryLabel = ({ icon, category }) => {
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <Image
                source={icon}
                resizeMode="cover"
                style={{
                    width: 25,
                    height: 25,
                    marginTop: 5
                }}
            />

            <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ ...FONTS.h3 }}>{category}</Text>
                {/* <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{code}</Text> */}
            </View>
        </View>
    )
};

export default CategoryLabel;