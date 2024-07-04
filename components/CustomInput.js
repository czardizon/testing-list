import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default CustomTextInput = ({ value, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#000000',
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: 250,
        justifyContent: 'center'
    },
    textInput: {
        alignItems: 'center',
        paddingLeft: 10,
    },
});