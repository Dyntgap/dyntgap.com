(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 235,
	height: 80,
	fps: 24,
	color: "#002051",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Dyntgap_Duck.png", id:"Dyntgap_Duck"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Dyntgap_Duck = function() {
	this.initialize(img.Dyntgap_Duck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,79);


(lib.Wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0196F4").ss(1,1,1).p("AGXizQAUAjA0A0QAfAngrAYQgwAdjDA9Qi6A8gxAJQhaAPiDATQi4AagtAAAEpi9QAZAjA2AyQAaAlhLASQhPAUjKAXQiTAPiMALQhkAHgZABQgeAChfAA");
	this.shape.setTransform(49.2,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,100.5,40);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.1,1,1).p("AgLAAIAXAA");
	this.shape.setTransform(14.8,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABxhMQAqAHAdAbQAZAXAhATQAMALgtAZQglAVgxAQIgOAeQgWAfgmADQgVACgEgDQgDgCAIgHQAagZADgOQgMABgLAAQgrABgVgTQgWgUhDgkQAngUAqgWQAYgMAUgLABxhMQgLgPgRgPQghgfgcAAQgsAAgfAFQgpAFAXAKQAWAKAeAdQAPAPAJANQAkgRAfgKIALgBQAOAAAOACgAB7BJQgjALgeAEAh2APQgQgJgTgIIhbgtIAACPIBzhLQAGgDAFgDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F66A6").s().p("AAYCIQgDgCAIgHQAagZADgOIgXABQgrABgVgTQgWgUhDgkIBRgqIAsgXQAkgRAfgKIALgBQAOAAAOACQAqAHAdAbQAZAXAhATQAMALgtAZQglAVgxAQQgjALgeAEQAegEAjgLIgOAeQgWAfgmADIgPABQgHAAgDgCgACfgRIgZAAgAj0gvIBbAtIAjARIgLAGIhzBLgAh2APIAAAAgAgRhOQgegdgWgKQgXgKApgFQAfgFAsAAQAcAAAhAfQARAPALAPQgOgCgOAAIgLABQgfAKgkARQgJgNgPgPgABxhMIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-14.8,51,29.7);


(lib.Duck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Dyntgap_Duck();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,79);


(lib.Fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tween 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(24.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-45,y:-67.2},4).to({scaleX:1,scaleY:1,rotation:33,x:28.1,y:-78},4).to({scaleX:1,scaleY:1,rotation:0,x:24.5,y:13.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,51,29.7);


// stage content:



(lib.dyntgap_duck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Duck
	this.instance = new lib.Duck();
	this.instance.setTransform(18.4,28.8,0.533,0.533,0,0,0,32.9,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:34.5,regY:39.5,x:20.6,y:28.7},0).wait(1).to({x:21.9},0).wait(1).to({x:23.2},0).wait(1).to({x:24.5},0).wait(1).to({x:25.8,y:28.8},0).wait(1).to({x:27.1},0).wait(1).to({x:28.4},0).wait(1).to({x:29.7},0).wait(1).to({x:31},0).wait(1).to({x:32.3},0).wait(1).to({x:33.6},0).wait(1).to({x:34.9},0).wait(1).to({x:36.2},0).wait(1).to({x:37.5},0).wait(1).to({x:38.7,y:28.9},0).wait(1).to({x:40},0).wait(1).to({x:41.4},0).wait(1).to({scaleX:0.53,x:42.7},0).wait(1).to({x:44},0).wait(1).to({x:45.3},0).wait(1).to({x:46.6},0).wait(1).to({x:47.9},0).wait(1).to({x:49.2},0).wait(1).to({x:50.5,y:29},0).wait(1).to({x:51.8},0).wait(1).to({x:53.1},0).wait(1).to({x:54.4},0).wait(1).to({x:55.7},0).wait(1).to({x:57},0).wait(1).to({x:58.3},0).wait(1).to({x:59.6},0).wait(1).to({x:60.9},0).wait(1).to({x:62.2},0).wait(1).to({x:63.5,y:29.1},0).wait(1).to({x:64.8},0).wait(1).to({x:66.1},0).wait(1).to({x:67.4},0).wait(1).to({x:68.7},0).wait(1).to({x:70},0).wait(1).to({scaleX:0.53,x:71.3},0).wait(1).to({x:72.6},0).wait(1).to({x:73.9},0).wait(1).to({x:75.2},0).wait(1).to({x:76.5,y:29.2},0).wait(1).to({x:77.8},0).wait(1).to({x:79.1},0).wait(1).to({x:80.4},0).wait(1).to({x:81.7},0).wait(1).to({x:83},0).wait(1).to({x:84.3},0).wait(1).to({x:85.6},0).wait(1).to({x:86.9},0).wait(1).to({x:88.2,y:29.3},0).wait(1).to({x:89.5},0).wait(1).to({x:90.8},0).wait(1).to({x:92.1},0).wait(1).to({x:93.4},0).wait(1).to({x:94.7},0).wait(1).to({x:96},0).wait(1).to({x:97.3},0).wait(1).to({x:98.6},0).wait(1).to({scaleX:0.53,x:99.9},0).wait(1).to({x:101.2,y:29.4},0).wait(1).to({x:102.5},0).wait(1).to({x:103.9},0).wait(1).to({x:105.2},0).wait(1).to({x:106.5},0).wait(1).to({x:107.8},0).wait(1).to({x:109.1},0).wait(1).to({x:110.4},0).wait(1).to({x:111.7},0).wait(1).to({x:113,y:29.5},0).wait(1).to({x:114.3},0).wait(1).to({x:115.6},0).wait(1).to({x:116.9},0).wait(1).to({x:118.2},0).wait(1).to({x:119.5},0).wait(1).to({x:120.8},0).wait(1).to({x:122},0).wait(1).to({x:123.3},0).wait(1).to({x:124.7},0).wait(1).to({x:126,y:29.6},0).wait(1).to({x:127.3},0).wait(1).to({scaleX:0.53,x:128.6},0).wait(1).to({x:129.9},0).wait(1).to({x:131.2},0).wait(1).to({x:132.5},0).wait(1).to({x:133.8},0).wait(1).to({x:135.1},0).wait(1).to({x:136.4},0).wait(1).to({x:137.7,y:29.7},0).wait(1).to({x:139},0).wait(1).to({x:140.3},0).wait(1).to({x:141.6},0).wait(1).to({x:142.9},0).wait(1).to({x:144.2},0).wait(1).to({x:145.5},0).wait(1).to({x:146.8},0).wait(1).to({x:148.1},0).wait(1).to({x:149.4},0).wait(1).to({x:150.7,y:29.8},0).wait(1).to({x:152},0).wait(1).to({x:153.3},0).wait(1).to({x:154.6},0).wait(1).to({x:155.9},0).wait(1).to({scaleX:0.53,x:157.2},0).wait(1).to({x:158.5},0).wait(1).to({x:159.8},0).wait(1).to({x:161.1},0).wait(1).to({x:162.4,y:29.9},0).wait(1).to({x:163.7},0).wait(1).to({x:165},0).wait(1).to({x:166.3},0).wait(1).to({x:167.6},0).wait(1).to({x:168.9},0).wait(1).to({x:170.2},0).wait(1).to({x:171.5},0).wait(1).to({x:172.8},0).wait(1).to({x:174.1},0).wait(1).to({x:175.4,y:30},0).wait(1).to({x:176.7},0).wait(1).to({x:178},0).wait(1).to({x:179.3},0).wait(1).to({x:180.6},0).wait(1).to({x:181.9},0).wait(1).to({x:183.2},0).wait(1).to({x:184.5},0).wait(1).to({scaleX:0.53,x:185.8},0).wait(1).to({x:187.2},0).wait(1).to({x:188.5,y:30.1},0).wait(1).to({x:189.8},0).wait(1).to({x:191.1},0).wait(1).to({x:192.4},0).wait(1).to({x:193.7},0).wait(1).to({x:195},0).wait(1).to({x:196.3},0).wait(1).to({x:197.6},0).wait(1).to({x:198.9},0).wait(1).to({x:200.2,y:30.2},0).wait(1).to({x:201.5},0).wait(1).to({x:202.8},0).wait(1).to({x:204.1},0).wait(1).to({x:205.3},0).wait(1).to({x:206.6},0).wait(1).to({x:208},0).wait(1).to({x:209.3},0).wait(1).to({x:210.6},0).wait(1).to({x:211.9},0).wait(1).to({x:213.2,y:30.3},0).wait(1).to({scaleX:0.53,x:214.5},0).wait(1).to({x:215.8},0).wait(1).to({x:217.1},0).wait(1).to({x:218.4},0).wait(1).to({scaleX:0.53,skewY:180,x:215.3},0).wait(1).to({x:214},0).wait(1).to({x:212.6,y:30.2},0).wait(1).to({x:211.3},0).wait(1).to({x:209.9},0).wait(1).to({x:208.6},0).wait(1).to({x:207.2,y:30.1},0).wait(1).to({x:205.9},0).wait(1).to({x:204.5},0).wait(1).to({x:203.2},0).wait(1).to({x:201.8},0).wait(1).to({x:200.5,y:30},0).wait(1).to({x:199.1},0).wait(1).to({x:197.8},0).wait(1).to({x:196.4},0).wait(1).to({x:195.1},0).wait(1).to({x:193.7,y:29.9},0).wait(1).to({x:192.4},0).wait(1).to({x:191},0).wait(1).to({x:189.6},0).wait(1).to({x:188.3,y:29.8},0).wait(1).to({x:186.9},0).wait(1).to({x:185.6},0).wait(1).to({x:184.2},0).wait(1).to({x:182.9},0).wait(1).to({x:181.5,y:29.7},0).wait(1).to({x:180.2},0).wait(1).to({x:178.8},0).wait(1).to({x:177.5},0).wait(1).to({x:176.1,y:29.6},0).wait(1).to({x:174.8},0).wait(1).to({x:173.4},0).wait(1).to({x:172.1},0).wait(1).to({x:170.7},0).wait(1).to({x:169.4,y:29.5},0).wait(1).to({x:168},0).wait(1).to({x:166.7},0).wait(1).to({x:165.3},0).wait(1).to({x:164,y:29.4},0).wait(1).to({x:162.6},0).wait(1).to({x:161.3},0).wait(1).to({x:159.9},0).wait(1).to({x:158.5},0).wait(1).to({x:157.2,y:29.3},0).wait(1).to({x:155.8},0).wait(1).to({x:154.5},0).wait(1).to({x:153.1},0).wait(1).to({x:151.8},0).wait(1).to({x:150.4,y:29.2},0).wait(1).to({x:149.1},0).wait(1).to({x:147.7},0).wait(1).to({x:146.4},0).wait(1).to({x:145,y:29.1},0).wait(1).to({x:143.7},0).wait(1).to({x:142.3},0).wait(1).to({x:141},0).wait(1).to({x:139.6},0).wait(1).to({x:138.3,y:29},0).wait(1).to({x:136.9},0).wait(1).to({x:135.6},0).wait(1).to({x:134.2},0).wait(1).to({x:132.9,y:28.9},0).wait(1).to({x:131.5},0).wait(1).to({x:130.2},0).wait(1).to({x:128.8},0).wait(1).to({x:127.4},0).wait(1).to({x:126.1,y:28.8},0).wait(1).to({x:124.7},0).wait(1).to({x:123.4},0).wait(1).to({x:122},0).wait(1).to({x:120.7},0).wait(1).to({x:119.3,y:28.7},0).wait(1).to({x:118},0).wait(1).to({x:116.6},0).wait(1).to({x:115.3},0).wait(1).to({x:113.9,y:28.6},0).wait(1).to({x:112.6},0).wait(1).to({x:111.2},0).wait(1).to({x:109.9},0).wait(1).to({x:108.5},0).wait(1).to({x:107.2,y:28.5},0).wait(1).to({x:105.8},0).wait(1).to({x:104.5},0).wait(1).to({x:103.1},0).wait(1).to({x:101.8,y:28.4},0).wait(1).to({x:100.4},0).wait(1).to({x:99.1},0).wait(1).to({x:97.7},0).wait(1).to({x:96.3},0).wait(1).to({x:95,y:28.3},0).wait(1).to({x:93.6},0).wait(1).to({x:92.3},0).wait(1).to({x:90.9},0).wait(1).to({x:89.6,y:28.2},0).wait(1).to({x:88.2},0).wait(1).to({x:86.9},0).wait(1).to({x:85.5},0).wait(1).to({x:84.2},0).wait(1).to({x:82.8,y:28.1},0).wait(1).to({x:81.5},0).wait(1).to({x:80.1},0).wait(1).to({x:78.8},0).wait(1).to({x:77.4},0).wait(1).to({x:76.1,y:28},0).wait(1).to({x:74.7},0).wait(1).to({x:73.4},0).wait(1).to({x:72},0).wait(1).to({x:70.7,y:27.9},0).wait(1).to({x:69.3},0).wait(1).to({x:68},0).wait(1).to({x:66.6},0).wait(1).to({x:65.2},0).wait(1).to({x:63.9,y:27.8},0).wait(1).to({x:62.5},0).wait(1).to({x:61.2},0).wait(1).to({x:59.8},0).wait(1).to({x:58.5,y:27.7},0).wait(1).to({x:57.1},0).wait(1).to({x:55.8},0).wait(1).to({x:54.4},0).wait(1).to({x:53.1},0).wait(1).to({x:51.7,y:27.6},0).wait(1).to({x:50.4},0).wait(1).to({x:49},0).wait(1).to({x:47.7},0).wait(1).to({x:46.3},0).wait(1).to({x:45,y:27.5},0).wait(1).to({x:43.6},0).wait(1).to({x:42.3},0).wait(1).to({x:40.9},0).wait(1).to({x:39.6,y:27.4},0).wait(1).to({x:38.2},0).wait(1).to({x:36.9},0).wait(1).to({x:35.5},0).wait(1).to({x:34.1},0).wait(1).to({x:32.8,y:27.3},0).wait(1).to({x:31.4},0).wait(1).to({x:30.1},0).wait(1).to({x:28.7},0).wait(1).to({x:27.4,y:27.2},0).wait(1).to({x:26},0).wait(1).to({x:24.7},0).wait(1).to({x:23.3},0).wait(1).to({x:22},0).wait(1).to({x:20.6,y:27.1},0).wait(1).to({x:19.3},0).wait(1).to({x:17.9},0).wait(1).to({x:16.6},0).wait(1).to({x:17.9,y:27},0).wait(1));

	// Wave
	this.instance_1 = new lib.Wave();
	this.instance_1.setTransform(14.6,54.5,0.533,0.533,0,0,0,48.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:49.2,regY:19,x:16.5,y:54.4},0).wait(1).to({x:17.8},0).wait(1).to({x:19.1},0).wait(1).to({x:20.4},0).wait(1).to({x:21.7},0).wait(1).to({x:22.9},0).wait(1).to({x:24.2},0).wait(1).to({x:25.5},0).wait(1).to({x:26.8},0).wait(1).to({x:28.1},0).wait(1).to({x:29.4},0).wait(1).to({x:30.7},0).wait(1).to({x:32},0).wait(1).to({x:33.2},0).wait(1).to({x:34.5},0).wait(1).to({x:35.8},0).wait(1).to({x:37.1},0).wait(1).to({scaleX:0.53,x:38.4},0).wait(1).to({x:39.7},0).wait(1).to({x:41},0).wait(1).to({x:42.3},0).wait(1).to({x:43.6},0).wait(1).to({x:44.9},0).wait(1).to({x:46.2},0).wait(1).to({x:47.5},0).wait(1).to({x:48.8},0).wait(1).to({x:50.1},0).wait(1).to({x:51.4},0).wait(1).to({x:52.6},0).wait(1).to({x:53.9},0).wait(1).to({x:55.2},0).wait(1).to({x:56.5},0).wait(1).to({x:57.8},0).wait(1).to({x:59.1},0).wait(1).to({x:60.4},0).wait(1).to({x:61.7},0).wait(1).to({x:63},0).wait(1).to({x:64.3},0).wait(1).to({x:65.6},0).wait(1).to({scaleX:0.53,x:66.9},0).wait(1).to({x:68.2},0).wait(1).to({x:69.5},0).wait(1).to({x:70.8},0).wait(1).to({x:72.1},0).wait(1).to({x:73.4},0).wait(1).to({x:74.7},0).wait(1).to({x:76},0).wait(1).to({x:77.3},0).wait(1).to({x:78.6},0).wait(1).to({x:79.9},0).wait(1).to({x:81.1},0).wait(1).to({x:82.4},0).wait(1).to({x:83.7},0).wait(1).to({x:85},0).wait(1).to({x:86.3},0).wait(1).to({x:87.6},0).wait(1).to({x:88.9},0).wait(1).to({x:90.2},0).wait(1).to({x:91.5},0).wait(1).to({x:92.8},0).wait(1).to({x:94.1},0).wait(1).to({scaleX:0.53,x:95.4},0).wait(1).to({x:96.7},0).wait(1).to({x:98},0).wait(1).to({x:99.3},0).wait(1).to({x:100.6},0).wait(1).to({x:101.9},0).wait(1).to({x:103.1},0).wait(1).to({x:104.4},0).wait(1).to({x:105.7},0).wait(1).to({x:107},0).wait(1).to({x:108.3},0).wait(1).to({x:109.6},0).wait(1).to({x:110.9},0).wait(1).to({x:112.2},0).wait(1).to({x:113.5},0).wait(1).to({x:114.8},0).wait(1).to({x:116.1},0).wait(1).to({x:117.4},0).wait(1).to({x:118.7},0).wait(1).to({x:120},0).wait(1).to({x:121.2},0).wait(1).to({x:122.5},0).wait(1).to({scaleX:0.53,x:123.8},0).wait(1).to({x:125.1},0).wait(1).to({x:126.4},0).wait(1).to({x:127.7},0).wait(1).to({x:129},0).wait(1).to({x:130.3},0).wait(1).to({x:131.6},0).wait(1).to({x:132.9},0).wait(1).to({x:134.2},0).wait(1).to({x:135.5},0).wait(1).to({x:136.8},0).wait(1).to({x:138.1},0).wait(1).to({x:139.3},0).wait(1).to({x:140.6},0).wait(1).to({x:141.9},0).wait(1).to({x:143.2},0).wait(1).to({x:144.5},0).wait(1).to({x:145.8},0).wait(1).to({x:147.1},0).wait(1).to({x:148.4},0).wait(1).to({x:149.7},0).wait(1).to({x:151},0).wait(1).to({scaleX:0.53,x:152.3},0).wait(1).to({x:153.6},0).wait(1).to({x:154.9},0).wait(1).to({x:156.2},0).wait(1).to({x:157.5},0).wait(1).to({x:158.8},0).wait(1).to({x:160.1},0).wait(1).to({x:161.4},0).wait(1).to({x:162.7},0).wait(1).to({x:164},0).wait(1).to({x:165.3},0).wait(1).to({x:166.6},0).wait(1).to({x:167.8},0).wait(1).to({x:169.1},0).wait(1).to({x:170.4},0).wait(1).to({x:171.7},0).wait(1).to({x:173},0).wait(1).to({x:174.3},0).wait(1).to({x:175.6},0).wait(1).to({x:176.9},0).wait(1).to({x:178.2},0).wait(1).to({x:179.5},0).wait(1).to({scaleX:0.53,x:180.8},0).wait(1).to({x:182.1},0).wait(1).to({x:183.4},0).wait(1).to({x:184.7},0).wait(1).to({x:186},0).wait(1).to({x:187.3},0).wait(1).to({x:188.6},0).wait(1).to({x:189.9},0).wait(1).to({x:191.1},0).wait(1).to({x:192.4},0).wait(1).to({x:193.7},0).wait(1).to({x:195},0).wait(1).to({x:196.3},0).wait(1).to({x:197.6},0).wait(1).to({x:198.9},0).wait(1).to({x:200.2},0).wait(1).to({x:201.5},0).wait(1).to({x:202.8},0).wait(1).to({x:204.1},0).wait(1).to({x:205.4},0).wait(1).to({x:206.7},0).wait(1).to({x:207.9},0).wait(1).to({scaleX:0.53,x:209.2},0).wait(1).to({x:210.5},0).wait(1).to({x:211.8},0).wait(1).to({x:213.1},0).wait(1).to({scaleX:0.53,skewY:180,x:223.2,y:54.6},0).wait(1).to({x:221.8},0).wait(1).to({x:220.4},0).wait(1).to({x:219.1},0).wait(1).to({x:217.7},0).wait(1).to({x:216.3},0).wait(1).to({x:215},0).wait(1).to({x:213.6},0).wait(1).to({x:212.2},0).wait(1).to({x:210.9},0).wait(1).to({x:209.5},0).wait(1).to({x:208.1},0).wait(1).to({x:206.8},0).wait(1).to({x:205.4},0).wait(1).to({x:204},0).wait(1).to({x:202.7},0).wait(1).to({x:201.3},0).wait(1).to({x:199.9},0).wait(1).to({x:198.6},0).wait(1).to({x:197.2},0).wait(1).to({x:195.8},0).wait(1).to({x:194.5},0).wait(1).to({x:193.1},0).wait(1).to({x:191.7},0).wait(1).to({x:190.4},0).wait(1).to({x:189},0).wait(1).to({x:187.6},0).wait(1).to({x:186.3},0).wait(1).to({x:184.9},0).wait(1).to({x:183.5},0).wait(1).to({x:182.2},0).wait(1).to({x:180.8},0).wait(1).to({x:179.4},0).wait(1).to({x:178.1},0).wait(1).to({x:176.7},0).wait(1).to({x:175.4},0).wait(1).to({x:174},0).wait(1).to({x:172.6},0).wait(1).to({x:171.3},0).wait(1).to({x:169.9},0).wait(1).to({x:168.5},0).wait(1).to({x:167.2},0).wait(1).to({x:165.8},0).wait(1).to({x:164.4},0).wait(1).to({x:163.1},0).wait(1).to({x:161.7},0).wait(1).to({x:160.3},0).wait(1).to({x:159},0).wait(1).to({x:157.6},0).wait(1).to({x:156.2},0).wait(1).to({x:154.9,y:54.5},0).wait(1).to({x:153.5},0).wait(1).to({x:152.1},0).wait(1).to({x:150.8},0).wait(1).to({x:149.4},0).wait(1).to({x:148},0).wait(1).to({x:146.7},0).wait(1).to({x:145.3},0).wait(1).to({x:143.9},0).wait(1).to({x:142.6},0).wait(1).to({x:141.2},0).wait(1).to({x:139.8},0).wait(1).to({x:138.5},0).wait(1).to({x:137.1},0).wait(1).to({x:135.7},0).wait(1).to({x:134.4},0).wait(1).to({x:133},0).wait(1).to({x:131.6},0).wait(1).to({x:130.3},0).wait(1).to({x:128.9},0).wait(1).to({x:127.5},0).wait(1).to({x:126.2},0).wait(1).to({x:124.8},0).wait(1).to({x:123.5},0).wait(1).to({x:122.1},0).wait(1).to({x:120.7},0).wait(1).to({x:119.4},0).wait(1).to({x:118},0).wait(1).to({x:116.6},0).wait(1).to({x:115.3},0).wait(1).to({x:113.9},0).wait(1).to({x:112.5},0).wait(1).to({x:111.2},0).wait(1).to({x:109.8},0).wait(1).to({x:108.4},0).wait(1).to({x:107.1},0).wait(1).to({x:105.7},0).wait(1).to({x:104.3},0).wait(1).to({x:103},0).wait(1).to({x:101.6},0).wait(1).to({x:100.2},0).wait(1).to({x:98.9},0).wait(1).to({x:97.5},0).wait(1).to({x:96.1},0).wait(1).to({x:94.8},0).wait(1).to({x:93.4},0).wait(1).to({x:92},0).wait(1).to({x:90.7},0).wait(1).to({x:89.3},0).wait(1).to({x:87.9},0).wait(1).to({x:86.6},0).wait(1).to({x:85.2},0).wait(1).to({x:83.8},0).wait(1).to({x:82.5},0).wait(1).to({x:81.1},0).wait(1).to({x:79.7},0).wait(1).to({x:78.4},0).wait(1).to({x:77},0).wait(1).to({x:75.6},0).wait(1).to({x:74.3},0).wait(1).to({x:72.9},0).wait(1).to({x:71.6},0).wait(1).to({x:70.2},0).wait(1).to({x:68.8},0).wait(1).to({x:67.5},0).wait(1).to({x:66.1},0).wait(1).to({x:64.7},0).wait(1).to({x:63.4},0).wait(1).to({x:62},0).wait(1).to({x:60.6},0).wait(1).to({x:59.3},0).wait(1).to({x:57.9},0).wait(1).to({x:56.5},0).wait(1).to({x:55.2},0).wait(1).to({x:53.8},0).wait(1).to({x:52.4},0).wait(1).to({x:51.1},0).wait(1).to({x:49.7},0).wait(1).to({x:48.3},0).wait(1).to({x:47},0).wait(1).to({x:45.6},0).wait(1).to({x:44.2},0).wait(1).to({x:42.9},0).wait(1).to({x:41.5},0).wait(1).to({x:40.1},0).wait(1).to({x:38.8},0).wait(1).to({x:37.4},0).wait(1).to({x:36},0).wait(1).to({x:34.7},0).wait(1).to({x:33.3},0).wait(1).to({x:31.9},0).wait(1).to({x:30.6},0).wait(1).to({x:29.2},0).wait(1).to({x:27.8},0).wait(1).to({x:26.5},0).wait(1).to({x:25.1},0).wait(1).to({x:23.7},0).wait(1).to({x:22.4},0).wait(1).to({x:23.8,y:54.4},0).wait(1));

	// Fish
	this.instance_2 = new lib.Fish();
	this.instance_2.setTransform(-65.3,49.8,0.533,0.533,0,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:26.7,regY:-37.7,x:-49.3,y:29.6},0).wait(1).to({x:-47.8,y:29.5},0).wait(1).to({x:-46.2},0).wait(1).to({x:-44.6},0).wait(1).to({x:-43,y:29.4},0).wait(1).to({x:-41.5},0).wait(1).to({x:-39.9},0).wait(1).to({x:-38.3,y:29.3},0).wait(1).to({x:-36.7},0).wait(1).to({x:-35.2},0).wait(1).to({x:-33.6,y:29.2},0).wait(1).to({x:-32.1},0).wait(1).to({x:-30.5,y:29.1},0).wait(1).to({x:-28.9},0).wait(1).to({x:-27.3},0).wait(1).to({x:-25.8,y:29},0).wait(1).to({x:-24.2},0).wait(1).to({scaleX:0.53,x:-22.6},0).wait(1).to({x:-21,y:28.9},0).wait(1).to({x:-19.5},0).wait(1).to({x:-17.9},0).wait(1).to({x:-16.3,y:28.8},0).wait(1).to({x:-14.7},0).wait(1).to({x:-13.2},0).wait(1).to({x:-11.6,y:28.7},0).wait(1).to({x:-10},0).wait(1).to({x:-8.4},0).wait(1).to({x:-6.9,y:28.6},0).wait(1).to({x:-5.3},0).wait(1).to({x:-3.7},0).wait(1).to({x:-2.2,y:28.5},0).wait(1).to({x:-0.6},0).wait(1).to({x:1,y:28.4},0).wait(1).to({x:2.6},0).wait(1).to({x:4.1},0).wait(1).to({x:5.7,y:28.3},0).wait(1).to({x:7.3},0).wait(1).to({x:8.9},0).wait(1).to({x:10.4,y:28.2},0).wait(1).to({scaleX:0.53,x:12},0).wait(1).to({x:13.6},0).wait(1).to({x:15.1,y:28.1},0).wait(1).to({x:16.7},0).wait(1).to({x:18.3},0).wait(1).to({x:19.8,y:28},0).wait(1).to({x:21.4},0).wait(1).to({x:23},0).wait(1).to({x:24.6,y:27.9},0).wait(1).to({x:26.1},0).wait(1).to({x:27.7},0).wait(1).to({x:29.3,y:27.8},0).wait(1).to({x:30.9},0).wait(1).to({x:32.4,y:27.7},0).wait(1).to({x:34},0).wait(1).to({x:35.5},0).wait(1).to({x:37.1,y:27.6},0).wait(1).to({x:38.7},0).wait(1).to({x:40.3},0).wait(1).to({x:41.8,y:27.5},0).wait(1).to({x:43.4},0).wait(1).to({x:45},0).wait(1).to({scaleX:0.53,x:46.5,y:27.4},0).wait(1).to({x:48.1},0).wait(1).to({x:49.7},0).wait(1).to({x:51.3,y:27.3},0).wait(1).to({x:52.8},0).wait(1).to({x:54.4},0).wait(1).to({x:56,y:27.2},0).wait(1).to({x:57.6},0).wait(1).to({x:59.1},0).wait(1).to({x:60.7,y:27.1},0).wait(1).to({x:62.3},0).wait(1).to({x:63.9,y:27},0).wait(1).to({x:65.4},0).wait(1).to({x:67},0).wait(1).to({x:68.6,y:26.9},0).wait(1).to({x:70.2},0).wait(1).to({x:71.7},0).wait(1).to({x:73.3,y:26.8},0).wait(1).to({x:74.9},0).wait(1).to({x:76.5},0).wait(1).to({x:78,y:26.7},0).wait(1).to({x:79.6},0).wait(1).to({scaleX:0.53,x:81.2},0).wait(1).to({x:82.8,y:26.6},0).wait(1).to({x:84.3},0).wait(1).to({x:85.9},0).wait(1).to({x:87.5,y:26.5},0).wait(1).to({x:89.1},0).wait(1).to({x:90.6},0).wait(1).to({x:92.2,y:26.4},0).wait(1).to({x:93.8},0).wait(1).to({x:95.3,y:26.3},0).wait(1).to({x:96.9},0).wait(1).to({x:98.4},0).wait(1).to({x:100,y:26.2},0).wait(1).to({x:101.6},0).wait(1).to({x:103.2},0).wait(1).to({x:104.7,y:26.1},0).wait(1).to({x:106.3},0).wait(1).to({x:107.9},0).wait(1).to({x:109.5,y:26},0).wait(1).to({x:111},0).wait(1).to({x:112.6},0).wait(1).to({x:114.2,y:25.9},0).wait(1).to({scaleX:0.53,x:115.8},0).wait(1).to({x:117.3},0).wait(1).to({x:118.9,y:25.8},0).wait(1).to({x:120.5},0).wait(1).to({x:122.1},0).wait(1).to({x:123.6,y:25.7},0).wait(1).to({x:125.2},0).wait(1).to({x:126.8,y:25.6},0).wait(1).to({x:128.4},0).wait(1).to({x:129.9},0).wait(1).to({x:131.5,y:25.5},0).wait(1).to({x:133.1},0).wait(1).to({x:134.7},0).wait(1).to({x:136.2,y:25.4},0).wait(1).to({x:137.8},0).wait(1).to({x:139.4},0).wait(1).to({x:140.9,y:25.3},0).wait(1).to({x:142.5},0).wait(1).to({x:144.1},0).wait(1).to({x:145.7,y:25.2},0).wait(1).to({x:147.2},0).wait(1).to({x:148.8},0).wait(1).to({scaleX:0.53,x:150.4,y:25.1},0).wait(1).to({x:152},0).wait(1).to({x:153.5},0).wait(1).to({x:155.1,y:25},0).wait(1).to({x:156.7},0).wait(1).to({x:158.3,y:24.9},0).wait(1).to({x:159.8},0).wait(1).to({x:161.4},0).wait(1).to({x:162.9,y:24.8},0).wait(1).to({x:164.5},0).wait(1).to({x:166.1},0).wait(1).to({x:167.7,y:24.7},0).wait(1).to({x:169.2},0).wait(1).to({x:170.8},0).wait(1).to({x:172.4,y:24.6},0).wait(1).to({x:174},0).wait(1).to({x:175.5},0).wait(1).to({x:177.1,y:24.5},0).wait(1).to({x:178.7},0).wait(1).to({x:180.3},0).wait(1).to({x:181.8,y:24.4},0).wait(1).to({x:183.4},0).wait(1).to({scaleX:0.53,x:185},0).wait(1).to({x:186.6,y:24.3},0).wait(1).to({x:188.1},0).wait(1).to({x:189.7,y:24.2},0).wait(1).to({scaleX:0.53,skewY:180,x:270.8,y:24.3},0).wait(1).to({x:269.3},0).wait(1).to({x:267.8},0).wait(1).to({x:266.4},0).wait(1).to({x:264.9},0).wait(1).to({x:263.4,y:24.2},0).wait(1).to({x:261.9},0).wait(1).to({x:260.4},0).wait(1).to({x:259},0).wait(1).to({x:257.5},0).wait(1).to({x:256,y:24.1},0).wait(1).to({x:254.5},0).wait(1).to({x:253.1},0).wait(1).to({x:251.6},0).wait(1).to({x:250.1},0).wait(1).to({x:248.6,y:24},0).wait(1).to({x:247.1},0).wait(1).to({x:245.7},0).wait(1).to({x:244.2},0).wait(1).to({x:242.7},0).wait(1).to({x:241.2,y:23.9},0).wait(1).to({x:239.8},0).wait(1).to({x:238.3},0).wait(1).to({x:236.8},0).wait(1).to({x:235.3,y:23.8},0).wait(1).to({x:233.8},0).wait(1).to({x:232.4},0).wait(1).to({x:230.9},0).wait(1).to({x:229.4},0).wait(1).to({x:227.9,y:23.7},0).wait(1).to({x:226.5},0).wait(1).to({x:225},0).wait(1).to({x:223.5},0).wait(1).to({x:222},0).wait(1).to({x:220.5,y:23.6},0).wait(1).to({x:219.1},0).wait(1).to({x:217.6},0).wait(1).to({x:216.1},0).wait(1).to({x:214.6},0).wait(1).to({x:213.2,y:23.5},0).wait(1).to({x:211.7},0).wait(1).to({x:210.2},0).wait(1).to({x:208.7},0).wait(1).to({x:207.2,y:23.4},0).wait(1).to({x:205.8},0).wait(1).to({x:204.3},0).wait(1).to({x:202.8},0).wait(1).to({x:201.3},0).wait(1).to({x:199.9,y:23.3},0).wait(1).to({x:198.4},0).wait(1).to({x:196.9},0).wait(1).to({x:195.4},0).wait(1).to({x:193.9},0).wait(1).to({x:192.5,y:23.2},0).wait(1).to({x:191},0).wait(1).to({x:189.5},0).wait(1).to({x:188},0).wait(1).to({x:186.6},0).wait(1).to({x:185.1,y:23.1},0).wait(1).to({x:183.6},0).wait(1).to({x:182.1},0).wait(1).to({x:180.6},0).wait(1).to({x:179.2},0).wait(1).to({x:177.7,y:23},0).wait(1).to({x:176.2},0).wait(1).to({x:174.7},0).wait(1).to({x:173.3},0).wait(1).to({x:171.8,y:22.9},0).wait(1).to({x:170.3},0).wait(1).to({x:168.8},0).wait(1).to({x:167.3},0).wait(1).to({x:165.9},0).wait(1).to({x:164.4,y:22.8},0).wait(1).to({x:162.9},0).wait(1).to({x:161.4},0).wait(1).to({x:160},0).wait(1).to({x:158.5},0).wait(1).to({x:157,y:22.7},0).wait(1).to({x:155.5},0).wait(1).to({x:154},0).wait(1).to({x:152.6},0).wait(1).to({x:151.1},0).wait(1).to({x:149.6,y:22.6},0).wait(1).to({x:148.1},0).wait(1).to({x:146.7},0).wait(1).to({x:145.2},0).wait(1).to({x:143.7,y:22.5},0).wait(1).to({x:142.2},0).wait(1).to({x:140.7},0).wait(1).to({x:139.3},0).wait(1).to({x:137.8},0).wait(1).to({x:136.3,y:22.4},0).wait(1).to({x:134.8},0).wait(1).to({x:133.4},0).wait(1).to({x:131.9},0).wait(1).to({x:130.4},0).wait(1).to({x:128.9,y:22.3},0).wait(1).to({x:127.4},0).wait(1).to({x:126},0).wait(1).to({x:124.5},0).wait(1).to({x:123},0).wait(1).to({x:121.5,y:22.2},0).wait(1).to({x:120.1},0).wait(1).to({x:118.6},0).wait(1).to({x:117.1},0).wait(1).to({x:115.6},0).wait(1).to({x:114.1,y:22.1},0).wait(1).to({x:112.7},0).wait(1).to({x:111.2},0).wait(1).to({x:109.7},0).wait(1).to({x:108.2,y:22},0).wait(1).to({x:106.8},0).wait(1).to({x:105.3},0).wait(1).to({x:103.8},0).wait(1).to({x:102.3},0).wait(1).to({x:100.8,y:21.9},0).wait(1).to({x:99.4},0).wait(1).to({x:97.9},0).wait(1).to({x:96.4},0).wait(1).to({x:94.9},0).wait(1).to({x:93.5,y:21.8},0).wait(1).to({x:92},0).wait(1).to({x:90.5},0).wait(1).to({x:89},0).wait(1).to({x:87.5},0).wait(1).to({x:86.1,y:21.7},0).wait(1).to({x:84.6},0).wait(1).to({x:83.1},0).wait(1).to({x:81.6},0).wait(1).to({x:80.2,y:21.6},0).wait(1).to({x:78.7},0).wait(1).to({x:77.2},0).wait(1).to({x:75.7},0).wait(1).to({x:74.2},0).wait(1).to({x:72.8,y:21.5},0).wait(1).to({x:71.3},0).wait(1).to({x:69.8},0).wait(1).to({x:68.3},0).wait(1).to({x:66.9},0).wait(1).to({x:65.4,y:21.4},0).wait(1).to({x:63.9},0).wait(1).to({x:62.4},0).wait(1).to({x:60.9},0).wait(1).to({x:59.5},0).wait(1).to({x:58,y:21.3},0).wait(1).to({x:56.5},0).wait(1).to({x:55},0).wait(1).to({x:53.6},0).wait(1).to({x:54.8,y:21.2},0).wait(1));

	// Hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#002051").ss(1,1,1).p("AtzlOIboAAIAAKdI7oAAg");
	this.shape.setTransform(118.5,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002051").s().p("AtzFPIAAqdIbnAAIAAKdg");
	this.shape_1.setTransform(118.5,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#002051").ss(1,1,1).p("AspkYIZTAAIAAIxI5TAAg");
	this.shape_2.setTransform(115.9,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002051").s().p("AspEZIAAoxIZTAAIAAIxg");
	this.shape_3.setTransform(115.9,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#002051").ss(1,1,1).p("AsjkXIZHAAIAAIvI5HAAg");
	this.shape_4.setTransform(116.6,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002051").s().p("AsjEYIAAovIZHAAIAAIvg");
	this.shape_5.setTransform(116.6,36.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#002051").ss(1,1,1).p("AsdkYIY7AAIAAIxI47AAg");
	this.shape_6.setTransform(117.3,36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002051").s().p("AsdEYIAAovIY7AAIAAIvg");
	this.shape_7.setTransform(117.3,36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#002051").ss(1,1,1).p("AsXkXIYvAAIAAIvI4vAAg");
	this.shape_8.setTransform(118,36.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002051").s().p("AsXEYIAAovIYvAAIAAIvg");
	this.shape_9.setTransform(118,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#002051").ss(1,1,1).p("AsRkXIYjAAIAAIvI4jAAg");
	this.shape_10.setTransform(118.6,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002051").s().p("AsREYIAAovIYjAAIAAIvg");
	this.shape_11.setTransform(118.6,36.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#002051").ss(1,1,1).p("AsLkXIYXAAIAAIvI4XAAg");
	this.shape_12.setTransform(119.3,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002051").s().p("AsLEYIAAovIYXAAIAAIvg");
	this.shape_13.setTransform(119.3,36.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#002051").ss(1,1,1).p("AsFkXIYMAAIAAIvI4MAAg");
	this.shape_14.setTransform(120,36.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002051").s().p("AsFEYIAAovIYMAAIAAIvg");
	this.shape_15.setTransform(120,36.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#002051").ss(1,1,1).p("AsAkXIYBAAIAAIvI4BAAg");
	this.shape_16.setTransform(120.6,36.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002051").s().p("AsAEYIAAovIYBAAIAAIvg");
	this.shape_17.setTransform(120.6,36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#002051").ss(1,1,1).p("Ar6kXIX1AAIAAIvI31AAg");
	this.shape_18.setTransform(121.3,36.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002051").s().p("Ar6EYIAAovIX1AAIAAIvg");
	this.shape_19.setTransform(121.3,36.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#002051").ss(1,1,1).p("Ar0kXIXpAAIAAIvI3pAAg");
	this.shape_20.setTransform(122,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002051").s().p("Ar0EYIAAovIXpAAIAAIvg");
	this.shape_21.setTransform(122,36.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#002051").ss(1,1,1).p("ArukXIXdAAIAAIvI3dAAg");
	this.shape_22.setTransform(122.7,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002051").s().p("AruEYIAAovIXdAAIAAIvg");
	this.shape_23.setTransform(122.7,36.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#002051").ss(1,1,1).p("ArokWIXRAAIAAIuI3RAAg");
	this.shape_24.setTransform(123.3,36.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002051").s().p("AroEYIAAovIXRAAIAAIvg");
	this.shape_25.setTransform(123.3,36.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#002051").ss(1,1,1).p("ArikXIXFAAIAAIvI3FAAg");
	this.shape_26.setTransform(124,36.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#002051").s().p("AriEYIAAovIXFAAIAAIvg");
	this.shape_27.setTransform(124,36.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#002051").ss(1,1,1).p("ArckXIW5AAIAAIvI25AAg");
	this.shape_28.setTransform(124.7,36.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#002051").s().p("ArcEXIAAotIW5AAIAAItg");
	this.shape_29.setTransform(124.7,36.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#002051").ss(1,1,1).p("ArXkXIWvAAIAAIvI2vAAg");
	this.shape_30.setTransform(125.4,36.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#002051").s().p("ArWEXIAAotIWuAAIAAItg");
	this.shape_31.setTransform(125.4,36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#002051").ss(1,1,1).p("ArRkWIWiAAIAAItI2iAAg");
	this.shape_32.setTransform(126,36.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#002051").s().p("ArQEXIAAotIWhAAIAAItg");
	this.shape_33.setTransform(126,36.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#002051").ss(1,1,1).p("ArLkXIWXAAIAAIvI2XAAg");
	this.shape_34.setTransform(126.7,37);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#002051").s().p("ArLEYIAAovIWXAAIAAIvg");
	this.shape_35.setTransform(126.7,37);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#002051").ss(1,1,1).p("ArFkWIWLAAIAAItI2LAAg");
	this.shape_36.setTransform(127.4,37);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#002051").s().p("ArFEXIAAotIWLAAIAAItg");
	this.shape_37.setTransform(127.4,37);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#002051").ss(1,1,1).p("Aq/kWIV/AAIAAItI1/AAg");
	this.shape_38.setTransform(128,37);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#002051").s().p("Aq/EXIAAotIV/AAIAAItg");
	this.shape_39.setTransform(128,37);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#002051").ss(1,1,1).p("Aq5kWIVzAAIAAItI1zAAg");
	this.shape_40.setTransform(128.7,37);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#002051").s().p("Aq5EXIAAotIVzAAIAAItg");
	this.shape_41.setTransform(128.7,37);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#002051").ss(1,1,1).p("AqzkWIVnAAIAAItI1nAAg");
	this.shape_42.setTransform(129.4,37.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#002051").s().p("AqzEXIAAotIVnAAIAAItg");
	this.shape_43.setTransform(129.4,37.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#002051").ss(1,1,1).p("AqtkWIVbAAIAAItI1bAAg");
	this.shape_44.setTransform(130,37.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#002051").s().p("AqtEXIAAotIVbAAIAAItg");
	this.shape_45.setTransform(130,37.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#002051").ss(1,1,1).p("AqokWIVRAAIAAItI1RAAg");
	this.shape_46.setTransform(130.7,37.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#002051").s().p("AqnEXIAAotIVQAAIAAItg");
	this.shape_47.setTransform(130.7,37.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#002051").ss(1,1,1).p("AqikWIVFAAIAAItI1FAAg");
	this.shape_48.setTransform(131.4,37.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#002051").s().p("AqhEXIAAotIVDAAIAAItg");
	this.shape_49.setTransform(131.4,37.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#002051").ss(1,1,1).p("AqckWIU4AAIAAItI04AAg");
	this.shape_50.setTransform(132.1,37.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#002051").s().p("AqbEXIAAotIU4AAIAAItg");
	this.shape_51.setTransform(132.1,37.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#002051").ss(1,1,1).p("AqWkWIUtAAIAAItI0tAAg");
	this.shape_52.setTransform(132.7,37.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#002051").s().p("AqWEXIAAosIUtAAIAAIsg");
	this.shape_53.setTransform(132.7,37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#002051").ss(1,1,1).p("AqQkWIUhAAIAAItI0hAAg");
	this.shape_54.setTransform(133.4,37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#002051").s().p("AqQEXIAAotIUhAAIAAItg");
	this.shape_55.setTransform(133.4,37.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#002051").ss(1,1,1).p("AqKkVIUVAAIAAIsI0VAAg");
	this.shape_56.setTransform(134.1,37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#002051").s().p("AqKEWIAAosIUVAAIAAIsg");
	this.shape_57.setTransform(134.1,37.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#002051").ss(1,1,1).p("AqEkVIUJAAIAAIrI0JAAg");
	this.shape_58.setTransform(134.8,37.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#002051").s().p("AqEEWIAAorIUJAAIAAIrg");
	this.shape_59.setTransform(134.8,37.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#002051").ss(1,1,1).p("Ap+kWIT9AAIAAItIz9AAg");
	this.shape_60.setTransform(135.4,37.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#002051").s().p("Ap+EXIAAosIT9AAIAAIsg");
	this.shape_61.setTransform(135.4,37.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#002051").ss(1,1,1).p("Ap4kVITxAAIAAIrIzxAAg");
	this.shape_62.setTransform(136.1,37.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#002051").s().p("Ap4EWIAAorITxAAIAAIrg");
	this.shape_63.setTransform(136.1,37.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#002051").ss(1,1,1).p("ApzkVITnAAIAAIrIznAAg");
	this.shape_64.setTransform(136.8,37.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#002051").s().p("ApyEWIAAorITlAAIAAIrg");
	this.shape_65.setTransform(136.8,37.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#002051").ss(1,1,1).p("AptkVITbAAIAAIrIzbAAg");
	this.shape_66.setTransform(137.4,37.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#002051").s().p("AptEWIAAorITbAAIAAIrg");
	this.shape_67.setTransform(137.4,37.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#002051").ss(1,1,1).p("ApnkVITPAAIAAIrIzPAAg");
	this.shape_68.setTransform(138.1,37.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#002051").s().p("ApnEWIAAorITPAAIAAIrg");
	this.shape_69.setTransform(138.1,37.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#002051").ss(1,1,1).p("AphkVITDAAIAAIrIzDAAg");
	this.shape_70.setTransform(138.8,37.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#002051").s().p("AphEWIAAorITDAAIAAIrg");
	this.shape_71.setTransform(138.8,37.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#002051").ss(1,1,1).p("ApbkVIS3AAIAAIrIy3AAg");
	this.shape_72.setTransform(139.5,37.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#002051").s().p("ApbEWIAAorIS3AAIAAIrg");
	this.shape_73.setTransform(139.5,37.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#002051").ss(1,1,1).p("ApVkVISrAAIAAIrIyrAAg");
	this.shape_74.setTransform(140.1,37.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#002051").s().p("ApVEWIAAorISrAAIAAIrg");
	this.shape_75.setTransform(140.1,37.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#002051").ss(1,1,1).p("ApPkVISfAAIAAIrIyfAAg");
	this.shape_76.setTransform(140.8,37.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#002051").s().p("ApPEWIAAorISfAAIAAIrg");
	this.shape_77.setTransform(140.8,37.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#002051").ss(1,1,1).p("ApJkVISTAAIAAIrIyTAAg");
	this.shape_78.setTransform(141.5,37.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#002051").s().p("ApJEWIAAorISTAAIAAIrg");
	this.shape_79.setTransform(141.5,37.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#002051").ss(1,1,1).p("ApEkVISJAAIAAIrIyJAAg");
	this.shape_80.setTransform(142.2,37.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#002051").s().p("ApDEWIAAorISIAAIAAIrg");
	this.shape_81.setTransform(142.2,37.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#002051").ss(1,1,1).p("Ao+kVIR9AAIAAIrIx9AAg");
	this.shape_82.setTransform(142.8,37.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#002051").s().p("Ao9EWIAAoqIR8AAIAAIqg");
	this.shape_83.setTransform(142.8,37.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#002051").ss(1,1,1).p("Ao4kVIRxAAIAAIrIxxAAg");
	this.shape_84.setTransform(143.5,37.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#002051").s().p("Ao4EWIAAoqIRxAAIAAIqg");
	this.shape_85.setTransform(143.5,37.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#002051").ss(1,1,1).p("AoykUIRlAAIAAIpIxlAAg");
	this.shape_86.setTransform(144.2,37.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#002051").s().p("AoyEVIAAopIRlAAIAAIpg");
	this.shape_87.setTransform(144.2,37.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#002051").ss(1,1,1).p("AoskVIRZAAIAAIrIxZAAg");
	this.shape_88.setTransform(144.8,37.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#002051").s().p("AosEVIAAoqIRZAAIAAIqg");
	this.shape_89.setTransform(144.8,37.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#002051").ss(1,1,1).p("AomkUIRNAAIAAIpIxNAAg");
	this.shape_90.setTransform(145.5,37.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#002051").s().p("AomEVIAAopIRNAAIAAIpg");
	this.shape_91.setTransform(145.5,37.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#002051").ss(1,1,1).p("AogkUIRBAAIAAIpIxBAAg");
	this.shape_92.setTransform(146.2,37.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#002051").s().p("AogEVIAAopIRBAAIAAIpg");
	this.shape_93.setTransform(146.2,37.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#002051").ss(1,1,1).p("AoakUIQ1AAIAAIpIw1AAg");
	this.shape_94.setTransform(146.8,37.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#002051").s().p("AoaEVIAAopIQ1AAIAAIpg");
	this.shape_95.setTransform(146.8,37.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#002051").ss(1,1,1).p("AoVkUIQrAAIAAIpIwrAAg");
	this.shape_96.setTransform(147.5,37.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#002051").s().p("AoUEVIAAopIQpAAIAAIpg");
	this.shape_97.setTransform(147.5,37.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#002051").ss(1,1,1).p("AoOkUIQeAAIAAIpIweAAg");
	this.shape_98.setTransform(148.2,37.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#002051").s().p("AoOEVIAAopIQdAAIAAIpg");
	this.shape_99.setTransform(148.2,37.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#002051").ss(1,1,1).p("AoJkUIQSAAIAAIpIwSAAg");
	this.shape_100.setTransform(148.9,37.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#002051").s().p("AoIEVIAAopIQSAAIAAIpg");
	this.shape_101.setTransform(148.9,37.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#002051").ss(1,1,1).p("AoDkUIQHAAIAAIpIwHAAg");
	this.shape_102.setTransform(149.5,37.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#002051").s().p("AoDEVIAAopIQHAAIAAIpg");
	this.shape_103.setTransform(149.5,37.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#002051").ss(1,1,1).p("An9kUIP7AAIAAIpIv7AAg");
	this.shape_104.setTransform(150.2,37.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#002051").s().p("An9EVIAAopIP7AAIAAIpg");
	this.shape_105.setTransform(150.2,37.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#002051").ss(1,1,1).p("An3kUIPvAAIAAIpIvvAAg");
	this.shape_106.setTransform(150.9,37.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#002051").s().p("An3EUIAAonIPvAAIAAIng");
	this.shape_107.setTransform(150.9,37.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#002051").ss(1,1,1).p("AnxkUIPjAAIAAIpIvjAAg");
	this.shape_108.setTransform(151.6,37.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#002051").s().p("AnxEVIAAopIPjAAIAAIpg");
	this.shape_109.setTransform(151.6,37.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#002051").ss(1,1,1).p("AnrkTIPXAAIAAIoIvXAAg");
	this.shape_110.setTransform(152.2,37.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#002051").s().p("AnrEVIAAopIPXAAIAAIpg");
	this.shape_111.setTransform(152.2,37.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#002051").ss(1,1,1).p("AnlkTIPLAAIAAInIvLAAg");
	this.shape_112.setTransform(152.9,37.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#002051").s().p("AnlEUIAAonIPLAAIAAIng");
	this.shape_113.setTransform(152.9,37.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#002051").ss(1,1,1).p("AngkUIPAAAIAAIoIvAAAg");
	this.shape_114.setTransform(153.6,37.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#002051").s().p("AnfEUIAAonIPAAAIAAIng");
	this.shape_115.setTransform(153.6,37.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#002051").ss(1,1,1).p("AnakTIO1AAIAAInIu1AAg");
	this.shape_116.setTransform(154.2,37.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#002051").s().p("AnaEUIAAonIO1AAIAAIng");
	this.shape_117.setTransform(154.2,37.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#002051").ss(1,1,1).p("AnUkTIOpAAIAAInIupAAg");
	this.shape_118.setTransform(154.9,37.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#002051").s().p("AnUEUIAAonIOpAAIAAIng");
	this.shape_119.setTransform(154.9,37.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#002051").ss(1,1,1).p("AnOkTIOdAAIAAInIudAAg");
	this.shape_120.setTransform(155.6,37.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#002051").s().p("AnOEUIAAonIOdAAIAAIng");
	this.shape_121.setTransform(155.6,37.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#002051").ss(1,1,1).p("AnIkTIORAAIAAInIuRAAg");
	this.shape_122.setTransform(156.3,38);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#002051").s().p("AnIEUIAAonIORAAIAAIng");
	this.shape_123.setTransform(156.3,38);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#002051").ss(1,1,1).p("AnCkTIOFAAIAAInIuFAAg");
	this.shape_124.setTransform(156.9,38);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#002051").s().p("AnCEUIAAonIOFAAIAAIng");
	this.shape_125.setTransform(156.9,38);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#002051").ss(1,1,1).p("Am8kTIN5AAIAAInIt5AAg");
	this.shape_126.setTransform(157.6,38);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#002051").s().p("Am8EUIAAonIN5AAIAAIng");
	this.shape_127.setTransform(157.6,38);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#002051").ss(1,1,1).p("Am2kTINtAAIAAInIttAAg");
	this.shape_128.setTransform(158.3,38);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#002051").s().p("Am2EUIAAonINtAAIAAIng");
	this.shape_129.setTransform(158.3,38);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#002051").ss(1,1,1).p("AmwkTINiAAIAAInItiAAg");
	this.shape_130.setTransform(159,38);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#002051").s().p("AmwEUIAAonINhAAIAAIng");
	this.shape_131.setTransform(159,38);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#002051").ss(1,1,1).p("AmrkTINXAAIAAInItXAAg");
	this.shape_132.setTransform(159.6,38.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#002051").s().p("AmqETIAAomINWAAIAAImg");
	this.shape_133.setTransform(159.6,38.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#002051").ss(1,1,1).p("AmlkTINLAAIAAInItLAAg");
	this.shape_134.setTransform(160.3,38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#002051").s().p("AmlEUIAAonINLAAIAAIng");
	this.shape_135.setTransform(160.3,38.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#002051").ss(1,1,1).p("AmfkTIM/AAIAAInIs/AAg");
	this.shape_136.setTransform(161,38.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#002051").s().p("AmfETIAAolIM/AAIAAIlg");
	this.shape_137.setTransform(161,38.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#002051").ss(1,1,1).p("AmZkTIMzAAIAAInIszAAg");
	this.shape_138.setTransform(161.6,38.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#002051").s().p("AmZETIAAolIMzAAIAAIlg");
	this.shape_139.setTransform(161.6,38.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#002051").ss(1,1,1).p("AmTkSIMnAAIAAIlIsnAAg");
	this.shape_140.setTransform(162.3,38.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#002051").s().p("AmTETIAAolIMnAAIAAIlg");
	this.shape_141.setTransform(162.3,38.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#002051").ss(1,1,1).p("AmNkTIMbAAIAAInIsbAAg");
	this.shape_142.setTransform(163,38.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#002051").s().p("AmNEUIAAonIMbAAIAAIng");
	this.shape_143.setTransform(163,38.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#002051").ss(1,1,1).p("AmHkSIMPAAIAAIlIsPAAg");
	this.shape_144.setTransform(163.6,38.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#002051").s().p("AmHETIAAolIMPAAIAAIlg");
	this.shape_145.setTransform(163.6,38.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#002051").ss(1,1,1).p("AmCkSIMEAAIAAIlIsEAAg");
	this.shape_146.setTransform(164.3,38.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#002051").s().p("AmBETIAAolIMEAAIAAIlg");
	this.shape_147.setTransform(164.3,38.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#002051").ss(1,1,1).p("Al7kSIL3AAIAAIlIr3AAg");
	this.shape_148.setTransform(165,38.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#002051").s().p("Al7ETIAAolIL4AAIAAIlg");
	this.shape_149.setTransform(165,38.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#002051").ss(1,1,1).p("Al2kSILtAAIAAIlIrtAAg");
	this.shape_150.setTransform(165.7,38.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#002051").s().p("Al1ETIAAolILrAAIAAIlg");
	this.shape_151.setTransform(165.7,38.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#002051").ss(1,1,1).p("AlwkSILhAAIAAIlIrhAAg");
	this.shape_152.setTransform(166.3,38.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#002051").s().p("AlwETIAAolILhAAIAAIlg");
	this.shape_153.setTransform(166.3,38.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#002051").ss(1,1,1).p("AlqkSILVAAIAAIlIrVAAg");
	this.shape_154.setTransform(167,38.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#002051").s().p("AlqETIAAolILVAAIAAIlg");
	this.shape_155.setTransform(167,38.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#002051").ss(1,1,1).p("AlkkSILJAAIAAIlIrJAAg");
	this.shape_156.setTransform(167.7,38.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#002051").s().p("AlkETIAAolILJAAIAAIlg");
	this.shape_157.setTransform(167.7,38.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#002051").ss(1,1,1).p("AlekSIK9AAIAAIlIq9AAg");
	this.shape_158.setTransform(168.4,38.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#002051").s().p("AleETIAAolIK9AAIAAIlg");
	this.shape_159.setTransform(168.4,38.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#002051").ss(1,1,1).p("AlYkRIKxAAIAAIkIqxAAg");
	this.shape_160.setTransform(169,38.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#002051").s().p("AlYETIAAokIKxAAIAAIkg");
	this.shape_161.setTransform(169,38.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#002051").ss(1,1,1).p("AlTkSIKnAAIAAIlIqnAAg");
	this.shape_162.setTransform(169.7,38.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#002051").s().p("AlSETIAAolIKlAAIAAIlg");
	this.shape_163.setTransform(169.7,38.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#002051").ss(1,1,1).p("AlNkSIKbAAIAAIlIqbAAg");
	this.shape_164.setTransform(170.4,38.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#002051").s().p("AlMESIAAokIKaAAIAAIkg");
	this.shape_165.setTransform(170.4,38.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#002051").ss(1,1,1).p("AlHkRIKPAAIAAIjIqPAAg");
	this.shape_166.setTransform(171,38.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#002051").s().p("AlHESIAAojIKPAAIAAIjg");
	this.shape_167.setTransform(171,38.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#002051").ss(1,1,1).p("AlBkSIKDAAIAAIlIqDAAg");
	this.shape_168.setTransform(171.7,38.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#002051").s().p("AlBETIAAokIKDAAIAAIkg");
	this.shape_169.setTransform(171.7,38.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#002051").ss(1,1,1).p("Ak7kRIJ3AAIAAIjIp3AAg");
	this.shape_170.setTransform(172.4,38.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#002051").s().p("Ak7ESIAAojIJ3AAIAAIjg");
	this.shape_171.setTransform(172.4,38.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#002051").ss(1,1,1).p("Ak1kRIJrAAIAAIjIprAAg");
	this.shape_172.setTransform(173.1,38.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#002051").s().p("Ak1ESIAAojIJrAAIAAIjg");
	this.shape_173.setTransform(173.1,38.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#002051").ss(1,1,1).p("AkvkRIJfAAIAAIjIpfAAg");
	this.shape_174.setTransform(173.7,38.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#002051").s().p("AkvESIAAojIJfAAIAAIjg");
	this.shape_175.setTransform(173.7,38.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#002051").ss(1,1,1).p("AkpkRIJTAAIAAIjIpTAAg");
	this.shape_176.setTransform(174.4,38.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#002051").s().p("AkpESIAAojIJTAAIAAIjg");
	this.shape_177.setTransform(174.4,38.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#002051").ss(1,1,1).p("AkjkRIJHAAIAAIjIpHAAg");
	this.shape_178.setTransform(175.1,38.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#002051").s().p("AkjESIAAojIJHAAIAAIjg");
	this.shape_179.setTransform(175.1,38.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#002051").ss(1,1,1).p("AkdkRII7AAIAAIjIo7AAg");
	this.shape_180.setTransform(175.8,38.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#002051").s().p("AkdESIAAojII8AAIAAIjg");
	this.shape_181.setTransform(175.8,38.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#002051").ss(1,1,1).p("AkXkRIIvAAIAAIjIovAAg");
	this.shape_182.setTransform(176.4,38.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#002051").s().p("AkXESIAAojIIvAAIAAIjg");
	this.shape_183.setTransform(176.4,38.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#002051").ss(1,1,1).p("AkSkRIIlAAIAAIjIolAAg");
	this.shape_184.setTransform(177.1,38.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#002051").s().p("AkSESIAAojIIlAAIAAIjg");
	this.shape_185.setTransform(177.1,38.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#002051").ss(1,1,1).p("AkMkRIIZAAIAAIjIoZAAg");
	this.shape_186.setTransform(177.8,38.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#002051").s().p("AkMESIAAojIIZAAIAAIjg");
	this.shape_187.setTransform(177.8,38.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#002051").ss(1,1,1).p("AkGkRIINAAIAAIjIoNAAg");
	this.shape_188.setTransform(178.4,38.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#002051").s().p("AkGESIAAojIINAAIAAIjg");
	this.shape_189.setTransform(178.4,38.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#002051").ss(1,1,1).p("AkAkQIIBAAIAAIiIoBAAg");
	this.shape_190.setTransform(179.1,38.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#002051").s().p("AkAERIAAohIIBAAIAAIhg");
	this.shape_191.setTransform(179.1,38.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#002051").ss(1,1,1).p("Aj6kQIH1AAIAAIiIn1AAg");
	this.shape_192.setTransform(179.8,38.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#002051").s().p("Aj6ERIAAohIH1AAIAAIhg");
	this.shape_193.setTransform(179.8,38.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#002051").ss(1,1,1).p("Aj0kQIHpAAIAAIhInpAAg");
	this.shape_194.setTransform(180.4,38.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#002051").s().p("Aj0ERIAAohIHpAAIAAIhg");
	this.shape_195.setTransform(180.4,38.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#002051").ss(1,1,1).p("AjvkRIHfAAIAAIjInfAAg");
	this.shape_196.setTransform(181.1,38.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#002051").s().p("AjuESIAAojIHeAAIAAIjg");
	this.shape_197.setTransform(181.1,38.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#002051").ss(1,1,1).p("AjpkQIHSAAIAAIhInSAAg");
	this.shape_198.setTransform(181.8,38.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#002051").s().p("AjpERIAAohIHSAAIAAIhg");
	this.shape_199.setTransform(181.8,38.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#002051").ss(1,1,1).p("AjikQIHGAAIAAIhInGAAg");
	this.shape_200.setTransform(182.5,38.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#002051").s().p("AjiERIAAohIHGAAIAAIhg");
	this.shape_201.setTransform(182.5,38.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#002051").ss(1,1,1).p("AjdkQIG7AAIAAIhIm7AAg");
	this.shape_202.setTransform(183.1,38.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#002051").s().p("AjdERIAAohIG7AAIAAIhg");
	this.shape_203.setTransform(183.1,38.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#002051").ss(1,1,1).p("AjXkQIGvAAIAAIhImvAAg");
	this.shape_204.setTransform(183.8,38.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#002051").s().p("AjXERIAAohIGvAAIAAIhg");
	this.shape_205.setTransform(183.8,38.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#002051").ss(1,1,1).p("AjRkQIGjAAIAAIhImjAAg");
	this.shape_206.setTransform(184.5,38.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#002051").s().p("AjRERIAAohIGjAAIAAIhg");
	this.shape_207.setTransform(184.5,38.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#002051").ss(1,1,1).p("AjLkQIGXAAIAAIhImXAAg");
	this.shape_208.setTransform(185.2,38.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#002051").s().p("AjLERIAAohIGXAAIAAIhg");
	this.shape_209.setTransform(185.2,38.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#002051").ss(1,1,1).p("AjFkQIGLAAIAAIhImLAAg");
	this.shape_210.setTransform(185.8,38.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#002051").s().p("AjFERIAAohIGLAAIAAIhg");
	this.shape_211.setTransform(185.8,38.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#002051").ss(1,1,1).p("AjAkQIGBAAIAAIhImBAAg");
	this.shape_212.setTransform(186.5,38.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#002051").s().p("Ai/ERIAAohIGAAAIAAIhg");
	this.shape_213.setTransform(186.5,38.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#002051").ss(1,1,1).p("Ai5kQIF0AAIAAIhIl0AAg");
	this.shape_214.setTransform(187.2,39);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#002051").s().p("Ai5EQIAAogIFzAAIAAIgg");
	this.shape_215.setTransform(187.2,39);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#002051").ss(1,1,1).p("Ai0kQIFpAAIAAIhIlpAAg");
	this.shape_216.setTransform(187.8,39);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#002051").s().p("Ai0ERIAAohIFpAAIAAIhg");
	this.shape_217.setTransform(187.8,39);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#002051").ss(1,1,1).p("AiukQIFdAAIAAIhIldAAg");
	this.shape_218.setTransform(188.5,39);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#002051").s().p("AiuERIAAohIFdAAIAAIhg");
	this.shape_219.setTransform(188.5,39);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#002051").ss(1,1,1).p("AiokPIFRAAIAAIfIlRAAg");
	this.shape_220.setTransform(189.2,39);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#002051").s().p("AioEQIAAofIFRAAIAAIfg");
	this.shape_221.setTransform(189.2,39);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#002051").ss(1,1,1).p("AiikQIFFAAIAAIhIlFAAg");
	this.shape_222.setTransform(189.9,39.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#002051").s().p("AiiEQIAAofIFFAAIAAIfg");
	this.shape_223.setTransform(189.9,39.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#002051").ss(1,1,1).p("AickPIE5AAIAAIfIk5AAg");
	this.shape_224.setTransform(190.5,39.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#002051").s().p("AicEQIAAofIE5AAIAAIfg");
	this.shape_225.setTransform(190.5,39.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#002051").ss(1,1,1).p("AiWkPIEtAAIAAIfIktAAg");
	this.shape_226.setTransform(191.2,39.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#002051").s().p("AiWEQIAAofIEtAAIAAIfg");
	this.shape_227.setTransform(191.2,39.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#002051").ss(1,1,1).p("AiQkPIEhAAIAAIfIkhAAg");
	this.shape_228.setTransform(191.9,39.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#002051").s().p("AiQEQIAAofIEhAAIAAIfg");
	this.shape_229.setTransform(191.9,39.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#002051").ss(1,1,1).p("AiLkPIEXAAIAAIfIkXAAg");
	this.shape_230.setTransform(192.6,39.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#002051").s().p("AiKEQIAAofIEWAAIAAIfg");
	this.shape_231.setTransform(192.6,39.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#002051").ss(1,1,1).p("AiEkPIEKAAIAAIfIkKAAg");
	this.shape_232.setTransform(193.2,39.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#002051").s().p("AiEEQIAAofIEKAAIAAIfg");
	this.shape_233.setTransform(193.2,39.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#002051").ss(1,1,1).p("Ah/kPID/AAIAAIfIj/AAg");
	this.shape_234.setTransform(193.9,39.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#002051").s().p("Ah/EQIAAofID/AAIAAIfg");
	this.shape_235.setTransform(193.9,39.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#002051").ss(1,1,1).p("Ah5kPIDzAAIAAIfIjzAAg");
	this.shape_236.setTransform(194.6,39.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#002051").s().p("Ah5EQIAAofIDzAAIAAIfg");
	this.shape_237.setTransform(194.6,39.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#002051").ss(1,1,1).p("AhzkPIDnAAIAAIfIjnAAg");
	this.shape_238.setTransform(195.2,39.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#002051").s().p("AhzEQIAAofIDnAAIAAIfg");
	this.shape_239.setTransform(195.2,39.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#002051").ss(1,1,1).p("AhtkPIDbAAIAAIfIjbAAg");
	this.shape_240.setTransform(195.9,39.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#002051").s().p("AhtEPIAAodIDbAAIAAIdg");
	this.shape_241.setTransform(195.9,39.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#002051").ss(1,1,1).p("AhnkPIDPAAIAAIfIjPAAg");
	this.shape_242.setTransform(196.6,39.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#002051").s().p("AhnEQIAAofIDPAAIAAIfg");
	this.shape_243.setTransform(196.6,39.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#002051").ss(1,1,1).p("AhhkOIDDAAIAAIeIjDAAg");
	this.shape_244.setTransform(197.2,39.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#002051").s().p("AhhEQIAAofIDDAAIAAIfg");
	this.shape_245.setTransform(197.2,39.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#002051").ss(1,1,1).p("AhbkOIC4AAIAAIeIi4AAg");
	this.shape_246.setTransform(197.9,39.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#002051").s().p("AhbEQIAAofIC3AAIAAIfg");
	this.shape_247.setTransform(197.9,39.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#002051").ss(1,1,1).p("AhWkOICsAAIAAIdIisAAg");
	this.shape_248.setTransform(198.6,39.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#002051").s().p("AhWEPIAAodICsAAIAAIdg");
	this.shape_249.setTransform(198.6,39.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#002051").ss(1,1,1).p("AhQkPIChAAIAAIeIihAAg");
	this.shape_250.setTransform(199.3,39.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#002051").s().p("AhQEPIAAoeIChAAIAAIeg");
	this.shape_251.setTransform(199.3,39.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#002051").ss(1,1,1).p("AhKkOICVAAIAAIdIiVAAg");
	this.shape_252.setTransform(199.9,39.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#002051").s().p("AhKEPIAAodICVAAIAAIdg");
	this.shape_253.setTransform(199.9,39.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#002051").ss(1,1,1).p("AhEkOICJAAIAAIdIiJAAg");
	this.shape_254.setTransform(200.6,39.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#002051").s().p("AhEEPIAAodICJAAIAAIdg");
	this.shape_255.setTransform(200.6,39.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#002051").ss(1,1,1).p("Ag+kOIB9AAIAAIdIh9AAg");
	this.shape_256.setTransform(201.3,39.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#002051").s().p("Ag+EPIAAodIB9AAIAAIdg");
	this.shape_257.setTransform(201.3,39.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#002051").ss(1,1,1).p("Ag4kOIBxAAIAAIdIhxAAg");
	this.shape_258.setTransform(202,39.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#002051").s().p("Ag4EPIAAodIBxAAIAAIdg");
	this.shape_259.setTransform(202,39.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#002051").ss(1,1,1).p("AgykOIBlAAIAAIdIhlAAg");
	this.shape_260.setTransform(202.6,39.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#002051").s().p("AgyEPIAAodIBlAAIAAIdg");
	this.shape_261.setTransform(202.6,39.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#002051").ss(1,1,1).p("AgtkOIBaAAIAAIdIhaAAg");
	this.shape_262.setTransform(203.3,39.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#002051").s().p("AgsEPIAAodIBZAAIAAIdg");
	this.shape_263.setTransform(203.3,39.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#002051").ss(1,1,1).p("AgnkOIBPAAIAAIdIhPAAg");
	this.shape_264.setTransform(204,39.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#002051").s().p("AgmEPIAAodIBOAAIAAIdg");
	this.shape_265.setTransform(204,39.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#002051").ss(1,1,1).p("AghkOIBDAAIAAIdIhDAAg");
	this.shape_266.setTransform(204.6,39.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#002051").s().p("AghEPIAAodIBDAAIAAIdg");
	this.shape_267.setTransform(204.6,39.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#002051").ss(1,1,1).p("AgbkOIA3AAIAAIdIg3AAg");
	this.shape_268.setTransform(205.3,39.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#002051").s().p("AgbEPIAAodIA3AAIAAIdg");
	this.shape_269.setTransform(205.3,39.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#002051").ss(1,1,1).p("AgVkOIArAAIAAIdIgrAAg");
	this.shape_270.setTransform(206,39.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#002051").s().p("AgVEPIAAodIArAAIAAIdg");
	this.shape_271.setTransform(206,39.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#002051").ss(1,1,1).p("AAQkOIgfAAIAAIdIAfAAg");
	this.shape_272.setTransform(206.7,39.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#002051").s().p("AgPEOIAAobIAfAAIAAIbg");
	this.shape_273.setTransform(206.7,39.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#002051").ss(1,1,1).p("AARkTIghAAIAAInIAhAAg");
	this.shape_274.setTransform(207.6,37.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#002051").s().p("AgQETIAAomIAhAAIAAImg");
	this.shape_275.setTransform(207.6,37.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#002051").ss(1,1,1).p("AgYkTIAxAAIAAInIgxAAg");
	this.shape_276.setTransform(207,37.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#002051").s().p("AgYETIAAomIAxAAIAAImg");
	this.shape_277.setTransform(207,37.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#002051").ss(1,1,1).p("AgfkTIA/AAIAAInIg/AAg");
	this.shape_278.setTransform(206.3,37);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#002051").s().p("AgfEUIAAonIA/AAIAAIng");
	this.shape_279.setTransform(206.3,37);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#002051").ss(1,1,1).p("AgnkTIBPAAIAAInIhPAAg");
	this.shape_280.setTransform(205.7,37.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#002051").s().p("AgnEUIAAonIBPAAIAAIng");
	this.shape_281.setTransform(205.7,37.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#002051").ss(1,1,1).p("AgukTIBdAAIAAInIhdAAg");
	this.shape_282.setTransform(205.1,37);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#002051").s().p("AguEUIAAonIBdAAIAAIng");
	this.shape_283.setTransform(205.1,37);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#002051").ss(1,1,1).p("Ag2kTIBtAAIAAInIhtAAg");
	this.shape_284.setTransform(204.5,37);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#002051").s().p("Ag2EUIAAonIBtAAIAAIng");
	this.shape_285.setTransform(204.5,37);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#002051").ss(1,1,1).p("Ag9kUIB7AAIAAIpIh7AAg");
	this.shape_286.setTransform(203.9,37);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#002051").s().p("Ag9EVIAAopIB7AAIAAIpg");
	this.shape_287.setTransform(203.9,37);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#002051").ss(1,1,1).p("AhFkUICLAAIAAIpIiLAAg");
	this.shape_288.setTransform(203.3,37);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#002051").s().p("AhEEVIAAopICJAAIAAIpg");
	this.shape_289.setTransform(203.3,37);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#002051").ss(1,1,1).p("AhMkUICZAAIAAIpIiZAAg");
	this.shape_290.setTransform(202.6,37);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#002051").s().p("AhMEVIAAopICZAAIAAIpg");
	this.shape_291.setTransform(202.6,37);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#002051").ss(1,1,1).p("AhUkUICpAAIAAIpIipAAg");
	this.shape_292.setTransform(202,37);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#002051").s().p("AhUEVIAAopICpAAIAAIpg");
	this.shape_293.setTransform(202,37);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#002051").ss(1,1,1).p("AhbkUIC3AAIAAIpIi3AAg");
	this.shape_294.setTransform(201.4,37);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#002051").s().p("AhbEVIAAopIC3AAIAAIpg");
	this.shape_295.setTransform(201.4,37);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#002051").ss(1,1,1).p("AhjkVIDHAAIAAIrIjHAAg");
	this.shape_296.setTransform(200.8,37);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#002051").s().p("AhiEVIAAoqIDFAAIAAIqg");
	this.shape_297.setTransform(200.8,37);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#002051").ss(1,1,1).p("AhqkVIDVAAIAAIrIjVAAg");
	this.shape_298.setTransform(200.2,37);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#002051").s().p("AhqEWIAAorIDVAAIAAIrg");
	this.shape_299.setTransform(200.2,37);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#002051").ss(1,1,1).p("AhykVIDlAAIAAIrIjlAAg");
	this.shape_300.setTransform(199.6,37);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#002051").s().p("AhyEWIAAorIDlAAIAAIrg");
	this.shape_301.setTransform(199.6,37);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#002051").ss(1,1,1).p("Ah5kVIDzAAIAAIrIjzAAg");
	this.shape_302.setTransform(199,37);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#002051").s().p("Ah5EWIAAorIDzAAIAAIrg");
	this.shape_303.setTransform(199,37);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#002051").ss(1,1,1).p("AiBkVIEDAAIAAIrIkDAAg");
	this.shape_304.setTransform(198.3,37);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#002051").s().p("AiAEWIAAorIECAAIAAIrg");
	this.shape_305.setTransform(198.3,37);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#002051").ss(1,1,1).p("AiIkVIERAAIAAIsIkRAAg");
	this.shape_306.setTransform(197.7,37);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#002051").s().p("AiIEXIAAosIERAAIAAIsg");
	this.shape_307.setTransform(197.7,37);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#002051").ss(1,1,1).p("AiQkVIEhAAIAAIsIkhAAg");
	this.shape_308.setTransform(197.1,37);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#002051").s().p("AiPEXIAAosIEfAAIAAIsg");
	this.shape_309.setTransform(197.1,37);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#002051").ss(1,1,1).p("AiXkWIEvAAIAAItIkvAAg");
	this.shape_310.setTransform(196.5,36.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#002051").s().p("AiXEXIAAotIEvAAIAAItg");
	this.shape_311.setTransform(196.5,36.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#002051").ss(1,1,1).p("AifkWIE/AAIAAItIk/AAg");
	this.shape_312.setTransform(195.9,37);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#002051").s().p("AifEXIAAotIE/AAIAAItg");
	this.shape_313.setTransform(195.9,37);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#002051").ss(1,1,1).p("AimkWIFNAAIAAItIlNAAg");
	this.shape_314.setTransform(195.3,36.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#002051").s().p("AimEXIAAotIFNAAIAAItg");
	this.shape_315.setTransform(195.3,36.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#002051").ss(1,1,1).p("AiukWIFdAAIAAItIldAAg");
	this.shape_316.setTransform(194.6,36.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#002051").s().p("AitEXIAAotIFcAAIAAItg");
	this.shape_317.setTransform(194.6,36.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#002051").ss(1,1,1).p("Ai1kXIFrAAIAAIvIlrAAg");
	this.shape_318.setTransform(194,36.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#002051").s().p("Ai1EXIAAotIFrAAIAAItg");
	this.shape_319.setTransform(194,36.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#002051").ss(1,1,1).p("Ai9kXIF7AAIAAIvIl7AAg");
	this.shape_320.setTransform(193.4,36.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#002051").s().p("Ai8EYIAAovIF5AAIAAIvg");
	this.shape_321.setTransform(193.4,36.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#002051").ss(1,1,1).p("AjEkXIGJAAIAAIvImJAAg");
	this.shape_322.setTransform(192.8,36.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#002051").s().p("AjEEYIAAovIGJAAIAAIvg");
	this.shape_323.setTransform(192.8,36.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#002051").ss(1,1,1).p("AjMkXIGZAAIAAIvImZAAg");
	this.shape_324.setTransform(192.2,36.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#002051").s().p("AjMEYIAAovIGZAAIAAIvg");
	this.shape_325.setTransform(192.2,36.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#002051").ss(1,1,1).p("AjTkXIGnAAIAAIvImnAAg");
	this.shape_326.setTransform(191.5,36.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#002051").s().p("AjTEYIAAovIGnAAIAAIvg");
	this.shape_327.setTransform(191.5,36.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#002051").ss(1,1,1).p("AjbkYIG3AAIAAIxIm3AAg");
	this.shape_328.setTransform(190.9,36.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#002051").s().p("AjaEYIAAovIG2AAIAAIvg");
	this.shape_329.setTransform(190.9,36.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#002051").ss(1,1,1).p("AjikYIHFAAIAAIxInFAAg");
	this.shape_330.setTransform(190.3,36.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#002051").s().p("AjiEZIAAoxIHFAAIAAIxg");
	this.shape_331.setTransform(190.3,36.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#002051").ss(1,1,1).p("AjpkYIHTAAIAAIxInTAAg");
	this.shape_332.setTransform(189.7,36.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#002051").s().p("AjpEZIAAoxIHTAAIAAIxg");
	this.shape_333.setTransform(189.7,36.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#002051").ss(1,1,1).p("AjxkYIHjAAIAAIxInjAAg");
	this.shape_334.setTransform(189.1,36.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#002051").s().p("AjxEZIAAoxIHjAAIAAIxg");
	this.shape_335.setTransform(189.1,36.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#002051").ss(1,1,1).p("Aj5kYIHzAAIAAIxInzAAg");
	this.shape_336.setTransform(188.5,36.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#002051").s().p("Aj5EZIAAoxIHzAAIAAIxg");
	this.shape_337.setTransform(188.5,36.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#002051").ss(1,1,1).p("AkAkZIIBAAIAAIyIoBAAg");
	this.shape_338.setTransform(187.8,36.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#002051").s().p("AkAEaIAAozIIBAAIAAIzg");
	this.shape_339.setTransform(187.8,36.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#002051").ss(1,1,1).p("AkHkZIIPAAIAAIyIoPAAg");
	this.shape_340.setTransform(187.2,36.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#002051").s().p("AkHEaIAAozIIPAAIAAIzg");
	this.shape_341.setTransform(187.2,36.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#002051").ss(1,1,1).p("AkPkZIIfAAIAAIzIofAAg");
	this.shape_342.setTransform(186.6,36.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#002051").s().p("AkPEaIAAozIIfAAIAAIzg");
	this.shape_343.setTransform(186.6,36.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#002051").ss(1,1,1).p("AkWkZIItAAIAAIzIotAAg");
	this.shape_344.setTransform(186,36.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#002051").s().p("AkWEaIAAozIItAAIAAIzg");
	this.shape_345.setTransform(186,36.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#002051").ss(1,1,1).p("AkekZII9AAIAAIzIo9AAg");
	this.shape_346.setTransform(185.4,36.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#002051").s().p("AkeEaIAAozII9AAIAAIzg");
	this.shape_347.setTransform(185.4,36.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#002051").ss(1,1,1).p("AklkZIJLAAIAAIzIpLAAg");
	this.shape_348.setTransform(184.7,36.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#002051").s().p("AklEaIAAozIJLAAIAAIzg");
	this.shape_349.setTransform(184.7,36.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#002051").ss(1,1,1).p("AktkaIJbAAIAAI1IpbAAg");
	this.shape_350.setTransform(184.1,36.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#002051").s().p("AktEaIAAo0IJbAAIAAI0g");
	this.shape_351.setTransform(184.1,36.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#002051").ss(1,1,1).p("Ak0kaIJpAAIAAI1IppAAg");
	this.shape_352.setTransform(183.5,36.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#002051").s().p("Ak0EbIAAo1IJpAAIAAI1g");
	this.shape_353.setTransform(183.5,36.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#002051").ss(1,1,1).p("Ak8kaIJ5AAIAAI1Ip5AAg");
	this.shape_354.setTransform(182.9,36.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#002051").s().p("Ak8EbIAAo1IJ5AAIAAI1g");
	this.shape_355.setTransform(182.9,36.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#002051").ss(1,1,1).p("AlDkaIKHAAIAAI1IqHAAg");
	this.shape_356.setTransform(182.3,36.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#002051").s().p("AlDEbIAAo1IKHAAIAAI1g");
	this.shape_357.setTransform(182.3,36.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#002051").ss(1,1,1).p("AlLkaIKXAAIAAI1IqXAAg");
	this.shape_358.setTransform(181.7,36.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#002051").s().p("AlLEbIAAo1IKXAAIAAI1g");
	this.shape_359.setTransform(181.7,36.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#002051").ss(1,1,1).p("AlSkbIKlAAIAAI3IqlAAg");
	this.shape_360.setTransform(181,36.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#002051").s().p("AlSEbIAAo2IKlAAIAAI2g");
	this.shape_361.setTransform(181,36.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#002051").ss(1,1,1).p("AlakbIK1AAIAAI3Iq1AAg");
	this.shape_362.setTransform(180.4,36.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#002051").s().p("AlaEcIAAo3IK1AAIAAI3g");
	this.shape_363.setTransform(180.4,36.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#002051").ss(1,1,1).p("AlhkbILDAAIAAI3IrDAAg");
	this.shape_364.setTransform(179.8,36.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#002051").s().p("AlhEcIAAo3ILDAAIAAI3g");
	this.shape_365.setTransform(179.8,36.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#002051").ss(1,1,1).p("AlpkbILTAAIAAI3IrTAAg");
	this.shape_366.setTransform(179.2,36.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#002051").s().p("AlpEcIAAo3ILTAAIAAI3g");
	this.shape_367.setTransform(179.2,36.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#002051").ss(1,1,1).p("AlwkbILhAAIAAI3IrhAAg");
	this.shape_368.setTransform(178.6,36.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#002051").s().p("AlwEcIAAo3ILhAAIAAI3g");
	this.shape_369.setTransform(178.6,36.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#002051").ss(1,1,1).p("Al3kbILwAAIAAI3IrwAAg");
	this.shape_370.setTransform(178,36.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#002051").s().p("Al4EcIAAo3ILwAAIAAI3g");
	this.shape_371.setTransform(178,36.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#002051").ss(1,1,1).p("Al/kcIL/AAIAAI5Ir/AAg");
	this.shape_372.setTransform(177.4,36.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#002051").s().p("Al/EdIAAo4IL/AAIAAI4g");
	this.shape_373.setTransform(177.4,36.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#002051").ss(1,1,1).p("AmHkcIMPAAIAAI5IsPAAg");
	this.shape_374.setTransform(176.7,36.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#002051").s().p("AmHEdIAAo4IMPAAIAAI4g");
	this.shape_375.setTransform(176.7,36.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#002051").ss(1,1,1).p("AmOkcIMdAAIAAI5IsdAAg");
	this.shape_376.setTransform(176.1,36.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#002051").s().p("AmOEdIAAo5IMdAAIAAI5g");
	this.shape_377.setTransform(176.1,36.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#002051").ss(1,1,1).p("AmVkcIMrAAIAAI5IsrAAg");
	this.shape_378.setTransform(175.5,36.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#002051").s().p("AmVEdIAAo5IMrAAIAAI5g");
	this.shape_379.setTransform(175.5,36.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#002051").ss(1,1,1).p("AmdkcIM7AAIAAI5Is7AAg");
	this.shape_380.setTransform(174.9,36.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#002051").s().p("AmdEdIAAo5IM7AAIAAI5g");
	this.shape_381.setTransform(174.9,36.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#002051").ss(1,1,1).p("AmkkcINJAAIAAI5ItJAAg");
	this.shape_382.setTransform(174.3,36.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#002051").s().p("AmlEdIAAo5INKAAIAAI5g");
	this.shape_383.setTransform(174.3,36.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#002051").ss(1,1,1).p("AmskdINZAAIAAI7ItZAAg");
	this.shape_384.setTransform(173.7,36.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#002051").s().p("AmsEeIAAo7INZAAIAAI7g");
	this.shape_385.setTransform(173.7,36.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#002051").ss(1,1,1).p("AmzkdINnAAIAAI7ItnAAg");
	this.shape_386.setTransform(173,36.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#002051").s().p("AmzEeIAAo7INoAAIAAI7g");
	this.shape_387.setTransform(173,36.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#002051").ss(1,1,1).p("Am7kdIN3AAIAAI7It3AAg");
	this.shape_388.setTransform(172.4,36.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#002051").s().p("Am7EeIAAo7IN3AAIAAI7g");
	this.shape_389.setTransform(172.4,36.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#002051").ss(1,1,1).p("AnDkdIOGAAIAAI7IuGAAg");
	this.shape_390.setTransform(171.8,36.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#002051").s().p("AnCEeIAAo7IOFAAIAAI7g");
	this.shape_391.setTransform(171.8,36.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#002051").ss(1,1,1).p("AnKkeIOVAAIAAI9IuVAAg");
	this.shape_392.setTransform(171.2,36.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#002051").s().p("AnKEfIAAo8IOVAAIAAI8g");
	this.shape_393.setTransform(171.2,36.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#002051").ss(1,1,1).p("AnSkeIOkAAIAAI9IukAAg");
	this.shape_394.setTransform(170.6,36.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#002051").s().p("AnSEfIAAo8IOlAAIAAI8g");
	this.shape_395.setTransform(170.6,36.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#002051").ss(1,1,1).p("AnZkeIOzAAIAAI9IuzAAg");
	this.shape_396.setTransform(170,36.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#002051").s().p("AnZEfIAAo9IOzAAIAAI9g");
	this.shape_397.setTransform(170,36.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#002051").ss(1,1,1).p("AnhkeIPCAAIAAI9IvCAAg");
	this.shape_398.setTransform(169.3,36.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#002051").s().p("AngEfIAAo9IPCAAIAAI9g");
	this.shape_399.setTransform(169.3,36.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#002051").ss(1,1,1).p("AnokeIPRAAIAAI9IvRAAg");
	this.shape_400.setTransform(168.7,36.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#002051").s().p("AnoEfIAAo9IPRAAIAAI9g");
	this.shape_401.setTransform(168.7,36.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#002051").ss(1,1,1).p("AnvkeIPfAAIAAI9IvfAAg");
	this.shape_402.setTransform(168.1,36.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#002051").s().p("AnvEfIAAo9IPfAAIAAI9g");
	this.shape_403.setTransform(168.1,36.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#002051").ss(1,1,1).p("An3kfIPvAAIAAI/IvvAAg");
	this.shape_404.setTransform(167.5,36.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#002051").s().p("An3EfIAAo+IPvAAIAAI+g");
	this.shape_405.setTransform(167.5,36.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#002051").ss(1,1,1).p("An/kfIP+AAIAAI/Iv+AAg");
	this.shape_406.setTransform(166.9,36.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#002051").s().p("An+EfIAAo+IP+AAIAAI+g");
	this.shape_407.setTransform(166.9,36.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#002051").ss(1,1,1).p("AoGkfIQNAAIAAI/IwNAAg");
	this.shape_408.setTransform(166.2,36.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#002051").s().p("AoGEgIAAo/IQNAAIAAI/g");
	this.shape_409.setTransform(166.2,36.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#002051").ss(1,1,1).p("AoNkfIQbAAIAAI/IwbAAg");
	this.shape_410.setTransform(165.6,36.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#002051").s().p("AoNEgIAAo/IQbAAIAAI/g");
	this.shape_411.setTransform(165.6,36.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#002051").ss(1,1,1).p("AoVkfIQrAAIAAI/IwrAAg");
	this.shape_412.setTransform(165,36.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#002051").s().p("AoVEgIAAo/IQrAAIAAI/g");
	this.shape_413.setTransform(165,36.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#002051").ss(1,1,1).p("AockfIQ5AAIAAI/Iw5AAg");
	this.shape_414.setTransform(164.4,36.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#002051").s().p("AocEgIAAo/IQ5AAIAAI/g");
	this.shape_415.setTransform(164.4,36.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#002051").ss(1,1,1).p("AokkgIRJAAIAAJBIxJAAg");
	this.shape_416.setTransform(163.8,36.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#002051").s().p("AokEhIAApBIRJAAIAAJBg");
	this.shape_417.setTransform(163.8,36.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#002051").ss(1,1,1).p("AorkgIRXAAIAAJBIxXAAg");
	this.shape_418.setTransform(163.1,36.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#002051").s().p("AorEhIAApBIRXAAIAAJBg");
	this.shape_419.setTransform(163.1,36.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#002051").ss(1,1,1).p("AozkgIRnAAIAAJBIxnAAg");
	this.shape_420.setTransform(162.5,36.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#002051").s().p("AozEhIAApBIRnAAIAAJBg");
	this.shape_421.setTransform(162.5,36.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#002051").ss(1,1,1).p("Ao6kgIR1AAIAAJBIx1AAg");
	this.shape_422.setTransform(161.9,36.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#002051").s().p("Ao6EhIAApBIR1AAIAAJBg");
	this.shape_423.setTransform(161.9,36.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#002051").ss(1,1,1).p("ApCkgISFAAIAAJCIyFAAg");
	this.shape_424.setTransform(161.3,36.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#002051").s().p("ApCEiIAApDISFAAIAAJDg");
	this.shape_425.setTransform(161.3,36.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#002051").ss(1,1,1).p("ApJkgISTAAIAAJCIyTAAg");
	this.shape_426.setTransform(160.7,36.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#002051").s().p("ApJEiIAApDISTAAIAAJDg");
	this.shape_427.setTransform(160.7,36.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#002051").ss(1,1,1).p("ApRkhISjAAIAAJDIyjAAg");
	this.shape_428.setTransform(160.1,36.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#002051").s().p("ApREiIAApDISjAAIAAJDg");
	this.shape_429.setTransform(160.1,36.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#002051").ss(1,1,1).p("ApYkhISxAAIAAJDIyxAAg");
	this.shape_430.setTransform(159.4,36.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#002051").s().p("ApYEiIAApDISxAAIAAJDg");
	this.shape_431.setTransform(159.4,36.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#002051").ss(1,1,1).p("ApgkhITBAAIAAJDIzBAAg");
	this.shape_432.setTransform(158.8,36.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#002051").s().p("ApgEiIAApDITBAAIAAJDg");
	this.shape_433.setTransform(158.8,36.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#002051").ss(1,1,1).p("ApnkhITPAAIAAJDIzPAAg");
	this.shape_434.setTransform(158.2,36.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#002051").s().p("ApnEiIAApDITPAAIAAJDg");
	this.shape_435.setTransform(158.2,36.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#002051").ss(1,1,1).p("ApvkiITfAAIAAJFIzfAAg");
	this.shape_436.setTransform(157.6,36.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#002051").s().p("ApvEiIAApDITfAAIAAJDg");
	this.shape_437.setTransform(157.6,36.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#002051").ss(1,1,1).p("Ap2kiITtAAIAAJFIztAAg");
	this.shape_438.setTransform(157,36.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#002051").s().p("Ap2EiIAApDITtAAIAAJDg");
	this.shape_439.setTransform(157,36.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#002051").ss(1,1,1).p("Ap9kiIT8AAIAAJFIz8AAg");
	this.shape_440.setTransform(156.4,36.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#002051").s().p("Ap+EjIAApFIT8AAIAAJFg");
	this.shape_441.setTransform(156.4,36.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#002051").ss(1,1,1).p("AqFkiIULAAIAAJFI0LAAg");
	this.shape_442.setTransform(155.7,36.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#002051").s().p("AqFEjIAApFIULAAIAAJFg");
	this.shape_443.setTransform(155.7,36.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#002051").ss(1,1,1).p("AqNkiIUbAAIAAJFI0bAAg");
	this.shape_444.setTransform(155.1,36.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#002051").s().p("AqNEjIAApFIUbAAIAAJFg");
	this.shape_445.setTransform(155.1,36.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#002051").ss(1,1,1).p("AqUkiIUpAAIAAJFI0pAAg");
	this.shape_446.setTransform(154.5,36.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#002051").s().p("AqUEjIAApFIUpAAIAAJFg");
	this.shape_447.setTransform(154.5,36.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#002051").ss(1,1,1).p("AqckjIU5AAIAAJHI05AAg");
	this.shape_448.setTransform(153.9,36.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#002051").s().p("AqbEkIAApHIU3AAIAAJHg");
	this.shape_449.setTransform(153.9,36.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#002051").ss(1,1,1).p("AqjkjIVHAAIAAJHI1HAAg");
	this.shape_450.setTransform(153.3,36.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#002051").s().p("AqjEkIAApHIVHAAIAAJHg");
	this.shape_451.setTransform(153.3,36.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#002051").ss(1,1,1).p("AqrkjIVXAAIAAJHI1XAAg");
	this.shape_452.setTransform(152.7,36.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#002051").s().p("AqrEkIAApHIVWAAIAAJHg");
	this.shape_453.setTransform(152.7,36.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#002051").ss(1,1,1).p("AqykjIVlAAIAAJHI1lAAg");
	this.shape_454.setTransform(152.1,36.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#002051").s().p("AqyEkIAApHIVlAAIAAJHg");
	this.shape_455.setTransform(152.1,36.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#002051").ss(1,1,1).p("Aq6kjIV1AAIAAJHI11AAg");
	this.shape_456.setTransform(151.4,36.5);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#002051").s().p("Aq5EkIAApHIV0AAIAAJHg");
	this.shape_457.setTransform(151.4,36.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#002051").ss(1,1,1).p("ArBkkIWDAAIAAJJI2DAAg");
	this.shape_458.setTransform(150.8,36.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#002051").s().p("ArBEkIAApIIWDAAIAAJIg");
	this.shape_459.setTransform(150.8,36.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#002051").ss(1,1,1).p("ArIkkIWSAAIAAJJI2SAAg");
	this.shape_460.setTransform(150.2,36.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#002051").s().p("ArIEkIAApIIWRAAIAAJIg");
	this.shape_461.setTransform(150.2,36.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#002051").ss(1,1,1).p("ArQkkIWhAAIAAJJI2hAAg");
	this.shape_462.setTransform(149.6,36.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#002051").s().p("ArQElIAApJIWhAAIAAJJg");
	this.shape_463.setTransform(149.6,36.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#002051").ss(1,1,1).p("ArXkkIWwAAIAAJJI2wAAg");
	this.shape_464.setTransform(149,36.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#002051").s().p("ArYElIAApJIWwAAIAAJJg");
	this.shape_465.setTransform(149,36.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#002051").ss(1,1,1).p("ArfkkIW/AAIAAJJI2/AAg");
	this.shape_466.setTransform(148.4,36.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#002051").s().p("ArfElIAApJIW/AAIAAJJg");
	this.shape_467.setTransform(148.4,36.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#002051").ss(1,1,1).p("ArmkkIXOAAIAAJJI3OAAg");
	this.shape_468.setTransform(147.7,36.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#002051").s().p("ArnElIAApJIXPAAIAAJJg");
	this.shape_469.setTransform(147.7,36.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#002051").ss(1,1,1).p("ArukkIXdAAIAAJKI3dAAg");
	this.shape_470.setTransform(147.1,36.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#002051").s().p("AruEmIAApLIXdAAIAAJLg");
	this.shape_471.setTransform(147.1,36.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#002051").ss(1,1,1).p("Ar2klIXtAAIAAJLI3tAAg");
	this.shape_472.setTransform(146.5,36.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#002051").s().p("Ar2EmIAApLIXsAAIAAJLg");
	this.shape_473.setTransform(146.5,36.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#002051").ss(1,1,1).p("Ar9klIX7AAIAAJLI37AAg");
	this.shape_474.setTransform(145.9,36.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#002051").s().p("Ar9EmIAApLIX7AAIAAJLg");
	this.shape_475.setTransform(145.9,36.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#002051").ss(1,1,1).p("AsFklIYLAAIAAJLI4LAAg");
	this.shape_476.setTransform(145.3,36.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#002051").s().p("AsEEmIAApLIYKAAIAAJLg");
	this.shape_477.setTransform(145.3,36.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#002051").ss(1,1,1).p("AsMklIYZAAIAAJLI4ZAAg");
	this.shape_478.setTransform(144.6,36.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#002051").s().p("AsMEmIAApLIYZAAIAAJLg");
	this.shape_479.setTransform(144.6,36.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#002051").ss(1,1,1).p("AsUkmIYpAAIAAJNI4pAAg");
	this.shape_480.setTransform(144,36.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#002051").s().p("AsUEnIAApNIYpAAIAAJNg");
	this.shape_481.setTransform(144,36.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#002051").ss(1,1,1).p("AsbkmIY3AAIAAJNI43AAg");
	this.shape_482.setTransform(143.4,36.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#002051").s().p("AsbEnIAApNIY3AAIAAJNg");
	this.shape_483.setTransform(143.4,36.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#002051").ss(1,1,1).p("AsikmIZFAAIAAJNI5FAAg");
	this.shape_484.setTransform(142.8,36.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#002051").s().p("AsiEnIAApNIZFAAIAAJNg");
	this.shape_485.setTransform(142.8,36.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#002051").ss(1,1,1).p("AsqkmIZVAAIAAJNI5VAAg");
	this.shape_486.setTransform(142.2,36.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#002051").s().p("AsqEnIAApNIZVAAIAAJNg");
	this.shape_487.setTransform(142.2,36.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#002051").ss(1,1,1).p("AsxkmIZkAAIAAJNI5kAAg");
	this.shape_488.setTransform(141.6,36.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#002051").s().p("AsxEnIAApNIZkAAIAAJNg");
	this.shape_489.setTransform(141.6,36.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#002051").ss(1,1,1).p("As5knIZzAAIAAJPI5zAAg");
	this.shape_490.setTransform(140.9,36.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#002051").s().p("As5EnIAApNIZzAAIAAJNg");
	this.shape_491.setTransform(140.9,36.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#002051").ss(1,1,1).p("AtAknIaBAAIAAJPI6BAAg");
	this.shape_492.setTransform(140.3,36.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#002051").s().p("AtAEnIAApNIaBAAIAAJNg");
	this.shape_493.setTransform(140.3,36.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#002051").ss(1,1,1).p("AtIknIaRAAIAAJPI6RAAg");
	this.shape_494.setTransform(139.7,36.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#002051").s().p("AtIEoIAApPIaRAAIAAJPg");
	this.shape_495.setTransform(139.7,36.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#002051").ss(1,1,1).p("AtPknIafAAIAAJPI6fAAg");
	this.shape_496.setTransform(139.1,36.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#002051").s().p("AtPEoIAApPIafAAIAAJPg");
	this.shape_497.setTransform(139.1,36.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#002051").ss(1,1,1).p("AtXknIavAAIAAJPI6vAAg");
	this.shape_498.setTransform(138.5,36.4);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#002051").s().p("AtXEoIAApPIavAAIAAJPg");
	this.shape_499.setTransform(138.5,36.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#002051").ss(1,1,1).p("AteknIa9AAIAAJPI69AAg");
	this.shape_500.setTransform(137.8,36.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#002051").s().p("AteEoIAApPIa9AAIAAJPg");
	this.shape_501.setTransform(137.8,36.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#002051").ss(1,1,1).p("AtmkoIbNAAIAAJQI7NAAg");
	this.shape_502.setTransform(137.2,36.4);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#002051").s().p("AtmEpIAApQIbNAAIAAJQg");
	this.shape_503.setTransform(137.2,36.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#002051").ss(1,1,1).p("AttkoIbbAAIAAJRI7bAAg");
	this.shape_504.setTransform(136.6,36.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#002051").s().p("AttEpIAApRIbbAAIAAJRg");
	this.shape_505.setTransform(136.6,36.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#002051").ss(1,1,1).p("At1koIbrAAIAAJRI7rAAg");
	this.shape_506.setTransform(136,36.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#002051").s().p("At1EpIAApRIbrAAIAAJRg");
	this.shape_507.setTransform(136,36.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#002051").ss(1,1,1).p("At8koIb5AAIAAJRI75AAg");
	this.shape_508.setTransform(135.4,36.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#002051").s().p("At8EpIAApRIb5AAIAAJRg");
	this.shape_509.setTransform(135.4,36.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#002051").ss(1,1,1).p("AuEkoIcJAAIAAJRI8JAAg");
	this.shape_510.setTransform(134.8,36.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#002051").s().p("AuEEpIAApRIcJAAIAAJRg");
	this.shape_511.setTransform(134.8,36.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#002051").ss(1,1,1).p("AuLkpIcXAAIAAJTI8XAAg");
	this.shape_512.setTransform(134.1,36.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#002051").s().p("AuLEqIAApSIcXAAIAAJSg");
	this.shape_513.setTransform(134.1,36.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#002051").ss(1,1,1).p("AuTkpIcnAAIAAJTI8nAAg");
	this.shape_514.setTransform(133.5,36.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#002051").s().p("AuTEqIAApTIcnAAIAAJTg");
	this.shape_515.setTransform(133.5,36.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#002051").ss(1,1,1).p("AuakpIc1AAIAAJTI81AAg");
	this.shape_516.setTransform(132.9,36.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#002051").s().p("AuaEqIAApTIc1AAIAAJTg");
	this.shape_517.setTransform(132.9,36.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#002051").ss(1,1,1).p("AuikpIdFAAIAAJTI9FAAg");
	this.shape_518.setTransform(132.3,36.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#002051").s().p("AuiEqIAApTIdFAAIAAJTg");
	this.shape_519.setTransform(132.3,36.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#002051").ss(1,1,1).p("AupkpIdTAAIAAJTI9TAAg");
	this.shape_520.setTransform(131.7,36.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#002051").s().p("AupEqIAApTIdTAAIAAJTg");
	this.shape_521.setTransform(131.7,36.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#002051").ss(1,1,1).p("AuxkqIdjAAIAAJVI9jAAg");
	this.shape_522.setTransform(131.1,36.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#002051").s().p("AuwErIAApVIdhAAIAAJVg");
	this.shape_523.setTransform(131.1,36.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#002051").ss(1,1,1).p("Au4kqIdxAAIAAJVI9xAAg");
	this.shape_524.setTransform(130.5,36.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#002051").s().p("Au4ErIAApVIdxAAIAAJVg");
	this.shape_525.setTransform(130.5,36.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#002051").ss(1,1,1).p("AvAkqIeBAAIAAJVI+BAAg");
	this.shape_526.setTransform(129.8,36.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#002051").s().p("AvAErIAApVIeBAAIAAJVg");
	this.shape_527.setTransform(129.8,36.3);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#002051").ss(1,1,1).p("AvHkqIePAAIAAJVI+PAAg");
	this.shape_528.setTransform(129.2,36.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#002051").s().p("AvHErIAApVIePAAIAAJVg");
	this.shape_529.setTransform(129.2,36.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#002051").ss(1,1,1).p("AvPkqIefAAIAAJVI+fAAg");
	this.shape_530.setTransform(128.6,36.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#002051").s().p("AvPErIAApVIeeAAIAAJVg");
	this.shape_531.setTransform(128.6,36.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#002051").ss(1,1,1).p("AvWkqIetAAIAAJVI+tAAg");
	this.shape_532.setTransform(128,36.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#002051").s().p("AvWErIAApVIetAAIAAJVg");
	this.shape_533.setTransform(128,36.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#002051").ss(1,1,1).p("AvekrIe9AAIAAJXI+9AAg");
	this.shape_534.setTransform(127.4,36.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#002051").s().p("AvdErIAApWIe7AAIAAJWg");
	this.shape_535.setTransform(127.4,36.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#002051").ss(1,1,1).p("AvlkrIfLAAIAAJXI/LAAg");
	this.shape_536.setTransform(126.8,36.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#002051").s().p("AvlEsIAApXIfLAAIAAJXg");
	this.shape_537.setTransform(126.8,36.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#002051").ss(1,1,1).p("AvtkrIfbAAIAAJXI/bAAg");
	this.shape_538.setTransform(126.1,36.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#002051").s().p("AvtEsIAApXIfbAAIAAJXg");
	this.shape_539.setTransform(126.1,36.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#002051").ss(1,1,1).p("Av0krIfpAAIAAJXI/pAAg");
	this.shape_540.setTransform(125.5,36.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#002051").s().p("Av0EsIAApXIfpAAIAAJXg");
	this.shape_541.setTransform(125.5,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},16).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_415},{t:this.shape_414}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_433},{t:this.shape_432}]},1).to({state:[{t:this.shape_435},{t:this.shape_434}]},1).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_447},{t:this.shape_446}]},1).to({state:[{t:this.shape_449},{t:this.shape_448}]},1).to({state:[{t:this.shape_451},{t:this.shape_450}]},1).to({state:[{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[{t:this.shape_459},{t:this.shape_458}]},1).to({state:[{t:this.shape_461},{t:this.shape_460}]},1).to({state:[{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[{t:this.shape_471},{t:this.shape_470}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_475},{t:this.shape_474}]},1).to({state:[{t:this.shape_477},{t:this.shape_476}]},1).to({state:[{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_481},{t:this.shape_480}]},1).to({state:[{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_487},{t:this.shape_486}]},1).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_499},{t:this.shape_498}]},1).to({state:[{t:this.shape_501},{t:this.shape_500}]},1).to({state:[{t:this.shape_503},{t:this.shape_502}]},1).to({state:[{t:this.shape_505},{t:this.shape_504}]},1).to({state:[{t:this.shape_507},{t:this.shape_506}]},1).to({state:[{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_511},{t:this.shape_510}]},1).to({state:[{t:this.shape_513},{t:this.shape_512}]},1).to({state:[{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_517},{t:this.shape_516}]},1).to({state:[{t:this.shape_519},{t:this.shape_518}]},1).to({state:[{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_535},{t:this.shape_534}]},1).to({state:[{t:this.shape_537},{t:this.shape_536}]},1).to({state:[{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_541},{t:this.shape_540}]},1).wait(10));

	// Dyntgap
	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AgUCeIgigBIgfABIgOABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgDIAAgIIABgDQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIASAAQAFAAACgEIACgIIACgaIAAg0IAAiRQAAgIgEgFQgDgGgKgFIgKgGIgDgCIAAgCIAAgEIABgBIACgCIAsgWIAFgCIAFgBQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABAHIACAVIABAAQAJgMARgJQAPgJAXAAQARAAANAHQAMAGAKAKQANAMAGAQQAFAQAAAaQAAAegMAYQgNAWgWAOQgWAPgcAAQgIAAgNgCQgMgCgLgEIAABfQAAAKADADQACADAFAAIAUAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABADIAAAIIgBADQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgNgBgAgQiBQgMAHgJAOIAABjQAAAIACADQACAGAGAFQAJAGALADQAJAEAOgBQANABAMgIQAMgHAIgPQAHgRABgbQgBgggIgTQgIgUgOgJQgNgJgPAAQgNAAgNAIg");
	this.shape_542.setTransform(181,44.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AAcBbQgIgIgDgOIgCAAQgHAIgJAHQgLAHgPAFIgNADIgOAAQgGAAgGgDQgGgEgFgIQgEgIAAgPQgBgPAKgOQAKgNAagMIAVgIIAQgJIAMgIIAAgcIgBgOQgBgHgEgFQgEgEgFgDQgGgDgKAAQgHAAgJADQgJACgFAFQgEAEABAFIABAMQAAAMgFAGQgFAHgOABQgFAAgDgEQgDgDAAgIQAAgLAJgMQAIgLAPgJQAOgIANgEQANgDANAAQAPAAAIADQAJAEAEAFQAHAHABAIQACAIAAAJIAABDIAAAbQAAATAEAHQADAIAGAAQAGAAAEgDQAFgCABgCIADgCIACAAIAEAEQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgCAFIgGAJQgEAFgHAEQgHAEgLAAQgNAAgIgIgAgCADQgKAFgKAGQgKAGgHAKQgHAJAAAOQAAAMAHAHQAGAGALAAQAGAAAJgFQAHgEAGgGQAHgHAAgGIAAg2QgHAEgIADg");
	this.shape_543.setTransform(161.2,38.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgwCbQgSgDgRgJQgMgHgFgJQgGgJAAgLQAAgNAIgLQAHgKALgIQALgIALgFIAAgCQgPgDgIgJQgHgJgBgKQABgLAGgIQAHgHAJgGQAKgGAIgDIAAgBQgJgEgKgIQgJgJgHgOQgHgOAAgUQAAgPAJgPQAIgPASgKQARgKAZAAQAQAAAMAFQALAFAHAHIAJAJQAKgHALgGQALgFALAAQALAAAGAGQAFAGgBAHQAAAHgFAFQgEAFgIAAQgGAAgEgCIgGgFIgFgDQgCgBgDAAIgGAAIgIADIAFAOIACAUQAAANgEANQgEAMgJALQgGAHgKAFQgJAFgKADQgIADgIAAIgMgBIgLgCIgKAGQgGADgEAFQgDAEgBAGQABAJAGADQAHAEAMAAIAbgBQAagCASAEQATAEANAKQAOAMAEALQAFAMgBAJQABAQgHANQgHAOgRANQgJAHgUAGQgTAHgbABIgFAAQgOAAgQgDgAAAA1IgqADQgIACgIAFQgIAGgGAJQgGAJgBAMQABAJAFAJQAFAJAHAFQALAHAOADQAPADAVgBQAHAAALgCQALgCALgGQALgFAHgJQAHgJAAgNQAAgVgQgMQgOgLgbAAIgIAAgAgZiPQgIADgIAIQgLAMgDAOQgDAOAAANQAAAMAEAKQADAKAIAIQAGAFAGADQAHADAIAAQAPgBAHgKQAJgKAEgPQAEgPgBgPQAAgPgDgKQgDgJgGgHQgEgEgGgDQgEgDgFAAIgDAAQgGAAgHACg");
	this.shape_544.setTransform(140.1,44.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgLB0QgKgGgGgJQgGgIgBgJIABgYIAAgaIABgPIAAgKIAAgMIAAgWIABgWIgcAAIgFgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAIAGgFQAGgDALgKQALgLAKgMQALgMADgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIADgCQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABABIABAEIgCAsIA/AAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAIABADIgFAPIgBADIgDABIg6AAIAAAgIAAAeIAAAuQAAAQACAJQAFAJAFACQAGADAEAAIAQgBQAJgCAFgDIADAAIACACIACADIABADIgCACQgCADgGAEQgHAEgLADQgKAEgOABQgJgBgKgGg");
	this.shape_545.setTransform(122,36.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("ABaBgIgeAAIgcAAIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAgEIAAgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAFgBIANAAQADAAADgDQADgCAAgGIAAgTIABgTIAAg5QAAgOgCgKQgCgKgJgHQgIgGgJgBQgIgCgHABQgFgBgKAEQgKAEgLAKQgHAIgCAIQgCAIAAAHIAABcQAAAJACADQACADAHAAIAMAAIADABIABADIAAAIQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgMgBIgbAAIgcAAIgMABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgIIABgDIAEgBIANAAQAEAAADgCQACgCAAgFIAAhoQAAgKgFgHQgFgGgJgEIgDgCIgDgCIgBgCIAAgCIACgDIACgCIAngVIAFgDIADAAIADABIABAEIADAbIABAAQAKgMARgKQARgKAQAAQAKAAAKACQAKACAIAFQAIAFAFAIQAGAIADAIQADAIAAAGIAABzQABAGACACQADACAEAAIAPAAIAEABIABADIAAAHIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgNgBg");
	this.shape_546.setTransform(102.6,38.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AhfCWQgGgGAAgLQAAgHAGgFQAGgFAJAAQAGAAAGACIAIADIAFgBQADAAACgCQADgDAEgKIALgWIALgYIAHgSIgGgVIgNglIgPgtIgNgnIgHgTQgEgJgEgFQgFgFgIAAIgMAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgDIAAgJIABgDIADAAIAMAAIAeABIAcgBIAOAAIADAAIABADIAAAJIAAADIgDABIgIAAQgEAAgCACQgBADABAFIAEAPIAIAcIAKAhIAIAdIAFAPIACAAIAGgNIALgbIANgeIALgcIAFgPQACgIgCgFQgCgEgFAAIgHAAIgDgBIgBgDIAAgJIABgDIACAAIANAAIAYABIARgBIALAAIACABIABACIAAAJIgBADIgCABIgHAAQgEAAgEACQgEACgEAEQgFAHgLAWIgZA3IgeBDIgSAvIgRAlIgLAXIgHANQgFAHgHAEQgIAFgMAAQgMAAgHgGg");
	this.shape_547.setTransform(80.1,44.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgQChIgeAAIgegBIgYAAIgsAAIgTABIgDgBIgBgCIAAgMIABgCIADgBIAeAAQAHAAADgCQAEgDABgFIABgQIABgeIAAglIABgkIAAgaIAAgiIAAgRIgBgbIAAgZIgBgPQgBgIgFgCQgFgDgJAAIgZAAIgDAAIgBgDIAAgMIABgCIADAAIAUAAIAuABIAOAAIAVgBIATAAIAOAAQAcgBAZAEQAaADAXAJQAXAJAUARQAWASAOAdQAOAdABAnQAAAlgMAcQgLAcgWAYQgXAYgaAKQgaAKgYACQgUACgOAAIgGAAgAg2iQQgGAAgEADQgFADgCAFQgCAGAAAHIAAAUIAAAbIAAAZIAAAOIAAAgIAAAOIAAAfIAAAjIABAdQAAAGABAGQABAGAFAHQAFAHANAEQANADARAAQAhAAAbgNQAbgNASgWQAOgSAJgbQAJgaAAgdQABgSgFgSQgFgTgJgRQgHgQgMgMQgRgUgegMQgcgMgkAAIgNAAIgNACg");
	this.shape_548.setTransform(49.9,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542}]}).wait(303));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.1,35.5,273.4,92.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;