import React, { useRef } from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Animated
} from "react-native";


const EmergencyScreen = () => {
    const sizeVal = useRef(new Animated.Value(0.3)).current;

    const EmergencyScreen = () => {
        Animated.spring(sizeVal, {
            toValue: 1,
            friction: 1,
        }).start(() => { sizeVal.setValue(0.3); });
    };

    return (
        <View style={{ flexDirection: "column", height: "100%" }}>
            <Animated.Image style={{width: 180, height: 150, alignSelf: "center", margin: 100, transform: [{ scale: sizeVal }] }} source={require("../assets/it_logo.png")} />
            <View style={{ flexDirection: "column", flex: 1, }}>
                <Button title="EmergencyScreen" onPress={EmergencyScreen} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default EmergencyScreen;
