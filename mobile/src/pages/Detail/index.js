import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity, FlatList, Linking, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute()

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}.`

    function toIncidents() {
        navigation.goBack()
    }

    // function sendMail() {
    //     MailComposer.composeAsync({
    //         subject: `Hério do caso: ${incident.title}`,
    //         recipients: [incident.email],
    //         body: message,
    //     })
    // }

    function sendZap() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    function emailAlert() {
        Alert.alert(
            'E-mail',
            'No momento essa função está indisponível.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                },
                // { text: 'Continue', onPress: () => this.props.navigation.navigate('Pedido') },
            ],
            { cancelable: false },
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={toIncidents}>
                    <Icon name='arrow-left' size={28} color='#e82041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>CASO:</Text>
                <Text style={styles.incidentValue}>incident.title</Text>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}-{incident.uf}</Text>

                {/* <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={styles.incidentValue}>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</Text> */}

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
            </View>

            <View style={styles.contact}>
                <Text style={styles.title}>Salve o dia!</Text>

                <Text style={styles.title}>Seja o herói desse caso.</Text>

                <Text style={styles.textContact}>
                    Entre em contato:
                </Text>

                <View style={styles.contactButton}>
                    <TouchableOpacity onPress={sendZap} style={styles.button}>
                        <Text style={styles.textButton}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={emailAlert} style={styles.button}>
                        <Text style={styles.textButton}>E-mail</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}