import uuid from 'uuid/v4';
export default content => ({
	id:  uuid(),
	content: content,
	desc: '',
	labels: [],
	tasks: [],
	img: ''
});