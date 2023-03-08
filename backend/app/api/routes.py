from flask import Blueprint
from ..models import Pet, User
from flask import request
from flask_cors import cross_origin
from flask_httpauth import HTTPBasicAuth



api = Blueprint('api', __name__)
basic_auth = HTTPBasicAuth()

@basic_auth.verify_password
def verify_password(email, password):
    user = User.query.filter_by(email=email).first()
    if user:
            if password == user.password:
                 return user
            

@api.route('/api/signup', methods=['POST'])
def getsignUp():
    data = request.json

    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    password = data['password']

    user = User(first_name, last_name, email, password)

    user.saveToDB()

    return {
        'status': 'ok',
        'message': 'User successfully created'
    }


@api.route('/api/signin', methods=['POST'])
@basic_auth.login_required
def getToken():
    user = basic_auth.current_user()
    return {
        'status': 'ok',
        'message': 'User logged in successfully',
        'user': user.to_dict()
    }



@api.route('/api/pet', methods=['POST'])
def getPet():
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

    return {
        # pet = []
        # for p in pet:
        #     pet.append(p.to_dict())
        # list comprehension version of above:
        
        'status': 'ok',
        'message': 'Pet successfully created',
        'pet': [p.to_dict() for p in pet],
        'total pets': len(pet)       
    }



# add details to pet like signup
# do i need an api route for signin?






 # 1:30:50 week 6 day 2