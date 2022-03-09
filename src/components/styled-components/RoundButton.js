import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    padding-bottom: 5px;
    background-color: #4A148C;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Label = styled.Text`
    color: whitesmoke;
    font-size: 24px;
    font-weight: 600;
`;

const RoundButton = ({ label, handleClick }) => {
  return (
    <Button onPress={handleClick}>
        <Label>{label}</Label>
    </Button>
  )
}

export default RoundButton