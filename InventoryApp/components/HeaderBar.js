import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const HeaderBar = ({ title, left, right }) => {

    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            // backgroundColor: '#f8f8f8',
            backgroundColor: COLORS.primary,
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 70,
            paddingVertical: 10,
            paddingHorizontal: 10,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2,
            position: 'relative'
        }}>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        left ? navigation.goBack() : null
                    }} 
                >
                    {left &&
                        <Image
                            source={icons.back_arrow}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.gray
                            }}
                        />
                    }
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{title}</Text>
                </TouchableOpacity>
            </View>

            {right &&
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity>
                        <Image
                            source={icons.star}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
};

export default HeaderBar;