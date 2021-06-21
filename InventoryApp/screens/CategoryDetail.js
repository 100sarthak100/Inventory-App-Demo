import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';

import { HeaderBar, CategoryLabel } from '../components';

import { dummyData, COLORS, SIZES, FONTS, icons } from '../constants';

const CategoryDetail = ({ route, navigation }) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const { category } = route.params;
        setSelectedCategory(category);
        console.log(selectedCategory);
    }, [])

    const renderChart = () => {
        <View style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow
        }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}>
                <View style={{ flex: 1 }}>
                    <CategoryLabel
                        icon={selectedCategory?.image}
                        category={selectedCategory?.category}
                    />
                </View>
                <View>
                    <Text>asa</Text>
                </View>
            </View>

            {/* Chart */}

            {/* Options */}

            {/* Dots */}
        </View>
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
        }}>
            <HeaderBar title={selectedCategory?.category} left={true} right={true} />

            <ScrollView>
                <View style={{
                    flex: 1,
                    paddingBottom: SIZES.padding
                }}>
                    {renderChart()}
                </View>
            </ScrollView>

        </SafeAreaView>
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
    }
})

export default CategoryDetail;