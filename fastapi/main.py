from fastapi import FastAPI
from symptoms import symptom_array
# import sklearn
# print(sklearn.__version__)
from utils import get_desc, get_prediction, get_precautions
app = FastAPI()

# home page


@app.get("/")
def home():
    return {"About": "Medical Diagnosis App",
            "Course": "Data Analytics and Visulization",
            "Name": "yaadava_kishore",
            "Discipline": "Electrical Engineering",
            "Department": "EECS",
            "Year_of_Graduation": "2023"}

# prediction function


@app.post('/predict')
def predict_disease(symp_array: symptom_array):
    symp_array = symp_array.dict()
    symp_array = [symp_array["arr"]]
    prediction = get_prediction(arr=symp_array)
    disease_desc = get_desc(disease=prediction)
    precautions = get_precautions(disease=prediction)
    return {
        'predicted_disease': prediction,
        "disease_desc": disease_desc,
        "precautions": precautions,
        "model_used": "Decision Tree Classifier, trained on 4920 samples"
    }


# print(dt_clf.predict([[0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
#                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
#                        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
#                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
#                        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
#                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])[0].upper())
