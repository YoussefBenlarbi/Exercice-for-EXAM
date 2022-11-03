import { ListeItems } from '../Data/ListeItems';
import { useState } from 'react';
function SearchBar() {
	const [liste, setListe] = useState(ListeItems);
	// const handleSearch = (event) => {setListe(liste.filter((element) => element.startsWith(event.target.value)))}
	const handleSearch = (event) => {
		if (event.target.value === '') {
			setListe(ListeItems);
			return;
		}
		const filteredValues = liste.filter(
			(element) => element.toLowerCase().indexOf(event.target.value) !== -1
		);
		setListe(filteredValues);
	};

	return (
		<div>
			Search :
			<input
				type="query"
				id="SearchInput"
				onChange={handleSearch}
				placeholder="Saisir Nom d'item ...."
			/>
			{liste && liste.map((item, index) => (
				<div style={{ marginLeft: '25px' }} key={index}>
					{item}
				</div>
				//Display each item
			))}
		</div>
	);
}

export default SearchBar;
