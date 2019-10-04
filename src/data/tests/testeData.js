import uuid from 'uuid/v4';
export default function() {
	const lists = [];
	for (let i = 0; i < 3; i++) {
		const cards = [];

		for (let j = 0; j < 5; j++) {
			if (j > 3) {
				cards.push({
					id: uuid(),
					content: 'Card content de testes' + i + j,
					labels: ['#64dd17'],
				});
			} else {
				cards.push({
					id: uuid(),
					content: 'Card content de testes' + i + j,
					labels: ['#64dd17'],
					img:
						'./static/images/69152278_2453630424734358_4212083270524862464_o.jpg',
				});
			}
		}

		lists.push({
			id: uuid(),
			title: 'Tarefa de testes ' + i,
			createble: i > 1 ? true : false,
			cards,
			isDone: i === 2 ? true : false,
		});
	}

	return lists;
}
