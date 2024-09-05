import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={require('../../assets/prof.jpg')} // Image from the assets folder
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>आदिनाथ जाधव</Text>
          <Text style={styles.userEmail}>adinathjadhav@gmail.com</Text>
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname === "/home" ? "#fff" : "#000"}
          />
        )}
        label="Home"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/home" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname === "/home" ? "#333" : "#fff" }}
        onPress={() => router.push("/(drawer)/(tabs)/home")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname === "/profile" ? "#fff" : "#000"}
          />
        )}
        label="Profile"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/profile" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname === "/profile" ? "#333" : "#fff" }}
        onPress={() => router.push("/(drawer)/(tabs)/profile")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname === "/order" ? "#fff" : "#000"}
          />
        )}
        label="order"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/order" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname === "/order" ? "#333" : "#fff" }}
        onPress={() => router.push("/order")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname === "/settings" ? "#fff" : "#000"}
          />
        )}
        label="Settings"
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/settings" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname === "/settings" ? "#333" : "#fff" }}
        onPress={() => router.push("/settings")}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="order" options={{ headerShown: true }} />
      <Drawer.Screen name="settings" options={{ headerShown: true }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center", 
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    width: 60, 
    height: 80, 
    borderRadius: 30, 
    resizeMode: 'cover', 
  },
  userDetailsWrapper: {
    marginLeft: 10,
    justifyContent: 'center', 
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});