function soundPlay() {
/*	var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
  	myMedia.play({ numberOfLoops: 2 });*/
	var my_media = new Media('/android_asset/www/audio/mp5.mp3');
        my_media.play();

}

function takePhoto() {
	
	alert("Take Picture button clicked");
	
        navigator.camera.getPicture(onSuccess2, onFail, {
            quality: 100,
            targetWidth: 400,
            targetHeight: 400,
           /* destinationType: Camera.DestinationType.DATA_URL,*/
          destinationType: Camera.DestinationType.FILE_URI,
            correctOrientation: true
         });
       
       
    alert("!");   
}
function onSuccess2(imageURI) {
    var image = document.getElementById('image');
    image.src = imageURI;
    
    document.getElementById('deviceready').innerHTML = imageURI;
}
function onSuccess(imageData) {
   var image = document.getElementById('image');
   image.src = "data:image/jpeg;base64," + imageData;
   image.style.margin = "10px";
   image.style.display = "block";
}

function onFail(message) {
   console.log("Picture failure: " + message);
   
 }
