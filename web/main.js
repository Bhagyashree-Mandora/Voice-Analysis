/**
 * Created by meiling on 11/10/16.
 */

// bar chart
var options = {
    chart:{
        renderTo:'container',
        type:'column',
        width:700
    },
    title:{
        text:'Accuracy of Algorithm'
    },
    xAxis:{
        categories:['Random Forest','Neural Networks','SVM','XGBoost','Logistic Regression']
    },
    yAxis:{
        title:{
            text:'Accuracy'
        }
    },
    series:[{
        name:'Accuracy',
        data:[98.0077,97.8149,69.3096,96.85205,97.2044]
    }]

};


var options1 = {
    chart: {
        renderTo:'container1',
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }]
};

// boxplot
var options2 = {
    chart: {
        renderTo:'container2',
        type: 'boxplot',
        width:700
    },

    title: {
        text: 'Highcharts Box Plot Example'
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
            text: 'Experiment No.'
        }
    },

    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },

    series: [{
        name: 'Observations',
        data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
            [714, 762, 817, 870, 918],
            [724, 802, 806, 871, 950],
            [834, 836, 864, 882, 910]
        ],
        tooltip: {
            headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
    }, {
        name: 'Outlier',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 644],
            [4, 718],
            [4, 951],
            [4, 969]
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]
};

//linechart

var options3 = {
    chart:{
        renderTo:'container3',
        width:700
    },
    title: {
        text: 'Accuracy Variation on Removing a Feature',
        x: -20 //center
    },
    xAxis: {
        categories: ['All', 'Meanfun', 'IQR', 'Q25', 'sd', 'sp.ent',
            'mode', 'sfm', 'centroid', 'meanfreq', 'mindom', 'median','skew','dfrange','maxdom','meandom','kurt','maxfun','minfun','Q75','modindx']
    },
    yAxis: {
        title: {
            text: 'Accuracy'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {

    },
    series: [{
        name:'Accuracy',
        data: [97.8149,94.6945,96.9453,97.7492,97.91,96.7846,97.5884,96.7846,98.0707,97.7492,97.7492,97.7492,97.91,97.1061,97.1061,97.7492,97.91,98.0707,96.9453,97.5884,97.4277]
    }]
};

// donut chart
var options4 = {
    chart: {
        renderTo:'container4',
        width:700,
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Ranking of attributes'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Ranking',
        data: [
            ['meanfun', 0.79823],
            ['IQR', 0.66194],
            ['Q25', 0.57433],
            ['sd', 0.44479],
            ['sp.ent', 0.25319],
            ['mode', 0.25231],
            ['sfm', 0.18351],
            ['centroid', 0.14394],
            ['meanfreq', 0.14394],
            ['mindom',0.11418],
            ['median',0.09726],
            ['skew',0.09453],
            ['dfrange',0.08651],
            ['maxdom',0.08268],
            ['meandom',0.07073],
            ['kurt',0.06326],
            ['maxfun',0.03265],
            ['minfun',0.02954],
            ['Q75',0.00933],
            ['modindx',0]
        ]
    }]
};

// build chart using options above
$(document).ready(function() {
    // var chart = new Highcharts.Chart(options2);

    var chart1 = new Highcharts.Chart(options4);

    var chart2 = new Highcharts.Chart(options3);

    var chart3 = new Highcharts.Chart(options);

    document.getElementById("defaultOpen").click();

    // when not choose file, give warn,
    // then according the file name and selection of gender and accent, show the result.
    $("#submit").click(function () {

        var file = $("#audioFile")[0].files[0]
        if (file == null) {
            alert("Oops! You forgot to choose the audio file!");
            // console.log(file.name);
        } else {

            if (file.name == "Anuj.wav") {
                if ($("#check1").prop("checked") && $("#check2").prop("checked")) {
                    $("#showResult").text("This is a male voice with Indian accent!");
                } else if ($("#check1").prop("checked") && $("#check2").prop("checked") == false) {
                    $("#showResult").text("This is a male voice!");
                } else if ($("#check1").prop("checked") == false && $("#check2").prop("checked")) {
                    $("#showResult").text("This is an Indian accent!");
                } else {
                    // $("#showResult").text("You forgot to check the gender or accent box!");
                    alert("You forgot to check \'Gender\' or \'Accent\'!");
                }
            } else if (file.name == "audioFile2.rtf")
                if ($("#check1").prop("checked") && $("#check2").prop("checked")) {
                    $("#showResult").text("This is the result for gender and accent for file audioFile2!");
                } else if ($("#check1").prop("checked") && $("#check2").prop("checked") == false) {
                    $("#showResult").text("This is the result for gender for file:audioFile2!");
                } else if ($("#check1").prop("checked") == false && $("#check2").prop("checked")) {
                    $("#showResult").text("This is the result for accent for file:audioFile2!");
                } else {
                    // $("#showResult").text("You forgot to check the gender or accent box!");
                    alert("You forgot to check \"Gender\" or \"Accent\"!");
                }
        }
    });
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

