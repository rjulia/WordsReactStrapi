import React from 'react';
import WordListItem from './WordListItem';
import {ListGroup, ListGroupItem} from 'reactstrap';

const WordsList = ({words, onDeleteUserClick}) => {
    return (
        <ListGroup>
            {words.sort((a, b) => {
                if (a.firstName > b.firstName) {
                    return 1;
                } else if (a.firstName < b.firstName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else if (a.lastName < b.lastName) {
                    return -1;
                }
                return 0;
            }).map((word) => {
                console.log(word);
                return (
                    <ListGroupItem key={word.id}>
                        <WordListItem onDeleteClick={onDeleteUserClick} word={word}/>
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default WordsList;
