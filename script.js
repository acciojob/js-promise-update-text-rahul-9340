//your JS code here. If required.

let output = document.getElementById("output")


let p1 = new Promise((resolve,reject)=>{
let condition = true;
	if(condition){
		setTimeout(()=>{
	resolve("Hello, world!")
   },1000)	
	}
	else{
reject("error occured")
}
})


p1.then((data)=>{
	output.innerText = data;
}).catch((data)=>{
console.log(data);
})









