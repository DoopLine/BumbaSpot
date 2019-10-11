import { useState } from "react";

import uuid from 'uuid/v4';

import CardModel from '../models/Card'; 

export default initVal => {
    const [lists, setLists] = useState(initVal);

    const getLists = (listIndex = undefined) => {
		const workingLists = [...lists];
		if (listIndex === undefined) return { workingLists };
		const workingList = workingLists[listIndex];
		return { workingLists, workingList };
	};

    const create = (title, createble) => {
		const workingLists = [...lists];
		const list = {
			id: uuid(),
			title,
			createble,
			cards: [],
			isDone: false,
		};
		workingLists.push(list);
		setLists(workingLists);
	};
	
    const edit = (newTitle, newCreateble, id) => {
		const workingLists = [...lists];
		const listRef = workingLists.find( l => l.id === id);
		listRef.title = newTitle;
		listRef.createble = newCreateble;
		setLists(workingLists);
	};
	
    const remove = id => {
		const workingLists = [...lists];
		setLists(workingLists.filter( l => l.id !== id));
    };

    const addCard = (content, listIndex) =>{
        const workingLists = [...lists];
		const workingList = workingLists[listIndex];
		const card = CardModel(content);
        workingList.cards.push(card);
        lists[listIndex] = workingList;
    }

    const editCard = (id, inputVal, listIndex) => {
		const { workingList } = getLists(listIndex);
		const cardRef = workingList.cards.find(c => c.id === id);
		const cardIndex = workingList.cards.findIndex(c => c.id === id);
		cardRef.content = inputVal;
        lists[listIndex].cards[cardIndex] = cardRef;
	};

    const addLabelToCard = (cardId, inputVal , color, listIndex) => {
		const { workingList } = getLists(listIndex);
		const cardRef = workingList.cards.find(c => c.id === cardId);
		const cardIndex = workingList.cards.findIndex(c => c.id === cardId);
		cardRef.labels.push({title: inputVal, color, id: uuid()});
        lists[listIndex].cards[cardIndex] = cardRef;
	};

    const removeLabelFromCard = (cardId, labelId, listIndex) => {
		const { workingList } = getLists(listIndex);
		const cardRef = workingList.cards.find(c => c.id === cardId);
		const cardIndex = workingList.cards.findIndex(c => c.id === cardId);
		cardRef.labels = cardRef.labels.filter( lb => lb.id !== labelId);
        lists[listIndex].cards[cardIndex] = cardRef;
	};
    
    return [lists, create, edit, remove, addCard, editCard, addLabelToCard, removeLabelFromCard, setLists];
}