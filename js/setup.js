	function initApp(){
	    SCREEN_WIDTH = window.innerWidth;
    	SCREEN_HEIGHT = window.innerHeight;
		setup();
        postprocessingApp();
        object = new particleObject(0, 46.4);
        object.update();
		animate();
   	    addEventListeners();
   	    drawGui();
    }

    
    /**
   * Sets up the scene, renderer and camera
   */
	function setup() {
    	//RENDERER
			 if (Detector.webgl) {
		        renderer = new THREE.WebGLRenderer({
		            antialias: true,
		            preserveDrawingBuffer: true,
		            clearColor: backgroundColor,
		            clearAlpha: 1
		        })
		    } else {
		        Detector.addGetWebGLMessage();
		        return true;
		    }
		    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
		    document.getElementById("container").appendChild(renderer.domElement);
		    
		    renderer.shadowMapEnabled = true;
		    renderer.shadowMapSoft = true;
		    renderer.shadowMapAutoUpdate = true;
    
		//STATS
			stats = new Stats();
			stats.domElement.style.position	= 'absolute';
			stats.domElement.style.bottom	= '0px';
			stats.domElement.style.right	= '0px';
			document.getElementById("container").appendChild( stats.domElement );
	
		// SCENE
			scene = new THREE.Scene();
			
									
		// camera
			camera = new THREE.PerspectiveCamera( VIEW_ANGLE, SCREEN_WIDTH / SCREEN_HEIGHT, NEAR, FAR );
			camera.position.set( 0, 0, DEPTH );
			camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
   			camera.updateProjectionMatrix();
	
					
		// LIGHTS
			ambientLight = new THREE.AmbientLight( 0xffffff );
			scene.add( ambientLight );

			
		// LIGHTS
			light = new THREE.SpotLight(0xFFFFFF);
			light.castShadow = true;
			light.position.set(lightX, lightY, lightZ);
			light.target.position.set(0, 0, 0);
			light.shadowCameraVisible = false;
			
			light.shadowCameraNear = shadowCameraNear; 
			light.shadowCameraFar = camera.far;
	
			light.shadowBias = shadowBias;
			light.shadowDarkness = shadowDarkness;
			
			scene.add(light);
							
		// ADDITIONAL FEATURES
			// transparently support window resize
			THREEx.WindowResize.bind(renderer, camera);
			// allow 'p' to make screenshot
			THREEx.Screenshot.bindKey(renderer);
			// allow 'f' to go fullscreen where this feature is supported'p' to make screenshot
			if( THREEx.FullScreen.available() ){
				THREEx.FullScreen.bindKey();		
			}			
	}
	
	function postprocessingApp(){
		renderer.autoClear = false;

		renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBufer: true };
		renderTarget = new THREE.WebGLRenderTarget( SCREEN_WIDTH, SCREEN_HEIGHT, renderTargetParameters );

		focus = new THREE.ShaderPass( THREE.ShaderExtras[ "focus" ] );
		var effectVignette = new THREE.ShaderPass( THREE.ShaderExtras[ "vignette" ] );

		focus.uniforms[ 'screenWidth' ].value = SCREEN_WIDTH; 
		focus.uniforms[ 'screenHeight' ].value = SCREEN_HEIGHT;
		focus.uniforms[ 'sampleDistance' ].value = 1;
		focus.uniforms[ 'waveFactor' ].value = 0.00125;		
		
		var renderModel = new THREE.RenderPass( scene, camera );
		renderModel.shadowMapEnabled = true;
		renderModel.shadowMapSoft = true;
		
		effectVignette.renderToScreen = true;
		//effectVignette.uniforms[ "offset" ].value = 1.05;
		//effectVignette.uniforms[ "darkness" ].value = 1.5;

		composer = new THREE.EffectComposer( renderer, renderTarget );

		composer.addPass( renderModel );
		composer.addPass( focus );
		composer.addPass( effectVignette );	
	}	    

	function animate() {
		requestAnimationFrame( animate );
		render();
		stats.update();	
	}
	
	function render() {
		renderer.clear();
		composer.render( 1 );
	}
	