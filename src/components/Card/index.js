import React, {useRef, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { listActionTypes} from '../../reducers/actionTypes';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styled';
import uuid from 'uuid/v4';

import {ListContext} from '../../context/listContext';

export default function List({data, index, listIndex, listId}){
    const {labels, content, img, id} = data;
    const dndRef = useRef();
    const history = useHistory();

    const { dispatch} = useContext(ListContext);

    const openCard = (id, listId) => {
		history.push(`/lists/${listId}/cards/${id}`);
	};

    const [{isDragging}, dragRef] = useDrag({
        item: {type: 'CARD', index, listIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;
            
            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

            const targetSize = dndRef.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            
            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;
            // console.log(draggedTop);
            if(draggedIndex < targetIndex && draggedTop < targetCenter) return;
            if(draggedIndex > targetIndex && draggedTop > targetCenter) return;

            // move(draggedIndex, targetIndex, draggedListIndex, targetListIndex);
            dispatch({
				type: listActionTypes.MOVE_CARD_TO_CARD,
				fromListIndex: draggedListIndex,
				toListIndex: targetListIndex,
				fromIndex: draggedIndex,
				toIndex: targetIndex,
			});

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    });

    dragRef(dropRef(dndRef));

    return (
        <Container ref={dndRef} isDragging={isDragging} onClick={()=> openCard(id, listId)}>
            <header>
                {labels.map(({title, color}) => (
                    <Label key={uuid()} color={color} title={title}/>
				))}
            </header>
            <p>{content}</p>
            {img && <img src={img} alt={content}/>}
        </Container>
    );
} 