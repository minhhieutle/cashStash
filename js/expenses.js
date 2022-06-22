//const context = $("expenseChart").getContext("2d");



$('#submit-btn').on('click', function()
    {

        const context = document.getElementById("expenseChart").getContext("2d");
        var housingCost = $('#housing-cost').val()
        var foodCost = $('#food-cost').val()
        var carCost = $('#car-cost').val()
        var utilityCost = $('#utility-cost').val()
        var discretionaryCost = $('#discretionary-cost').val()
        var insuranceCost = $('#insurance-cost').val()
        var subscriptionCost = $('#subscription-cost').val()
        var otherCost = $('#other-cost').val()
    
        const labels = 
        [
            "housing",
            "food",
            "car",
            "utility",
            "discretionary",
            "insurance",
            "subscription",
            "other",
        ];


        const data =
        {
            labels,
            datasets: 
            [{
                label: 'Expenses',
                data:
                [
                housingCost,
                foodCost,
                carCost,
                utilityCost,
                discretionaryCost,
                insuranceCost,
                subscriptionCost,
                otherCost,
                ],
                backgroundColor: 
                [
                    'yellow',
                    'green',
                    'blue',
                    'red',
                    'purple',
                    'orange',
                    'cyan',
                    'navy'

                ],

            }]
        };

        const config =
        {
            type: 'pie',
            data: data,
            options:
            {
                responsive: true,
            },
        };

        const expenseChart = new Chart(context, config);





    })