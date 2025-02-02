function update_time() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let date_string =  day + "/" + month + "/" + year;
    let time_string = ('0'+hour).slice(-2) + ":" + ('0'+min).slice(-2) + ":" +('0'+sec).slice(-2);
    document.getElementById("date").innerHTML = date_string;
    document.getElementById("time").innerHTML = time_string;
    console.log("updated clock on " + date_string + " " + time_string);
}


setInterval(update_time,1000);


