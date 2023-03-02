from app import app
from flask import request, jsonify
from .models import User



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

    email = data.get('email')
    password = data.get('password')

    # check if email and password exist in database:
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return jsonify({'message': 'User logged in successfully', 'user': user.to_dict()})
    else:
        return jsonify({'message': 'Invalid email or password'}), 401





# ### NOTES ###
# still need enpoints and api so react will be making requests to flask and ultimately ESQL
# no need for 'get' since react is frontend




    