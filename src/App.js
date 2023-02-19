import {useState} from 'react';
import "./styles/main.css";

import Infoclub from "./components/Infoclub";
import Victories from "./components/Victories";
import List from "./components/List";
import ArrayItem from "./components/ArrayItem";

// import RM from "./../image/Real_Madrid.png";
// import MS from "./../image/MS.jpg";
// import PSG from "./../image/Paris-St-Germain-868.png";


function App() {

	const array = [
		{
			image: './image/MS.jpg',
			name: 'Команда: Real Madrid',
			city: 'Город: Мадрид',
			foundingDate: 'Дата основания: 6 марта 1902; 120 лет назад',
			progress: 'Достижения: Чемпионат Испании, Кубок Испании, Кубок лиги, Лига чемпионов УЕФА / Кубок европейских чемпионов, Криштиану Роналду: 450 голов',
			commandStructure: 'Состав команды: Вр Тибо Куртуа, Защ Дани Карвахаль, Защ Эдер Милитан, Защ Давид Алаба, Защ Хесус Вальехо, Защ Начо, Нап Эден Азар, ПЗ Тони Кроос, Нап Карим Бензема, ПЗ Лука Модрич, Нап Марко Асенсио, ПЗ Эдуарду Камавинга, Вр Андрей Лунин, ПЗ Федерико Вальверде, Защ Лукас Васкес, ПЗ Орельен Чуамени, ПЗ Дани Себальос, Нап Винисиус Жуниор, Нап Родриго, Защ Антонио Рюдигер, Защ Ферлан Менди, Нап Мариано'
		},
		{
			image: './image/Paris-St-Germain-868.png',
			name: 'Команда: Manchester City',
			city: 'Город: Манчестер',
			foundingDate: 'Дата основания: 1880; 143 года назад (под названием «Сент Маркс (Уэст-Гортон)», 16 апреля 1894; 128 лет назад (под названием «Манчестер Сити»)',
			progress: 'Достижения: Первый дивизион / Премьер-лига, Кубок Англии, Кубок Английской футбольной лиги, Кубок обладателей кубков УЕФА',
			commandStructure: 'Состав команды: Защ	Кайл Уокер, Защ Рубен Диаш, ПЗ Калвин Филлипс, Защ	Джон Стоунз, Защ	Натан Аке, Защ	Жуан Канселу, ПЗ	Илкай Гюндоган (капитан), Нап	Эрлинг Холанн, ПЗ	Джек Грилиш, Защ	Эмерик Ляпорт, ПЗ	Родри, ПЗ	Кевин Де Брёйне, Вр	Штефан Ортега, Нап	Хулиан Альварес, ПЗ	Бернарду Силва, Защ	Серхио Гомес, Защ	Мануэль Аканджи, ПЗ	Рияд Махрез, Вр	Эдерсон, Вр	Скотт Карсон, ПЗ	Фил Фоден, ПЗ	Коул Палмер, Защ	Рико Луис'
		},
		{
			image: './image/Real_Madrid.png',
			name: 'Команда: Пари́ Сен-Жерме́н» или ПСЖ',
			city: 'Город: Париж',
			foundingDate: 'Дата основания: 1970',
			progress: 'Достижения: Чемпионат Франции (Лига 1), Чемпионат Франции (Лига 2), Кубок Франции, Лига чемпионов УЕФА, Суперкубок УЕФА',
			commandStructure: 'Состав команды: Вр	Серхио Рико, Вр	Александр Летелье, Вр	Джанлуиджи Доннарумма,  Защ	Ашраф Хакими, Защ	Преснель Кимпембе, Защ	Серхио Рамос, Защ	Маркиньос Капитан команды, Защ	Хуан Бернат, Защ	Нуну Мендеш, Защ	Норди Мукиеле, Защ	Тимоте Пембеле, ПЗ	Марко Верратти, ПЗ	Фабиан Руис,  ПЗ	Данилу Перейра, ПЗ	Витинья, ПЗ	Ренату Санчеш, ПЗ	Карлос Солер, ПЗ	Варрен Заир-Эмри, Нап	Килиан Мбаппе, Нап	Неймар, Нап	Лионель Месси, Нап	Юго Экитике'
		},
	];

	const [text, setText] = useState('Нажми');
	const [pending, setPending] = useState(false);

	const arr = ['Да', 'Нет', 'Не знаю', 'Наверное', 'Маловероятно']

	function updateText() {
		if (pending) {
			return;
		}

		const index = getRandomIndex(arr.length);
		setPending(true);

		setTimeout(() => {
			setText(arr[index]);
			setPending(false);
		}, 2000)
	}

	function getRandomIndex(len) {
		return Math.floor(Math.random() * len);
	}

  return (
    <div className="App">
		<h1>Задание 1</h1>
      {<Infoclub/>}
		{<Victories/>}
		{<List/>}

		<h1>Задание 3</h1>
		
		{<ArrayItem
			img src={array[0].image}
			name={array[0].name}
			city={array[0].city}
			foundingDate={array[0].foundingDate}
			progress={array[0].progress}
			commandStructure={array[0].commandStructure}
		/>}
		{<ArrayItem
			img src={array[1].image}
			name={array[1].name}
			city={array[1].city}
			foundingDate={array[1].foundingDate}
			progress={array[1].progress}
			commandStructure={array[1].commandStructure}
		/>}
		{<ArrayItem
			img src={array[2].image}
			name={array[2].name}
			city={array[2].city}
			foundingDate={array[2].foundingDate}
			progress={array[2].progress}
			commandStructure={array[2].commandStructure}
		/>}

		<h1>Задание 4</h1>

		<div className="ball">
			<div className="block" onClick={updateText}>
				<div className="text">{pending ? 'Подождите' : text}</div>
			</div>
		</div>
    </div>
  );
}

export default App;
