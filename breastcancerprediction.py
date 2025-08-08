from types import prepare_class
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

#Need to split the dataset into training and testing data. We will allocated 80% to training and 20% to test
X_training, X_test, Y_training, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

#Check if the splitting of the data was done correctly
# print(X.shape, X_training.shape, X_test.shape)

#Now we need to initialize an instance of the logic regression model that we imported and then train it
model = LogisticRegression()
model.fit(X_training, Y_training)

#Evaluate the trained model to see how accurate it is
X_training_prediction = model.predict(X_training)
training_data_acc = accuracy_score(Y_training, X_training_prediction)

print('The Accuracy predicted by the training is = ', training_data_acc)

#Now you need to determine the Accuracy prediction with the test data 
X_test_prediction = model.predict(X_test)
test_data_acc = accuracy_score(Y_test, X_test_prediction)
print('The Accuracy predicted by the test data is = ', test_data_acc)

#We build out the predictive system using data from https://drive.google.com/file/d/1wDjDuqDPAJd1cQEICcu19J9vrjFAWJ1H/view we will provide input data and see how accurate prediction is
input_data = (13.54,14.36,87.46,566.3,0.09779,0.08129,0.06664,0.04781,0.1885,0.05766,0.2699,0.7886,2.058,23.56,0.008462,0.0146,0.02387,0.01315,0.0198,0.0023,15.11,19.26,99.7,711.2,0.144,0.1773,0.239,0.1288,0.2977,0.07259)

#The raw csv data has to be converted into a numpy array
input_data_np = np.asarray(input_data)

#Now you need to reshape the data so the model knows it only predicting for one vaue
input_data_reshaped = input_data_np.reshape(1, -1)

prediction = model.predict(input_data_reshaped)

if prediction[0] == 1:
    print('The breast cancer is Malignant - ', prediction)
else:
    print('The breast cancer is Benign - ', prediction)