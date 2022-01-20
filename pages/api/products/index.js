import data from '../../../data/products.json'
// import {products} from '../../../data'


export default function handler(req, res) {
	// console.log(data);
	res.status(200).json({ data })
}
