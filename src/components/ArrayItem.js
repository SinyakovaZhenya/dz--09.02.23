

const ArrayItem = (props) => {
	return (
		<div className="array-item">
			<div className="array-item__info">{props.image}</div>
			<div className="array-item__info">{props.name}</div>
			<div className="array-item__info">{props.city}</div>
			<div className="array-item__info">{props.foundingDate}</div>
			<div className="array-item__info">{props.progress}</div>
			<div className="array-item__info">{props.commandStructure}</div>
		</div>
	)
}

export default ArrayItem;