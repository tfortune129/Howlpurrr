from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, date, timedelta
from secrets import token_hex
# timedelta is good for converting dates to and from strings based on difference between two dates or times

# instantiate database connection:

db = SQLAlchemy()

class User(db.Model):
    # init tells us how exactly we're going to instantiate the model
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(45), nullable=False)
    last_name = db.Column(db.String(45), nullable=False)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    profile_picture = db.Column(db.String)
    apitoken = db.Column(db.String, nullable=True)
    # this is assuming that i'll be storing a file path or URL to user's profile picture (blueprint?)
    pet = db.relationship('Pet', backref='pet', lazy=True)

    # when you wan to instantiate a new user, you should pass in all the variables you want to instant:    
    def __init__(self, first_name, last_name, email, password, profile_picture = None):
        # save it:
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.profile_picture = profile_picture
        self.apitoken = token_hex(16)

    def saveToDB(self):
        db.session.add(self)
        db.session.commit()
    
    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'apitoken': self.apitoken,
        }

        
   
class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pet_name = db.Column(db.String(45), nullable=False)
    birth_date = db.Column(db.Date, nullable=False)
    pet_type = db.Column(db.String(300), nullable=False)
    pet_breed = db.Column(db.String(300))
    pet_weight = db.Column(db.Integer)
    pet_gender = db.Column(db.String(45), nullable=False)
    # unique_id would be the pet's unique quality
    unique_id= db.Column(db.String, nullable=False)
    pet_picture = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __init__(self, pet_name, birth_date, pet_type, pet_breed, pet_weight, pet_gender, unique_id, user_id, pet_picture = None):
        self.pet_name = pet_name
        self.birth_date = birth_date
        self.pet_type = pet_type
        self.pet_breed = pet_breed
        self.pet_weight = pet_weight
        self.pet_gender = pet_gender
        self.unique_id = unique_id
        self.pet_picture = pet_picture
        self.user_id = user_id     
   
   # since i am trying to create a pet that ages over time, @property is used to specify that the property is a getter and not a setter
    @property
    def pet_age(self):
        days = (date.today() - self.birth_date).days
        if days < 30:
            return f"{days} days"
        elif days < 365:
            return f"{days // 30} months"
        else:
            years = days // 365
            months = (days % 365) // 30
            return f"{years} years, {months} months"
        
        # to dict method to send to react:
        
    def to_dict(self):
        return {
            'id': self.id,
            'pet_name': self.pet_name,
            'birth_date': self.birth_date,
            'pet_type': self.pet_type,
            'pet_breed': self.pet_breed,
            'pet_weight': self.pet_weight,
            'pet_gender': self.pet_gender,
            'unique_id': self.unique_id,
            'pet_picture': self.pet_picture,
            'user_id': self.user_id,
        }

    def saveToDB(self):
        db.session.add(self)
        db.session.commit()


class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date_created = db.Column(db.Date, default=datetime.utcnow)
    day_description = db.Column(db.String, nullable=True)
    good_day = db.Column(db.Boolean, nullable=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pet.id'), nullable=False)

    def __init__(self, good_day, pet_id):
        self.good_day = good_day
        self.pet_id = pet_id
    
    def saveToDB(self):
        db.session.add(self)
        db.session.commit()


    # query pet id and specify dates when querying
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    # @property
    # def pet_age(self):
    # days = (date.today() - self.birth_date).days
    # if days < 365:
    #     return f"{days // 30} months"
    # else:
    #     years = days // 365
    #     months = (days % 365) // 30
    #     return f"{years} years, {months} months"

    
    
    
    # @property
    # def pet_age(self):
    #     days = (date.today() - self.birth_date).days
    #     years = days // 365
    #     months = (days % 365) // 30
    #     return f"{years} years, {months} months"
    

    
    
    
    
 
        

    # class daily_input(db.Model):
    #     id = db.Column(db.Integer, primary_key=True)
    #     pass

