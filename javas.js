 

if (window.matchMedia('(min-width: 400px)').matches)
{
    // console.log("1200px entered");
    function ToggleSideWindows() {
        let sb = document.getElementById("sb");
        let mb = document.getElementById("mb");
        
        // small (to open)
        if (mb.style.width == "1920px"){
            sb.style.width = "290px";
            mb.style.width = "1630px";
            document.getElementById("content").style.width = "1550px";
            document.getElementById("nav").style.width = "1630px";
            document.getElementById("b1").style.width = "490px";
            document.getElementById("b2").style.width = "490px";
            document.getElementById("b3").style.width = "490px";
            document.getElementById("b4").style.width = "1019px";
            document.getElementById("b5").style.width = "490px";
            document.getElementById("b1").style.left = "1060px";
            document.getElementById("b3").style.left = "530px";
            document.getElementById("b5").style.left = "1060px";

        }

        // big (to close)
        else{
            sb.style.width = "0px";
            mb.style.width = "1920px";
            document.getElementById("content").style.width = "1840px";
            document.getElementById("nav").style.width = "1920px";
            document.getElementById("b1").style.width = "586px";
            document.getElementById("b2").style.width = "586px";
            document.getElementById("b3").style.width = "582px";
            document.getElementById("b4").style.width = "1208px";
            document.getElementById("b5").style.width = "586px";
            document.getElementById("b1").style.left = "1254px";
            document.getElementById("b1").style.left = "1254px";
            document.getElementById("b3").style.left = "626px";
            document.getElementById("b5").style.left = "1254px";
        }
    }

}

// if (window.matchMedia('(max-width: 400px)').matches)

else
{
    // console.log("400 px entered");
    function ToggleSideWindows() {
        let sb = document.getElementById("sb");
        let mb = document.getElementById("mb");
        // small (to open)
        if (mb.style.width <= "400px"){
            sb.style.width = "304px";
            mb.style.width="450px";
        }

        // big (to close)

        else{
            sb.style.width = "0px";
            mb.style.width = "375px";
            // mb.style.marginLeft = "0px";
        }
    }

}






