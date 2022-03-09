import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native';
import ListComponent from './components/ListComponent';

const App = () => {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.mainContainer}>
                <ListComponent />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        minHeight: '100%',
    },
    mainContainer: {
        backgroundColor: '#CE93D8',
        
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 36,
    },
});

export default App;
