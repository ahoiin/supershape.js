function cleareScenes() {
    scene.remove(object.getScene());
    mesh = null;
    particleSystem = null;
}

var guiWindow = function () {
        this.a1 = a1;
		this.b1 = b1;
		this.m1 = m1;
		this.n11 = n11;
		this.n21 = n21;
		this.n31 = n31;
		
		this.a2 = a2;
		this.b2 = b2;
		this.m2 = m2;
		this.n12 = n12;
		this.n22 = n22;
		this.n32 = n32;
		
		this.texture = "dotted";
        this.bgcolor = "#202020";
        this.color = "#ffffff";
        this.zoom = 600;
        this.shadow = true;
        this.lightx = 0, this.lighty = 50, this.lightz = 700;
        this.shadowBias = 0.002, this.shadowDarkness = 0.8, this.shadowCamera = false;
        this.resetlight = function() {  
        	lightX = 0, lightY = 50, lightZ = 600, shadowBias = 0.002, shadowDarkness = 0.8, shadowCameraNear = 300, shadowCameraFar = 600;
        	light.position.set(lightX, lightY, lightZ);
        	light.shadowDarkness = shadowDarkness;
        	light.shadowBias = shadowBias;
        	light.shadowCameraNear = shadowCameraNear; 
			light.shadowCameraFar = shadowCameraFar;
        };
    };

function drawGui() {
    guiElement = new guiWindow();
    var a = new dat.GUI();
    
    var f1 = a.addFolder('First Form');
    f1.add(guiElement, "a1").name("A1").min(0).max(5).listen().onChange(function (b) { a1 = b; object.update(); });
    f1.add(guiElement, "b1").name("B1").min(0).max(5).listen().onChange(function (b) { b1 = b; object.update(); });
    f1.add(guiElement, "m1").name("M1").min(0).max(20).listen().onChange(function (b) { m1 = b; object.update(); });
    f1.add(guiElement, "n11").name("N11").min(0).max(100).listen().onChange(function (b) { n11 = b; object.update(); });
    f1.add(guiElement, "n21").name("N21").min(-50).max(100).listen().onChange(function (b) { n21 = b; object.update(); });
    f1.add(guiElement, "n31").name("N31").min(-50).max(100).listen().onChange(function (b) { n31 = b; object.update(); });
    f1.open();
    
    var f2 = a.addFolder('Second Form');
    f2.add(guiElement, "a2").name("A1").min(0).max(5).listen().onChange(function (b) { a2 = b; object.update(); });
    f2.add(guiElement, "b2").name("B1").min(0).max(5).listen().onChange(function (b) { b2 = b; object.update(); });
    f2.add(guiElement, "m2").name("M1").min(0).max(20).listen().onChange(function (b) { m2 = b; object.update(); });
    f2.add(guiElement, "n12").name("N11").min(0).max(100).listen().onChange(function (b) { n12 = b; object.update(); });
    f2.add(guiElement, "n22").name("N21").min(-50).max(100).listen().onChange(function (b) { n22 = b; object.update(); });
    f2.add(guiElement, "n32").name("N31").min(-50).max(100).listen().onChange(function (b) { n32 = b; object.update(); });
    f2.open();
    
    var f3 = a.addFolder('General');
    f3.addColor(guiElement, "bgcolor").name("background").listen().onChange(function (b) {
        backgroundColor = "0x" + b.substring(1, b.length);
        renderer.setClearColor(new THREE.Color(backgroundColor));
    });
    f3.addColor(guiElement, "color").name("form color").listen().onChange(function (b) {
        color = "0x" + b.substring(1, b.length); object.update(); 
    });
    f3.add(guiElement, "zoom").name("zoom").min(1).max(1100).listen().onChange(function (b) {
        camera.position.z = b;
    });
    f3.add(guiElement,"texture",["plane", "dotted","lined"]).listen().onChange(function (b) { 
    	if(b == 'dotted') { cleareScenes(); object = new particleObject(rotX, rotY); }
    	if(b == 'lined') { cleareScenes(); object = new lineObject(rotX, rotY); }
    	if(b == 'plane') { cleareScenes(); object = new meshObject(rotX, rotY); }
		object.update(); 
    });
    
     var f4 = a.addFolder('Light');
     f4.add(guiElement, 'shadow').listen().onChange(function (b) { 
     	if(b == true) {renderer.shadowMapAutoUpdate = true;} 
     	else { renderer.shadowMapAutoUpdate = false; renderer.clearTarget( light.shadowMap );}
     });
     f4.add(guiElement, 'shadowCamera').listen().onChange(function (b) { 
     	if(b == true) {light.shadowCameraVisible = true;} 
     	else { light.shadowCameraVisible = false;}
     });
     f4.add(guiElement, "shadowBias").name("Shadow Bias").min(0).max(0.01).listen().onChange(function (b) {  shadowBias = b; light.shadowBias = shadowBias; });
     f4.add(guiElement, "shadowDarkness").name("Shadow Darkness").min(0).max(1).listen().onChange(function (b) { shadowDarkness = b; light.shadowDarkness = shadowDarkness; });    
     f4.add(guiElement, "lightx").name("LightX").min(0).max(1000).listen().onChange(function (b) { lightX = b; light.position.set(lightX, lightY, lightZ); });
     f4.add(guiElement, "lighty").name("LightY").min(0).max(1000).listen().onChange(function (b) { lightY = b; light.position.set(lightX, lightY, lightZ); });
     f4.add(guiElement, "lightz").name("Light Z").min(0).max(1000).listen().onChange(function (b) { lightZ = b; light.position.set(lightX, lightY, lightZ); });

	 f4.add(guiElement, 'resetlight').name("reset light");

};
