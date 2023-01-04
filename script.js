var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
var data=request.response
var result = JSON.parse(data)
for(var obj of result){
    console.log(obj.name.common,obj.region,obj.subregion,obj.population)
}
}



