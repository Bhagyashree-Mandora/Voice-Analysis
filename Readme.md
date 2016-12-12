Recognize Gender and Accent of audio: A Study of different Algorithms

Motivation
Many   industries   are   moving   towards   the   IVR services,  different  types  of  voice  inputs  and  voice  based  smart systems like virtual assistants. Voice input analysis will contribute to  make  these  systems  more  intelligent  and  help  in  formulating business policies. This project analyses the importance of different acoustic   characteristics   in   prediction   of   gender.   The   method successfully   recognizes   gender   given   an   input   audio   file.   It employs various classification algorithms as a comparison study.It  also  investigates  ways  to  analyze  audio  to  predict  the  accent of  the  associated  person.

Problem Description
There has always been a need to identify various characteristics of a person listening to
their voice. This is true in phone conversations or recorded audio from businesses. Nowadays, there is an increasing focus on voice as an input for businesses. Virtual assistants which take voice commands now reside in mobile phones. Technology using voice can now be found in smart systems in cars, shopping complexes, security locks etc. Analyzing audio for such features can help give personalized results for the commands. This can also be used in data analytics to help make intelligent business decisions.

Determining a person’s gender as male or female, based upon a sample of their voice seems to initially be an easy task. Often, the human ear can easily detect the difference between a male or female voice within the first few spoken words. However, designing a computer program to do this turns out to be a bit trickier.

This report describes the design of a computer program to model acoustic analysis of voices and speech for determining gender. The model is constructed using 3,168 recorded samples of male and female voices, speech, and utterances. The samples are processed using acoustic analysis and then applied to an artificial intelligence/machine learning algorithm to learn gender-specific traits.

Machine learning algorithms like XGBoost, SVM, Random Forest and Neural Networks and audio processing libraries are employed to predict the outcomes. The resulting program achieves more than 95\% accuracy on the test set.

Process

Each voice sample is stored as a .WAV file, which is thenpre-processed  for  acoustic  analysis  using  the  specan  functionfrom  the  WarbleR  R  package.  Specan  measures  22  acousticparameters  on  acoustic  signals  for  which  the  start  and  endtimes are provided.The  output  from  the  pre-processed  WAV  files  were  savedinto  a  CSV  file,  containing  3168  rows  and  21  columns  (20columns for each feature and one label column for the classifi-cation of male or female). You can download the pre-processeddataset in CSV format, using the link above

Accoustic Properties
The  following  acoustic  properties  of  each  voice  are  measured:
duration: length of signal
meanfreq: mean frequency (in kHz)
sd: standard deviation of frequency
median: median frequency (in kHz)
Q25: first quantile (in kHz)
Q75: third quantile (in kHz)
IQR: interquantile range (in kHz)
skew: skewness (see note in specprop description)
kurt: kurtosis (see note in specprop description)
sp.ent: spectral entropy
sfm: spectral flatness
mode: mode frequency
centroid: frequency centroid (see specprop)
peakf: peak frequency (frequency with highest energy)
meanfun: average of fundamental frequency measuredacross acoustic signal
minfun:  minimum  fundamental  frequency  measuredacross acoustic signal
maxfun:  maximum  fundamental  frequency  measuredacross acoustic signal
meandom:  average  of  dominant  frequency  measuredacross acoustic signal
mindom:  minimum  of  dominant  frequency  measuredacross acoustic signal
maxdom: maximum of dominant frequency measuredacross acoustic signal
dfrange: range of dominant frequency measured acrossacoustic signal
modindx:  modulation  index. Calculated  as  the  accumulated  absolute  difference  between  adjacent  measurements of fundamental frequencies divided by the frequency range.

The features for duration and peak frequency (peakf) wereremoved  from  training. Duration  refers  to  the  length  of  the recording,  which  for  training,  is  cut  off  at  20  seconds. Peakf was omitted from calculation due to time and CPU constraintsin calculating the value. In this case, all records will have thesame value for duration (20) and peak frequency (0).

Method
For solving the problem user will input an audio file to therecognizer:
Extract audio features from wav file to compute acous-tic characteristics
Find importance of acoustic characteristics in prediction
Perform classification using different algorithms
Measure  accuracy  of  algorithm  using  10-fold  crossvalidation
Extract scattering coefficient of audio
Predict the accent of speaker

Analysis of Importance of Acoustic Characteristics:
1) Hypothesis Test - A proposition was tested with Welch Two Sample t-test  method,  which  is  a  location  testused  to  compare  the  medians  of  two  data  sets.Here,a  proposition  that  generally  a  male  voice  feature  isgreater or lesser than that of female voice feature istested. The p-value obtained should be less than 5%.
2) Visual Representation through Boxplot

Results
1) The model can successfully predict the gender with agood  accuracy.  Gender  classification  based  on  voicecharacteristics  is  based  primarily  on  Mean  Funda-mental  Frequency  and  a  value  of  142  Hz  forms  aboundary between male and female voice.
2) Varying the Features used    for    Training    and Prediction. Each voice feature was removed from thetraining and test set one by one and the accuracy wastested on 80% test split data using a Neural Network. A fall in accuracy was noticed when animportant feature was removed. However, an increasein accuracy was also obtained when a less importantfeature was not considered. This may have been due to reduction in noise for prediction.
3) Five algorithms were used to predict gender and theaccuracy obtained is as shown in the chart (see figure7). SVM showed a comparatively low accuracy. This may have been due to error introduced due to a largenumber of support vectors found near the separatinghyper-plane between male and female values for thefeature. Any noisy data leads to a wrongprediction.
In  the  above  models,  it  can  be  seen  how  the  accuracy  ofclassifying male or female voices was increased by includingall  available  acoustic  properties  of  the  voices  and  speech.Determining  a  male  or  female  voice  does,  indeed,  utilize
 more  than  a  simple  measurement  of  average  frequency.  Todemonstrate  this,  several  new  voice  samples  were  applied  tothe  model,  each  using  different  intonation.  For  example,  thefirst voice sample used flat or dropping frequency at the end ofsentences. A second sample used a rising frequency at the endof sentences. When combined with voice frequency and pitch(ie., male vs female voice range), this difference in lowering orrising of the voice at the end of a sentence would occasionallysignify the difference in a classification of male or female. Thisis  especially  true  when  the  male  and  female  voice  sampleswere within a similar, androgynous, frequency range.The above described type of classification makes sense, asmale and female speakers will often use changing intonationsto express parts of speech. Female voices tend to rise and fallmore  dramatically  than  their  male  counterparts,  which  mightaccount for this difference

Conclusion
The prediction of gender is possible using these 21 acousticcharacteristics  and  the  importance  of  each  characteristic  isalso analyzed. The performance of various algorithms is alsochecked for such a data set.The  above  model  achieves  an  accuracy  of  around  95%on  the  test  set.  This  is  a  positive  achievement,  although  itscertainly not 100%.Its  important  to  keep  in  mind  what  the  model  is  actuallytrained  upon.  Training  data  can  skew  a  model  from  the  realworld, since the real world often has a much larger variety ofdata. In the case of voices, there is a large array of both maleand female voices that lie within different androgynous zonesof frequency and pitch. A dataset that includes a much largernumber  of  samples  from  the  general  population  would  likelytrain  a  model  that  could  achieve  more  accurate  results  in  thewild. After all, a model is only as good as its data.

Future Work
Future work includes:
Finding the scattering coefficients of the audio file topredict accent
Scattering  Coefficients  are  wavelet  transforms  withnon-linear operators. For a given language, the scatter-ing  coefficients  are  considerably  different  for  peoplefrom different area and different accents. This can beused  to  differentiate  between  accents  from  differentaudio.
Training  machine  learning  models  using  Scatteringcoefficients of audio and predicting accent
Analyzing  the  results  obtained  as  to  how  they  con-tribute to accent prediction
