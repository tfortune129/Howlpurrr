from app import app
from flask import request, jsonify
from .models import User, Pet, Calendar
from flask_login import LoginManager, login_required, current_user, login_user




@app.route('/signup', methods=['POST'])
def signUp():
    # get json information from react and save data to variable:
    data = request.json
    
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    password = data['password']

    user = User(first_name, last_name, email, password)
   
    user.saveToDB()

    return jsonify({'message': 'User created successfully'})






@app.route('/signin', methods=['POST'])
def signIn():
    data = request.json

    email = data['email']
    password = data['password']

    # check if email and password exist in database:
    user = User.query.filter_by(email=email).first()
    
    if user and user.check_password(password):
         return jsonify({'message': 'User logged in successfully', 'user': user.to_dict()})
    else:
         return jsonify({'message': 'Invalid email or password'}), 401
  
  
    # if user:
    #     if user.password == password:
    #         login_user(user)
    #     else:
    #         flash ('Wrong Password, please try again.')
            
    # else:
    #     flash('Username does not exist.') 


    
   





@app.route('/pet', methods=['POST'])   
@login_required
def petSignUp():
    data = request.json

    pet_name = data['pet_name']
    birth_date = data['birth_date']
    pet_weight = data['pet_weight']
    pet_gender = data['pet_gender']
    pet_type = data['pet_type']
    pet_breed = data['pet_breed']
    unique_id = data['unique_id']
    pet_picture = data['pet_picture']

    pet = Pet(pet_name, birth_date, pet_weight, pet_gender, pet_type, pet_breed, unique_id, pet_picture)
    
    pet.saveToDB()

    return jsonify({'message': 'Pet created successfully'})




@app.route('/calendar', methods=['POST'])
@login_required
def petCalendar():
    data = request.json

    good_day = data['good_day']
    pet_id = data['pet_id']
    

    calendar = Calendar(good_day, pet_id)

    calendar.saveToDB()

    return jsonify({'message': 'Pet calendar started successfully'})



# @app.route('/goodday', methods=['GET'])
# @login_required
# def petGoodDay():
#     data = request.json
#     # day_description = data['day_description'] make this like instagram post
    

#     good

#     good_day = Calendar.query.filter_by(good_day=good_day).first()

    
    
    
    
    
    # if pet:
    #     return jsonify({'message': 'Pet calendar created successfully', 'pet': pet.to_dict()})
    # else:
    #     return jsonify({'message': 'Pet does not exist'}), 404










# ### NOTES ###
# still need enpoints and api so react will be making requests to flask and ultimately ESQL
# no need for 'get' since react is frontend







    