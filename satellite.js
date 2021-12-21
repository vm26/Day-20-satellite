document.body.innerHTML=`<div class="header"><h1>Satellites</h1></div>
<div class="field">
<div class="row">
<button class="btn" onclick="getData()">Get Satellite Data</button>
</div>
</div>`;
var url="https://isro.vercel.app/api/customer_satellites";

//Displays all the necessary satellite data
function getData(){
    var result=document.querySelector('.row');
    result.innerHTML="";
    fetch(url)
    .then(data=>data.json())
    .then(res=>{
         res.customer_satellites.forEach(ele=>{
           result.innerHTML+=`           
           <div class="col-md-3">
            <h6 class="label">Id:</h6>${ele.id}<br>
            <h6 class="label">Country:</h6>${ele.country}<br>
            <h6 class="label">Launcher:</h6>${ele.launcher}<br>
            <h6 class="label">Mass:</h6>${ele.mass}            
           </div>`;
        })})    
    .catch(err=>{
        result.innerHTML=`<div class="catch">
        There is an error ${err}
        </div>`;
    });
}
