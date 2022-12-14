import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import EmergencyScreen from "../screens/Emergency/EmergencyScreen";
import HospitalScreen from "../screens/NearHospital/HospitalScreen";
import PoliceStationScreen from "../screens/NearPolice/PoliceStationScreen";
import FavoriteScreen from "../screens/Favorite/FavoriteScreen";
import SettingScreen from "../screens/SettingPage/SettingScreen";
import EmergencyDetail from "../screens/Emergency/EmergencyDetail";
import ServiceDetail from "../screens/Emergency/ServiceDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmergencyNavigator() {
  return (
    <Stack.Navigator initialRouteName="Emergency">
      <Stack.Screen name="Emergency" component={EmergencyScreen} options={{
        headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "8vw" }, headerTitleAlign: "center", headerTitle: "สายด่วนฉุกเฉิน"
      }} />
      <Stack.Screen name="EmergencyDetail" component={EmergencyDetail} options={
        ({ route }) => ({
          headerStyle: {
            backgroundColor: "#61D8CF"
          }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "8vw" }, headerTitleAlign: "center", headerTitle: route.params.categoryTitle
        })
      }/>
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} options={
        ({ route }) => ({
          headerStyle: {
            backgroundColor: "#61D8CF"
          }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "8vw" }, headerTitleAlign: "center", headerTitle: route.params.categoryTitle
        })
      }/>
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "#8AA2D4",
      tabBarInactiveTintColor: "#414370",
      tabBarStyle: { backgroundColor: "#61D8CF", height: "8vh" },
      tabBarLabelStyle: { fontWeight: "bold", marginBottom: 2 },
    }} >

      <Tab.Screen name="Emergency" component={EmergencyNavigator} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="call" size={30} color={"#791214"} />;
        }, headerShown: false
      }} />

      <Tab.Screen name="Near Hospital" component={HospitalScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="medkit" size={30} color={"#336633"} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "5vh" }, headerTitleAlign: "center", headerTitle: "โรงพยาบาลใกล้ฉัน"
      }} />

      <Tab.Screen name="Near PS" component={PoliceStationScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="shield" size={30} color={"#1F356C"} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "5vh" }, headerTitleAlign: "center", headerTitle: "สถานีตำรวจใกล้ฉัน"
      }} />

      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="star" size={30} color={"#F7BF0B"} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "5vh" }, headerTitleAlign: "center", headerTitle: "รายการโปรด"
      }} />

      <Tab.Screen name="Setting" component={SettingScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="settings" size={30} color={color} />;
        }, headerStyle: {
          backgroundColor: "#61D8CF"
        }, headerTintColor: "#AF4242", headerTitleStyle: { fontWeight: "bold", fontSize: "5vh" }, headerTitleAlign: "center", headerTitle: "ตั้งค่า"
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
