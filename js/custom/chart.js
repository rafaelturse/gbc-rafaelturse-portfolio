var focusChart = document.getElementById("focusChart");
if (focusChart){
    var colors = ['#50345B', '#17A2b8', '#DC3545', '#14504B', '#D86E0A', '#28A745', '#FFC107'];

    var options = {
        chart: {
            height: 300,
            type: 'donut',
        },
        colors: colors,
        dataLabels: {
            enabled: false
        },
        series: [70, 100, 50, 60, 80, 60, 90],
        responsive: [{
            breakpoint: 500,
            options: {
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0
        }
        ,labels: ['Frontend', 'Backend', 'Mobile', 'Database', 'DevOps', 'Usability', 'Javascript']
    }

    var chart = new ApexCharts(
        document.querySelector("#focusChart"),
        options
    );

    chart.render()
}

var interestChart = document.getElementById("interestChart");
if (null != interestChart){
    var colors = ['#28A745', '#FFC107', '#DC3545', '#17A2b8', '#D86E0A', '#50345B', '#14504B'];
   
    var options = {
        chart: {
            height: 350,
            type: 'bar'
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '80%',
                distributed: true
            }
        },
        dataLabels: { enabled: false },
        series: [{ data: [10, 9.3, 8.2 ,7.2 ,5.5 ,4.6 ,3.7] }],
        xaxis: {
            categories: [
                 "Spring"
                ,"Javascript"
                ,"DevOps"
                ,"JSF"
                ,"Mobile"
                ,"Database"
                ,"Frontend"
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '14px'
                }
            }
        },
        yaxis: {
            show: false,
            min: 0,
            max: 11
        },
        tickAmount: 6,
        tooltip: {
            enabled: false
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#interestChart"),
        options
    );

    chart.render();  
}

var technologyTimeLineChart = document.getElementById("technologyTimeLineChart");
if (null != technologyTimeLineChart){
    var now = new Date();

    var options = {
        chart: {
            fontFamily: 'Rubik',
            height: 250,
            type: 'rangeBar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        colors:['#DC3545', '#14504B', '#D86E0A', '#17A2b8', '#FFC107', '#50345B', '#28A745'],
        series: [{
            name: 'Support',
            data: [{
              x: '',
              y: [new Date('2008-02-01').getTime(), new Date('2011-06-30').getTime()]
            }
        ]}, {
            name: 'Delphi',
            data: [{
                x: '',
                y: [new Date('2011-07-01').getTime(), new Date('2015-05-30').getTime()] 
            }
        ]}, {
            name: 'BI',
            data: [{
                x: '',
                y: [new Date('2015-06-01').getTime(), new Date('2016-03-30').getTime()]
            }
        ]}, {
            name: 'Java',
            data: [{
                x: '',
                y: [new Date('2016-04-01').getTime(), now.getTime()],
            },
        ]}, {
            name: 'JS',
            data: [{
                x: '',
                y: [new Date('2017-07-01').getTime(), now.getTime()],
            },
        ]}, {
            name: 'DevOps',
            data: [{
                x: '',
                y: [new Date('2019-05-10').getTime(), now.getTime()],
            },
        ]}, {
            name: 'SQL',
            data: [{
                x: '',
                y: [new Date('2011-07-01').getTime(), now.getTime()]
            }
        ]}
        ]
        ,yaxis: {
          min: new Date('2008-01-01').getTime(),
          max: now.getTime()
        }
        ,xaxis: {
           type: 'datetime',
           max: now.getTime()
        },
        legend: {
            position: 'top',
            fontFamily: 'Rubik'
        },
        tooltip: {
            enabled: false
        }
    }

    var chart = new ApexCharts(
        document.querySelector("#technologyTimeLineChart"),
        options
    );
    
    chart.render();    
}