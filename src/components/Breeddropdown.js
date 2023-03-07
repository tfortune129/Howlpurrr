import { useState, useEffect } from "react"


export default function BreedDropdown() {
    const [petType, setPetType] = useState('');
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchDogBreeds = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const breedNames = Object.keys(data.message);
            setBreeds(breedNames);


            if (petType === 'dog') {
                fetchDogBreeds()
            } else {
                setBreeds([])
            }}
        }, [petType]);
    const handlePetTypeChange = (event) => {
        setPetType(event.target.value);

    };

    return (

        <> &nbsp;&nbsp;&nbsp;
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    breed <i>(if applicable)</i>?
                </button>



                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Action</button>
                    <button className="dropdown-item" type="button">Another action</button>
                    <button className="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
        </>
    )

}




// do set states for all in pet signup, look at controlled forms in react