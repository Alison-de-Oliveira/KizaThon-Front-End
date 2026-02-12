{/* 
<img src="" alt="" />

function img({ src, alt}){}

---

const obj = { value: 1}
Card(obj)

---

<Card value="Teste" />

 */}


function Card({ value }) {
	return <h1>{value}</h1>
}


export default Card;
