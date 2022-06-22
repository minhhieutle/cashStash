$('#submit-btn').on('click', function()
    {

        const context = document.getElementById("investmentChart");
        var initialMoney = $('#initial-money').val()
        var years = $('#years').val()
        var contribution = $('#contribution').val()
        const labels = [];
        const money = [];
        

        for(var i = 1; i<= years; i++)
        {
            labels.push(String(i))
            
        }

        
        for(let i = 1; i<= years; i++)
        {
            var current = initialMoney*(Math.pow((1 + .07), i))
            money.push(current)
            
            
        }

        console.log(money[3]);

        const data =
        {
            label: labels,
            datasets: 
            [{
                label: 'Growth over ' + years +' Years' ,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                data: money,
            }]
        };

        const config =
        {
            type: 'line',
            data: data,
            options:
            {
                responsive: true,
                
            },
        };

        var investmentChart = new Chart(context, config);
        

        




    })