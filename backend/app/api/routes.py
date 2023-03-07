from flask import Blueprint
from ..models import Pet

api = Blueprint('api', __name__)


@api.route('/api/pet')
def getPet():
    pet = Pet.query.all()
    
    return {
        # pet = []
        # for p in pet:
        #     pet.append(p.to_dict())
        # list comprehension version of above:

        'pet': [p.to_dict() for p in pet]
       
    }







 # 1:30:50 week 6 day 2