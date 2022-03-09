import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    height: 42px;
    margin-bottom: 16px;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const CloseButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonLable = styled.Text`
    font-size: 24px;
    font-weight: 900;
    color: whitesmoke;
`;

const RowLabel = styled.Text`
    width: 75%;
    color: whitesmoke;
    margin-bottom: 4px;
    font-weight: ${props => props.lineThrough ? "700" : "500"};
    font-style: ${props => props.lineThrough ? "italic" : "normal"};
    text-decoration: ${props => props.lineThrough ? "line-through" : "none"};
    font-size: 16px;
`;

const Item = ({ label, id, handleDelete }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <Container>
            <CheckBox
                disabled={false}
                tintColors={{
                    true: '#EEEEEE',
                    false: "whitesmoke",
                }}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />

            <RowLabel lineThrough={toggleCheckBox}>
                {label}
            </RowLabel>
            <CloseButton
                onPress={() => handleDelete(id)}
            >
                <ButtonLable>x</ButtonLable>
            </CloseButton>
        </Container>
    )
}

export default Item;