import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const AcheCampanha = () => {

    const dados =[
        {titulo: "Título da Campanha", descricao: "Descrição da Campanha."},
        {titulo: "FireFighther", descricao: "Apga o fogo."},
        {titulo: "Odiséia maluca", descricao: "Palhaços cósmicos"}
    ]

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texLink}>Ache uma Campanha</Text>

                {dados.map((item, index) => (

                    <View style={styles.card} key={index}>

                        <Card>
                            <Card.Content>
                            <Title style={styles.titleCard}>{item.titulo}</Title>
                            <Paragraph style={styles.descricaoCard}>{item.descricao}</Paragraph>
                            </Card.Content>
                        </Card>

                        <Button style={styles.buttonCardG} mode="contained" onPress={() => console.log('Pressed')}>
                            PARTICIPAR
                        </Button>

                    </View>


                ))}

            </View>

        </ScrollView>
        

    );
}

export default AcheCampanha;