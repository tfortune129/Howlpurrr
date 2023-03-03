import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function OutlinedButtons() {
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
                        <div class="form-group row">
                            <label for="inputpetname" class="col-form-label"><b>pet name:</b></label>
                            <div class="col-sm-12">
                            <input type="input1" class="form-control" id="inputpetname" placeholder=""/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputpetage" class="col-form-label"><b>pet age <i>(in mm/dd/yyyy format):</i></b></label>
                            <div class="col-sm-12">
                            <input type="input2" class="form-control" id="inputpetage" placeholder=""/>
                            </div>
                        </div>
                       
                        
                        <label class="form-label" for="customFile">upload a picture of your cutie (optional):</label>
                        <input type="file" class="form-control" id="customFile" />

                </form>


                </div>
                <div class="col-md-8 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">male</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">other</label>
                  </div>

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