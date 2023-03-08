import * as React from 'react';
import Breeddropdown from './Breeddropdown';
import { useNavigate } from 'react-router-dom';



export default function OutlinedButtons() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const pet_name = e.target.pet_name.value;
        const birth_date = e.target.birth_date.value;
        const pet_weight = e.target.pet_weight.value;
        const pet_gender = e.target.pet_gender.value;
        const pet_type = e.target.pet_type.value;
        const pet_breed = e.target.pet_breed.value;
        const unique_id = e.target.unique_id.value;
        const pet_picture = e.target.pet_picture.value;
        
        const reqBody = {
            pet_name: pet_name,
            birth_date: birth_date,
            pet_weight: pet_weight,
            pet_gender: pet_gender,
            pet_type: pet_type,
            pet_breed: pet_breed,
            unique_id: unique_id,
            pet_picture: pet_picture

        }

        console.log(reqBody);

        const url = 'http://127.0.0.1:5000/api/pet'
        const options = {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            navigate('/pet');
            console.log(data);
        }

    };


    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>


            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                add a new pet
            </button>


            <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"><b>new pet form :D</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label for="inputpetname" className="col-form-label"><b>pet name:</b></label>
                                    <div className="col-sm-12">
                                        <input name='pet_name' type="input1" className="form-control" id="inputpetname" placeholder="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputpetage" className="col-form-label"><b>pet date of birth <i>(in mm/dd/yyyy format)</i>:</b></label>
                                    <div className="col-sm-12">
                                        <input name='birth_date' type="input2" className="form-control" id="inputpetage" placeholder="" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="inputpetage" className="col-form-label"><b>pet weight<i>(lb)</i>:</b></label>
                                    <div className="col-sm-12">
                                        <input name='pet_weight' type="input2" className="form-control" id="inputpetage" placeholder="" />
                                    </div>
                                </div>

                                &nbsp;
                                <div name='pet_gender' className="col-md-8 mb-4">

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

                                <Breeddropdown name='pet_breed' />

                                &nbsp;
                                <div className="form-group row">
                                    <label for="inputpetname" className="col-form-label"><b>something that describes your pet <i>(optional):</i></b></label>
                                    <div className="col-sm-12">
                                        <input name='unique_id' type="input1" className="form-control" id="inputpetname" placeholder="" />
                                    </div>
                                </div>


                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <label className="form-label" for="customFile"><b>upload a picture of your pet<i>(optional):</i></b></label>
                                    <input name='pet_picture' type="file" className="form-control" id="customFile" />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">close</button>
                                    <button type="submit" className="btn btn-primary">save changes</button>
                                </div>
                            </form>
                        </div>



                    </div>



                </div>
            </div>


        </div>

    );
}