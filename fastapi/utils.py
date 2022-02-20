import pandas as pd
import joblib
import numpy as np
# import warnings
# from sklearn.exceptions import DataConversionWarning
# warnings.filterwarnings(action='ignore', category=DataConversionWarning)

# loading the model from saved model uisng joblib
dt_clf = joblib.load("models/dt_clf.pkl")

# description data loading
desc = pd.read_csv("data/symptom_Description.csv")

# precautions data loading
pre = pd.read_csv("data/symptom_precaution.csv")
pre["precaution_list"] = 0
for i in range(pre.shape[0]):
    pre["precaution_list"][i] = [x.lower()
                                 for x in pre.iloc[i].values[1:-1] if type(x) == str]
pre.drop(["Precaution_1", "Precaution_2", "Precaution_3",
         "Precaution_4"], inplace=True, axis=1)


# utility funcitons
def get_prediction(arr):
    return dt_clf.predict(arr)[0]


def get_desc(disease):
    try:
        x = desc[desc["Disease"] == disease].values[0][1]
    except:
        x = "Description Not Found"
    return x


def get_precautions(disease):
    try:
        x = pre[pre["Disease"] == disease].values[0][1]
    except:
        x = ["Precautions not in our database"]
    return x
