import React from 'react';
import {Button} from 'reactstrap';

const WordListItem = ({word, onDeleteClick}) => {

    const stringToHslColor = (str = '') => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        const h = hash % 360;
        return `hsl(${h},60%,80%)`;
    };

    return (
        <div style={{display: 'flex'}}>
            <div style={{
                margin: 'auto 0',
                textAlign: 'center',
                height: '40px',
                width: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                color: 'white',
                fontWeight: 'bold',
                background: stringToHslColor(word.english + word.lastName)}}>
                {!!word && !!word.english ? word.english[0].toUpperCase() : ''}
            </div>
            <div style={{margin: 'auto 0', flexGrow: 1, paddingLeft: '10px'}}>
                {word.english} 
            </div>
            <div style={{margin: 'auto 0'}}>
                <Button size="sm" color="danger" outline onClick={() => onDeleteClick(word.id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default WordListItem;