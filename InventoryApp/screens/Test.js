<View style={{
                width: "100%",
                // height: 290,
                ...styles.shadow
            }}>
                <View style={{
                    // position: 'absolute',
                    // bottom: "20%",
                    // zIndex: 2
                }}>
                    <Text style={{ marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2 }}>
                        Inventory Stats
            </Text>
                    <FlatList
                        contentContainerStyle={{ marginTop: SIZES.base }}
                        data={inventoryStats}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <ImageBackground
                    source={images.banner2}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                > */}
                {/* Header Bar */}
                {/* <View
                        style={{
                            marginTop: SIZES.padding,
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
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
                    </View> */}

                {/* Balance */}
                {/* <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
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
                    </View> */}

                {/* Inventory Stats */}
                {/* <View style={{
                        position: 'absolute',
                        bottom: "20%",
                        zIndex: 2
                    }}>
                        <Text style={{ marginLeft: SIZES.padding, color: COLORS.white, ...FONTS.h2 }}>
                            Inventory Stats
                        </Text>
                        <FlatList
                            contentContainerStyle={{ marginTop: SIZES.base }}
                            data={inventoryStats}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View> */}

                {/* </ImageBackground>
            </View>


<View >
                <View style={styles.card}>
            <TouchableCmp style={styles.touchable} activeOpacity={0.8} >
                <View>
                
                    {/* <View> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={item.image}
                                    resizeMode='stretch'
                                    style={{
                                        // marginTop: 5,
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
                            {/* <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.totalAmount}</Text> */}
                        </View>
                        </View>
                    </TouchableCmp>
                    </View>
            </View>