import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import EmergencyScreen from "../screens/EmergencyScreen";
import HospitalScreen from "../screens/HospitalScreen";
import PoliceStationScreen from "../screens/PoliceStationScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function TabNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "#8AA2D4",
      tabBarInactiveTintColor: "#414370",
      tabBarStyle: { backgroundColor: "#61D8CF", height: "8vh" },
      tabBarLabelStyle: { fontWeight: "bold", marginBottom: 2 },
    }} >
      <Tab.Screen name="Emergency" component={EmergencyScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="call" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: {fontWeight: "bold", fontSize: "8vw"}, headerTitleAlign:"center", headerTitle: "สายด่วนฉุกเฉิน"
      }} />
      <Tab.Screen name="Near Hospital" component={HospitalScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="medkit" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: {fontWeight: "bold", fontSize: "8vw"}, headerTitleAlign:"center", headerTitle: "โรงพยาบาลใกล้ฉัน"
      }} />
      <Tab.Screen name="Near PS" component={HospitalScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="shield" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: {fontWeight: "bold", fontSize: "8vw"}, headerTitleAlign:"center", headerTitle: "สถานีตำรวจใกล้ฉัน"
      }} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="star" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: {fontWeight: "bold", fontSize: "8vw"}, headerTitleAlign:"center", headerTitle: "รายการโปรด"
      }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="settings" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: {fontWeight: "bold", fontSize: "8vw"}, headerTitleAlign:"center", headerTitle: "ตั้งค่า"
      }} />
    </Tab.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    width: 250,
    height: 50,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});
