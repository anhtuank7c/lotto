import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, btnStyle, textStyle }) => {
  const { buttonStyle, text } = styles;
  return (
    <TouchableOpacity style={[buttonStyle, btnStyle]} onPress={onPress}>
      <Text style={[text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
