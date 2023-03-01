from app import app
from flask import render_template
from .forms import signupForm



@app.route('/signup')
def signUp():
    form = signupForm()
    return render_template('signup.html', form = form)


    