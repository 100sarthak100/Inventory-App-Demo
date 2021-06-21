import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import LinearGradient from 'react-native-linear-gradient';

import { Home, Inventory, AddItems, Manage, Account } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.lightGreen, COLORS.lightGreen]}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 35
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
};

// Bottom Tabs Main Component
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 60
                }
            }}
        >
            {/* Home Screen Tab */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.home_outlined}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.gray }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }} >HOME</Text>
                        </View>
                    )
                }}
            />

            {/* Inventory Screen Tab */}
            <Tab.Screen
                name="Inventory"
                component={Inventory}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.inventory}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.gray }}
                            />
                            <Text
                                style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}
                            >
                                INVENTORY
                            </Text>
                        </View>
                    )
                }}
            />

            {/* Add Items Screen Tab */}
            <Tab.Screen
                name="Add Items"
                component={AddItems}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50,
                                tintColor: COLORS.white
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            {/* Manage Screen Tab */}
            <Tab.Screen
                name="MANAGE"
                component={Manage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.orders}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.gray }}
                            />
                            <Text
                                style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}
                            >
                                MANAGE
                            </Text>
                        </View>
                    )
                }}
            />

            {/* Account Screen Tab */}
            <Tab.Screen
                name="ACCOUNT"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.person}
                                resizeMode='contain'
                                style={{ width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.gray }}
                            />
                            <Text
                                style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}
                            >
                                ACCOUNT
                            </Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;