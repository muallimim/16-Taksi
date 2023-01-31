document.getElementById('btnTaksiHesapla').addEventListener('click', taksiHesapla);

function taksiHesapla(){
    event.preventDefault();

    var from;
    var to;

    from=document.getElementById('from').value;
    to=document.getElementById('to').value;

    // from == galata için
    if(from =="galata" && to == "galata")
        document.getElementById('result').innerHTML = "0";

    if(from =="galata" && to == "topkapi")
        document.getElementById('result').innerHTML = "100";

    if(from =="galata" && to == "ayasofya")
        document.getElementById('result').innerHTML = "150";

    }