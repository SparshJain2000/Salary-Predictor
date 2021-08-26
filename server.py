import os
import pickle
from flask import Flask, send_from_directory, request, json
from flask_restful import Api, Resource
from datetime import datetime
from werkzeug.utils import secure_filename
from os import environ
import numpy as np
import pandas as pd

RUN_HOST = environ.get('RUN_HOST')

app = Flask(__name__)
api = Api(app)
app.config['DEBUG'] = True
with open('./models/encoders.pkl','rb') as file:
    data=pickle.load(file)
le_country=data["le_country"]
le_edu=data["le_edu"]
le_emp=data["le_emp"]
le_ug=data["le_ug"]
with open('./models/gs_rf_model.pkl','rb') as file:
    data=pickle.load(file)
model=data["model"]

def prepare(data):
    x=np.array([data])
    x[:,0]=le_country.transform(x[:,0])
    x[:,1]=le_edu.transform(x[:,1])
    x[:,3]=le_emp.transform(x[:,3])
    x[:,4]=le_ug.transform(x[:,4])
    x=x.astype(float)
    return x
class HelloWorld(Resource):
    def get(self):
        x=prepare(["Canada","Bachelor’s degree",1,"Employed full-time","Web development or web design"])
        y_pred=model.predict(x);
        return {"message": "Hello World! Welcome to  Salary Predictor 🤗","val":y_pred[0]}

class Predict(Resource):
    def post(self):
        try:
            json_data = request.get_json(force=True)
            print(json_data)
            country = json_data.get('country')
            degree = json_data.get('degree')
            experience = json_data.get('experience')
            employment = json_data.get('employment')
            ug = json_data.get('ug')
            query=[country,degree,(experience),employment,ug]
            print(query)
            for i in query:
                if(i==None):
                    return {"error": f"Enter valid parameter"}, 500

            x=prepare(query)
            y_pred=model.predict(x);
            return {"salary":y_pred[0]}
        except:
            return {"error": "Server Error"}, 500
class Data(Resource):
    def get(self):
        df=pd.read_csv("./dataset/final_dataset.csv")
        json_data = request.get_json(force=True)
        param = json_data.get('param')
        value = json_data.get('value')
        print(param,value)
        df=df[df[param]==value]
        return {"data":df.to_json(orient='records')},200

api.add_resource(HelloWorld, "/")
api.add_resource(Predict, "/api/predict")
api.add_resource(Data, "/api/data")

if __name__ == '__main__':
    app.run(debug=True)