from flask import Flask
from config import Config
from .models import db
from flask_migrate import Migrate
from flask_cors import CORS

from .api.routes import api

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(api)

from . import routes
from . import models