import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import CustomButton
import CustomButton from '../components/CustomButton';

export default NameCard = ({ name, onEdit, onRemove }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.buttonsArea}>
                <CustomButton
                    title={'Edit'}
                    color={'#F7942B'}
                    onPress={onEdit}
                />
                <CustomButton
                    title={'Delete'}
                    color={'#F72B2B'}
                    onPress={onRemove}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    inputContainer: {
        borderBottomColor: '#000000',
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: 200,
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        paddingLeft: 10,
    },
    buttonsArea: {
        flexDirection: 'row',
    }
});