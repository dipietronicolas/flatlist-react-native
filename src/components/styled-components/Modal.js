import React from 'react';
import { Button, Text, Modal, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 80%;
    height: 40%;
    padding: 24px;
    background-color: whitesmoke;
    border-radius: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const DarkBackground = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

const Title = styled.Text`
    font-size: 24px;
    margin-bottom: 2px;
`;

const Note = styled.Text`
    width: 100%;
    height: 32px;
    padding: 2px;
    margin: 8px 0;
    background-color: rgba(147, 147, 147, 0.5);
    font-size: 16px;
    font-style: italic;
    text-align: center;
    margin-bottom: 4px;
`;

const Subtitle = styled.Text`
    font-size: 16px;
    margin-bottom: 4px;
`;

const ButtonContainer = styled.View`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;


const CustomModal = ({
    itemSelected,
    visible,
    closeModal,
    handleDelete,
}) => {

    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
        >
            <DarkBackground>
                <Container>
                    <Title>Delete Note</Title>
                    <Note>{itemSelected.label}</Note>
                    <Subtitle>Do you want to delete this note?</Subtitle>
                    <ButtonContainer>
                        <Button
                            title="Yes"
                            color="#841584"
                            onPress={() => handleDelete(itemSelected.id)}
                        />
                        <Button
                            title="No"
                            onPress={closeModal}
                        />
                    </ButtonContainer>
                </Container>
            </DarkBackground>
        </Modal>
    )
}

export default CustomModal;