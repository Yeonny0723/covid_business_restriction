# coding=utf8

from flask import Flask, render_template, request, redirect
import pandas as pd
app = Flask("Covid_business_restriction")

business = pd.read_csv('covidBusinessRestriction.csv', encoding='utf-8-sig')
levels = business['구분']
business_types = business.columns[1:]

message = []
currentLevel = ""
currentBusiness = ""

@app.route('/',methods=['GET','POST'])
def home():
  global currentLevel
  global currentBusiness
  global message
  if request.method == 'POST':
    inputlevel = request.form['level']
    inputbusiness = request.form['business']
    currentLevel = inputlevel
    currentBusiness = inputbusiness
    message = business[['구분',inputbusiness]].set_index('구분').loc[inputlevel].values[0].strip().split(",")
  return render_template("index.html", types=business_types,levels=levels,message=message,currentLevel=currentLevel,currentBusiness=currentBusiness)

app.run('0.0.0.0',8080)
