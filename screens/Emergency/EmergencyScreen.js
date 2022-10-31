import React, { useRef } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Animated,
    Image
} from "react-native";
import { CATEGORIES } from "../../data/data";


const EmergencyScreen = ({ navigation }) => {
    const renderCategories = (itemData) => {
        return (
            <TouchableOpacity style={styles.category} onPress={() => {
                navigation.navigate("EmergencyDetail", { prev: "Emergency", categoryId: itemData.item.id, categoryTitle: itemData.item.title })
            }}>
                <View style={styles.box}>
                    <Image
                        style={styles.tinyLogo}
                        source={itemData.item.image}
                    />
                </View>
                <Text style={styles.text}>
                    {itemData.item.title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderCategories} numColumns={3} />
    );
};

const styles = StyleSheet.create({
    box: {
        width: "28vw",
        height: "28vw",
        // backgroundColor: "#414370"
    },
    category: {
        margin: "2.5vw",
        marginTop: "5vh",
    },
    text: {
        marginTop: 10,
        fontWeight: "bold",
        textAlign: "center",
        color: "#AF4242",
        fontSize: "2vh"

    },
    tinyLogo: {
        width: "28vw",
        height: "28vw",
      }
});

export default EmergencyScreen;
