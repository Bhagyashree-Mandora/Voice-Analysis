Recognition of Gender From Audio

This project extracts acoustic characteristics from audio files and tries to use machine learning to predict the gender of the person associated with the voice.

Code is in three modules. R script runs on the wav files in the male and female folders to extract acoustic characteristics and generate labelled training data. Running it on the files in the test folder will generate test data which is not labelled as male or female.

Python script is for machine learning using XGBoost, SVM, Random Forest algorithms. For labelled test data or 10-fold cross-validation accuracy can be found. Unlabelled test data will give only the prediction.

Web folder contains a webpage with data analysis and results in the form of charts and graphs using Highcharts.
