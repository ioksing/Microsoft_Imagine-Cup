from flask import Flask, render_template, request, redirect
from datetime import datetime
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app)
# load pre-trained machine learning model
model = load('../model/model.joblib') 


@app.route('/getResult', methods=['POST'])
def predict():
    json = request.get_json()
    # currently using pre-meal blood sugar level and carbohydrate as model input
    result = model.predict([[json["preSugar"], json["carbo"]]])
    return str(result)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
