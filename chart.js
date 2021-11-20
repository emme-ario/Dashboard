function initChart(tv, hv, cv, lv) {  
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [ {
                            label: 'Temperatura',
                            data: tv,
                            backgroundColor: '#37ba82',
                            borderColor: '#37ba82',
                            borderWidth: 3
                        },

                        {
                            label: 'Umidità',
                            data: hv,
                            backgroundColor: '#ffb508',
                            borderColor: '#ffb508',
                            borderWidth: 3
                        },

                        {
                            label: 'Codice',
                            data: cv,
                            backgroundColor: '#ff4747',
                            borderColor: '#ff4747',
                            borderWidth: 3
                        },

                        {
                            label: 'Luce',
                            data: lv,
                            backgroundColor: '#743dff',
                            borderColor: '#743dff',
                            borderWidth: 3
                        }
            ]
        },
        options: {
            lineTension: 0.6,
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Sensors trend'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    
                    ticks: {
                        stepSize: 1
                    }
                },
            },
        }
    });
}