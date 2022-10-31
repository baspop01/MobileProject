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
    Image,
    Linking
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


const ServiceDetail = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <FontAwesome name="heartbeat" size={60} color="#E95060" />
            <Text style={styles.text}>หน่วยการแพทย์ฉุกเฉินแห่งชาติ</Text>
            <Image
                style={styles.image}
                source={require("../../assets/it_logo.png")}
            />
            <Text style={{ textAlign: "justify", fontSize: "4vw" }}>     สถาบันการแพทย์ฉุกเฉินแห่งชาติ เป็นหน่วยงานของรัฐบาล มีชื่อย่อซึ่งเรารู้จักกันดีว่า สพฉ. จัดตั้งขึ้นเมื่อปี พ.ศ. 2551 โดยมีหน้าที่รับผิดชอบประสานงานทั้งภาครัฐ และเอกชน รวมทั้งการปกครองส่วนท้องถิ่น ให้เข้ามามีบทบาทบริการทางด้านการแพทย์ฉุกเฉินแก่ประชาชน</Text>
            <TouchableOpacity style={styles.phone} onPress={() => { Linking.openURL('tel:0616645773'); }}>
                <FontAwesome name="phone" size={"10vw"} color="white" />
            </TouchableOpacity>
            <Text style={[styles.text, {color: "#414370", fontSize: "5vw"}]}>
                                1669
                            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: "10vw",
        textAlign: "center"
    },
    image: {
        alignSelf: "center",
        width: "50vw",
        height: "50vw",
        margin: "10vw"
    },
    text: {
        marginTop: "5vw",
        fontWeight: "bold",
        textAlign: "center",
        color: "#414370",
        fontSize: "5vw"
    },
    phone: {
        marginTop: "10vw",
        padding: "3.25vw",
        height: "15vw",
        width: "15vw",
        backgroundColor: "#008037",
        borderRadius: "100%",
        alignSelf: "center"
    }
});

export default ServiceDetail;
