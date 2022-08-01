var ww = $(window).width();
var limit = 600;
function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}
var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
        tOut = setTimeout(refresh, 100);
    }
});
if (window.matchMedia('(min-width: 600px)').matches)
{
    console.log("1200px entered");
    function ToggleSideWindows() {
        let sb = document.getElementById("sb");
        let mb = document.getElementById("mb");

        // small (to open)
        if (mb.style.width == "100%"){
            sb.style.width = "290px";
            mb.style.width = "84.9%";
        }
        // big (to close)
        else{
            sb.style.width = "0px";
            mb.style.width = "100%";
        }
    }
}
else{
    console.log("600px entered");
    function ToggleSideWindows() {
        let sb = document.getElementById("sb");
        let mb = document.getElementById("mb");

        // small (to open)
        if (sb.style.width == "0%"){
            sb.style.width = "450px";
            mb.style.width = "10%";
            document.getElementById("nr").style.display = "none"
            document.getElementById("cnt").style.display = "none"
            document.getElementById("search").style.display = "none"
        }
        // big (to close)
        else{
            sb.style.width = "0%";
            mb.style.width = "100%";
            document.getElementById("nr").style.display = "block"
            document.getElementById("cnt").style.display = "block"
            document.getElementById("search").style.display = "inline-block"
            document.getElementById("search").style.display = "inline-block"
        }
    }
}

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["Start","Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{ 
          data: [0, 15, 10, 15, 18, 15, 24],
          label: "Products Sold",
          borderColor: "#B5B3FB",
        }, { 
          data: [0, 19, 8, 16, 13, 17, 10],
          label: "Total Views",
          borderColor: "#80E2FF",
        }
      ]
    }
  });

  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["France 4260 sales", "Japan 3970 sales", "Italy 4260 sales", "Canada 3970 sales"],
      datasets: [
        {
          backgroundColor: ["#80E2FF", "#F49FA8","#FFDF94","#B5B3FB"],
          data: [10, 5, 7, 8]
        }
      ]
    }
});


