import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';

import { HeaderBar, CategoryLabel } from '../components';

import { dummyData, COLORS, SIZES, FONTS, icons } from '../constants';

const Account = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
        }}>

            <HeaderBar title="Account" left={false} right={false} />

            <View >
                <Text>Account</Text>
            </View>

        </SafeAreaView>
    )
};

export default Account;
