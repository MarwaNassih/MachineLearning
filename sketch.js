let mobilenet;
let video;
let label = ' ';



function modelReady(){
	console.log('Model is ready!!!');
	mobilenet.predict(gotResults);
}

function gotResults(error, results){
if (error){
	console.error(error);
}
else{
	//console.log(results);
	label=results[0].className;

	mobilenet.predict(gotResults);
}
}
// function imageReady(){
// 	image(curcuma,0,0, width, height);
// }

function setup() {
	createCanvas(1000, 700);
	video=createCapture(VIDEO);
	video.hide();
	background(0);
	mobilenet=ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
	background(0);
	image(video,0,0);
		//let prob= results[0].probability;
	fill(255);
	textSize(32);
	text(label, 10, height - 20);
	//createP(label);
	//createP(prob);

}