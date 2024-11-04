import { Tabs } from "expo-router";
import React from "react";
import { Bookmark, Home, Search, User } from "react-feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // padding: 15,
          borderWidth: 0,
          marginHorizontal: 15,
          // marginBottom: 15,
          bottom: 10,
          borderRadius: 20,
          backgroundColor: '#FFD70051',
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          display: 'none',
          marginBottom: 5,
        },
        // tabBarIconStyle: {
        //   margin: 5,
        // },
        tabBarInactiveTintColor: '#1F1F1F',
        tabBarActiveTintColor: '#FFD700',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Search size={24} color={color} />  
          ),
        }}
      />
      <Tabs.Screen
        name="saves"
        options={{
          title: "Saves",
          tabBarIcon: ({ color, focused }) => (
            <Bookmark size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <User size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
