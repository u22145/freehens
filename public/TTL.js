(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"TTL_atlas_1", frames: [[0,0,875,425],[0,427,661,269],[877,0,120,118],[877,120,120,118],[877,240,120,118],[877,360,120,118]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.TTL01 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.TTL02 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.TTL032 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.TTL033 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.TTL034 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.TTL036 = function() {
	this.initialize(ss["TTL_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.TTL02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,661,269), null);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.TTL036();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,120,118), null);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.TTL034();
	this.instance.setTransform(75.8,-18.6,1,1,59.9996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-26.4,-18.6,162.20000000000002,162.9), null);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.TTL034();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,120,118), null);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.TTL033();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,120,118), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TTL03_6_png
	this.instance = new lib.元件8();
	this.instance.setTransform(-197,84,1,1,0,0,0,60,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:59.1,rotation:-14.9992,y:84.1},10,cjs.Ease.quadInOut).to({regY:59,rotation:0,y:84},10,cjs.Ease.quadInOut).wait(1));

	// TTL03_3_png
	this.instance_1 = new lib.元件5();
	this.instance_1.setTransform(-197,84,1,1,0,0,0,60,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.7404,y:84.05},10,cjs.Ease.quadInOut).to({rotation:0,y:84},10,cjs.Ease.quadInOut).wait(1));

	// TTL03_5_png
	this.instance_2 = new lib.元件7();
	this.instance_2.setTransform(-197,84,1,1,-21.2353,0,0,60,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-66.2226,x:-196.95,y:78.7},10,cjs.Ease.quadInOut).to({rotation:-21.2353,x:-197,y:84},10,cjs.Ease.quadInOut).wait(1));

	// TTL03_4_png
	this.instance_3 = new lib.元件6();
	this.instance_3.setTransform(-197,84,1,1,0,0,0,60,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:44.9994,x:-189.65,y:84.15},10,cjs.Ease.quadInOut).to({rotation:0,x:-197,y:84},10,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.6,-21.9,217.3,216.70000000000002);


(lib.元件10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(-310.65,-118.05,1,1,-4.7483,0,0,-198.2,87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:87.5,rotation:-4.7475,x:17.65,y:-185.7,startPosition:8},71).to({rotation:-19.7464,x:17.6,startPosition:19},11).to({rotation:5.9911,x:17.65,y:-185.75,startPosition:9},11).to({rotation:-19.7464,x:17.6,y:-185.7,startPosition:19},10).to({rotation:-4.7475,x:22.3,y:-186.65,startPosition:9},11).to({regX:-197.7,regY:87,rotation:-4.7483,x:327.4,y:-249.7},41).wait(1).to({scaleX:1.0059,rotation:0,skewX:-4.7483,skewY:175.2517,x:327.6,startPosition:10},0).to({regX:-202.3,regY:88.2,scaleX:1.0586,skewX:-4.7485,skewY:175.253,x:13.55,y:-181.3,startPosition:0},69,cjs.Ease.quadOut).to({regX:-202.4,scaleX:1.0585,skewX:9.4265,skewY:189.4276,x:13.7,startPosition:12},9).to({regX:-202.3,scaleY:0.9999,skewX:-20.4022,skewY:159.5998,x:13.6,y:-181.35,startPosition:4},9).to({regX:-202.4,skewX:8.8566,skewY:188.8575,x:13.65,y:-183.6,startPosition:13},9).to({regX:-202.3,scaleX:1.0586,scaleY:1,skewX:-4.7485,skewY:175.253,x:13.55,y:-186.3,startPosition:0},11).to({regX:-198.2,regY:87,x:-305.85,y:-108.35,startPosition:6},78,cjs.Ease.quadOut).wait(1));

	// 圖層_3
	this.instance_1 = new lib.元件11();
	this.instance_1.setTransform(16.5,164.5,1,1,0,0,0,330.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({scaleX:1.0756,scaleY:1.0756,x:16.55},10,cjs.Ease.quadInOut).to({scaleX:0.881,scaleY:0.881},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:16.5},10,cjs.Ease.quadInOut).wait(121).to({scaleX:1.0756,scaleY:1.0756,x:16.55},10,cjs.Ease.quadInOut).to({scaleX:0.881,scaleY:0.881},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:16.5},10,cjs.Ease.quadInOut).wait(96));

	// 圖層_4
	this.instance_2 = new lib.TTL01();
	this.instance_2.setTransform(-444,-264);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(342));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444,-336.9,875,646.0999999999999);


// stage content:
(lib.TTL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_4
	this.instance = new lib.元件10();
	this.instance.setTransform(484.2,357.05,1,1,0,0,0,29.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(343));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(461,413.9,425,213);
// library properties:
lib.properties = {
	id: '13158F3F750AB048ABFDB94EED3A09B7',
	width: 900,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/TTL_atlas_1.png?1680168167166", id:"TTL_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['13158F3F750AB048ABFDB94EED3A09B7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;