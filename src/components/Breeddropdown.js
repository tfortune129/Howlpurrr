import { useState, useEffect } from "react"



export default function BreedDropdown() {
    const [petType, setPetType] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [catBreeds, setCatBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');

    useEffect(() => {
        const fetchDogBreeds = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const breedNames = Object.keys(data.message);
            setBreeds(breedNames);

        };
        const fetchCatBreeds = async () => {
            const response = await fetch('https://api.thecatapi.com/v1/breeds');
            const data = await response.json();
            const breedNames = data.map(breed => breed.name);
            setCatBreeds(breedNames);
        };
          
        if (petType === 'dog') {
            fetchDogBreeds()
        } else if (petType === 'cat') {
            fetchCatBreeds();
        } else {
            setBreeds([])
        }
    }, [petType]);
    
    
    const handlePetTypeChange = (event) => {
        setPetType(event.target.value);
        setSelectedBreed('');

    };


    return (

        <>
        <select className="form-select" onChange={handlePetTypeChange} value={petType}>

                <option value="">select pet type</option>
                <option value="bird">bird</option>
                <option value="cat">cat</option>
                <option value="dog">dog</option>
                <option value="farm animal">farm animal (not horse)</option>
                <option value="ferret">ferret</option>
                <option value="fish">fish</option>
                <option value="guinea pig">guinea pig</option>
                <option value="horse">horse</option>
                <option value="rabbit">rabbit</option>
                <option value="rat/mouse">rat/mouse</option>
                <option value="reptile">reptile</option>
             
        </select>

        
         &nbsp;&nbsp;&nbsp;
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {selectedBreed || "breed (if applicable)?"} 
                </button>



                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {petType === 'dog' ? 
                    breeds.map((breed) => (
                    <button 
                        className="dropdown-item" 
                        type="button"
                        key={breed}
                        onClick={() => setSelectedBreed(breed)}>
                            {breed}
                        </button>
                    )):
                    petType === 'cat' ?
                    catBreeds.map((breed) => (
                    <button 
                        className="dropdown-item" 
                        type="button"
                        key={breed}
                        onClick={() => setSelectedBreed(breed)}>
                            {breed}
                        </button>
                    )):
                    <button className="dropdown-item" type="button">no breed available for this pet type :(</button>
                    }
                </div>
            </div>
            
        </>
    )

}




// do set states for all in pet signup, look at controlled forms in react



