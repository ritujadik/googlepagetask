const inputelem = document.getElementById("input");
const buttonelem = document.getElementById("button");


buttonelem.addEventListener("click",(event)=>{
        event.preventDefault();
        const query = inputelem.value;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchUrl;
    }
);



