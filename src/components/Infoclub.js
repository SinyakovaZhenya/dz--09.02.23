import logo from "./../image/Real_Madrid.png";

const Infoclub = () => {
	return (
		<div className="container">
			<img src={logo} alt=""/>
			<ul className="info">
				<li>Название: Real Madrid Club de Fútbol</li>
				<li>Город: Мадрид</li>
				<li>Основан:	6 марта 1902; 120 лет назад</li>
			</ul>
		</div>
	)
}

export default Infoclub;