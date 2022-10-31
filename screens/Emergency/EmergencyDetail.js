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
    Linking
} from "react-native"
import { CATEGORIES } from "../../data/data";
import { FontAwesome } from '@expo/vector-icons';
import Axios from "axios";
import { useState } from "react";



const EmergencyDetail = ({ navigation }) => {
    const [test, setTest] = useState([]);

    const getTest = () => {
        Axios.get("http://localhost:3000/category").then((res) => {
            console.log("success")
            setTest(res.data);
            for (let i in test) {
                console.log(test[i].c_name)
            }
        });
    }
    const renderCategories = (itemData) => {
        return (
            <View>
                <TouchableOpacity style={styles.category} onPress={() => {
                    navigation.navigate("ServiceDetail", { prev: "EmergencyDetail", categoryId: itemData.item.id, categoryTitle: itemData.item.title })
                }}>
                    <View style={styles.box}>
                        <FontAwesome name="heartbeat" size={"18vw"} color="#E95060" />
                        <View style={styles.name}>
                            <Text style={styles.text}>
                                {itemData.item.title}
                            </Text>
                            <Text style={[styles.text, { color: "#414370", fontSize: "8vw" }]}>
                                1669
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.phone} onPress={() => {
                            Linking.openURL('tel:0616645773');
                            getTest()
                        }}>
                            <FontAwesome name="phone" size={"10vw"} color="white" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderCategories} numColumns={1} />
    );
};

const styles = StyleSheet.create({
    box: {
        width: "100%",
        height: "28vw",
        borderTopWidth: 2,
        flexDirection: "row",
        // justifyContent: 'space-around',
        padding: "3vw",
    },
    text: {
        fontWeight: "bold",
        textAlign: "left",
        color: "#AF4242",
        fontSize: "3vh",
        marginLeft: "8vw"
    },
    name: {
        flexDirection: 'column',
        alignSelf: "left",
    },
    phone: {
        margin: "3vw",
        padding: "3.25vw",
        height: "15vw",
        width: "15vw",
        backgroundColor: "#008037",
        borderRadius: "100%",
       

    }
});

export default EmergencyDetail;
