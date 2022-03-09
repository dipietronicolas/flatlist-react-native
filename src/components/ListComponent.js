import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
} from 'react-native'
import Item from './styled-components/Item';
import RoundButton from './styled-components/RoundButton';
import CustomModal from './styled-components/Modal';

const ListComponent = () => {

    const [list, setList] = React.useState([]);
    const [text, setText] = React.useState('');
    const [showDeleteModal, setShowDeleteModal] = React.useState(false);
    const [itemSelected, setItemSelected] = React.useState({});

    const {
        main,
        inputContainer,
        listContainer,
        inputText,
        mainTitle,
    } = styles;

    const handleAddButton = () => {
        if (text.length > 0) {
        setList([...list, { label: text, id: String(list.length) }]);
            setText('');
        }
    };

    const handleDelete = (id) => {
        const newState = list.filter(element => element.id !== id);
        setList(newState);
        setItemSelected({});
        setShowDeleteModal(!showDeleteModal)
    }

    const onHandleModal = id => {
        setItemSelected( id ? list.find(item => item.id === id) : {} );
        setShowDeleteModal(!showDeleteModal);
    }

    const renderItem = ({ item }) => (
        <Item
            id={item.id}
            label={item?.label}
            handleDelete={() => onHandleModal(item.id)}
        />
    );

    return (
        <View style={main}>
            <Text style={mainTitle}>List Component</Text>
            <View style={inputContainer}>
                <TextInput
                    style={inputText}
                    placeholder={'Name'}
                    placeholderTextColor="whitesmoke" 
                    value={text}
                    onChangeText={text => setText(text)}
                    autoFocus={true}
                    maxLength={24}
                />
                <RoundButton
                    handleClick={handleAddButton}
                    label={'+'}
                />
            </View>
            <View style={listContainer}>
                <FlatList
                    style={{ paddingHorizontal: 32 }}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <CustomModal
                itemSelected={itemSelected}
                visible={showDeleteModal}
                closeModal={onHandleModal}
                handleDelete={handleDelete}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
    },
    mainTitle: {
        paddingHorizontal: 32,
        fontSize: 24,
        color: 'whitesmoke',
        textAlign: 'center',
    },
    inputContainer: {
        height: 100,
        paddingHorizontal: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listContainer: {
        paddingTop: 24,
        height: 256,
        backgroundColor: 'rgba(97, 97, 97, 0.5)',
    },
    inputText: {
        width: 256,
        borderBottomColor: '#673AB7',
        borderBottomWidth: 1,
        color: 'whitesmoke'
    },
    itemList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})

export default ListComponent