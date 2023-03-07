import * as React from 'react';
import Breeddropdown from './Breeddropdown';


export default function OutlinedButtons() {

        

    return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>


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

                        <Breeddropdown />
                        
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