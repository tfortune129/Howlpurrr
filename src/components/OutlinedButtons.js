import * as React from 'react';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react"


export default function OutlinedButtons() {

        // function BreedDropdown() {
        //     const [petType, setPetType] = useState('');
        //     const [breeds, setBreeds] = useState([]);

        //     useEffect(() => {
        //         const fetchDogBreeds = async () => {
        //             const response = await fetch('https://dog.ceo/api/breeds/list/all');
        //             const data = await response.json();
        //             const breedNames = Object.keys(data.message);
        //             setBreeds(breedNames);
            

        //         if (petType === 'dog') {
        //             fetchDogBreeds()
        //         } else{
        //             setBreeds([])
        //         }
        //     }, [petType]);
        //     const handlePetTypeChange = (event) => {
        //         setPetType(event.target.value);

        //     };
                    

        //     }}}


    return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>


      {/* <Button variant="outlined" size='large' href="/addpet">
        <Typography variant="body1" style={{ fontFamily: "'Roboto Mono', monospace" }}>

        add a new pet

        </Typography>
      </Button> */}


            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            add a new pet
            </button>


            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle"><b>new pet form :)</b></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                <form>
                        <div className="form-group row">
                            <label for="inputpetname" className="col-form-label"><b>pet name:</b></label>
                            <div className="col-sm-12">
                            <input type="input1" className="form-control" id="inputpetname" placeholder=""/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputpetage" className="col-form-label"><b>pet age <i>(in mm/dd/yyyy format)</i>:</b></label>
                            <div className="col-sm-12">
                            <input type="input2" className="form-control" id="inputpetage" placeholder=""/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputpetage" className="col-form-label"><b>pet weight<i>(lb)</i>:</b></label>
                            <div className="col-sm-12">
                            <input type="input2" className="form-control" id="inputpetage" placeholder=""/>
                            </div>
                        </div>
                        
                        &nbsp;
                        <div className="col-md-8 mb-4">

                            <h6 className="mb-2 pb-1">Gender: </h6>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" />
                            <label className="form-check-label2" for="femaleGender">female</label>
                            </div>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                            <label className="form-check-label2" for="maleGender">male</label>
                            </div>

                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                            <label className="form-check-label2" for="otherGender">other</label>
                            </div>
                        </div>


                        {/* <div className="form-group row">
                            <label for="inputpettype" className="col-form-label"><b>what kind of pet do you have?</b></label>
                            <div className="col-sm-12">
                            <input type="input2" className="form-control" id="inputpettype" placeholder=""/>
                            </div>
                        </div> */}
                        
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        what kind of pet do you have?
                        </button>
                        <div id='pettype' className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">bird</button>
                            <button className="dropdown-item" type="button">cat</button>
                            <button className="dropdown-item" type="button">dog</button>
                            <button className="dropdown-item" type="button">farm animal (not horse)</button>
                            {/* add actual animals for farm animals */}
                            <button className="dropdown-item" type="button">ferret</button>
                            <button className="dropdown-item" type="button">fish</button>
                            <button className="dropdown-item" type="button">guinea pig</button>
                            <button className="dropdown-item" type="button">horse</button>
                            <button className="dropdown-item" type="button">rabbit</button>
                            <button className="dropdown-item" type="button">rat/mouse</button>
                            <button className="dropdown-item" type="button">reptile</button>
                        </div>
                        </div>

                        {/* <div className="form-group row">
                            <label for="inputpetbreed" className="col-form-label"><b>breed?</b></label>
                            <div className="col-sm-12">
                            <input type="input2" className="form-control" id="inputpetbreed" placeholder=""/>
                            </div>
                        </div> */}

                        &nbsp;&nbsp;&nbsp;
                        <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        breed <i>(if applicable)</i>?
                        </button>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>

{/* <label htmlFor="pet-type-dropdown">What kind of pet do you have?</label>
      <select id="pet-type-dropdown" value={petType} onChange={handlePetTypeChange}>
        <option value="">--Select a pet type--</option>
        <option value="bird">Bird</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="farm-animal">Farm animal (not horse)</option>
        <option value="ferret">Ferret</option>
        <option value="fish">Fish</option>
        <option value="guinea-pig">Guinea pig</option>
        <option value="horse">Horse</option>
        <option value="rabbit">Rabbit</option>
        <option value="rat-mouse">Rat/mouse</option>
        <option value="reptile">Reptile</option>
      </select>

      {petType === 'dog' &&
        <div>
          <label htmlFor="breed-dropdown">Select a breed:</label>
          <select id="breed-dropdown">
            {breeds.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
      }
    </div>
  ); */}

                            
                            
{/* <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {breeds.map((breed) => (
        <button
            className="dropdown-item"
            type="button"
            key={breed}
            onClick={() => props.onBreedSelected(breed)}>
            {breed}
        </button>
        ))}
    </div> */}

                        </div>
                        </div>

                        &nbsp;
                        <div className="form-group row">
                            <label for="inputpetname" className="col-form-label"><b>one word that describes your pet <i>(optional):</i></b></label>
                            <div className="col-sm-12">
                            <input type="input1" className="form-control" id="inputpetname" placeholder=""/>
                            </div>
                        </div>


                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                        <label className="form-label" for="customFile"><b>upload a picture of your pet<i>(optional):</i></b></label>
                        <input type="file" className="form-control" id="customFile" />
                        </div>
                </form>
                </div>

                    
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">close</button>
                    <button type="button" className="btn btn-primary">save changes</button>
                </div>
                </div>

            
                
            </div>
            </div>
    
    
    </div>
   
  );
}