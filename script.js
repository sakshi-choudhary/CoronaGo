  $(document).ready(function() {
        var url = "https://api.covid19india.org/data.json"
        $.getJSON(url, function(data) {
            console.log(data);
            var total_active, total_recovered, total_deaths, total_confirmed
            total_active = data.statewise[0].active
            total_recovered = data.statewise[0].recovered
            total_deaths = data.statewise[0].deaths
            total_confirmed = data.statewise[0].confirmed

            $(".active").append(total_active)
            $(".confirmed").append(total_confirmed)
            $(".deaths").append(total_deaths)
            $(".recovered").append(total_recovered)

        })
    })
