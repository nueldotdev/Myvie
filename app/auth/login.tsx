import { AppText } from "@/components/app/AppText";
import BackBtn from "@/components/app/BackBtn";
import Logo from "@/components/app/Logo";
import { allStyles, loginStyles } from "@/styles/stylesheet";
import React from "react";
import { Pressable, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <BackBtn style={allStyles.backBtn} />
      <View style={loginStyles.formSection}>
        <View style={loginStyles.logoCont}>
          <Logo style={{ width: 100, height: 50 }} />
          <AppText style={loginStyles.headerText}>Welcome back!</AppText>
          <AppText style={loginStyles.subText}>
            Please login to continue
          </AppText>
        </View>
        <View style={loginStyles.formMain}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#736F6F"}
            keyboardType="email-address"
            style={loginStyles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={"#736F6F"}
            style={loginStyles.input}
          />
        </View>
        <View style={loginStyles.divider} />
        <View style={loginStyles.buttonSect}>
          <Pressable style={[allStyles.button, allStyles.btnMain]}>
            <AppText style={allStyles.buttonText}>Login</AppText>
          </Pressable>
          <AppText style={loginStyles.forgotText}>Forgot Password?</AppText>
        </View>
      </View>
    </View>
  );
};

export default Login;
