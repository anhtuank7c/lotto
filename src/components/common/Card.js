import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={[styles.cardContainer, props.style]}>
    {props.children}
  </View>
);

const styles = {
  cardContainer: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };

