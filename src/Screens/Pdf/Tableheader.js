import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    commit: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    pull: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    contributor: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    }
    
  });

  const Tableheader = () => (
    <View style={styles.container}>
        <Text style={styles.commit}>Commits</Text>
        <Text style={styles.pull}>Pull Request</Text>
        <Text style={styles.contributor}>Contributor</Text>
    </View>
  );
  
  export default Tableheader
