from app import app
from flask import render_template, request, redirect, url_for
from .forms import signupForm



@app.route('/signup', methods=['GET', 'POST'])
def signUp():
    form = signupForm()
    print(request.method)
    if request.method == 'POST':
        #  check to see if the user actually signed up:
        if form.validate():
            first_name = form.first_name.data
            last_name = form.last_name.data
            email = form.email.data
            password = form.password.data

            print(first_name, last_name, email, password)

            # add the user to database then redirect? with url_for()


    return render_template('signup.html', form = form)


    