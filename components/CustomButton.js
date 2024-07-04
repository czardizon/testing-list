import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default CustomButton = ({ color, onPress, title }) => {
    return (
        <TouchableOpacity style={[{ backgroundColor: color }, styles.button]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 15
    },
    text: {
        color: '#fff',
        fontWeight: '600'
    }
});
