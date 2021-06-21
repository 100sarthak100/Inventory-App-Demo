import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';

import { HeaderBar, CategoryLabel } from '../components';

import { dummyData, COLORS, SIZES, FONTS, icons } from '../constants';

const AddItems = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
        }}>

            <HeaderBar title="AddItems" left={false} right={false} />

            <View >
                <Text>Add Items</Text>
            </View>

        </SafeAreaView>
    )
};

export default AddItems;
