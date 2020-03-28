import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: '#E5E5E5'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 32,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        // marginBottom: 24,
        color: '#737380'
    },

    contact: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop: 32
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    textContact: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    contactButton: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})