import data from '../../../data/products.json'



export default function handler({ query: { id } }, res) {
	// console.log(data);
	const filtered = data.products.filter((item) => item.id === id)
	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res
			.status(404)
			.json({ message: `Article with the id of ${id} is not found` })
	}
}
