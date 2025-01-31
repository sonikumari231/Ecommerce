import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import ReorderScreen from "./src/screen/ReorderScreen";
import AccountScreen from "./src/screen/AccountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

// Custom Cart Button Component
const CartButton = ({ focused, size }) => {
  const { cartItems } = useContext(CartContext); // Use context inside custom button

  return (
    <View style={{ position: "relative" }}>
      <Image
        source={focused ? require("./src/assets/focused/shopping_cart.png") : require("./src/assets/normal/shopping_cart.png")}
        style={{
          height: size,
          width: size,
          resizeMode: "center",
        }}
      />
      <View
        style={{
          position: "absolute",
          right: -3,
          bottom: 22,
          height: 14,
          width: 14,
          backgroundColor: focused ? "#E96E6E" : "#C0C0C0",
          borderRadius: 7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>
          {cartItems.length}
        </Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ focused, size }) => (
                <Image
                  source={focused ? require("./src/assets/focused/home.png") : require("./src/assets/normal/home.png")}
                  style={{
                    height: size,
                    width: size,
                    resizeMode: "center",
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={ReorderScreen}
            options={{
              tabBarIcon: ({ focused, size }) => (
                <Image
                  source={focused ? require("./src/assets/focused/reorder.png") : require("./src/assets/normal/reorder.png")}
                  style={{
                    height: size,
                    width: size,
                    resizeMode: "center",
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: (props) => <CartButton {...props} />, // Use custom CartButton
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ focused, size }) => (
                <Image
                  source={focused ? require("./src/assets/focused/account.png") : require("./src/assets/normal/account.png")}
                  style={{
                    height: size,
                    width: size,
                    resizeMode: "center",
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
