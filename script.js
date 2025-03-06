var request=new XMLHttpRequest();
request.open("GET","https://api.rootnet.in/covid19-in/stats/history");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result); 
for (var i in result){

console.log(result[i].data)
for (var j in result.data){
    console.log(result.data[j].regional,result.data[j].loc)
}

}


}
