import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import Tableheader from './Tableheader'
import Tablerow from './Tablerow'

import {
    Page,
    Document
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }

});

export function PdfDocument(props) {
    return (

        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.tableContainer}>
                    <Tableheader />
                    <Tablerow items={props.data} />
                </View>
            </Page>
        </Document>
    );
}
