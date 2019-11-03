import React from 'react';
import {MdAdd, MdClose} from 'react-icons/md';

import useToggle from '../../../hooks/useToggle';

import { Container, TaskItem, Progress } from './styled';
import {Header} from '../styled';

import CircularButton from '../../../components/CircularButton';
import CardForm from '../../../components/CardForm';
import Options from '../../../components/Options';
import CheckBox from '../../../components/CheckBox';

function TaskSection({
    taskOptions,
    currCard,
    handleCreateNewTasks,
    handleChangeTaskState,
    taskProgress,
}) {

	const [isEditingTask, toggleIsEditingTask] = useToggle();

	return (
		<Container>
			<Header>
				<h2>Tarefas</h2>
				<CircularButton
					onClick={toggleIsEditingTask}
					lint='Adicionar Tarefa'
					small={true}>
					{!isEditingTask ? <MdAdd /> : <MdClose />}
				</CircularButton>
				{<div style={{ margin: '0 .5rem' }}></div>}
				<Options options={taskOptions} small={true} />
			</Header>
			{!currCard.tasks.length && <p>Sem Tarefas</p>}
			{<div style={{ margin: '2rem 0' }}></div>}
			{isEditingTask && (
				<CardForm
					keyName='newDesc'
					info='Descreva a tarefa'
					onSubmit={inputVal => {
						handleCreateNewTasks(inputVal)
						toggleIsEditingTask();
					}}
				/>
			)}
			{!!currCard.tasks.length && (
				<TaskItem>
					<span style={{ display: 'flex' }}>
						<p style={{ marginRight: '.5rem' }}>{taskProgress}%</p>
						<Progress value={taskProgress} max='100'></Progress>
					</span>
					{currCard.tasks.map(({ id, content, isDone }) => (
						<CheckBox
							onChange={() => handleChangeTaskState(id, isDone)}
							key={id}
							id={id}
							title={content}
							checked={isDone}
							lineThrough={isDone && true}
						/>
					))}
				</TaskItem>
			)}
		</Container>
	);
}

export default React.memo(TaskSection);