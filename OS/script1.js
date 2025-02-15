const OUTPUT = document.getElementById("OS");
let output_str = "";
let os, browser;
function keyword(ketword) {
    let useragent_str = window.navigator.userAgent;
    let bool = useragent_str.includes(ketword);
    return bool
}


function check() {

    if (keyword("Edge") || keyword("Edg")) {
        browser = "Edge";
    }else if (keyword("Chrome")) {
        browser = "chrome";
    } else if (keyword("Firefox")){
        browser = "firefox";
    }else if (keyword("Safari")){
        browser = "Safari";
    }
    else if (keyword("Opera")){
        browser = "opera";
    }


    if(keyword("Windows")){
        os = "Windows";
    }else if (keyword("Linux")){
        if(keyword("Android")){
            os = "Android";
        } else {
            os = "Linux";
        }
    }else if(keyword("Macintosh")) {
        os = "Mac OS X"
    }else if(keyword("iPhone") || keyword("iPad")) {
        os = "IOS";
    }

    OUTPUT.innerHTML = "You're using " + browser + " on " + os;
}
check();