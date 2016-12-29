import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, keyboardType, secureTextEntry,
  placeholder, autoCorrect, autoCapitalize, returnKeyType, placeholderTextColor, style,
  labelStyle, containerHeight }) => {
  const { containerStyle, labelStyle1, inputStyle } = styles;
  return (
    <View style={[containerStyle, containerHeight]}>
      <Text style={[labelStyle1, labelStyle]}>{label}</Text>
      <TextInput
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[inputStyle, style]}
        placeholderTextColor={placeholderTextColor}
        />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45
  },
  labelStyle1: {
    flex: 1,
    fontSize: 18,
  },
  inputStyle: {
    flex: 3,
    padding: 5,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 14
  }
};

export { Input };
