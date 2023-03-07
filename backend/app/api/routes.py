from flask import Blueprint
from ..models import Pet, User
from flask import request

api = Blueprint('api', __name__)


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



@api.route('/api/pet')
def getPet():
    pet = Pet.query.all()
    
    return {
        # pet = []
        # for p in pet:
        #     pet.append(p.to_dict())
        # list comprehension version of above:
        
        'status': 'ok',
        'pet': [p.to_dict() for p in pet],
        'total pets': len(pet)

       
    }

# add details to pet like signup
# do i need an api route for signin?






 # 1:30:50 week 6 day 2