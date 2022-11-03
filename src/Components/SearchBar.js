import { ListeItems } from '../Data/ListeItems';
import { useState } from 'react';
function SearchBar() {
	const [liste, setListe] = useState(ListeItems);
    const handleSearch = (event) => {}

	return (
		<div>
			Search :
			<input
				type="text"
				id="SearchInput"
				onChange={handleSearch}
				placeholder="Saisir Nom d'item ...."
			/>
			
		</div>
	);

}

export default SearchBar;
