function divide(p1,p2){
	document.getElementById("divide").innerHTML="resultado:"+p1/p2;
}

function divideSinParametros(){
	var distancia=0;
	distancia=document.getElementById("distancia").value;
	tiempo=document.getElementById("tiempo").value;
	v3=(parseInt(distancia))/(parseInt(tiempo));
	document.getElementById("divideSinParametros").innerHTML="resultado: "+v3;
}
function aceleracionSinParametros(){
	var Vo=0;
	Vo=document.getElementById("Vo").value;
	Vi=document.getElementById("Vi").value;
	t=document.getElementById("t").value;
	a=(parseInt(Vo-Vi))/(parseInt(t));
	document.getElementById("aceleracionSinParametros").innerHTML="resultado: "+a;
}
function multiplica(p1,p2){
	document.getElementById("multiplica").innerHTML="resultado: "+p1*p2;
}
function fuerzaSinParametros() {
	var m=0;
	m=document.getElementById("m").value;
	ac=document.getElementById("ac").value;
	f=(parseInt(m))*(parseInt(ac));
	document.getElementById("fuerzaSinParametros").innerHTML="resultado: "+f;
}
function tiempoSinParametros(){
	var vo=0;
	vo=document.getElementById("vo").value;
	vi=document.getElementById("vi").value;
	acel=document.getElementById("acel").value;
	t=(parseInt(vo-vi))/(parseInt(acel));
	document.getElementById("tiempoSinParametros").innerHTML="resultado: "+t;
}
function multi(p1,p2,p3){
	document.getElementById("multi").innerHTML="resultado: "+p1*p2*p3;
}
function energiapSinParametros() {
	var ms=0;
	ms=document.getElementById("ms").value;
	g=document.getElementById("g").value;
	h=document.getElementById("h").value;
	Ep=(parseInt(ms))*(parseInt(g))*(parseInt(h));
	document.getElementById("energiapSinParametros").innerHTML="resultado: "+Ep;
}
function energiacSinParametros() {
	var ma=0;
	ma=document.getElementById("ma").value;
	vl=document.getElementById("vl").value;
	Ec=(parseInt(ma))*(parseInt(vl*vl))/2;
	document.getElementById("energiacSinParametros").innerHTML="resultado: "+Ec;
}
