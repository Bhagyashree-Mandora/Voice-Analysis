import pandas
from sklearn.metrics import accuracy_score
from sklearn.model_selection import cross_val_score
import matplotlib.pyplot as plt
import numpy as np
# -------------------------------------------------------------------------------
# Get Data

audio_char = pandas.read_csv('../training.csv')
# print(audio_char.head())

inputChar = audio_char.ix[:, 0:20]
outputChar = audio_char['label']
# print (inputChar.head())
# print (outputChar.head())

testChar = pandas.read_csv('../voice.csv')
# testChar = pandas.read_csv('../test1.csv')
# testChar = pandas.read_csv('../test.csv')

input_test = testChar.ix[:, 0:20]
# output_test = testChar['label']

# -------------------------------------------------------------------------------
# XGBoost

import xgboost

print "Using XGBoost:"

model = xgboost.XGBClassifier()
model.fit(inputChar, outputChar)

# print(model)

output_pred = model.predict(input_test)
# predictions = [round(value) for value in output_pred]

print "The predicted output is-"
print(output_pred)
# print "The expected output is-"
# print(output_test)
# accuracy = accuracy_score(output_test, output_pred)
# print "Accuracy with XGBoost Classifier:"
# print("Accuracy: %.2f%%" % (accuracy * 100.0))

# 10 fold cross-validation
# cross_validation_accuracy = cross_val_score(model, inputChar, outputChar, cv=10)
# cross_validation_accuracy *= 100
# print cross_validation_accuracy
# accuracy_sum = sum(cross_validation_accuracy)
# print "Average accuracy = " + str(accuracy_sum / 10)

# -------------------------------------------------------------------------------
# SVM

from sklearn import svm

print "Using SVM:"

classifier = svm.SVC()
classifier.fit(inputChar, outputChar)

# print (classifier.support_vectors_)

results = classifier.predict(input_test)

print "The predicted output is-"
print(results)
# print "The expected output is-"
# print(output_test)
#
# accuracy = accuracy_score(output_test, results)
# print "Accuracy with SVM Classifier:"
# print("Accuracy: %.2f%%" % (accuracy * 100.0))

# 10 fold cross-validation
# cross_validation_accuracy = cross_val_score(classifier, inputChar, outputChar, cv=10)
# cross_validation_accuracy *= 100
# print cross_validation_accuracy
# accuracy_sum = sum(cross_validation_accuracy)
# print "Average accuracy = " + str(accuracy_sum / 10)

# w = classifier.coef_[0]
# a = -w[0] / w[1]
# xx = np.linspace(-5, 5)
# yy = a * xx - (classifier.intercept_[0]) / w[1]
#
# # plot the parallels to the separating hyperplane that pass through the
# # support vectors
# b = classifier.support_vectors_[0]
# yy_down = a * xx + (b[1] - a * b[0])
# b = classifier.support_vectors_[-1]
# yy_up = a * xx + (b[1] - a * b[0])
#
# # plot the line, the points, and the nearest vectors to the plane
# # plt.plot(xx, yy, 'k-')
# plt.plot(xx, yy_down, 'k--')
# plt.plot(xx, yy_up, 'k--')
#
# plt.scatter(classifier.support_vectors_[:, 0], classifier.support_vectors_[:, 1],
#             s=80, facecolors='r')
# # plt.scatter(X[:, 0], X[:, 1], c=Y, cmap=plt.cm.Paired)
# plt.xlim(-1, 1)
# plt.ylim(-1, 1)
# plt.title("Support vectors")
# plt.axis('tight')
# plt.show()


# -------------------------------------------------------------------------------
# Random Forest

from sklearn.ensemble import RandomForestRegressor

from sklearn import preprocessing

print "Using Random Forest:"

le = preprocessing.LabelEncoder()
transform_op = le.fit_transform(outputChar)
# print transform_op
# transform_test_op = le.fit_transform(output_test)

random_forest = RandomForestRegressor()
random_forest.fit(inputChar, transform_op)

prediction = random_forest.predict(input_test)

print "The predicted output is-"
print(prediction)
# print "The expected output is-"
# print(transform_test_op)
#
# accuracy = accuracy_score(transform_test_op, prediction)
# print "Accuracy with Random Forest Classifier:"
# print("Accuracy: %.2f%%" % (accuracy * 100.0))

## 10 fold cross-validation
# cross_validation_accuracy = cross_val_score(random_forest, inputChar, transform_op, cv=10)
# cross_validation_accuracy *= 100
# print cross_validation_accuracy
# accuracy_sum = sum(cross_validation_accuracy)
# print accuracy_sum / 10
