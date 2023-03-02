from app import app
from flask import request
from .models import User


@app.route('/signup', methods=['POST'])
def signUp():
    # form = signupForm()
    # get json information from react and save data to variable:
    data = request.json
    
        #  check to see if the user actually signed up:
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    password = data['password']

    user = User(first_name, last_name, email, password)
   
    user.saveToDB()

    return 'User created'
# fix this^^



        # add the user to database then redirect? with url_for()


    # return render_template('signup.html', form = form)

# still need enpoints and api so react will be making requests to flask and ultimately ESQL
# no need for get since react is frontend
# still need to save to db etc



    