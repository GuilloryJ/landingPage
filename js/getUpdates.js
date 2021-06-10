function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    //var txt = entry.target.id + " visibility: " + entry.isIntersecting;
    //document.getElementById('log').appendChild(document.createTextNode(txt));
    //document.getElementById('log').appendChild(document.createElement("br"));
    if (document.getElementById(entry.target.id) == document.getElementById('pandaLayOnBack'))
    {
        console.log(entry.target.id)
        document.getElementById('pandaLayOnBack').classList.toggle("moveRight");
    }
    if (document.getElementById(entry.target.id) == document.getElementById('pandaUmbrella'))
    {
        console.log(entry.target.id)
        document.getElementById('pandaUmbrella').classList.toggle("moveRight");
    }
    if (document.getElementById(entry.target.id) == document.getElementById('pandaTennis'))
    {
        console.log(entry.target.id)
        document.getElementById('pandaTennis').classList.toggle("move");
    }
    if (document.getElementById(entry.target.id) == document.getElementById('pandaSmile'))
    {
        console.log(entry.target.id)
        document.getElementById('pandaSmile').classList.toggle("move");
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('pandaTennis'));
observer.observe(document.getElementById('pandaLayOnBack'));
observer.observe(document.getElementById('pandaSmile'));
observer.observe(document.getElementById('pandaUmbrella'));

