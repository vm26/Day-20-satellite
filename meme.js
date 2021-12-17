document.body.innerHTML=`<div class="header"><h1>Satellites</h1></div>
<div class="field">
<div class="row">
<button class="btn" onclick="getMemes()">Get Satellite Data</button>
</div>
</div>`;
var url="https://isro.vercel.app/api/customer_satellites";

function getMemes(){
    var result=document.querySelector('.row');
    result.innerHTML="";
    fetch(url)
    .then(data=>data.json())
    .then(res=>{
         res.customer_satellites.forEach(ele=>{
           result.innerHTML+=`           
           <div class="col-md-3">
            Id:${ele.id}<br>
            Country:${ele.country}<br>
            Launcher:${ele.launcher}<br>
            Mass:${ele.mass}            
           </div>`;
        })})    
    .catch(err=>{
        result.innerHTML=`There is an error ${err}`;
    });
}
