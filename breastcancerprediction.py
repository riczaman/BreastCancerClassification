import numpy as np
import pandas as pd
import sklearn.datasets
#Need this library to split the dataset into 2 pools one for training and one for testing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

#Load data from sklearn which will already be in a datafram alternatively we could use the CSV provided from the Kaggle research and then just use the pandas csv function
breast_cancer_dataset = sklearn.datasets.load_breast_cancer()
# print(breast_cancer_dataset)

#Take the sklearn data and put it into a Pandas DataFrame
breast_cancer_dataframe = pd.DataFrame(breast_cancer_dataset.data, columns = breast_cancer_dataset.feature_names)

#Print the first 5 rows of the dataframe to see if the data is being collected properly 
# print(breast_cancer_dataframe.head())

#Now we need to add the target column to the dataframe as this is what the diagnosis is based on
breast_cancer_dataframe['diagnosis'] = breast_cancer_dataset.target
# print(breast_cancer_dataframe.tail())

#Verify the number of rows and columns in the dataframe using pandas shape command 
# print(breast_cancer_dataframe.shape)

#Get High-Level information about the data inside the dataframe - helps us determine if there are any null values in each of the columns if there was we would need to replace null with a fixed type
# print(breast_cancer_dataframe.info())

#To check if there are missing values aka null values you can run the below
# print(breast_cancer_dataframe.isnull().sum())

#Get statistical analysis of the data 
# print(breast_cancer_dataframe.describe())

#Look at specifically the diagnosis column and check the count of each type
# print(breast_cancer_dataframe['diagnosis'].value_counts())

#Now get the mean data points for each column based on the two different options; benign vs malignant 
# print(breast_cancer_dataframe.groupby('diagnosis').mean())

#Seperate the feature data with the target dianosis data to create a graph
X = breast_cancer_dataframe.drop(columns='diagnosis', axis=1)
Y = breast_cancer_dataframe['diagnosis']

print (Y)