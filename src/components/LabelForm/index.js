import React, { useState} from 'react';
import useFormState from '../../hooks/useFormState';

import { Container, ColorBox } from './styled';

import Input from '../Input';
import Button from '../Button';

export default function LabelForm ({ onSubmit}){
    const [title, changeTitle] = useFormState();
    const [selectedColor, setSelectedColor]  = useState('blue');
    const colors = ['blue', 'red', 'green', 'orange', 'gray'];

    return (
        <Container onSubmit={(e)=> { e.preventDefault(); onSubmit(title, selectedColor)}}>
            <Input title='Criar rótulo' onChange={changeTitle} value={title}  />
            <div>
                {colors.map(cl => <ColorBox key={cl} title={cl} color={cl} active={cl === selectedColor}  onClick={()=> setSelectedColor(cl)}/>)}
            </div>
            <Button type="submit">Criar</Button>
        </Container>
    );
}