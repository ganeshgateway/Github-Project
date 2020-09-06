import React, {Fragment} from 'react'
import {Text, View, StyleSheet } from '@react-pdf/renderer'

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    commit: {
        width: '40%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    pull: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingRight: 8,
    },
    contributor: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingRight: 8,
    },
    
  });
 

const Tablerow = ({items}) => {
    const rows = items.map( (item,index) => 
        <View style={styles.row} key={index}>
            <Text style={styles.commit}>{item.commits}</Text>
            <Text style={styles.pull}>{item.Pull}</Text>
            <Text style={styles.contributor}>{item.contributor}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default Tablerow