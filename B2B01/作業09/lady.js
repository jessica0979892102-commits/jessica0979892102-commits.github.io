(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7660,5107);// helper functions:

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


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1423,0.1423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,0,1089.7,726.5), null);


// stage content:
(lib.lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pen11
	this.instance = new lib.手握筆();
	this.instance.setTransform(517.1,454.65,1,1,0,0,0,544.9,363.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(141).to({_off:false},0).wait(1).to({x:519.85,y:467.65},0).wait(1).to({x:530.4,y:478.8},0).wait(1).to({x:527.4,y:492.05},0).wait(1).to({x:523.6,y:506.95},0).wait(1).to({x:524.7,y:515.4},0).to({_off:true},1).wait(13));

	// 遮色片11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_141 = new cjs.Graphics().p("AgvBuQgVgJgQgQQgSgTgJgYQgJgYABgYQACgaALgXQAMgWAUgQQAVgQAYgHQAZgGAZAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABIgCAAQgYAAgXgKg");
	var mask_graphics_142 = new cjs.Graphics().p("AhhChQgVgJgQgQQgSgSgJgYQgJgYABgaQACgZALgWQAMgXAUgQQAVgQAYgGIALgCQADgVAKgTQAMgXAUgQQAUgQAYgGQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAaQADAZgHAZQgHAXgRAUQgRATgXALQgQAHgQADQgBAKgDAJQgIAYgQAUQgRATgYALQgWALgZAAIgDAAQgYAAgXgKg");
	var mask_graphics_143 = new cjs.Graphics().p("Ag1DmQgVgJgRgQQgSgSgJgYQgJgYACgaQABgRAFgQQgIgFgHgIQgSgSgJgYQgJgYABgZQACgZALgXQAMgXAUgQQAVgQAYgGIALgCQADgVAKgTQAMgXAUgQQAUgQAYgGQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAaQADAZgHAZQgHAYgRAUQgRATgXALQgQAHgQADQgBAJgDAJIgCAFQATAPANAUQAOAWADAaQAEAZgIAZQgHAYgRAUQgRATgXALQgXALgZAAIgCAAQgZAAgWgKg");
	var mask_graphics_144 = new cjs.Graphics().p("AAgEaQgVgJgPgQQgSgTgJgYQgFgMgCgNQgYAAgVgKQgVgJgRgQQgSgTgJgYQgJgYACgZQABgRAFgQQgIgGgHgHQgSgSgJgYQgJgYABgZQACgaALgXQAMgWAUgQQAVgQAYgHIAMgCQACgUAKgUQAMgWAUgQQAUgQAZgHQAYgGAZAFQAZAEAWAOQAVAPANAWQAOAWADAZQADAagHAYQgHAZgRATQgRAUgXAKQgQAIgQACQgBAKgDAJIgCAGQAUAOAMAUQANAVAEAZIATACQAZAEAVAOQAVAPAOAWQANAWAEAZQADAagHAYQgIAZgRATQgQAUgYAKQgXALgZABIgDAAQgYAAgXgKg");
	var mask_graphics_145 = new cjs.Graphics().p("AgSFfQgVgJgRgQQgSgTgJgYQgJgYACgZQABgaAMgXQAMgWAUgQIAMgIQgDgKgCgJQgYAAgVgKQgVgJgRgQQgSgTgJgYQgJgYACgYQABgRAFgQQgIgGgHgHQgSgTgJgYQgJgYABgZQACgaALgXQAMgWAUgQQAVgQAYgHIAMgCQACgUAKgUQAMgWAUgQQAUgQAZgHQAYgGAZAFQAZAEAWAOQAVAPANAWQAOAWADAZQADAagHAYQgHAZgRATQgRAUgXAKQgQAIgQACQgBAKgDAJIgCAGQAUAOAMAVQANAVAEAZIATACQAZAEAVANQAVAPAOAWQANAWAEAZQADAagHAYQgIAZgRATQgMAPgPAJQADAKABAKQAEAagIAYQgHAZgRATQgRAUgXAKQgXALgaABIgCAAQgZAAgVgKg");
	var mask_graphics_146 = new cjs.Graphics().p("Ag1GuQgVgJgRgQQgSgTgJgYQgJgYACgZQABgaAMgXQAMgWAUgQIAFgEQgEgIgEgJQgJgYACgaQABgZAMgXQAMgXAUgQIAMgIQgDgJgCgKQgYAAgVgKQgVgJgRgQQgSgRgJgYQgJgYACgaQABgRAFgQQgIgGgHgHQgSgSgJgYQgJgYABgaQACgZALgXQAMgXAUgQQAVgQAYgGIAMgDQACgUAKgTQAMgXAUgQQAUgQAZgGQAYgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAaQADAZgHAZQgHAYgRAUQgRATgXALQgQAHgQADQgBAJgDAKIgCAFQAUAOAMAVQANAWAEAYIATACQAZAFAVAOQAVAOAOAWQANAWAEAZQADAZgHAZQgIAYgRAUQgMAOgPAJQADAKABALQAEAZgIAZQgHAYgRAUQgKALgMAIQAMAVADAXQAEAagIAYQgHAZgRATQgRAUgXAKQgXALgZABIgCAAQgZAAgWgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_graphics_141,x:318.9593,y:281.5547}).wait(1).to({graphics:mask_graphics_142,x:313.9343,y:286.7047}).wait(1).to({graphics:mask_graphics_143,x:313.9343,y:293.6047}).wait(1).to({graphics:mask_graphics_144,x:316.92,y:298.7547}).wait(1).to({graphics:mask_graphics_145,x:316.92,y:305.6547}).wait(1).to({graphics:mask_graphics_146,x:316.92,y:313.5297}).wait(14));

	// lady11
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141).to({_off:false},0).wait(19));

	// pen10
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(375.9,430.5,1,1,0,0,0,544.9,363.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136).to({_off:false},0).wait(1).to({x:360.5,y:432.95},0).wait(1).to({x:399,y:422.1},0).wait(1).to({x:362.7,y:416.15},0).wait(1).to({_off:true},1).wait(19));

	// 遮色片10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_136 = new cjs.Graphics().p("AgvBuQgVgJgQgQQgSgTgJgYQgJgYABgYQACgaALgXQAMgWAUgQQAVgQAYgHQAZgGAZAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABIgCAAQgYAAgXgKg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AAYB5QgVgJgPgQIgCgCIgGAEQgXALgaAAQgaABgXgLQgVgJgRgQQgSgSgJgYQgJgYACgZQABgZAMgXQAMgXAUgQQAUgQAZgGQAZgGAZAEQAZAFAWAOQAJAHAIAIQANgHAPgEQAZgGAaAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABIgDAAQgZAAgWgKg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AAVCvQgVgJgPgQIgBgBIgHADQgXALgaAAQgaABgXgLQgVgJgRgQQgSgSgJgYQgJgYACgaQABgZAMgWQAMgXAUgQQAUgQAZgGQAZgGAZAEIAJACQABgZAMgXQAMgWATgQQAUgQAZgHQAZgGAZAFQAZAEAWAOQAVAPANAWQAOAWADAZQAEAagIAYQgGATgLAPQANAVADAYQADAagHAYQgIAZgQATQgRAUgYAKQgXALgZABIgDAAQgYAAgXgKg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AAVC8QgVgJgPgQIgBgBIgHADQgXALgaABQgaAAgXgKQgVgJgRgQQgSgTgJgYQgJgYACgZQABgaAMgXQAGgJAHgKQgFgIgDgJQgJgYABgaQACgZALgXQAMgXAUgQQAVgQAYgGQAZgGAaAEQAZAFAUAOQAMAIAJAKQAKgFALgDQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAaQAEAZgIAZQgGASgLAQQANAVADAYQADAZgHAZQgIAYgQAUQgRATgYALQgXALgZAAIgDAAQgYAAgXgKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_1_graphics_136,x:178.87,y:269.6047}).wait(1).to({graphics:mask_1_graphics_137,x:171.695,y:268.5297}).wait(1).to({graphics:mask_1_graphics_138,x:171.97,y:263.1047}).wait(1).to({graphics:mask_1_graphics_139,x:171.97,y:261.7547}).wait(21));

	// lady10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(136).to({_off:false},0).wait(24));

	// pen下
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(441.7,438.6,1,1,0,0,0,544.9,363.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).wait(1).to({x:455.25,y:441.85},0).wait(1).to({x:468.05,y:439.3},0).wait(1).to({x:483.75,y:435.25},0).to({_off:true},1).wait(24));

	// 遮色片下 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_132 = new cjs.Graphics().p("AgvBuQgVgJgQgQQgSgTgJgYQgJgYABgYQACgaALgXQAMgWAUgQQAVgQAYgHQAZgGAZAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABIgCAAQgYAAgXgKg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AAWCDQgVgJgQgQQgHgHgGgIQgSAHgUAAQgaABgYgLQgVgJgQgQQgSgSgJgYQgJgXABgaQACgZALgXQAMgXAUgQQAVgQAYgGQAZgGAaAEQAZAFAVAOQARAMAMASIAMgEQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAZQAEAZgIAZQgHAYgRAUQgRATgXALQgXALgaAAIgCAAQgZAAgWgKg");
	var mask_2_graphics_134 = new cjs.Graphics().p("ABXCWQgVgJgRgQIgIgJQgRAGgSAAQgZABgXgLQgVgJgRgQQgHgHgGgIQgSAHgUAAQgaABgYgLQgVgJgQgQQgSgSgJgYQgJgXABgaQACgZALgXQAMgXAUgQQAVgQAYgGQAZgGAaAEQAZAFAVAOQASAMAMASIAMgEQAYgGAZAEQAZAFAWAOQAOAKALANIAIgCQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAZQADAZgHAZQgHAYgRAUQgRATgXALQgXALgaAAIgCAAQgZAAgWgKg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AAMCWQgUgJgQgQIgIgJQgRAGgSAAQgaABgYgLQgVgJgQgQQgIgHgFgIQgTAHgUAAQgaABgXgLQgVgJgRgQQgSgSgJgYQgJgXACgaQABgZAMgXQAMgXAUgQQAUgQAZgGQAZgGAZAEQAZAFAWAOQARAMANASIALgEQAZgGAaAEQAZAFAVAOQANAKALANIAIgCQAZgGAaAEQARAEAQAIQAJgLALgJQAVgQAYgHQAZgGAaAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABQgaAAgYgKIgHgDIgDAEQgRATgYALQgXALgZAAIgDAAQgZAAgWgKg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_2_graphics_132,x:223.02,y:269.1047}).wait(1).to({graphics:mask_2_graphics_133,x:229.945,y:271.2547}).wait(1).to({graphics:mask_2_graphics_134,x:236.4343,y:273.1547}).wait(1).to({graphics:mask_2_graphics_135,x:243.895,y:273.1547}).wait(25));

	// 下
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAgQgWgWgpggIgsglQgGgGgBgGQAFAFAQAEQAaAGAagJIAdAEQAXAEAxAPQAvAOAQADQAYAEAsgFIA8gFIANAGQASAGAagDQAEAEgHAIIgWAVIgkAlQgdAYggAAQiRAAgpgog");
	this.shape_1.setTransform(243.4833,274.925);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(132).to({_off:false},0).wait(28));

	// pen上
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(442,430.3,1,1,0,0,0,544.9,363.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(128).to({_off:false},0).wait(1).to({x:456.9,y:427.55},0).wait(1).to({x:469.4,y:435.7},0).wait(1).to({x:480.2,y:441.4},0).to({_off:true},1).wait(28));

	// 遮色片上 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_128 = new cjs.Graphics().p("AgvBuQgVgJgQgQQgSgTgJgYQgJgYABgYQACgaALgXQAMgWAUgQQAVgQAYgHQAZgGAZAFQAZAEAVAOQAVAPAOAWQANAWAEAZQADAZgHAYQgIAZgQATQgRAUgYAKQgXALgZABIgCAAQgYAAgXgKg");
	var mask_3_graphics_129 = new cjs.Graphics().p("Ah1B6QgVgJgRgQQgSgSgJgYQgJgYACgaQABgYAMgXQAMgXAUgQQAUgQAZgGQAZgGAZAEQASADAPAIIANgLQATgQAZgHQAZgGAZAFQAZAEAWAOQAVAPANAWQAOAWADAZQAEAagIAXQgHAZgRATQgRAUgXAKQgXALgaABQgaAAgXgKIgGgDQgQAQgUAKQgXALgaAAIgCAAQgZAAgWgKg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Ai6B7QgVgJgRgQQgSgSgJgYQgJgYACgaQABgYAMgXQAMgXAUgQQAUgQAZgGQAZgGAZAEQASAEAPAHIANgLQAUgQAZgHQAZgGAYAFQAZAEAWAOQATgNAWgGQAZgGAZAEQAZAFAWAOQAVAOANAWQAOAWADAaQAEAZgIAYQgHAYgRAUQgRATgXALQgXALgaAAQgaABgXgLQgLgEgJgGQgJAHgLAEQgXALgaABQgZAAgXgKIgGgDQgQARgVAJQgXALgaAAIgCAAQgZAAgWgKg");
	var mask_3_graphics_131 = new cjs.Graphics().p("ACZCQQgVgJgRgQQgOgPgJgTIgMABQgaABgXgLQgLgEgJgHQgJAHgKAFQgXALgaABQgaAAgXgKIgGgDQgQAQgVAKQgXALgaAAQgaABgXgLQgVgJgRgQQgSgSgJgYQgJgYACgZQABgZAMgXQAMgXAUgQQAUgQAZgGQAZgGAZAEQASADAPAIIANgLQAUgQAZgHQAZgGAZAFQAZAEAVAOQATgNAWgGQAZgGAZAEQAZAFAWAOQAVAOANAWIAHALQARgBARADQAZAEAWAOQAVAPANAWQAOAWADAYQAEAagIAYQgHAZgRATQgRAUgXAKQgXALgaABIgCAAQgZAAgWgKg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_3_graphics_128,x:223.02,y:267.4547}).wait(1).to({graphics:mask_3_graphics_129,x:230.07,y:266.2297}).wait(1).to({graphics:mask_3_graphics_130,x:236.97,y:266.1047}).wait(1).to({graphics:mask_3_graphics_131,x:243.07,y:268.1297}).wait(29));

	// 上
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACmBCIgLgFQgwgwgMAAQgmAEgVAAQgLAAgQgFQgPgFgLAAQgNAAg3AKIg1AKQgXAJgbgHQgSgFgFgEQAAgHAIgDQAxgUAmgUQBKgnAjAAQAGAAASAIQAUAHAKAAQADAAAXgIQARgGARAHQAaALAhAmQAnAqAHAoIgNAAQgTAAgOgEg");
	this.shape_2.setTransform(243.4235,265.7173);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(128).to({_off:false},0).wait(32));

	// pen08
	this.instance_5 = new lib.手握筆();
	this.instance_5.setTransform(504.25,520.6,1,1,0,0,0,544.9,363.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(117).to({_off:false},0).wait(1).to({x:488.25,y:527.25},0).wait(1).to({x:474.6,y:534.3},0).wait(1).to({x:459.35,y:542.1},0).wait(1).to({x:446.45,y:549.15},0).wait(1).to({x:432,y:554.6},0).wait(1).to({x:417.55,y:560.45},0).wait(1).to({x:401.15,y:564.75},0).wait(1).to({x:383.75,y:566.95},0).wait(1).to({x:370,y:565.05},0).wait(1).to({x:358.25},0).to({_off:true},1).wait(32));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_117 = new cjs.Graphics().p("AgJB3QgmgDgdgZIgIgGQgagcgHglQgGglARgjQARgiAhgTQAigRAlAEQAmAFAcAaQAcAaAIAlQAIAlgPAjQgQAjghAUQgcARghAAIgJgBg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AhbB9QgmgDgdgZIgIgGQgagbgHgmQgGglARgjQARgiAhgTQAigRAmAEQAiAFAbAVQAMgOASgLQAigRAmAEQAmAFAcAaQAcAaAIAlQAIAlgPAjQgQAjghAUQggATgngDQglgDgdgXQgKANgQAJQgcARghAAIgKgBg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AihCdQgmgEgegYIgHgHQgbgbgGgmQgHgmARghQARgjAigSQAigSAmAFIASADQARgiAhgTQAigSAlAFQAjAEAaAWQANgPASgKQAigSAmAFQAmAFAcAaQAcAaAIAlQAIAmgPAiQgQAjghAUQggATgngDQglgDgcgXQgMAMgQAKQggATgmgDQgMgBgLgDQgPAggfASQgcARghAAIgKAAg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AjpDEQgmgEgegYIgHgHQgbgbgGgmQgHgmARgiQARgiAigSQAigSAmAFIAPADIAHgPQARgjAhgSQAigSAmAFIASADQARgiAhgTQAigSAmAFQAiAEAaAWQANgPATgKQAigSAmAFQAmAFAcAaQAcAaAIAlQAIAmgQAjQgPAighAUQghATgmgDQglgDgdgXQgMAMgPAKQghATgmgDQgMgBgMgDQgPAggeASQggAUgngDQgLgBgKgDIgEAKQgPAjghAUQgdARggAAIgKAAg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AkuDnQgmgDgdgZIgIgGQgagcgHgmQgGglARgjQARgjAhgSQAigRAmAFIAMACIADgHQARgiAhgSQAigTAmAFIAQADIAGgOQARgjAigSQAigSAlAEIASAEQARgiAhgTQAigSAmAEQAiAFAbAWQANgPASgKQAigSAmAEQAmAFAcAbQAcAZAIAmQAIAlgPAkQgQAjghAUQggASgngDQglgDgdgXQgLANgQAIQggAUgngDQgMgBgLgDQgQAggeASQghATglgCQgLgBgKgDIgEAKQgQAjghAUQggAUgngDIgRgDIAAABQgQAjghAVQgcAQghAAIgKAAg");
	var mask_4_graphics_122 = new cjs.Graphics().p("Al2EIQgmgDgegZIgHgGQgbgcgGglQgHgmARgjQARgiAigTQAigSAmAEQAKACAKADIACgEQARgiAhgSQAigSAmAFIAMACIADgHQARgiAhgSQAigTAmAFIAQADIAGgOQARgjAhgSQAigSAmAEIASAEQARgiAhgTQAigSAmAEQAjAFAaAWQANgPASgKQAigSAmAEQAmAFAcAbQAcAZAIAmQAIAlgPAkQgQAjghAUQggATgngDQglgDgcgYQgMANgQAJQggAUgngDQgMgBgLgDQgPAfgfASQghATgmgCQgLgBgKgDIgEAKQgQAjggAUQggAUgngDIgQgDIgBABQgQAjghAVQggATgngDQgNgBgMgEQgPAjghAUQgdAQggAAIgKAAg");
	var mask_4_graphics_123 = new cjs.Graphics().p("Am4ErQgmgDgegZIgHgGQgbgcgGglQgHgmARgjQARgiAigTQAigSAmAFIAHABIADgFQARgjAhgSQAigRAmAEQALACAJACIACgDQARgjAigSQAigSAmAFIALACIADgHQARgiAigTQAigSAmAFIAOADIAHgPQARgiAhgTQAigSAmAFIASAEQARgjAigSQAigSAmAEQAiAFAaAVQANgOATgKQAigSAmAEQAmAFAcAaQAcAaAIAmQAIAlgQAjQgPAkghATQghAUgmgDQglgEgdgXQgMANgPAJQghAUgmgDQgMgBgMgEQgPAhgfASQggASgngDQgLgBgKgDIgEALQgPAjghAUQghATglgDIgRgCIgBABQgPAjghAUQghAUgmgDQgOgBgMgEQgPAighAUQghAUgmgDIgNgCIAAABQgPAjghAUQgdARggAAIgKgBg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AoKE/QgmgEgegYIgHgHQgbgbgGgmQgHgmARgiQARgjAigSQAigSAmAFQAaADAVANQAQgbAdgPQAigSAmAFIAHABIADgGQARgiAhgSQAigSAmAFQALABAJADIACgEQARgiAigTQAigSAmAFIALACIADgGQARgjAhgSQAigSAmAFIAPADIAHgPQARgjAhgSQAigSAmAFIASADQARgiAigTQAigSAmAFQAiAEAaAWQANgPATgKQAigSAmAFQAmAFAcAaQAcAaAIAlQAIAmgQAjQgPAjghAUQghATgmgDQglgDgdgXQgMAMgPAKQghATgmgDQgMgBgMgDQgPAggfASQggAUgngDQgLgBgKgDIgEAJQgPAjghAUQghAUgmgDIgRgDIgBACQgPAjggAUQghATgmgDQgOgBgMgEQgPAjghAUQghATgmgDIgNgBIAAAAQgPAkghATQghAUgmgDQgdgDgYgOQgPAYgZAPQgdARggAAIgKAAg");
	var mask_4_graphics_125 = new cjs.Graphics().p("ApeFWQgmgDgegZIgHgGQgbgcgGglQgHgmARgjQARgiAigTQAigSAmAFQAZADAWANQARggAggSQAigSAmAFQAaADAVANQAQgaAdgQQAigSAmAFIAHABIADgFQARgiAhgSQAigSAmAEQALACAJACIACgDQARgjAigSQAigSAlAFIALACIADgHQARgiAigTQAigSAmAFIAPADIAHgPQARgiAhgTQAigSAmAFIASAEQARgjAigSQAigSAmAEQAiAFAaAVQANgOATgKQAigSAmAEQAmAFAcAaQAcAaAIAmQAIAlgQAjQgPAkghATQghAUgmgDQglgEgdgXQgMANgPAJQghAUgmgDQgMgBgMgEQgPAhgfASQggATgngDQgLgBgKgDIgEALQgPAighAUQghATgmgDIgRgCIgBABQgPAjghAUQghAUgmgDQgNgBgMgEQgPAighAUQghAUgmgDIgNgCIAAABQgPAjghAUQghATgmgDQgdgCgYgPQgPAZgZAPQghATgmgDQgdgCgXgPQgQAegdASQgdARggAAIgKgBg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AqwFkQgmgEgegYIgHgHQgbgbgGgmQgHgmARgiQARgjAigSQAigSAmAFQAdADAXARQAQgVAYgOQAigRAmAEQAZADAWANQARggAggRQAigSAmAEQAaAEAVANQAQgbAdgPQAigSAmAEIAHABIADgFQARghAhgTQAigSAmAEQALACAJADIACgEQAQgjAigSQAigSAmAFIALACIADgHQARgiAigSQAigTAmAFIAPADIAHgOQARgjAhgSQAigSAmAEIASAEQARgiAigTQAigSAmAEQAiAFAaAWQANgPATgKQAigSAmAEQAmAFAcAbQAcAZAIAmQAIAlgQAkQgPAjghAUQghATgmgDQglgDgdgYQgMANgPAJQghAUgmgDQgMgBgMgDQgPAggfASQggATgngCQgLgBgKgDIgEAKQgPAjghATQghAUgmgDIgRgDIgBABQgPAjghAVQghATgmgDQgOgBgMgEQgPAjghAUQggATgmgDIgNgCIAAABQgPAkghATQghAUgmgDQgdgDgYgPQgPAZgZAPQghATgmgCQgdgDgXgPQgQAegdASQghATgmgDQgggCgagSQgOATgVAMQgdARggAAIgKAAg");
	var mask_4_graphics_127 = new cjs.Graphics().p("ApYFkQgmgEgegYIgHgHIgHgHQgLAKgMAHQghAUgmgDQgmgEgegYIgHgHQgbgbgGgmQgHgmARgiQARgjAigSQAigSAmAFQAmAEAcAaIAKALQAMgLAQgJQAigSAmAFQAdADAXARQAQgVAYgOQAigRAmAEQAZADAWANQARggAggRQAigSAmAEQAaAEAVANQAQgbAdgPQAigSAmAEIAHABIADgFQARghAhgTQAhgSAmAEQALACAJADIACgEQARgjAigSQAigSAmAFIALACIADgHQARgiAigSQAigTAmAFIAPADIAHgOQARgjAhgSQAigSAmAEIASAEQARgiAigTQAigSAmAEQAiAFAaAWQANgPATgKQAigSAmAEQAmAFAcAbQAcAZAIAmQAIAlgQAkQgPAjghAUQghATgmgDQglgDgdgYQgMANgPAJQghAUgmgDQgMgBgMgDQgPAggfASQggATgngCQgLgBgKgDIgEAKQgPAjghATQghAUgmgDIgRgDIgBABQgPAjghAVQghATgmgDQgOgBgMgEQgPAjghAUQghATgmgDIgNgCIAAABQgOAkghATQghAUgmgDQgdgDgYgPQgPAZgZAPQghATgmgCQgdgDgXgPQgQAegdASQghATgmgDQgggCgagSQgOATgVAMQgdARggAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(117).to({graphics:mask_4_graphics_117,x:307.7463,y:355.8}).wait(1).to({graphics:mask_4_graphics_118,x:299.5463,y:356.4}).wait(1).to({graphics:mask_4_graphics_119,x:292.5213,y:359.525}).wait(1).to({graphics:mask_4_graphics_120,x:285.2963,y:363.425}).wait(1).to({graphics:mask_4_graphics_121,x:278.4463,y:366.95}).wait(1).to({graphics:mask_4_graphics_122,x:271.2213,y:370.25}).wait(1).to({graphics:mask_4_graphics_123,x:264.5963,y:373.775}).wait(1).to({graphics:mask_4_graphics_124,x:256.3963,y:375.725}).wait(1).to({graphics:mask_4_graphics_125,x:247.9963,y:378.075}).wait(1).to({graphics:mask_4_graphics_126,x:239.7963,y:379.45}).wait(1).to({graphics:mask_4_graphics_127,x:230.9963,y:379.45}).wait(33));

	// lady08
	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({_off:false},0).wait(43));

	// pen07
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(483.55,460.45,1,1,0,0,0,544.9,363.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).wait(1).to({y:476.1},0).wait(1).to({y:491.7},0).wait(1).to({x:492.95,y:503.85},0).wait(1).to({x:505.05,y:511.7},0).wait(1).to({x:521.05},0).wait(1).to({x:533.9,y:507.4},0).wait(1).to({x:547.95},0).wait(1).to({x:561.65,y:502.7},0).wait(1).to({x:576.1,y:507},0).wait(1).to({x:592.85,y:511.3},0).wait(1).to({x:608.9,y:523.8},0).wait(1).to({x:620.25,y:541.35},0).wait(1).to({x:625.7,y:560.5},0).wait(1).to({y:565.55},0).to({_off:true},1).wait(43));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_102 = new cjs.Graphics().p("AhHBgQghgagLgoQgEgPAAgPQABgoAZggQAaghApgKQAngKAmASQAmASASAlQATAmgJAnQgJApggAbQggAagpABIgDAAQgnAAgggYg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AhgCsQghgagLgoQgEgPAAgPQAAgpAaggQAPgTAUgLIgHgSQgEgPAAgPQABgpAZggQAaghApgKQAngKAmASQAmASASAlQATAmgJAoQgJApggAaQgIAGgJAFQAQAjgJAmQgJApggAbQggAagoABIgDAAQgnAAgggYg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AhgD6QghgagLgoQgEgPAAgPQAAgpAaggIADgFQgSgVgHgbQgEgPAAgOQAAgpAaggQAPgUAUgLIgHgSQgEgPAAgPQABgpAZggQAaghApgKQAngKAmASQAmASASAlQATAmgJAoQgJApggAbQgIAGgJAFQAQAjgJAlQgGAegUAXQAKALAHAOQATAmgKAoQgJApggAbQggAagoABIgDAAQgnAAgggYg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AhHFEQghgagLgoQgEgPAAgPQABggAPgaQgbgYgKgkQgEgPAAgPQAAgpAaggIADgFQgSgUgHgbQgEgPAAgPQAAgpAaggQAPgUAUgLIgHgSQgEgPAAgPQABgpAZggQAaghApgKQAngKAmASQAmASASAlQATAmgJAoQgJApggAbQgIAGgJAFQAQAjgJAmQgGAegUAWQAKALAHAOQATAmgKAoQgEASgIAPQASAPAKAWQATAmgJAoQgJApggAbQggAagpABIgDAAQgnAAgggYg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AgMF6QghgZgLgpQgDgLgBgLQgYgGgUgPQghgagLgoQgEgPAAgPQAAgfAPgbQgbgYgKgkQgEgPAAgPQABgoAZggIAEgEQgSgVgIgcQgEgPAAgPQABgpAZggQAPgTAUgMIgGgSQgEgPAAgPQAAgpAaggQAaghAogKQAogKAmASQAlASATAlQATAmgKAoQgJApggAbQgIAGgIAFQAQAjgJAmQgHAfgTAWQAJALAHAOQATAlgJAoQgEASgJAPQASAQALAVQALAXABAXQAMADAMAGQAmASASAlQATAlgJApQgJApggAaQggAagpABIgEAAQgnAAgfgYg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AA5GYQgWgRgMgXQgPAEgPABQgqABghgZQghgagLgoQgDgLAAgLQgYgGgVgQQghgZgLgpQgEgOAAgPQAAggAQgaQgcgZgKgkQgEgOAAgOQABgpAZghIAEgEQgSgVgIgcQgEgOAAgPQABgpAZghQAQgTATgLIgGgTQgEgOAAgPQAAgpAaghQAaghAogJQApgKAmASQAkASATAlQATAlgKApQgJApgfAaQgIAHgIAFQAQAjgJAmQgHAegTAXQAJALAHAOQATAlgJAoQgEASgIAPQARAPAKAWQALAWABAYQANADALAFQAlASASAjIAGgCQApgKAmASQAlASATAlQATAmgKAoQgJApggAbQggAagpABIgDAAQgnAAgggYg");
	var mask_5_graphics_108 = new cjs.Graphics().p("ACBGYQgfAXgmABQgqABgggZQgWgRgMgXQgPAEgQABQgpABghgZQghgagLgoQgDgLgBgLQgYgGgVgQQghgZgLgpQgEgOAAgPQAAggAQgaQgcgZgJgkQgEgOAAgOQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgHAegTAXQAKALAHAOQATAlgKAoQgEASgIAPQARAPALAWQALAWACAYQAMADAMAFQAjASASAjIAHgCQAogKAmASQALAGAKAHQATgPAZgGQApgKAmASQAlASATAlQATAmgJAoQgKApggAbQggAagpABIgDAAQgoAAgfgYg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AA9GYQgeAXgmABQgpABghgZQgWgRgMgXQgPAEgQABQgqABghgZQghgagLgoQgDgLgBgLQgYgGgUgQQghgZgLgpQgEgOAAgPQAAggAPgaQgbgZgKgkQgEgOAAgOQABgpAZghIAEgEQgSgVgIgcQgEgOAAgPQABgpAZghQAPgTAUgLIgGgTQgEgOAAgPQAAgpAaghQAaghAogJQApgKAmASQAlASATAlQATAlgKApQgJApggAaQgIAHgIAFQAQAjgJAmQgHAegTAXQAJALAHAOQATAlgJAoQgEASgJAPQASAPALAWQALAWABAYQAMADAMAFQAkASATAjIAGgCQAogKAmASQALAGAJAHQAUgPAZgGQAlgJAiAOQAagdAmgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQggAagpABQgZABgWgJQgHAIgIAHQggAagpABIgEAAQgnAAgggYg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AgFGYQgfAXgmABQgqABghgZQgVgRgMgXQgPAEgRABQgpABghgZQghgagLgoQgDgLgBgLQgYgGgVgQQghgZgLgpQgEgOAAgPQABggAPgaQgbgZgKgkQgEgOAAgOQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgGAegUAXQAKALAHAOQATAlgKAoQgEASgIAPQASAPAKAWQAMAWABAYQAMADAMAFQAkASATAjIAGgCQAogKAmASQAMAGAJAHQATgPAYgGQAlgJAjAOQAZgdAmgJQAlgJAjAOQAOgQATgLQAigSAmAEQAmAFAcAaQAcAaAIAmQAIAlgPAjQgQAjghAUQggAUgngDQgSgCgQgGQgHAHgIAGQggAagpABQgZABgWgJQgGAIgJAHQggAagpABIgDAAQgnAAgfgYg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AhRGYQgfAXgmABQgqABghgZQgVgRgMgXQgPAEgRABQgpABghgZQghgagLgoQgDgLgBgLQgYgGgVgQQghgZgLgpQgEgOAAgPQABggAPgaQgbgZgKgkQgEgOAAgOQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgGAegUAXQAKALAHAOQATAlgKAoQgEASgIAPQASAPAKAWQAMAWABAYQAMADAMAFQAkASATAjIAGgCQAogKAmASQAMAGAJAHQAUgPAYgGQAlgJAiAOQAZgdAmgJQAlgJAjAOQAOgQATgLQAigSAmAEQAZADAUANQAPgSAUgMQAigSAmAFQAmAFAcAaQAcAaAIAlQAIAmgPAjQgQAjghAUQggATgngDQgbgCgXgNQgMAPgTALQggAUgngDQgSgCgQgGQgHAHgIAGQggAagpABQgZABgWgJQgGAIgJAHQggAagoABIgDAAQgnAAgggYg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AirGYQgfAXgmABQgqABghgZQgVgRgMgXQgPAEgRABQgpABghgZQghgagLgoQgDgLgBgLQgYgGgVgQQghgZgLgpQgEgOAAgPQABggAPgaQgbgZgKgkQgEgOAAgOQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgGAegUAXQAKALAHAOQATAlgKAoQgEASgIAPQASAPAKAWQAMAWABAYQAMADAMAFQAkASATAjIAGgCQAogKAmASQAMAGAJAHQAUgPAYgGQAlgJAjAOQAZgdAlgJQAlgJAjAOQAOgQATgLQAigSAmAEQAZADAUANQAPgSAUgMQAigSAmAFQAmAFAcAaQAQAOAJATQAIgHAJgFQAigSAmAFQAmAFAcAaQAcAaAIAlQAIAmgPAjQgQAjghAUQggATgngDQgmgDgdgZIgIgGQgNgOgIgQIgNAJQggATgngDQgbgCgXgNQgMAPgTALQggAUgngDQgSgCgQgGQgHAHgIAGQggAagpABQgZABgVgJQgGAIgJAHQggAagpABIgDAAQgnAAgggYg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AI9HLQgmgDgdgZIgIgGQgagcgHglIgBgSQgaAKgdgCQgmgEgdgYIgIgHQgNgOgIgQIgNAJQggAUgngDQgbgDgXgNQgMAQgTALQggATgngDQgSgCgQgGQgHAHgIAHQgfAagpABQgZAAgWgJQgGAIgJAHQggAagpABQgpABghgZQgfAXgmABQgqABghgZQgVgRgMgXQgPAFgRAAQgpABghgZQghgZgLgpQgDgLgBgLQgYgGgVgPQghgagLgoQgEgPAAgPQABggAPgaQgbgYgKgjQgEgPAAgPQAAgpAaggIADgFQgSgVgHgbQgEgPAAgPQAAgpAaggQAPgUAUgLIgHgSQgEgPAAgPQABgpAZggQAaghApgKQAogKAmASQAmASASAlQATAmgJAoQgJApggAbQgIAGgJAFQAQAjgJAmQgGAfgUAWQAKALAHAOQATAmgKAoQgEARgIAPQASAPAKAWQAMAXABAXQAMADAMAGQAkARATAjIAGgBQAogKAmASQAMAFAJAHQAUgPAYgFQAlgKAjAPQAZgeAmgJQAlgJAjAOQANgQATgLQAigSAmAFQAZADAUAMQAPgSAUgLQAigSAmAEQAmAFAcAaQAQAPAJASQAIgGAJgFQAigSAmAFQAmAEAcAaQAcAaAIAmQADALAAALQAcgLAfAEQAmAFAcAaQAcAaAIAlQAIAmgPAjQgQAjghAUQgcAQggAAIgLAAg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AKIIMQgmgEgegYIgHgHQgbgbgGgmQgDgRABgQQgSAFgVgBQgmgEgdgYIgIgHQgagbgHgmIgCgSQgZAKgdgCQgmgDgdgZIgIgGQgNgOgIgQIgNAJQggATgngDQgbgCgXgOQgNAQgSALQggAUgngDQgRgCgRgHQgGAIgIAGQggAagpABQgZABgWgJQgHAIgIAHQggAagpABQgpABghgZQgfAXgmABQgqABghgZQgVgRgNgXQgPAEgQABQgpABghgZQghgagLgoQgDgLgBgMQgYgFgVgQQghgZgLgpQgEgOAAgPQABggAPgaQgcgYgJgkQgEgOAAgPQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgHAegTAXQAKALAHAOQATAlgKApQgEASgIAPQARAPALAWQAMAVABAYQAMACAMAGQAkASASAjIAHgCQAogKAmASQALAFAKAIQATgPAZgGQAlgJAjAOQAZgdAmgJQAlgKAjAPQAOgRATgKQAigSAlAEQAZADAUAMQAOgRAVgMQAigSAmAFQAmAFAcAaQAQAOAJASQAIgGAJgFQAigSAmAFQAmAFAcAaQAcAaAIAlQADAMAAALQAcgLAfAEQAmAEAcAaQAcAaAIAmQAEATgCASQAWgGAXADQAmAFAcAaQAcAaAIAmQAIAlgQAjQgPAkghATQgdARggAAIgKAAg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AK4JhQgmgDgdgZIgIgGQgagcgHglQgGgmARgiQgmgEgegYIgHgHQgbgbgGgmQgDgQACgQQgTAEgVgBQgmgEgdgYIgIgHQgagbgHgmIgBgSQgaALgdgDQgmgDgdgZIgIgGQgNgOgIgQIgNAJQggATgngDQgbgCgXgNQgMAPgTALQgfAUgngDQgSgCgQgGQgHAHgIAGQggAagpABQgZABgWgJQgGAIgJAHQggAagpABQgpABghgZQgfAXgmABQgqABghgZQgVgRgMgXQgPAEgRABQgpABghgZQghgagLgoQgDgLgBgLQgYgGgVgQQghgZgLgoQgEgOAAgPQABggAPgaQgbgZgKgkQgEgOAAgPQAAgpAaghIADgEQgSgVgHgcQgEgOAAgPQAAgpAaghQAPgTAUgLIgHgTQgEgOAAgPQABgpAZghQAaghApgJQAogKAmASQAmASASAlQATAlgJApQgJApggAaQgIAHgJAFQAQAjgJAmQgGAegUAXQAKALAHAOQATAlgKApQgEASgIAPQASAPAKAWQAMAWABAYQAMADAMAFQAkASATAiIAGgCQAogKAmASQAMAGAJAHQAUgPAYgGQAlgJAjAOQAZgcAmgJQAlgJAjAOQAOgQATgLQAigSAmAEQAYAEAUAMQAPgSAUgMQAigSAmAFQAmAFAcAaQAQAOAJATQAIgHAJgFQAigSAmAFQAmAFAcAaQAcAZAIAlQADAMAAALQAcgLAfAEQAmAEAcAaQAcAaAIAmQAEATgCASQAWgFAXACQAmAFAcAaQAcAaAIAmQAIAlgQAjIgBAEIAEABQAmAFAcAaQAcAaAIAlQAIAmgPAjQgQAjghAUQgcARggAAIgLgBg");
	var mask_5_graphics_116 = new cjs.Graphics().p("ALMKoQgmgEgegYIgHgHQgbgbgGgmQgGgiANgfIgGgEIgHgHQgbgbgGgmQgHglARgjQgmgDgdgZIgIgGQgagcgHglQgCgRABgQQgTAFgUgCQgmgDgegZIgHgGQgbgcgGglIgCgSQgZAKgdgCQgmgEgegYIgHgHQgNgNgIgQIgNAIQghAUgmgDQgbgDgXgNQgNAQgSALQggATgmgDQgSgBgRgHQgGAHgIAHQggAagpABQgZAAgWgIQgHAHgIAHQggAagpABQgqABghgZQgeAXgnABQgpABghgZQgWgQgMgXQgPAEgQAAQgqABghgZQghgZgLgpQgDgLAAgLQgYgFgVgPQghgagLgoQgEgPAAgPQAAgfAQgbQgcgYgKgkQgEgPAAgPQABgpAZggIAEgEQgSgVgIgcQgEgPAAgPQABgpAZggQAPgTAUgMIgGgSQgEgPAAgPQAAgpAaggQAaghAogKQApgKAmASQAlASATAlQATAmgKAoQgJApggAbQgIAGgIAFQAQAkgJAlQgHAfgTAWQAJALAHAOQATAmgJAoQgEASgIAPQARAQALAVQALAXABAXQANADALAGQAlARASAjIAGgBQApgKAmASQALAFAKAHQATgOAZgGQAlgJAjAOQAZgeAmgJQAlgJAiAOQAOgQAUgLQAigSAmAFQAYADAUAMQAOgSAVgLQAigSAmAEQAmAFAcAaQAQAPAJASQAIgGAJgFQAigSAmAFQAmAEAcAaQAcAaAIAmQACALABALQAcgLAfADQAmAFAcAaQAcAaAIAlQAEATgCATQAVgGAXADQAmAFAcAaQAcAaAIAlQAIAmgPAjIgCAEIAFAAQAmAFAcAaQAcAaAIAmQAIAkgOAiIAJAHQAcAaAIAmQAIAlgQAjQgPAkghATQgcARghAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_5_graphics_102,x:280.1333,y:284.7484}).wait(1).to({graphics:mask_5_graphics_103,x:277.6083,y:292.3484}).wait(1).to({graphics:mask_5_graphics_104,x:277.6083,y:300.1484}).wait(1).to({graphics:mask_5_graphics_105,x:277.6083,y:307.5484}).wait(1).to({graphics:mask_5_graphics_106,x:280.9833,y:313.0234}).wait(1).to({graphics:mask_5_graphics_107,x:287.9583,y:315.9734}).wait(1).to({graphics:mask_5_graphics_108,x:295.1446,y:315.9734}).wait(1).to({graphics:mask_5_graphics_109,x:301.8833,y:315.9734}).wait(1).to({graphics:mask_5_graphics_110,x:308.6112,y:315.9734}).wait(1).to({graphics:mask_5_graphics_111,x:316.2112,y:315.9734}).wait(1).to({graphics:mask_5_graphics_112,x:325.2112,y:315.9734}).wait(1).to({graphics:mask_5_graphics_113,x:333.4112,y:318.7414}).wait(1).to({graphics:mask_5_graphics_114,x:340.8362,y:325.1914}).wait(1).to({graphics:mask_5_graphics_115,x:345.7112,y:333.7664}).wait(1).to({graphics:mask_5_graphics_116,x:347.6612,y:340.8164}).wait(44));

	// lady07
	this.instance_8 = new lib.CachedBmp_3();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).wait(58));

	// pen06
	this.instance_9 = new lib.手握筆();
	this.instance_9.setTransform(497,429.4,1,1,0,0,0,544.9,363.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).wait(1).to({x:491.05,y:444.35},0).wait(1).to({x:481.2,y:458.45},0).wait(1).to({x:469.2,y:468.7},0).wait(1).to({x:453.85,y:476.4},0).wait(1).to({x:436.75},0).wait(1).to({x:424.8,y:468.7},0).wait(1).to({x:412.45,y:458.45},0).wait(1).to({x:403.05,y:446.5},0).wait(1).to({x:392.9,y:432},0).wait(1).to({x:388.8,y:417.9},0).wait(1).to({y:409.9},0).to({_off:true},1).wait(58));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_90 = new cjs.Graphics().p("AhEBhQghgYgMgnQgGgRAAgRQABgpAaghQAaggAngJQAngKAmARQAlARATAkQATAkgHAoQgIAogeAcQgfAbgqADIgHABQgkAAgggXg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AhkCxQghgYgMgnQgGgRAAgSQABgpAaghQAUgYAcgLIgFgOQgGgRAAgRQABgqAaghQAaggAmgJQAogKAmARQAlARATAkQATAkgHApQgIAogeAbQgQAOgTAHQAPAhgGAkQgIApgeAbQgfAcgpADIgHAAQglAAgggWg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AiEEAQghgYgMgnQgGgRAAgSQABgpAaghQAUgZAcgLIgFgNQgGgRAAgSQABgoAaghQAUgZAcgLIgFgOQgGgRAAgRQABgqAaghQAaggAmgJQAogKAmARQAlARATAkQATAkgHApQgIAogeAcQgQAOgTAHQAPAhgGAjQgIApgeAbQgQAOgSAIQAOAggGAkQgIApgeAbQgeAcgqADIgHAAQglAAgggWg");
	var mask_6_graphics_93 = new cjs.Graphics().p("Ai3FAQghgYgNgnQgFgRAAgSQAAgpAaghQAaggAogKIALgCIgBgKQABgpAaghQAUgYAcgLIgFgNQgGgRAAgSQABgpAaghQAUgZAbgLIgFgOQgFgRAAgRQABgqAZghQAaggAngJQAogKAmARQAlARATAkQATAkgHApQgIAogeAcQgQAOgSAHQAPAhgHAkQgIApgeAaQgQAOgSAIQAPAggHAkQgIApgeAbQgbAYgkAGQABAPgDAPQgGApgfAbQgfAcgpADIgIAAQglAAgfgWg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AkAFqQghgYgMgnQgGgRAAgRQABgqAaghQAaggAngJQAegHAcAHQAGgYAQgUQAaggAogKIALgCIgBgKQABgpAaggQAUgZAbgLIgFgNQgGgRAAgSQABgpAaghQAUgZAcgLIgFgOQgGgRAAgRQABgqAaghQAaggAngJQAogKAmARQAlARATAkQATAkgHApQgIAogeAcQgQAOgTAHQAPAhgGAkQgIApgeAbQgQAOgSAHQAOAggGAkQgIApgeAbQgcAZgjAFQABAPgDAPQgHApgfAbQgfAcgoADQgUABgRgFQgJAjgbAYQgfAbgqADIgHABQglAAgggXg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AlNGEQghgYgMgnQgGgRAAgRQABgqAaghQAaggAngJQAogKAlARQAFgJAHgIQAaggAngKQAegHAcAHQAGgXAQgVQAaggAngJIALgDIgBgJQABgpAaghQAUgYAcgMIgFgNQgGgRAAgRQABgqAaghQAUgYAcgMIgFgNQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQATAkgHAoQgIApgeAbQgQAOgTAIQAPAggGAlQgIAogeAcQgQAOgSAHQAOAggGAkQgIAogeAcQgcAYgjAFQABAPgDAQQgHAogfAcQgfAbgpADQgUABgRgEQgIAigbAYQgfAcgqADQgeACgagNQgKASgPAOQgfAcgqACIgHAAQglAAgggWg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AkEGEIgPgMQgYAPgeACQgqADgigZQghgYgNgnQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAUAJAOAOQAPgJATgEQAngKAmARQAFgJAGgIQAaggAogKQAdgHAcAHQAHgXAPgVQAaggAngJIALgDIAAgJQAAgpAaghQAUgYAcgMIgFgNQgFgRAAgRQAAgqAaghQAUgYAcgMIgFgNQgFgRAAgSQAAgpAaghQAaggAogKQAogKAlASQAlARATAkQAUAkgIAoQgHApgfAbQgQAOgSAIQAPAggHAlQgHAogfAcQgPAOgTAHQAPAggHAkQgHAogfAcQgbAYgkAFQACAPgDAQQgIAogeAcQgfAbgqADQgTABgSgEQgJAigbAYQgfAcgoADQgeACgbgNQgJASgQAOQgfAcgpACIgIAAQglAAgfgWg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AjCGEIgPgMQgYAPgeACQgqADgigZQgggXgNgmIgMACQgpACgjgYQghgYgMgnQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQAFAJADAKQAjgGAhAPQAUAJAOAOQAQgJASgEQAogKAlARQAFgJAGgIQAaggAngKQAdgHAcAHQAHgXAQgVQAaggAngJIALgDIAAgJQAAgpAaghQAUgYAcgMIgFgNQgFgRAAgRQAAgqAaghQAVgYAcgMIgGgNQgFgRAAgSQAAgpAaghQAaggAogKQAogKAlASQAlARATAkQAUAkgIAoQgHApgfAbQgPAOgTAIQAPAggHAlQgHAogfAcQgPAOgTAHQAPAggHAkQgHAogfAcQgbAYgjAFQABAPgDAQQgIAogeAcQgfAbgqADQgTABgSgEQgJAigbAYQgfAcgpADQgeACgZgNQgKASgQAOQgfAcgpACIgIAAQglAAgfgWg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AiGGEIgPgMQgYAPgeACQgqADgigZQgggXgNgmIgMACQgpACgjgYQghgYgMgnQgDgLgCgLQgmABgggXQghgYgMgnQgGgRAAgRQABgqAaghQAagfAngJQAogKAmARQAlARATAjQALAVACAWQAagBAZAMQAlARATAkQAFAJADAKQAjgGAhAPQAUAJAOAOQAQgJASgEQAogKAlARQAFgJAGgIQAZggAogKQAdgHAcAHQAHgXAQgVQAaggAngJIALgDIAAgJQAAgpAaghQAUgYAcgMIgFgNQgFgRAAgRQAAgqAaghQAVgYAcgMIgGgNQgFgRAAgSQAAgpAaghQAaggAogKQAogKAlASQAlARATAkQAUAkgIAoQgHApgfAbQgPAOgTAIQAPAggHAlQgHAogfAcQgPAOgTAHQAPAggHAkQgHAogfAcQgbAYgjAFQABAPgDAQQgIAogeAcQgfAbgqADQgTABgSgEQgJAigbAYQgfAcgpADQgeACgagNQgKASgQAOQgeAcgpACIgIAAQglAAgfgWg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AhNGEIgOgMQgZAPgeACQgpADgjgZQgggXgMgmIgMACQgqACgigYQghgYgNgnQgDgLgBgLQgmABgggXQghgYgNgnQgFgRAAgRIABgSQgjAAgegWQghgYgNgmQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAlARATAkQATAjgGAmQAYABAWAKQAlARATAjQAMAVACAWQAagBAYAMQAlARATAkQAGAJADAKQAjgGAhAPQATAJAPAOQAPgJASgEQAngKAlARQAFgJAHgIQAaggAngKQAegHAcAHQAGgXAQgVQAaggAogJIALgDIgBgJQABgpAaghQAUgYAcgMIgFgNQgGgRAAgRQABgqAaghQAUgYAcgMIgFgNQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQATAkgHAoQgIApgeAbQgQAOgSAIQAPAggHAlQgIAogeAcQgQAOgSAHQAPAggHAkQgIAogeAcQgbAYgkAFQABAPgDAQQgHAogfAcQgfAbgpADQgTABgSgEQgJAigbAYQgfAcgqADQgeACgagNQgJASgQAOQgfAcgpACIgHAAQglAAgggWg");
	var mask_6_graphics_100 = new cjs.Graphics().p("AgvGEIgOgMQgZAPgeACQgpADgjgZQgggXgMgmIgMACQgqACgigYQghgYgNgnQgDgLgBgLQgmABgggXQghgYgNgnQgFgRAAgRIABgSQgjAAgegWQghgYgNgmQgFgRAAgRQAAgVAGgSIgPgJQghgYgNgnQgFgRAAgSQAAgpAaghQAaggAogKQAogKAlASQAlARATAkQAUAkgIAoIgEASQAiARASAiQATAjgGAmQAYABAWAKQAlARATAjQAMAVACAWQAagBAYAMQAlARATAkQAGAJADAKQAjgGAhAPQATAJAPAOQAPgJASgEQAngKAlARQAFgJAHgIQAaggAngKQAegHAcAHQAGgXAQgVQAaggAogJIALgDIgBgJQABgpAaghQAUgYAcgMIgFgNQgGgRAAgRQABgqAaghQAUgYAcgMIgFgNQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQATAkgHAoQgIApgeAbQgQAOgSAIQAPAggHAlQgIAogeAcQgQAOgSAHQAPAggHAkQgIAogeAcQgbAYgkAFQABAPgDAQQgHAogfAcQgfAbgpADQgTABgSgEQgJAigbAYQgfAcgqADQgeACgagNQgJASgQAOQgfAcgqACIgHAAQgkAAgggWg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AgZGcIgPgNQgYAQgeACQgqACgigYQgggYgNglIgMABQgpADgjgZQghgYgMgnQgEgKgBgLQgmAAgggWQghgYgMgnQgGgRAAgSIABgRQgjgBgegVQghgYgMgnQgGgQAAgSQAAgUAHgSIgQgKQghgYgMgnQgGgRAAgRQAAgXAJgVQghgYgNgnQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAlARATAkQAUAkgIApQgCALgEALQAXAQAOAaQATAkgHApIgFARQAjARASAjQASAigGAnQAYAAAXAKQAlARATAkQALAUACAWQAaAAAZALQAlARATAkQAFAKADAJQAjgGAhAQQAUAJAOAOQAPgJASgFQAngKAmARQAFgIAGgJQAaggAogJQAdgIAcAIQAHgYAQgUQAaggAngKIALgCIAAgKQAAgpAaggQAUgZAcgLIgFgNQgFgRAAgSQAAgpAaghQAUgZAcgLIgFgOQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAlARATAkQAUAkgIApQgHAogfAcQgQAOgSAHQAPAhgHAkQgHApgfAbQgPAOgTAHQAPAggHAkQgHApgfAbQgbAYgkAGQACAPgDAPQgIApgeAbQgfAcgqADQgTABgSgFQgJAigbAZQgfAbgpADQgeACgbgMQgJARgQAOQgfAcgpADIgIAAQglAAgegWg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_6_graphics_90,x:294.3792,y:253.3548}).wait(1).to({graphics:mask_6_graphics_91,x:291.1792,y:261.2798}).wait(1).to({graphics:mask_6_graphics_92,x:287.9792,y:269.1798}).wait(1).to({graphics:mask_6_graphics_93,x:282.8542,y:275.5798}).wait(1).to({graphics:mask_6_graphics_94,x:275.5792,y:279.8548}).wait(1).to({graphics:mask_6_graphics_95,x:267.8792,y:282.4298}).wait(1).to({graphics:mask_6_graphics_96,x:260.6292,y:282.4298}).wait(1).to({graphics:mask_6_graphics_97,x:254.0042,y:282.4298}).wait(1).to({graphics:mask_6_graphics_98,x:248.0042,y:282.4298}).wait(1).to({graphics:mask_6_graphics_99,x:242.2542,y:282.4298}).wait(1).to({graphics:mask_6_graphics_100,x:239.2542,y:282.4298}).wait(1).to({graphics:mask_6_graphics_101,x:237.1292,y:280.0798}).wait(59));

	// lady06
	this.instance_10 = new lib.CachedBmp_4();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90).to({_off:false},0).wait(70));

	// pen05
	this.instance_11 = new lib.手握筆();
	this.instance_11.setTransform(391.15,447.35,1,1,0,0,0,544.9,363.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(77).to({_off:false},0).wait(1).to({y:464.3},0).wait(1).to({x:395.35,y:480.4},0).wait(1).to({y:495.65},0).wait(1).to({y:513.45},0).wait(1).to({y:530.8},0).wait(1).to({x:384.35,y:545.2},0).wait(1).to({x:368.65,y:555.35},0).wait(1).to({x:353.4,y:561.3},0).wait(1).to({x:336.9,y:567.2},0).wait(1).to({x:321.25,y:575.25},0).wait(1).to({x:308.15,y:587.1},0).wait(1).to({x:303.45,y:597.3},0).to({_off:true},1).wait(70));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_77 = new cjs.Graphics().p("AhEBhQghgYgMgnQgGgRAAgRQABgpAaghQAaggAngJQAngKAmARQAlARATAkQATAkgHAoQgIAogeAcQgfAcgqACIgHABQgkAAgggXg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AhCCyQghgYgMgnQgGgRAAgSQABgpAaghIADgEQgUgTgJgcQgFgRAAgSQAAgpAaghQAaggAogKQAngKAlASQAlARATAkQAUAkgIAoQgGAhgVAYQAMALAIAQQATAkgHAoQgIApgeAbQgfAcgqADIgHAAQgkAAgggWg");
	var mask_7_graphics_79 = new cjs.Graphics().p("Ag5EAQghgYgNgnQgFgRAAgRQAAgmAWgfQgXgWgLggQgFgRAAgRQAAgpAaghIADgDQgTgUgJgdQgGgRAAgRQABgqAaghQAaggAngJQAngKAmARQAlARATAkQATAkgHApQgGAhgVAYQALAMAIAPQAUAkgIAoQgFAbgPAVQAPAOAKASQAUAkgIApQgHAogfAcQgfAbgpADIgIABQgkAAgfgXg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AgxFTQghgYgMgnQgGgRAAgSQABgpAZghQgagWgLgiQgFgRAAgSQAAgmAWgfQgYgUgKggQgFgRAAgSQAAgpAaghIADgEQgTgUgJgcQgGgRAAgSQABgpAaghQAaggAngKQAogKAlASQAlARATAkQATAkgHAoQgGAhgWAYQAMAMAIAQQAUAkgIAoQgFAbgPAVQAPANAKATQAUAkgIAoQgFAfgTAWQASAPALAVQATAkgHAoQgIApgeAbQgfAcgqADIgHAAQgkAAgggWg");
	var mask_7_graphics_81 = new cjs.Graphics().p("AgqGjQghgYgNgnQgFgRAAgRQAAgpAZghQgXgVgKggQgFgRAAgRQAAgpAaghQgagXgLgiQgGgRAAgQQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgDQgUgUgJgdQgFgRAAgRQAAgqAaghQAaggAogJQAogKAkARQAlARATAkQAUAkgIApQgGAhgVAYQAMAMAIAPQATAkgHApQgFAbgPAVQAPAOAKASQATAkgHAoQgGAegSAXQARAOALAVQAUAkgIApQgFAegSAWQAOAOAKASQAUAkgIApQgHAogfAcQgfAcgpACIgIABQgkAAgfgXg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AgzH6QghgYgMgnQgGgRAAgRQABgqAaghQAHgJAJgHQgUgUgJgdQgFgRAAgRQAAgpAZghQgXgVgKggQgFgRAAgRQAAgpAaghQgagWgLgiQgGgRAAgRQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgDQgUgUgJgdQgFgRAAgRQAAgqAaghQAaggAogJQAogKAkARQAlARATAkQAUAkgIApQgGAhgVAYQAMAMAIAPQATAkgHApQgFAbgPAVQAPAOAKASQATAkgHApQgGAegSAXQARAOALAUQAUAkgIApQgFAegSAWQAOAOAKASQAUAkgIApQgHAogfAcIgCACQAMAMAIAPQATAkgHApQgIAogeAcQgfAbgqADIgHABQgkAAgggXg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AhMJTQghgYgNgnQgFgRAAgRQAAgqAaghQANgPAQgKQgQgTgIgZQgGgRAAgRQABgqAaghQAHgJAJgHQgUgUgJgdQgFgRAAgRQAAgpAZghQgXgVgKggQgFgRAAgQQAAgpAaghQgagXgLgiQgGgRAAgRQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgDQgUgUgJgdQgFgRAAgRQAAgqAaghQAaggAogJQAogKAkARQAlARATAkQAUAkgIApQgGAhgVAYQAMAMAIAPQATAkgHApQgFAbgPAVQAPAOAKASQATAkgHApQgGAegSAXQARAOALAVQAUAkgIAoQgFAegSAWQAOAOAKASQAUAkgIApQgHAogfAcIgCACQAMAMAIAPQATAkgHApQgIAogeAcIgPALQAJAKAGAMQAUAkgIApQgHAogfAcQgfAbgoADIgIABQglAAgfgXg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AiZKPQghgYgMgnQgGgRAAgSQABgpAaghQAaggAngKQAXgFAVACQABgpAZghQANgPAQgLQgQgSgIgZQgGgRAAgRQABgqAaghQAHgJAJgHQgUgVgJgcQgFgRAAgRQAAgpAaghQgYgVgKgfQgFgRAAgRQAAgqAaggQgagXgLgiQgGgRAAgRQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgEQgUgUgJgcQgFgRAAgRQAAgqAaghQAaggAngJQAogKAlARQAlARATAkQAUAkgIApQgGAggVAZQAMAMAIAPQATAkgHApQgFAagPAWQAPANAKATQATAkgHApQgGAegSAXQARAOALAVQAUAkgIApQgFAdgSAXQAPANAJASQAUAkgIApQgHAogfAcIgCACQAMAMAIAPQATAkgHApQgIAogeAcIgPALQAJAKAGAMQAUAkgIApQgHAogfAcQgfAbgpADQgMABgLgCQAAALgCAKQgIApgdAbQgfAcgqADIgHAAQglAAgggWg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AjhK3QghgYgMgnQgGgRAAgSQABgpAaghQAaggAngKQAegHAcAIQAHgVAOgTQAaggAngJQAXgGAUADQABgpAZghQANgQAQgKQgQgSgIgZQgGgRAAgSQABgpAaghQAHgJAJgIQgUgUgJgcQgFgRAAgSQAAgoAaggQgYgWgKgfQgFgRAAgSQAAgpAaghQgagWgLgiQgGgRAAgSQABgmAWgfQgYgVgJggQgGgRAAgSQABgpAZghIADgEQgUgUgIgcQgFgRAAgSQAAgpAZghQAaggAogKQAogKAlASQAlARATAkQAUAkgIAoQgGAhgVAYQAMAMAIAQQATAkgHAoQgFAbgPAVQAPAOAKATQATAkgHAoQgGAfgSAWQARAPALAVQAUAkgIAoQgFAegSAXQAPANAJATQAUAjgIAoQgHApgfAbIgCACQAMAMAIAQQATAkgHAoQgIApgeAbIgPAMQAJAKAGAMQAUAkgIAoQgHApgfAbQgfAcgpADQgMABgLgCQAAAKgCALQgIAogeAcQgfAbgpADQgTACgSgFQgJAfgZAWQgfAcgqADIgHAAQglAAgggWg");
	var mask_7_graphics_86 = new cjs.Graphics().p("AkzLSQghgYgNgnQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARIAHAEQAGgNAKgMQAaggAngJQAegHAcAHQAGgVAPgSQAZggAngKQAWgFAWADQAAgqAaghQANgPAQgKQgQgTgIgZQgGgRAAgRQABgqAaghQAHgJAJgHQgUgUgJgdQgFgRAAgRQAAgoAZghQgXgVgKggQgFgRAAgRQAAgpAaghQgagXgLgiQgGgRAAgRQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgDQgUgUgJgdQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAlARATAkQAUAkgIApQgGAhgVAYQAMAMAIAPQATAkgHApQgFAbgPAVQAPAOAKASQATAkgHApQgGAegSAXQARAOALAVQAUAkgIApQgFAegSAWQAOAOAKASQAUAkgIAoQgHAogfAcIgCACQAMAMAIAPQATAkgHApQgIAogeAcIgPALQAJAKAGAMQAUAkgIApQgHAogfAcQgfAbgpADQgMABgLgBQAAAKgCAKQgIApgeAbQgfAcgqADQgTABgSgFQgJAggZAWQgeAcgqACQgiADgegRQgKAWgTARQgfAbgpADIgIABQglAAgfgXg");
	var mask_7_graphics_87 = new cjs.Graphics().p("AmGLyQghgYgMgnQgGgRAAgRQABgqAaghQAaggAngJQAogKAmARIADACQAHgQAMgPQAaggAngKQAogKAmASIAHADQAGgNAJgLQAaggAogKQAcgHAcAHQAHgVAOgSQAaggAogJQAWgGAVADQABgpAaghQAMgQAQgKQgQgTgIgYQgFgRAAgSQAAgpAaghQAIgKAIgHQgTgUgJgcQgGgRAAgRQABgpAZggQgXgWgKgfQgGgRAAgSQABgpAZghQgagWgLgiQgFgRAAgSQAAgmAWgfQgYgWgKgfQgFgRAAgSQAAgpAaghIADgEQgTgUgJgcQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQATAkgHAoQgGAhgWAYQAMAMAIAQQAUAkgIAoQgFAbgPAVQAPAOAKATQAUAkgIAoQgFAegTAXQASAPALAVQATAkgHAoQgGAegSAXQAPANAKATQATAkgHAnQgIApgeAbIgDACQAMAMAIAQQAUAkgIAoQgHApgfAbIgOALQAIAKAHANQATAkgHAoQgIApgeAbQgfAcgqADQgMAAgLgBQAAAKgCALQgHAogfAcQgfAbgpADQgUABgRgEQgKAfgZAWQgfAcgpADQgiACgdgRQgKAWgTARQgfAcgqADQggACgdgPQgKAagVAUQgfAbgqADIgHAAQglAAgggWg");
	var mask_7_graphics_88 = new cjs.Graphics().p("AnOMnQghgYgMgnQgGgRAAgRQABgqAaghQAaggAngJQAbgHAaAGQADgjAXgdQAaggAngJQAogKAmARIADACQAHgQAMgPQAaggAngKQAogKAmASIAHADQAGgNAJgLQAZggAogKQAdgHAcAHQAHgVAOgSQAaggAogJQAWgGAVADQABgpAaghQAMgQAQgKQgQgTgIgYQgFgRAAgSQAAgpAaghQAIgKAIgHQgTgTgJgcQgGgRAAgSQABgpAZggQgXgWgKgfQgGgRAAgSQABgpAZghQgagWgLgiQgFgRAAgSQAAgmAWgfQgYgWgKgfQgFgRAAgSQAAgpAaghIADgEQgTgUgJgcQgGgRAAgSQABgpAaghQAaggAngKQAogKAmASQAlARATAkQATAkgHAoQgGAhgWAYQAMAMAIAQQAUAkgIAoQgFAbgPAVQAPAOAKATQAUAkgIAoQgFAegTAXQASAPALAVQATAkgHAoQgGAegSAXQAPANAKATQATAkgHAoQgIApgeAaIgDACQAMAMAIAQQAUAkgIAoQgHApgfAbIgOALQAIAKAHANQATAkgHAoQgIApgeAbQgfAcgqADQgMAAgLgBQAAAKgCALQgHAogfAcQgfAbgpADQgUABgRgEQgKAfgZAWQgfAcgpADQgjACgdgRQgKAWgSARQgfAcgqADQggACgdgPQgKAagVAUQgfAbgqADQgQABgQgDIgBAKQgIAogeAcQgfAbgqADIgHAAQglAAgggWg");
	var mask_7_graphics_89 = new cjs.Graphics().p("AoLNlQghgYgNgnQgFgRAAgSQAAgpAaghQAaggAogKQAPgEAQABIAAgEQAAgpAaghQAaggAogKQAbgHAZAGQAEgjAWgcQAaggAogKQAogKAlASIAEABQAHgQALgPQAaggAogJQAogKAkARIAHAEQAGgNAKgMQAaggAngJQAegIAcAIQAGgVAPgSQAaggAngKQAWgFAWACQAAgpAaghQANgPAQgLQgQgSgIgZQgGgRAAgRQABgqAaggQAHgJAJgHQgUgVgJgcQgFgRAAgRQAAgpAZghQgXgWgKgfQgFgRAAgRQAAgqAaggQgagXgLgiQgGgRAAgRQABgmAWgfQgYgWgKggQgGgRAAgRQABgqAaghIADgEQgUgUgJgcQgFgRAAgRQAAgqAaghQAaggAogJQAogKAlARQAlARATAkQAUAkgIApQgGAggVAZQAMAMAIAPQATAkgHApQgFAagPAWQAPANAKATQATAkgHApQgGAegSAXQARAOALAVQAUAkgIApQgFAdgSAXQAOAOAKASQAUAkgIApQgHAogfAcIgCACQAMAMAIAPQATAjgHApQgIAogeAcIgPALQAJAKAGAMQAUAkgIApQgHAogfAcQgfAbgpADQgMABgLgCQAAALgCAKQgIApgeAbQgfAcgqADQgTABgSgFQgJAfgZAXQgfAcgqACQgiACgegQQgKAWgTARQgfAbgoADQghACgcgPQgKAbgWATQgfAcgpADQgRABgPgEIgCAKQgHApgfAbQgfAcgpADIgLAAQAAAMgCAMQgHApgfAbQgfAcgpADIgIAAQglAAgfgWg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_7_graphics_77,x:183.0292,y:271.9548}).wait(1).to({graphics:mask_7_graphics_78,x:183.2542,y:280.0048}).wait(1).to({graphics:mask_7_graphics_79,x:184.1042,y:287.8548}).wait(1).to({graphics:mask_7_graphics_80,x:184.9292,y:296.1048}).wait(1).to({graphics:mask_7_graphics_81,x:185.5792,y:304.1548}).wait(1).to({graphics:mask_7_graphics_82,x:185.5792,y:312.8548}).wait(1).to({graphics:mask_7_graphics_83,x:185.5792,y:321.7548}).wait(1).to({graphics:mask_7_graphics_84,x:179.6542,y:327.6798}).wait(1).to({graphics:mask_7_graphics_85,x:172.4542,y:331.7048}).wait(1).to({graphics:mask_7_graphics_86,x:164.1792,y:334.4548}).wait(1).to({graphics:mask_7_graphics_87,x:155.9292,y:337.6298}).wait(1).to({graphics:mask_7_graphics_88,x:148.7292,y:342.9298}).wait(1).to({graphics:mask_7_graphics_89,x:142.5792,y:349.0798}).wait(71));

	// lady05
	this.instance_12 = new lib.CachedBmp_5();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(77).to({_off:false},0).wait(83));

	// pen04
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(382.85,330.65,1,1,0,0,0,544.9,363.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).wait(1).to({x:365.65},0).wait(1).to({x:349,y:335.85},0).wait(1).to({x:333.35,y:342.6},0).wait(1).to({x:321.9,y:354.05},0).wait(1).to({x:314.1,y:367.55},0).wait(1).to({x:312.25,y:382.65},0).wait(1).to({x:317.35,y:397.9},0).wait(1).to({x:324.75,y:410.9},0).wait(1).to({x:336.3,y:422.95},0).wait(1).to({x:346.05,y:437.3},0).wait(1).to({x:334.5,y:444.7},0).wait(1).to({x:332.3,y:474.35},0).wait(1).to({x:347.55,y:485.4},0).wait(1).to({y:503.6},0).wait(1).to({x:341.6,y:519.25},0).wait(1).to({x:352.65,y:534.1},0).wait(1).to({x:367.5,y:547.65},0).wait(1).to({x:373.4,y:557},0).to({_off:true},1).wait(83));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_58 = new cjs.Graphics().p("AgVB1QgygLgcgqQgTgdgBgjQABgzAmgjQAmgkAzAEQAzAEAhAoQAhAogIAzQgIAygpAeQgfAWgjAAQgMAAgMgCg");
	var mask_8_graphics_59 = new cjs.Graphics().p("AhmCRQgygKgcgrQgTgdAAgjQABgyAmgkQAmgjAzAEQAZABAUAKQAJgUARgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAygpAeQgqAdgxgKQgRgDgOgHQgNAcgaAUQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AgNCRQgqgJgbgfQgHAJgKAHQgqAdgxgKQgygKgcgrQgTgdgBgjQABgyAmgkQAmgjA0AEQAyAEAgAlIAFgFQAmgjAzAEQAYABAUAKQAKgUASgRQAmgjAzAEQA0ADAgAoQAhApgIAzQgHAygqAeQgpAdgygKQgQgDgPgHQgMAcgbAUQgfAWgkAAQgLAAgMgDg");
	var mask_8_graphics_61 = new cjs.Graphics().p("AkXChQgygLgcgqQgTgdAAgjQABgzAmgjQAmgkAzAEQAlADAbAVQAJgPAPgOQAmgjAzAEQAyAEAfAlIAGgFQAmgjAzAEQAZACAUAJQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAygpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgIgaggQgHAJgKAHQgpAdgygKQgdgGgVgQQgNAXgXAQQgfAWgjAAQgMAAgNgCg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AlbDQQgygLgcgqQgTgdAAgjQABg0AmgjQAmgjAzAEIAKABQAIgkAcgbQAmgjA0AEQAlACAbAWQAJgQAOgNQAmgkA0AEQAxAEAgAmIAFgFQAmgkA0AEQAYACAUAKQAKgVASgQQAmgkAzAEQA0AEAgAoQAhAogIA0QgHAygqAdQgpAegygKQgQgEgOgHQgNAdgbATQgqAegxgKQgqgJgagfQgIAIgKAHQgqAdgwgJQgdgGgVgRQgNAXgXARQgoAcgwgIQgJAtgnAcQgfAWgjAAQgMAAgNgCg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AmREOQgygKgcgrQgTgdgBgjQABgzAmgkQAfgdAogCIAAgHQABgyAmgkQAmgjAzAEIAKABQAHgkAdgbQAmgkA0AEQAlADAbAVQAJgQAOgNQAmgjAzAEQAyAEAgAlIAFgFQAmgjA0AEQAYABAUAKQAKgUASgRQAmgjAzAEQA0ADAgAoQAhApgIAzQgHAzgqAeQgpAdgygKQgQgDgPgHQgMAcgbATQgqAdgxgKQgqgJgbgeQgHAJgKAHQgqAcgxgKQgcgGgWgQQgMAWgXARQgoAdgwgJQgJAugnAcQgbATggACQABAMgCALQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AmuFcQgygKgcgrQgTgdAAgjQABgzAmgkQANgMAQgIQgLgXAAgaQABg0AmgiQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgUASgRQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAtgmAbQgcAUgfACQAAALgCAMQgHAygqAeIgQAKQAOAfgGAjQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AmuGtQgygKgcgrQgTgdAAgjQABgvAfghQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgXAAgZQABgzAmgkQAfgdAngCIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgQAPgNQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZABAUAKQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgJgagfQgIAJgKAHQgpAdgygKQgdgGgUgRQgNAXgXARQgoAdgwgJQgJAugmAcQgcATgfACQAAALgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAaIAFAGQAhApgIAzQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_66 = new cjs.Graphics().p("Al/H5QgygLgcgqQgTgdAAgjQAAgbALgXQgXgNgQgYQgTgdAAgjQABgvAfgiQgHgIgGgJQgTgdAAgjQABgzAmgjQANgNAQgHQgLgXAAgaQABg0AmgjQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgVASgQQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAtgmAcQgcAUgfACQAAALgCAMQgHAygqAdIgQAKQAOAfgGAjQgFAmgZAaIAFAGQAhAogIA0QgCARgHAPQARAKAOARQAhAogIA0QgHAygqAeQgfAWgjAAQgMAAgNgCg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AkSI0QgygKgcgrQgTgdAAgjIAAAAIgMgCQgygLgcgqQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfgiQgHgHgGgKQgTgdAAgjQABgyAmgkQANgMAQgIQgLgXAAgaQABg0AmgjQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgUASgRQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAugmAbQgcAUgfACQAAALgCAMQgHAygqAeIgQAKQAOAfgGAiQgFAmgZAaIAFAGQAhAogIA0QgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAmQAhApgIAzQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_68 = new cjs.Graphics().p("AifJrQgygKgcgrQgQgZgDgdIgSgCQgygLgcgqQgTgdAAgjIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfghQgHgIgGgJQgTgcAAgjQABg0AmgjQANgNAQgIQgLgXAAgaQABgzAmgkQAfgdAngCIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgQAPgNQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZABAUAKQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgJgagfQgIAJgKAHQgpAdgygKQgdgGgUgRQgNAXgXARQgoAdgwgJQgJAugmAcQgcATgfACQAAAMgCALQgHAzgqAeIgQAKQAOAegGAkQgFAkgZAaIAFAGQAhApgIAzQgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAnQAZAeACAjIAEABQA0ADAgAoQAhApgIAzQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AhrKsQgygKgcgrQgTgdAAgjQAAgPAEgOQgWgOgPgXQgQgZgDgdIgSgCQgygLgcgqQgTgdAAgjIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfggQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgXAAgaQABgzAmgkQAfgdAngCIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgQAPgNQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZABAUAKQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgJgagfQgIAJgKAHQgpAdgygKQgdgGgUgRQgNAXgXARQgoAdgwgJQgJAugmAcQgcATgfACQAAAMgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAaIAFAGQAhAogIAzQgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAnQAZAeACAjIAEABQA0ADAgAoQAhApgIAzIgCAMQAQAKAMAQQAhApgIAzQgHAzgpAeQgfAWgjAAQgMAAgNgDg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AkhMsQgygLgcgqQgTgdgBgjQABg0AmgjQALgKAMgHQgOgbgBgfQABgzAmgkQAmgjA0AEIAJABIACgGQgWgOgPgXQgQgYgDgeIgSgCQgygLgcgqQgTgdAAgjIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgaALgXQgXgOgQgXQgTgdAAgjQABguAfgiQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgWAAgbQABgzAmgkQAfgcAngDIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgPAPgOQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZACAUAJQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgIgaggQgIAJgKAHQgpAdgygKQgdgGgUgQQgNAXgXAQQgoAdgwgJQgJAugmAcQgcAUgfACQAAALgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAbIAFAFQAhApgIAzQgCASgHAOQARALAOAPQAcAjgBAqQAyAEAgAnQAZAeACAkIAEAAQA0ADAgAoQAhApgIAzIgCAMQAQAKAMAQQAhApgIAzQgHAzgpAeQgoAcgwgIQgJAugmAcIgLAHQATAhgGApQgIAygpAeQgfAWgkAAQgMAAgMgCg");
	var mask_8_graphics_71 = new cjs.Graphics().p("Ai0N1QgygLgcgqQgTgdAAgjQAAgOADgNIgPgCQgygLgcgqQgTgdgBgjQABg0AmgjQALgKAMgHQgOgbgBgfQABgzAmgkQAmgjA0AEIAJABIACgGQgWgOgPgXQgQgYgDgeIgSgCQgygLgcgqQgTgdAAgjIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgZALgXQgXgOgQgYQgTgdAAgjQABguAfgiQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgWAAgbQABgzAmgkQAfgcAngDIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgPAPgOQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZACAUAJQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgIgaggQgIAJgKAHQgpAdgygKQgdgGgUgQQgNAXgXAQQgoAdgwgJQgJAugmAcQgcAUgfACQAAALgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAbIAFAFQAhApgIAzQgCASgHAOQARALAOAQQAcAjgBApQAyAEAgAnQAZAeACAkIAEAAQA0ADAgAoQAhApgIAzIgCAMQAQAKAMAQQAhApgIAzQgHAzgpAeQgoAcgwgIQgJAugmAcIgLAHQATAhgGApIgCAKIACAAQA0AEAgAoQAhAogIA0QgHAygqAeQgfAWgjAAQgMAAgNgCg");
	var mask_8_graphics_72 = new cjs.Graphics().p("AgdOzQgygKgcgrQgTgdAAgjIAAgJQgZAHgdgGQgygKgcgrQgTgdAAgjQAAgOADgMIgPgDQgygKgcgrQgTgdgBgjQABgzAmgkQALgKAMgHQgOgagBgfQABg0AmgjQAmgkA0AEIAJABIACgGQgWgNgPgXQgQgZgDgdIgSgDQgygKgcgrQgTgdAAgjIAAAAIgMgCQgygLgcgqQgTgcAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfgiQgHgHgGgKQgTgdAAgjQABgzAmgkQANgMAQgIQgLgXAAgaQABg0AmgjQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgUASgRQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAugmAbQgcAUgfACQAAALgCAMQgHAygqAeIgQAKQAOAfgGAjQgFAmgZAaIAFAGQAhAogIA0QgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAmQAZAdACAkIAEAAQA0AEAgAoQAhAogIA0IgCAMQAQAKAMAQQAhAogIA0QgHAygpAeQgoAdgwgIQgJAtgmAcIgLAHQATAigGAoIgCALIACAAQA0AEAgAnQAfAmgFAwQATgGAVACQA0AEAgAnQAhApgIAzQgHAzgqAeQgfAWgiAAQgMAAgNgDg");
	var mask_8_graphics_73 = new cjs.Graphics().p("Ah1QEQgygKgcgrQgTgdgBgjQABgzAmgkQAagYAhgGQgJgVAAgXIAAgKQgZAHgdgFQgygLgcgqQgTgdAAgjQAAgOADgNIgPgCQgygLgcgqQgTgdgBgjQABg0AmgjQALgLAMgHQgOgagBgfQABgzAmgkQAmgjA0AEIAJABIACgGQgWgOgPgXQgQgZgDgdIgSgCQgygLgcgqQgTgdAAgiIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfghQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgXAAgaQABgzAmgkQAfgdAngCIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgQAPgNQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZABAUAKQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgJgagfQgIAJgKAHQgpAdgygKQgdgGgUgRQgNAXgXARQgoAdgwgJQgJAugmAcQgcATgfACQAAAMgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAaIAFAGQAhApgIAzQgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAnQAZAeACAjIAEABQA0ADAgAnQAhApgIAzIgCAMQAQAKAMAQQAhApgIAzQgHAzgpAeQgoAcgwgIQgJAugmAcIgLAHQATAhgGApIgCAKIACAAQA0AEAgAoQAfAlgFAwQATgGAVACQA0AEAgAoQAhAogIA0QgHAygqAeQgWAQgYAEQAMAdgFAgQgIAzgoAeQgfAWgkAAQgMAAgMgDg");
	var mask_8_graphics_74 = new cjs.Graphics().p("AhwRnQgygKgcgrQgTgdgBgjQABgzAmgkIANgKQgWgOgPgXQgTgdgBgjQABgzAmgkQAagYAhgGQgJgVAAgXIAAgKQgZAHgdgFQgygLgcgqQgTgdAAgjQAAgOADgNIgPgCQgygLgcgqQgTgdgBgjQABg0AmgjQALgLAMgHQgOgagBgfQABgzAmgkQAmgjA0AEIAJABIACgGQgWgOgPgXQgQgZgDgdIgSgCQgygKgcgqQgTgdAAgjIAAgBIgMgCQgygKgcgrQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfghQgHgIgGgJQgTgdAAgjQABg0AmgjQANgNAQgIQgLgXAAgaQABgzAmgkQAfgdAngCIAAgHQABgzAmgkQAmgjA0AEIAJABQAIgkAdgbQAmgkAzAEQAlADAbAVQAJgQAPgNQAlgjAzAEQAyAEAgAlIAGgFQAmgjAzAEQAZABAUAKQAJgUASgRQAmgjA0AEQAzADAhAoQAhApgIAzQgIAzgpAeQgqAdgxgKQgRgDgOgHQgNAcgbAUQgpAdgygKQgqgJgagfQgIAJgKAHQgpAdgygKQgdgGgUgRQgNAXgXARQgoAdgwgJQgJAugmAcQgcATgfACQAAAMgCALQgHAzgqAeIgQAKQAOAegGAkQgFAlgZAaIAFAGQAhApgIAzQgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAnQAZAeACAjIAEABQA0ADAgAoQAhApgIAyIgCAMQAQAKAMAQQAhApgIAzQgHAzgpAeQgoAcgwgIQgJAugmAcIgLAHQATAhgGApIgCAKIACAAQA0AEAgAoQAfAlgFAwQATgGAVACQA0AEAgAoQAhAogIA0QgHAygqAeQgWAQgYAEQAMAdgFAgQgIAzgoAdQAQALAMAPQAhApgIAzQgIAzgoAeQgfAWgkAAQgMAAgMgDg");
	var mask_8_graphics_75 = new cjs.Graphics().p("AAhSeQgygLgbgqQgRgagDgfQgXAGgZgFQgygLgcgqQgTgdgBgjQABg0AmgjIANgLQgWgNgPgXQgTgdgBgjQABg0AmgjQAagZAhgGQgJgUAAgYIAAgJQgZAHgdgGQgygKgcgrQgTgdAAgjQAAgOADgNIgPgCQgygKgcgrQgTgdgBgjQABgzAmgkQALgKAMgHQgOgagBgfQABg0AmgjQAmgkA0AEIAJABIACgGQgWgNgPgXQgQgYgDgeIgSgCQgygKgcgrQgTgdAAgjIAAgBIgMgBQgygLgcgqQgTgdAAgjQAAgbALgXQgXgNgQgYQgTgdAAgjQABgvAfgiQgHgIgGgJQgTgdAAgjQABgzAmgkQANgNAQgHQgLgXAAgaQABg0AmgjQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgVASgQQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAtgmAcQgcAUgfACQAAALgCAMQgHAygqAeIgQAKQAOAfgGAjQgFAmgZAaIAFAGQAhAogIA0QgCARgHAPQARAKAOARQAcAigBAqQAyAEAgAnQAZAeACAkIAEAAQA0AEAgAoQAhAogIA0IgCALQAQALAMAQQAhAngIA0QgHAygpAeQgoAdgwgJQgJAugmAcIgLAHQATAigGAoIgCAKIACABQA0AEAgAnQAfAmgFAvQATgFAVACQA0AEAgAnQAhApgIAzQgHAzgqAeQgWAPgYAFQAMAcgFAhQgIAygoAeQAQAKAMAQQAZAeABAlQARgDATABQAzAEAhAoQAhAogIA0QgIAygpAeQgfAWgkAAQgMAAgMgCg");
	var mask_8_graphics_76 = new cjs.Graphics().p("ACeThQgygKgcgrQgTgdgBgjIABgQQgOABgOgDQgygLgbgqQgRgagDgeQgXAFgZgFQgygLgcgqQgTgdgBgjQABg0AmgjIANgKQgWgOgPgXQgTgdgBgjQABg0AmgjQAagYAhgGQgJgVAAgYIAAgJQgZAHgdgGQgygKgcgrQgTgdAAgjQAAgOADgMIgPgDQgygKgcgrQgTgdgBgjQABgzAmgkQALgKAMgHQgOgagBgfQABg0AmgjQAmgjA0AEIAJABIACgGQgWgNgPgXQgQgZgDgdIgSgDQgygKgcgrQgTgdAAgjIAAAAIgMgCQgygLgcgqQgTgdAAgjQAAgbALgWQgXgOgQgYQgTgdAAgjQABgvAfgiQgHgHgGgKQgTgdAAgjQABgzAmgkQANgMAQgIQgLgXAAgaQABg0AmgjQAfgdAngDIAAgGQABg0AmgjQAmgkA0AEIAJABQAIgkAdgbQAmgjAzAEQAlACAbAWQAJgQAPgNQAlgkAzAEQAyAEAgAmIAGgFQAmgkAzAEQAZACAUAKQAJgUASgRQAmgkA0AEQAzAEAhAoQAhAogIA0QgIAygpAeQgqAegxgKQgRgEgOgHQgNAdgbATQgpAegygKQgqgJgagfQgIAIgKAHQgpAdgygJQgdgGgUgRQgNAXgXARQgoAcgwgIQgJAugmAbQgcAUgfACQAAALgCAMQgHAygqAeIgQAKQAOAfgGAjQgFAmgZAaIAFAGQAhAogIA0QgCARgHAPQARAKAOARQAcAigBAqQAyAFAgAmQAZAeACAkIAEAAQA0AEAgAoQAhAogIA0IgCAMQAQAKAMAQQAhAogIAzQgHAygpAeQgoAdgwgIQgJAtgmAcIgLAHQATAigGAoIgCALIACAAQA0AEAgAnQAfAmgFAwQATgGAVACQA0AEAgAnQAhApgIAzQgHAzgqAeQgWAPgYAFQAMAcgFAhQgIAygoAeQAQAKAMAQQAZAfABAlQARgEATABQAzAEAhAoQAhAogIA0IAQAAQAzAEAhAnQAhApgIAzQgIAzgpAeQgfAWgkAAQgMAAgMgDg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(58).to({graphics:mask_8_graphics_58,x:186.403,y:160.9313}).wait(1).to({graphics:mask_8_graphics_59,x:178.328,y:163.7813}).wait(1).to({graphics:mask_8_graphics_60,x:169.478,y:163.7813}).wait(1).to({graphics:mask_8_graphics_61,x:160.628,y:165.3563}).wait(1).to({graphics:mask_8_graphics_62,x:153.853,y:170.0313}).wait(1).to({graphics:mask_8_graphics_63,x:148.378,y:176.2813}).wait(1).to({graphics:mask_8_graphics_64,x:145.528,y:184.1063}).wait(1).to({graphics:mask_8_graphics_65,x:145.528,y:192.1813}).wait(1).to({graphics:mask_8_graphics_66,x:145.528,y:199.7313}).wait(1).to({graphics:mask_8_graphics_67,x:145.528,y:205.7063}).wait(1).to({graphics:mask_8_graphics_68,x:145.528,y:211.1813}).wait(1).to({graphics:mask_8_graphics_69,x:145.528,y:217.6813}).wait(1).to({graphics:mask_8_graphics_70,x:145.528,y:230.4563}).wait(1).to({graphics:mask_8_graphics_71,x:145.528,y:237.7563}).wait(1).to({graphics:mask_8_graphics_72,x:145.528,y:244.0063}).wait(1).to({graphics:mask_8_graphics_73,x:145.528,y:252.0813}).wait(1).to({graphics:mask_8_graphics_74,x:145.528,y:261.9813}).wait(1).to({graphics:mask_8_graphics_75,x:145.528,y:267.4313}).wait(1).to({graphics:mask_8_graphics_76,x:145.528,y:274.2063}).wait(84));

	// lady04
	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(58).to({_off:false},0).wait(102));

	// pen03
	this.instance_15 = new lib.手握筆();
	this.instance_15.setTransform(408.9,326.65,1,1,0,0,0,544.9,363.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(43).to({_off:false},0).wait(1).to({y:342.15},0).wait(1).to({x:400.9,y:357.15},0).wait(1).to({x:390.1,y:369.35},0).wait(1).to({x:376,y:375.95},0).wait(1).to({x:360.95,y:381.1},0).wait(1).to({x:346.4,y:388.15},0).wait(1).to({x:340.75,y:404.6},0).wait(1).to({x:349.2,y:418.7},0).wait(1).to({x:362.35,y:431.35},0).wait(1).to({x:375.5,y:445.9},0).wait(1).to({x:368,y:467.05},0).wait(1).to({x:370.65,y:488.15},0).wait(1).to({y:500.55},0).wait(1).to({x:366.65,y:519.85},0).to({_off:true},1).wait(102));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_43 = new cjs.Graphics().p("Ag1BqQgogVgRgqQgJgVAAgWQABguAggiQAfgiAugEQAtgEAlAdQAlAcAIAtQAIAtgaAoQgZAmgsAMQgQAFgPAAQgbAAgagOg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AhBC6QgogVgRgqQgJgVAAgWQABgvAgghIAMgMQgHgLgGgNQgIgVAAgWQAAguAggiQAfgiAtgFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAPgOAMQAOAUAFAaQAIAugaAoQgZAmgsAMQgQAEgOAAQgcAAgagNg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AhREJQgpgVgRgqQgIgVAAgWQAAguAggiQAJgKAKgHQgFgJgFgKQgIgVAAgWQAAguAggiIANgMQgIgLgFgNQgJgVAAgWQABguAggiQAfgiAtgFQAugEAlAdQAlAcAIAuQAIAugaAnQgKAQgOAMQAOAUAEAaQAJAtgaAoQgNATgSANQALATAEAXQAJAugaAnQgZAmgtANQgOAEgQAAQgbAAgagOg");
	var mask_9_graphics_46 = new cjs.Graphics().p("AhwFVQgogVgRgqQgJgVAAgWQABgvAggiQAQgSAVgJQgJgVAAgWQABguAggiQAJgJAKgHQgGgJgEgKQgJgVAAgWQABgvAggiIAMgMQgHgLgGgNQgIgVAAgWQAAguAggiQAegiAugFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAQgOAMQAOAUAFAaQAIAugaAoQgMASgTANQAMATAEAXQAIAugaAnQgTAdgeAOQAEALACALQAIAugaAoQgZAmgrAMQgQAEgPAAQgcAAgagNg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AiqGLQgpgVgRgqQgIgVAAgWQAAgvAggiQAfgiAugEIAIgBQAEgnAcgeQARgSAUgJQgIgVAAgWQAAgtAggiQAJgKAKgHQgFgJgFgKQgIgVAAgWQAAgvAfgiIANgMQgIgLgFgNQgIgVAAgWQABguAfgiQAfgiAugFQAugEAlAdQAlAcAIAuQAIAugaAnQgKAQgOAMQAOAUAEAaQAJAugaAoQgNATgSANQALATAEAWQAJAugaAnQgTAdgfAOQAEALACALQAJAugaAoQgZAmgtAMQgOAEgOAAQgCAcgQAaQgZAmgtAMQgPAEgQAAQgbAAgagNg");
	var mask_9_graphics_48 = new cjs.Graphics().p("Aj1GnQgpgVgRgqQgIgVAAgWQAAgvAggiQAfgiAugEQAegDAZALQAHgOAMgMQAfgiAugEIAIgBQAEgnAcgeQAPgSAUgJQgIgVAAgWQABgtAggiQAIgKAKgHQgFgJgEgKQgJgVAAgWQABgvAggiIAMgMQgIgLgFgNQgIgVAAgWQAAguAggiQAfgiAugFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAQgOAMQAOAUAFAaQAIAugaAoQgNATgSANQAMATAEAXQAIAtgaAnQgTAdgeAOQAEALACALQAIAugaAoQgZAmgsAMQgPAEgOAAQgCAcgRAaQgZAmgrAMQgnALgkgQIgGALQgZAmgtAMQgQAEgPAAQgbAAgagNg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AlDHBQgogVgRgqQgJgVAAgWQABgvAggiQAfgiAugEQAggDAcANQAHgNALgLQAfgiAugEQAdgDAZALQAIgOALgMQAfgiAtgEIAIgBQAEgnAcgeQARgSAUgJQgIgUAAgWQAAguAggiQAJgKAKgHQgGgJgEgKQgIgVAAgWQAAgvAggiIAMgMQgHgLgFgNQgJgVAAgWQABguAggiQAfgiAugFQAugEAlAdQAlAcAIAuQAIAugaAnQgKAQgOAMQAOAUAEAaQAJAugaAoQgNATgSANQALATAEAXQAJAtgaAnQgTAdgfAOQAEALACALQAJAugaAoQgZAmgtAMQgOAEgOAAQgDAcgQAaQgZAmgtAMQgnALgjgQIgGALQgZAmgsAMQgqALgngSIgFAJQgZAmgsAMQgQAEgPAAQgcAAgagNg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AmMH5QgogVgRgqQgJgVAAgWQABgvAggiQAfgiAugEQATgCARAEQACgsAeggQAfgiAugFQAhgCAcANQAHgNAKgLQAfgiAugFQAegCAYAKQAIgNALgMQAfgiAugFIAIAAQAEgnAcgdQAQgSAVgKQgJgUAAgWQABgvAggiQAJgJAKgHQgGgJgEgLQgJgVAAgWQABguAggiIAMgMQgHgLgGgNQgIgVAAgWQAAgvAggiQAfgiAugEQAvgEAlAdQAkAcAIAtQAJAugaAoQgLAQgOALQAOAVAFAaQAIAugaAnQgMAUgTANQAMASAEAXQAIAugaAoQgTAcgeAOQAEAKACAMQAIAugaAnQgZAmgsANQgOAEgOAAQgDAcgRAZQgZAmgsANQgnAKgkgPIgGAKQgZAmgsANQgpALgngSIgFAIQgZAmgtANQgdAIgbgHQgBAggTAdQgZAmgsAMQgQAFgPAAQgcAAgagOg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AmMJQQgogVgRgqQgJgVAAgWQABgvAggiIAGgGQgTgSgLgaQgJgVAAgWQABgvAggiQAfgiAugEQATgCARAEQACgsAeggQAfgiAugFQAhgCAcANQAHgNAKgLQAfgiAugFQAegCAYAKQAIgNALgMQAfghAugFIAIAAQAEgnAcgeQAQgSAVgKQgJgUAAgWQABgvAggiQAJgJAKgHQgGgJgEgLQgJgVAAgWQABguAggiIAMgMQgHgLgGgNQgIgVAAgWQAAgvAggiQAfgiAugEQAvgEAlAdQAkAcAIAtQAJAugaAoQgLAQgOALQAOAVAFAaQAIAugaAnQgMAUgTANQAMASAEAXQAIAugaAoQgTAdgeAOQAEAKACAMQAIAtgaAnQgZAmgsANQgOAEgOAAQgDAcgRAZQgZAmgsANQgnAKgkgPIgGAKQgZAmgsANQgpALgngSIgFAIQgZAmgtANQgdAIgbgHQgBAggTAdQgIAMgKAKQAdAaAHAoQAIAugaAoQgZAmgsAMQgQAFgPAAQgcAAgagOg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AkSKSQgogVgRgqQgJgVAAgWIABgMQgdABgcgPQgogVgRgqQgJgVAAgWQABguAggiIAGgHQgTgSgLgaQgJgVAAgWQABguAggiQAfgiAugFQATgBARADQACgrAeghQAfgiAugEQAhgDAcANQAHgNAKgLQAfghAugEQAegDAYALQAIgOALgMQAfgiAugEIAIgBQAEgnAcgeQAQgSAVgJQgJgVAAgWQABguAggiQAJgKAKgHQgGgJgEgKQgJgVAAgWQABgvAggiIAMgMQgHgLgGgNQgIgVAAgWQAAguAggiQAfgiAugFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAQgOAMQAOAUAFAaQAIAugaAoQgMATgTANQAMATAEAXQAIAugaAnQgTAdgeAOQAEALACALQAIAugaAoQgZAlgsAMQgOAEgOAAQgDAcgRAaQgZAmgsAMQgnALgkgQIgGALQgZAmgsAMQgpAMgngTIgFAJQgZAmgtAMQgdAIgbgHQgBAhgTAcQgIANgKAJQAdAbAHAoQADAQgCAQQArgBAhAbQAlAcAIAtQAIAugaAoQgZAmgsAMQgQAEgQAAQgbAAgagNg");
	var mask_9_graphics_53 = new cjs.Graphics().p("Ah7LRQgpgVgRgqQgIgVAAgWIABgMIgBAAQgsANgpgWQgogVgRgqQgJgVAAgWIABgLQgdAAgcgOQgogVgRgqQgJgVAAgWQABgvAggiIAGgGQgTgSgLgaQgJgVAAgWQABgvAggiQAfgiAugEQATgCARAEQACgsAegfQAfgiAugFQAhgCAcANQAHgNAKgLQAfgiAugFQAegCAYAKQAIgNALgMQAfgiAugFIAIAAQAEgnAcgeQAQgSAVgKQgJgUAAgWQABgvAggiQAJgJAKgHQgGgJgEgLQgJgVAAgWQABguAggiIAMgMQgHgLgGgNQgIgVAAgWQAAgvAggiQAfgiAugEQAvgEAlAdQAkAcAIAtQAJAugaAoQgLAQgOALQAOAVAFAaQAIAugaAnQgMAUgTANQAMASAEAXQAIAugaAoQgTAdgeAOQAEAKACAMQAIAugaAnQgZAmgsANQgOAEgOAAQgDAbgRAZQgZAmgsANQgnAKgkgPIgGAKQgZAmgsANQgpALgngSIgFAIQgZAmgtANQgdAIgbgHQgBAggTAdQgIAMgKAKQAdAaAHAoQADARgCAQQArgBAhAaQAlAcAIAuQADAQgBAQQAKgDAKgBQAvgEAkAdQAkAcAIAtQAJAugaAoQgZAmgsAMQgPAFgQAAQgbAAgagOg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AhWMxQgogVgRgqQgJgVAAgWQABguAggiIACgDIgGgDQgpgVgRgqQgIgVAAgWIABgMIgBAAQgsANgpgWQgogVgRgqQgJgVAAgWIABgMQgdABgcgOQgogVgRgqQgJgVAAgWQABgvAggiIAGgGQgTgSgLgaQgJgVAAgWQABgvAggiQAfghAugEQATgCARAEQACgsAeggQAfgiAugFQAhgDAcAOQAHgNAKgLQAfgiAugFQAegCAYAKQAIgNALgMQAfgiAugFIAIAAQAEgoAcgdQAQgSAVgKQgJgVAAgVQABgvAggiQAJgJAKgIQgGgJgEgKQgJgVAAgWQABguAggiIAMgMQgHgLgGgNQgIgVAAgWQAAgvAggiQAfgiAugEQAvgEAlAdQAkAcAIAtQAJAugaAoQgLAQgOALQAOAVAFAaQAIAugaAnQgMAUgTANQAMASAEAXQAIAugaAoQgTAdgeAOQAEAKACAMQAIAugaAnQgZAmgsANQgOAEgOAAQgDAcgRAZQgZAmgsANQgnAKgkgPIgGAKQgZAlgsANQgpALgngTIgFAJQgZAmgtANQgdAIgbgHQgBAggTAdQgIAMgKAKQAdAaAHAoQADARgCAQQArgBAhAaQAlAcAIAuQADAQgBAPQAKgCAKgBQAvgEAkAdQAkAcAIAtQAJAugaAoQgHAKgIAIQANAGAMAJQAlAcAIAuQAIAugaAnQgZAmgrAMQgQAFgQAAQgbAAgagOg");
	var mask_9_graphics_55 = new cjs.Graphics().p("AiTORQgogVgRgqQgJgVAAgWQABguAggiQAYgbAhgIQgMgPgIgTQgJgVAAgWQABgvAggiIACgCIgGgEQgpgVgRgqQgIgVAAgWIABgLIgBAAQgsAMgpgVQgogVgRgqQgJgVAAgWIABgMQgdABgcgPQgogVgRgqQgJgVAAgWQABguAggiIAGgHQgTgRgLgbQgJgVAAgVQABguAggiQAfgiAugFQATgBARAEQACgsAeghQAfgiAugEQAhgDAcANQAHgMAKgMQAfgiAugEQAegDAYALQAIgOALgMQAfgiAugEIAIgBQAEgnAcgeQAQgRAVgKQgJgVAAgWQABguAggiQAJgKAKgHQgGgJgEgKQgJgVAAgWQABgvAggiIAMgMQgHgKgGgOQgIgVAAgWQAAguAggiQAfgiAugFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAQgOAMQAOAUAFAaQAIAugaAoQgMAUgTAMQAMATAEAXQAIAugaAnQgTAdgeAOQAEALACALQAIAugaAoQgZAmgsAMQgOAEgOABQgDAcgRAZQgZAmgsAMQgnALgkgPIgGAKQgZAmgsAMQgpAMgngTIgFAJQgZAmgtAMQgdAHgbgFQgBAfgTAcQgIANgKAKQAdAaAHAoQADARgCAPQArgBAhAbQAlAcAIAtQADARgBAPQAKgCAKgCQAvgEAkAdQAkAcAIAuQAJAugaAnQgHAKgIAJQANAGAMAJQAlAcAIAtQAIAugaAoQgZAmgrAMIgBAAQAUAYAGAhQAIAugaAnQgYAmgsAMQgQAFgQAAQgbAAgagOg");
	var mask_9_graphics_56 = new cjs.Graphics().p("AhMPYQgpgVgRgqQgIgVAAgWQAAgQAEgPIgJgEQgogVgRgqQgJgVAAgWQABgvAggiQAYgaAhgJQgMgPgIgTQgJgVAAgWQABguAggiIACgDIgGgDQgpgVgRgqQgIgVAAgWIABgMIgBAAQgsANgpgWQgogVgRgqQgJgVAAgWIABgLQgdAAgcgOQgogVgRgqQgJgVAAgWQABgvAggiIAGgGQgTgRgLgaQgJgVAAgWQABgvAggiQAfgiAugEQATgCARAEQACgsAeggQAfgiAugFQAhgCAcANQAHgNAKgLQAfgiAugFQAegCAYAKQAIgNALgMQAfgiAugFIAIAAQAEgnAcgeQAQgSAVgKQgJgUAAgWQABgvAggiQAJgJAKgHQgGgJgEgLQgJgVAAgWQABguAggiIAMgMQgHgLgGgNQgIgVAAgWQAAgvAggiQAfgiAugEQAvgEAlAdQAkAcAIAtQAJAugaAoQgLAQgOALQAOAVAFAaQAIAugaAnQgMAUgTANQAMASAEAXQAIAugaAoQgTAdgeAOQAEAKACAMQAIAugaAnQgZAmgsANQgOAEgOAAQgDAcgRAZQgZAmgsANQgnAKgkgPIgGAKQgZAmgsANQgpALgngSIgFAIQgZAmgtANQgdAIgbgHQgBAggTAdQgIAMgKAJQAdAaAHAoQADARgCAQQArgBAhAaQAlAcAIAuQADAQgBAQQAKgDAKgBQAvgEAkAdQAkAcAIAtQAJAugaAoQgHAKgIAIQANAGAMAJQAlAcAIAuQAIAugaAnQgZAmgrAMIgBABQAUAXAGAhQAFAbgHAYQAPAGANALQAkAcAIAtQAJAugaAoQgZAmgtAMQgOAFgQAAQgbAAgagOg");
	var mask_9_graphics_57 = new cjs.Graphics().p("Ah7Q2QgpgVgRgqQgIgVAAgWQAAgvAggiQATgUAYgKQgMgPgIgTQgIgVAAgWQAAgQAEgPIgJgEQgogVgRgqQgJgVAAgWQABguAggiQAYgbAhgIQgMgPgIgTQgJgVAAgWQABgvAggiIACgDIgGgDQgpgVgRgqQgIgVAAgWIABgMIgBABQgsAMgpgVQgogVgRgqQgJgVAAgWIABgMQgdABgcgPQgogVgRgqQgJgVAAgWQABgtAggiIAGgHQgTgSgLgaQgJgVAAgWQABguAggiQAfgiAugFQATgBARADQACgrAeghQAfgiAugEQAhgDAcANQAHgNAKgLQAfgiAugEQAegDAYALQAIgOALgMQAfgiAugEIAIgBQAEgnAcgeQAQgSAVgJQgJgVAAgWQABguAggiQAJgKAKgHQgGgJgEgKQgJgVAAgWQABgvAggiIAMgMQgHgLgGgNQgIgVAAgWQAAguAggiQAfgiAugFQAvgEAlAdQAkAcAIAuQAJAugaAnQgLAQgOAMQAOAUAFAaQAIAugaAoQgMATgTANQAMATAEAXQAIAugaAnQgTAdgeAOQAEALACALQAIAugaAoQgZAmgsAMQgOAEgOAAQgDAcgRAaQgZAmgsAMQgnALgkgQIgGALQgZAmgsAMQgpAMgngTIgFAJQgZAmgtAMQgdAIgbgHQgBAhgTAcQgIANgKAJQAdAbAHAoQADAQgCAPQArgBAhAbQAlAcAIAtQADAQgBAQQAKgDAKgBQAvgEAkAdQAkAcAIAuQAJAugaAnQgHAKgIAIQANAGAMAKQAlAcAIAtQAIAugaAoQgZAmgrAMIgBAAQAUAYAGAhQAFAagHAZQAPAGANAKQAkAcAIAuQAJAugaAnQgVAggjAOQAVAYAFAgQAJAugaAoQgZAmgsAMQgQAEgPAAQgbAAgagNg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_9_graphics_43,x:202.7797,y:149.2657}).wait(1).to({graphics:mask_9_graphics_44,x:201.6047,y:157.2407}).wait(1).to({graphics:mask_9_graphics_45,x:199.9547,y:165.2157}).wait(1).to({graphics:mask_9_graphics_46,x:196.9047,y:172.7407}).wait(1).to({graphics:mask_9_graphics_47,x:191.0547,y:178.1407}).wait(1).to({graphics:mask_9_graphics_48,x:183.5297,y:180.9407}).wait(1).to({graphics:mask_9_graphics_49,x:175.7797,y:183.5407}).wait(1).to({graphics:mask_9_graphics_50,x:168.5047,y:189.1657}).wait(1).to({graphics:mask_9_graphics_51,x:168.5047,y:197.8657}).wait(1).to({graphics:mask_9_graphics_52,x:168.5047,y:204.4305}).wait(1).to({graphics:mask_9_graphics_53,x:168.5047,y:210.7657}).wait(1).to({graphics:mask_9_graphics_54,x:168.5047,y:220.3805}).wait(1).to({graphics:mask_9_graphics_55,x:168.5047,y:230.0055}).wait(1).to({graphics:mask_9_graphics_56,x:168.5047,y:237.0657}).wait(1).to({graphics:mask_9_graphics_57,x:168.5047,y:246.4305}).wait(103));

	// lady03
	this.instance_16 = new lib.CachedBmp_7();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(43).to({_off:false},0).wait(117));

	// pen02
	this.instance_17 = new lib.手握筆();
	this.instance_17.setTransform(472.55,345.5,1,1,0,0,0,544.9,363.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).wait(1).to({x:487.05,y:355.85},0).wait(1).to({x:502.55,y:365.2},0).wait(1).to({x:515.5,y:374},0).wait(1).to({x:529.45,y:368.3},0).wait(1).to({x:534.65,y:353.8},0).wait(1).to({y:337.2},0).wait(1).to({x:537.45,y:321.3},0).wait(1).to({y:303.45},0).wait(1).to({x:534.7,y:286.55},0).wait(1).to({x:521.35,y:272.7},0).wait(1).to({x:508.2,y:265.2},0).wait(1).to({x:496.45,y:256.75},0).wait(1).to({x:479.1,y:249.7},0).wait(1).to({x:463.1,y:245.5},0).wait(1).to({x:446.2,y:250.2},0).wait(1).to({x:431.65,y:256.3},0).wait(1).to({x:415.2,y:267.1},0).wait(1).to({x:401.1,y:283.55},0).to({_off:true},1).wait(117));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_24 = new cjs.Graphics().p("AgVB1QgygLgcgqQgTgdgBgjQABgzAmgjQAmgkAzAEQAzAEAhAoQAhAogIAzQgIAygpAeQgfAWgjAAQgMAAgMgCg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AAwCoQgxgKgcgrQgPgWgEgbQgUAEgXgFQgygLgcgqQgTgcgBgjQABg0AmgjQAmgkA0AEQAzAEAgAoQAXAcADAhQAOgCAQABQAzAEAhAnQAhAogIAzQgIAzgpAeQgfAWgjAAQgNAAgMgDg");
	var mask_10_graphics_26 = new cjs.Graphics().p("AB+DcQgygKgcgrQgQgYgDgdQgcAJgegGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgqQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAOABQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAhAmQAhApgIAzQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_27 = new cjs.Graphics().p("ADBEGQgygLgcgqQgJgOgFgPQgUADgXgEQgygLgbgqQgQgZgDgdQgbAJgfgGQgygKgcgrQgPgWgEgaQgUADgXgEQgygLgcgqQgTgdgBgjQABg0AmgjQAmgkA0AEQAzAEAhAoQAXAcADAhQAOgDAQACQAzAEAgAnQAYAeACAjQAVgHAYACQA0AEAgAoQAQASAGAVQAOgCAPABQAzAEAhAoQAhAogIA0QgIAygpAeQgfAWgjAAQgMAAgNgCg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AEEEyQgygLgcgqQgKgQgFgSQgUADgVgEQgygLgcgqQgJgOgFgPQgVADgVgEQgygLgcgqQgQgZgDgdQgbAJgfgGQgygKgcgqQgPgXgEgaQgVADgWgEQgygLgcgqQgTgdgBgjQABg0AmgjQAmgkA0AEQAzAEAhAoQAXAcADAhQAOgDAQACQAzAEAhAnQAYAeACAjQAVgHAXACQA0AEAgAoQAQATAGAVQAOgCAPABQAzAEAhAnQARAVAGAYQANgCAOABQA0AEAgAoQAhAogIA0QgHAygqAeQgfAWgjAAQgMAAgNgCg");
	var mask_10_graphics_29 = new cjs.Graphics().p("ADGEyQgygLgcgqQgKgQgFgSQgUADgWgEQgygLgbgqQgJgOgFgPQgUADgWgEQgygLgcgqQgQgZgDgdQgcAJgfgGQgygKgcgqQgPgXgDgaQgVADgXgEQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAXAcADAhQAPgDAPACQA0AEAgAnQAZAeACAjQAVgHAYACQAyAEAhAoQAPATAHAVQAOgCAOABQA0AEAgAnQASAVAGAYQALgCAMABQADgwAkghQAmgkAzAEQA0AEAgAnQAhAogIA0QgHAygqAeQgiAZgogDIgBAMQgIAygpAeQgfAWgjAAQgMAAgNgCg");
	var mask_10_graphics_30 = new cjs.Graphics().p("ACxEyQgygLgcgqQgKgQgFgSQgUADgVgEQgxgLgcgqQgJgOgFgPQgVADgWgEQgygLgcgqQgQgZgDgdQgbAJgfgGQgygKgcgqQgPgXgEgaQgVADgWgEQgygLgcgqQgTgdgBgjQABg0AmgjQAmgkA0AEQAzAEAhAoQAXAcADAhQAOgDAQACQAzAEAhAnQAYAeACAjQAVgHAYACQA0AEAfAoQAQATAGAVQAOgCAPABQAzAEAhAnQARAVAGAYQALgCAMABQADgwAkghQANgMANgHIgEgGQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAhAogIA0QgHAygqAeIgNAIQAcAmgHAxQgIAygpAeQgjAZgogDIgBAMQgHAygqAeQgfAWgjAAQgMAAgNgCg");
	var mask_10_graphics_31 = new cjs.Graphics().p("ACsFTQgygKgcgrQgKgQgFgRQgUADgWgFQgxgKgcgrQgJgNgFgQQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgWgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAiQAPgDAPABQA0AEAgAoQAZAdACAkQAVgHAYACQAzAEAgAnQAPATAHAVQAOgCAOABQA0AEAgAnQASAWAGAYQALgCAMABQADgxAkgiQAMgLAOgIIgEgFQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAhAogIA0QgFAogcAbQAfAngIAxQgIAygpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogCIgBALQgIAzgpAeQgfAWgjAAQgMAAgNgDg");
	var mask_10_graphics_32 = new cjs.Graphics().p("ACiGmQgygKgcgrQgLgQgFgSQgTADgWgEQgxgKgcgrQgJgOgFgPQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgqQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAPABQA0AEAgAoQAYAdACAjQAWgHAYACQAzAEAgAnQAPATAHAWQANgCAPABQA0AEAgAnQARAVAGAYQAMgBAMAAQACgwAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgwAjgiIgGgIQgTgdAAgjQABg0AmgjIAHgGIgGgJQgTgdgBgjQABgzAmgkQAmgjA0AEQAzAEAhAnQAhApgIAzQgHAvglAdQAfAogIAyQgGAngbAbQAeAogHAwQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_33 = new cjs.Graphics().p("ACiH+QgygKgcgrQgLgQgFgRQgTADgWgFQgxgKgcgrQgJgNgFgQQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgyAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAPAAQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAgAnQAPATAHAWQANgCAPABQA0AEAgAnQARAWAGAYQAMgCAMABQACgxAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgcAAgjQABg0AmgjIAHgGIgGgJQgTgdgBgjQABgwAigjQgOgMgMgRQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAhAogIA0QgGAngaAbQAJAIAJAKQAhApgIAzQgHAvglAeQAfAngIAyQgGAngbAbQAeAngHAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogCIgBALQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_34 = new cjs.Graphics().p("ACiJMQgygKgcgrQgLgQgFgSQgTADgWgEQgxgKgcgrQgJgOgFgPQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgiAzAEQA0ADAgAnQAXAcADAhQAPgCAPABQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAgAnQAPATAHAWQANgCAPABQA0AEAgAnQARAVAGAYQAMgBAMAAQACgwAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABgzAmgjIAHgGIgGgJQgTgdgBgjQABgxAigiQgOgMgMgRQgTgdAAgjQAAgbAKgWQgcgOgTgdQgTgdgBgjQABgzAmgkQAmgjA0AEQAzADAhAoQAhApgIAzQgDARgGAOQAXAMARAVQAhAogIA0QgGAngaAbQAJAIAJAKQAhApgIAzQgHAvglAdQAfAogIAxQgGAngbAbQAeAogHAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_35 = new cjs.Graphics().p("ACiKFQgygLgcgqQgLgQgFgSQgTADgWgEQgxgLgcgqQgJgOgFgPQgUADgWgEQgygLgcgqQgQgZgDgdQgcAKgfgHQgygKgcgrQgPgWgDgbQgVAEgXgFQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAXAcADAhQAPgCAPABQA0AEAgAnQAYAeACAjQAWgGAYABQAzAEAgAoQAPATAHAVQANgCAPABQA0AEAgAoQARAVAGAYQAMgBAMAAQACgwAlgiQAMgMAOgHIgEgGQgTgdgBgjQABgxAjgjIgGgIQgTgdAAgjQABgzAmgjIAHgGIgGgIQgTgdgBgjQABgxAigiQgOgMgMgSQgTgdAAgjQAAgaAKgWQgcgOgTgdQgSgbgCgfQgPABgRgEQgygKgcgrQgTgdgBgjQABgzAmgkQAmgjA0AEQAzADAhAoQAZAgABAmQAKAAAKAAQAzAEAhAoQAhAogIA0QgDARgGAOQAXALARAVQAhApgIAzQgGAogaAbQAJAIAJAKQAhAogIA0QgHAvglAcQAfAogIAxQgGAogbAbQAeAogHAxQgIAygpAeIgOAJQAdAngIAwQgHAygqAeQgiAZgogDIgBAMQgIAygpAeQgfAWgkAAQgMAAgMgCg");
	var mask_10_graphics_36 = new cjs.Graphics().p("ACiKxQgygKgcgrQgLgQgFgSQgTADgWgEQgxgKgcgrQgJgOgFgPQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAPABQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAgAnQAPATAHAWQANgCAPABQA0AEAgAnQARAVAGAYQAMgBAMAAQACgwAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABg0AmgjIAHgGIgGgJQgTgcgBgjQABgxAigiQgOgMgMgRQgTgdAAgjQAAgbAKgWQgcgOgTgdQgSgagCggQgPABgRgDQgygLgcgqQgLgQgFgSQgRACgTgEQgxgKgcgrQgTgdAAgjQABgzAmgkQAlgjAzAEQA0ADAgAoQARAVAGAYQALgBAMABQAzAEAhAoQAZAfABAnQAKgBAKABQAzADAhAoQAhApgIAzQgDARgGAOQAXAMARAVQAhAogIA0QgGAngaAbQAJAIAJAKQAhApgIAzQgHAuglAdQAfAogIAyQgGAngbAbQAeAogHAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ACiLgQgygLgcgqQgLgQgFgSQgTADgWgEQgxgLgcgqQgJgOgFgPQgUADgWgEQgygLgcgqQgQgZgDgdQgcAJgfgGQgygKgcgrQgPgXgDgaQgVADgXgEQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAXAcADAhQAPgDAPACQA0AEAgAnQAYAeACAjQAWgHAYACQAzAEAgAoQAPATAHAVQANgCAPABQA0AEAgAoQARAVAGAYQAMgCAMABQACgwAlgiQAMgMAOgHIgEgGQgTgdgBgjQABgxAjgjIgGgIQgTgdAAgjQABgzAmgkIAHgGIgGgIQgTgdgBgjQABgwAigjQgOgMgMgRQgTgdAAgjQAAgaAKgXQgcgOgTgcQgSgbgCggQgPACgRgEQgygKgcgrQgLgQgFgRQgRABgTgDQgxgLgcgqQgNgVgEgXQgcAKgggGQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQA0AEAgAoQAUAZAEAdQAWgHAYACQA0AEAgAoQARAVAGAYQALgBAMABQAzADAhAoQAZAgABAmQAKgBAKABQAzAEAhAoQAhAogIA0QgDARgGAOQAXALARAVQAhApgIAzQgGAogaAbQAJAHAJALQAhAogIAzQgHAvglAdQAfAngIAyQgGAogbAbQAeAngHAyQgIAygpAeIgOAJQAdAmgIAxQgHAygqAeQgiAZgogDIgBAMQgIAygpAeQgfAWgkAAQgMAAgMgCg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ACiL8QgygKgcgrQgLgQgFgSQgTADgWgEQgxgKgcgrQgJgOgFgPQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAPABQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAgAnQAPATAHAWQANgCAPABQA0AEAgAnQARAVAGAYQAMgBAMAAQACgwAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABg0AmgjIAHgGIgGgJQgTgdgBgjQABgwAigiQgOgMgMgRQgTgdAAgjQAAgbAKgWQgcgOgTgdQgSgagCggQgPABgRgDQgygLgcgqQgLgQgFgSQgRACgTgEQgxgKgcgrQgNgUgEgXQgcAJgggGQgygKgcgrIgIgOQgjASgogIQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAKAMAGANQAcgOAhADQA0ADAgAoQAUAZAEAeQAWgHAYACQA0ADAgAoQARAVAGAYQALgBAMABQAzAEAhAoQAZAfABAnQAKgBAKABQAzADAhAoQAhApgIAzQgDARgGAOQAXAMARAVQAhAogIA0QgGAngaAbQAJAIAJAKQAhAogIAzQgHAvglAdQAfAogIAyQgGAngbAbQAeAogHAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgkAAQgMAAgMgDg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AC2L8QgygKgcgrQgKgQgFgSQgUADgVgEQgxgKgcgrQgJgOgFgPQgUAEgXgFQgygKgcgrQgQgYgDgdQgbAJgfgGQgygLgcgqQgPgXgEgbQgUAEgXgFQgygKgcgrQgTgdgBgjQABgzAmgkQAmgjA0AEQAzADAhAoQAXAcADAhQAOgCAQABQAzAEAhAoQAYAdACAkQAVgHAYACQA0AEAfAnQAQATAGAWQAOgCAPABQAzAEAhAnQARAVAGAYQAMgBAMAAQACgwAkgiQANgLAOgIIgFgGQgTgdAAgjQABgxAigiIgFgIQgTgdgBgjQABg0AmgjIAHgGIgGgJQgTgdAAgjQABgwAigiQgPgMgLgRQgTgdgBgjQABgbAKgWQgdgOgTgdQgRgagCggQgQABgRgDQgygLgcgqQgKgQgFgSQgRACgTgEQgygKgbgrQgNgUgFgXQgcAJgfgGQgygKgcgrIgIgOQgjASgogIQgggHgXgTIgPAMQgpAdgygKQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQApACAdAaIABgCQAmgjA0AEQAzADAhAoQAKAMAGANQAcgOAhADQAzADAgAoQAUAZAFAeQAWgHAYACQAzADAhAoQARAVAGAYQALgBALABQA0AEAgAoQAaAfABAnQAJgBAKABQA0ADAgAoQAhApgIAzQgCARgGAOQAXAMARAVQAhAogIA0QgGAngbAbQAKAIAIAKQAhAogIAzQgHAvgkAdQAfAogIAyQgGAngbAbQAeAogIAxQgHAzgqAeIgNAIQAcAngHAwQgIAzgpAeQgiAYgogDIgCAMQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AEML8QgygKgcgrQgKgQgFgSQgUADgWgEQgygKgcgrQgJgOgFgPQgUAEgVgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgygLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAXAcADAhQAPgCAPABQA0AEAgAoQAZAdACAkQAUgHAYACQAzAEAhAnQAPATAHAWQAOgCAOABQA0AEAgAnQASAVAGAYQALgBAMAAQADgwAkgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABg0AmgjIAHgGIgGgJQgTgdgBgjQABgwAjgiQgPgMgMgRQgTgdAAgjQAAgbALgWQgdgOgTgdQgRgagCggQgQABgRgDQgygLgcgqQgKgQgFgSQgSACgTgEQgygKgcgrQgNgUgEgXQgcAJgfgGQgygKgcgrIgHgOQgjASgpgIQgggHgXgTIgOAMQgqAdgxgKQgZgFgTgNQgNAYgXARQgqAdgxgKQgygKgcgrQgTgdgBgjQABgzAmgkQAmgjA0AEQAhACAZARQAJgQAOgOQAmgjA0AEQAoACAdAaIACgCQAmgjAzAEQA0ADAgAoQAKAMAGANQAcgOAgADQA0ADAgAoQAVAZAFAeQAVgHAYACQA0ADAgAoQASAVAGAYQALgBALABQAzAEAhAoQAaAfAAAnQAKgBAKABQAzADAhAoQAhApgIAzQgDARgGAOQAXAMARAVQAhAogIA0QgFAngbAbQAKAIAIAKQAhAogIAzQgHAvgkAdQAeAogIAyQgFAngcAbQAfAogIAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgjAAQgMAAgNgDg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AFhL8QgygKgcgrQgKgQgFgSQgUADgVgEQgygKgcgrQgJgOgFgPQgUAEgXgFQgygKgcgrQgPgYgDgdQgbAJgfgGQgygLgcgqQgPgXgEgbQgUAEgXgFQgygKgcgrQgTgdgBgjQABgzAmgkQAmgjA0AEQAzADAhAoQAXAcADAhQAOgCAQABQAyAEAhAoQAYAdACAkQAVgHAYACQA0AEAgAnQAQATAGAWQAOgCAPABQAzAEAhAnQARAVAGAYQAMgBAMAAQACgwAkgiQANgLAOgIIgFgGQgTgdAAgjQABgxAigiIgFgIQgTgdgBgjQABg0AmgjIAHgGIgGgJQgTgdAAgjQABgwAigiQgPgMgLgRQgTgdgBgjQABgbAKgWQgdgOgTgdQgRgagCggQgQABgRgDQgygLgcgqQgKgQgFgSQgRACgTgEQgygKgcgrQgNgUgFgXQgcAJgfgGQgygKgbgrIgIgOQgjASgogIQgggHgXgTIgPAMQgpAdgygKQgYgFgUgNQgMAYgYARQgpAdgygKQgSgEgQgIQgLAogjAZQgpAegygKQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQAbACAVALQAJgeAZgYQAmgjAzAEQAhACAZARQAJgQAPgOQAmgjAzAEQApACAdAaIABgCQAmgjA0AEQAzADAgAoQAKAMAGANQAcgOAhADQAzADAhAoQAUAZAFAeQAWgHAYACQAzADAhAoQARAVAGAYQALgBALABQA0AEAgAoQAaAfABAnQAJgBAKABQA0ADAgAoQAhApgIAzQgCARgGAOQAXAMARAVQAhAogIA0QgGAngbAbQAKAIAIAKQAhAogIAzQgHAvgkAdQAfAogIAyQgGAngbAbQAeAogIAxQgHAzgqAeIgNAIQAcAngHAwQgIAzgpAeQgiAYgogDIgCAMQgHAzgqAeQgfAWgjAAQgMAAgNgDg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AGyL8QgygKgcgrQgLgQgFgSQgTADgWgEQgygKgcgrQgJgOgFgPQgUAEgWgFQgygKgcgrQgQgYgDgdQgcAJgfgGQgxgLgcgqQgPgXgDgbQgVAEgXgFQgygKgcgrQgTgdAAgjQABgzAmgkQAmgjAzAEQA0ADAgAoQAWAcADAhQAPgCAPABQA0AEAgAoQAYAdACAkQAWgHAYACQAzAEAhAnQAPATAHAWQANgCAPABQA0AEAgAnQARAVAGAYQAMgBAMAAQACgwAlgiQAMgLAOgIIgEgGQgTgdgBgjQABgxAjgiIgGgIQgTgdAAgjQABg0AmgjIAHgGIgGgJQgTgdgBgjQABgwAigiQgOgMgMgRQgTgdAAgjQAAgbAKgWQgcgOgTgdQgSgagCggQgPABgRgDQgygLgcgqQgLgQgFgSQgRACgTgEQgygKgcgrQgNgUgEgXQgcAJgggGQgygKgcgrIgIgOQgjASgngIQgggHgXgTIgOAMQgqAdgxgKQgZgFgTgNQgNAYgXARQgqAdgxgKQgTgEgQgIQgKAogjAZQgqAegxgKQgMgDgLgEQAGAWgEAZQgHAygqAeQgpAegygKQgygLgcgqQgTgdAAgjQABg0AmgjQAmgkAzAEQAUABAQAHQgEgOAAgPQABg0AmgjQAmgkA0AEQAaACAVALQAJgeAZgYQAmgjA0AEQAgACAZARQAKgQAOgOQAmgjA0AEQAoACAdAaIACgCQAmgjAyAEQA0ADAgAoQAKAMAGANQAcgOAhADQA0ADAgAoQAVAZAEAeQAWgHAYACQA0ADAgAoQARAVAGAYQALgBAMABQAzAEAhAoQAZAfABAnQAKgBAKABQAzADAhAoQAhApgIAzQgDARgGAOQAXAMARAVQAhAogIA0QgGAngaAbQAJAIAJAKQAhAogIAzQgHAvglAdQAfAogIAyQgGAngbAbQAeAogHAxQgIAzgpAeIgOAIQAdAngIAwQgHAzgqAeQgiAYgogDIgBAMQgIAzgpAeQgfAWgkAAQgMAAgMgDg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_10_graphics_24,x:254.353,y:174.0813}).wait(1).to({graphics:mask_10_graphics_25,x:261.353,y:179.2563}).wait(1).to({graphics:mask_10_graphics_26,x:269.128,y:184.4313}).wait(1).to({graphics:mask_10_graphics_27,x:275.853,y:188.5813}).wait(1).to({graphics:mask_10_graphics_28,x:282.578,y:192.9813}).wait(1).to({graphics:mask_10_graphics_29,x:288.803,y:192.9813}).wait(1).to({graphics:mask_10_graphics_30,x:290.878,y:192.9813}).wait(1).to({graphics:mask_10_graphics_31,x:291.403,y:189.6063}).wait(1).to({graphics:mask_10_graphics_32,x:292.428,y:181.3313}).wait(1).to({graphics:mask_10_graphics_33,x:292.428,y:172.5063}).wait(1).to({graphics:mask_10_graphics_34,x:292.428,y:164.7313}).wait(1).to({graphics:mask_10_graphics_35,x:292.428,y:159.0563}).wait(1).to({graphics:mask_10_graphics_36,x:292.428,y:154.6313}).wait(1).to({graphics:mask_10_graphics_37,x:292.428,y:149.9813}).wait(1).to({graphics:mask_10_graphics_38,x:292.428,y:147.1313}).wait(1).to({graphics:mask_10_graphics_39,x:290.353,y:147.1313}).wait(1).to({graphics:mask_10_graphics_40,x:281.803,y:147.1313}).wait(1).to({graphics:mask_10_graphics_41,x:273.253,y:147.1313}).wait(1).to({graphics:mask_10_graphics_42,x:265.228,y:147.1313}).wait(118));

	// lady02
	this.instance_18 = new lib.CachedBmp_8();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(24).to({_off:false},0).wait(136));

	// pen01
	this.instance_19 = new lib.手握筆();
	this.instance_19.setTransform(294.05,360.55,1,1,0,0,0,544.9,363.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:283.35,y:334.55},0).wait(1).to({y:309.9},0).wait(1).to({x:289.6,y:283.2},0).wait(1).to({x:307.1,y:265.7},0).wait(1).to({x:330.85,y:257.25},0).wait(1).to({x:355.7},0).wait(1).to({x:380.55,y:272.5},0).wait(1).to({x:399.2,y:290.05},0).wait(1).to({x:415,y:310.95},0).wait(1).to({x:430.3,y:331.85},0).wait(1).to({x:445.55,y:352.75},0).wait(1).to({x:460.25,y:372.5},0).wait(1).to({x:475.5,y:393.95},0).wait(1).to({x:494.15,y:417.65},0).wait(1).to({x:513.9,y:435.75},0).wait(1).to({x:534.25,y:451.8},0).wait(1).to({x:558,y:467.05},0).wait(1).to({x:579.4,y:465.95},0).wait(1).to({x:587.9,y:449},0).wait(1).to({x:580,y:430.35},0).wait(1).to({x:568.15,y:413.4},0).wait(1).to({x:554.6,y:395.9},0).wait(1).to({x:541.6,y:382.9},0).to({_off:true},1).wait(136));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgJCeQhDgFgsgzQglgsgBg6QABhDAxgvQAwguBAACQBEACAuAyQAsAwgDBBQgDBDgzAtQgtAog6AAIgLgBg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AA/EWQhCgFgsgzQglgsgBg6QABgtAWgkIgVgBQhDgFgsgyQglgsgBg6QAChEAxgvQAvguBCACQBEACAsAyQAtAwgDBCQgCAqgUAgIANAAQBEACAuAxQAsAwgDBCQgDBDgzAtQgsAog7AAIgMgBg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ABaGVQhDgFgrg0QglgsgBg6QABgtAWgkIgVAAQhDgFgsg0QglgsgBg6QACg9ApgtQghgOgZgeQglgsgBg6QABhDAxgvQAwguBBACQBEABAtAyQAsAxgDBCQgDA6gmAqQAeAMAXAaQAtAxgDBBQgCApgUAhIANAAQBEABAuAyQAsAxgDBCQgDBDgzAtQgtAng6AAIgMAAg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ABaIUQhDgFgrg0QglgsgBg6QABgtAWgkIgVAAQhDgFgsg0QglgsgBg6QACg+ApgtQghgOgZgdQglgsgBg6QABhDAxgvIARgPQgMgKgKgMQglgsgBg6QABhEAxgvQAwguBBACQBEACAtAyQAsAwgDBCQgDBEgzAsIgMAKQAJAIAJAJQAsAxgDBCQgDA6gmApQAeAMAXAaQAtAxgDBCQgCApgUAhIANAAQBEABAuAyQAsAxgDBCQgDBDgzAtQgtAng6AAIgMAAg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABaKCQhDgFgrg0QglgsgBg6QABgtAWgkIgVAAQhDgFgsg0QglgsgBg6QACg+ApgtQghgOgZgeQglgsgBg5QABhDAxgvIARgPQgMgKgKgMQglgsgBg6QABhEAxgvQApgoA3gEQgNgcAAghQABhEAxgvQAwguBAACQBEACAuAyQAsAwgDBCQgDBEgzAsQgoAjgzAEQAOAggCAlQgDBEgzAsIgMAKQAJAIAJAJQAsAxgDBCQgDA5gmApQAeANAXAaQAtAxgDBCQgCApgUAhIANAAQBEABAuAyQAsAxgDBCQgDBDgzAtQgtAng6AAIgMAAg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AAQLIQhCgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsg0QglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChCAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgoA2gEQgMgcgBghQAChEAxgvQAvguBCACQAXABAUAGQAFg8AtgrQAvguBCACQBEACAtAyQAtAwgDBCQgEBEgyAsQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgyAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAwgDBCQgDA6gnApQAeANAYAaQArAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAxgDBCQgEBDgyAtQgtAng7AAIgMAAg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AhtLYQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxguIARgPQgMgJgKgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAUAGQAFg8AtgqQAwguBAACQBCABAtAvQALgUASgRQAwguBBACQBEABAuAyQAsAxgDBCQgDBDgzAtQgxArhCgEQg9gFgrgrQgMAXgWATQgxArhCgEQgUgCgRgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAvgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAtAyQAsAwgDBCQgDBDgzAtQgsAog6AAIgMgBg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AjzLYQhDgFgsgzQglgsgBg6QABguAXgkIgVAAQhDgFgsgzQglgsgBg6QABg/AqgsQghgPgagdQglgsgBg6QAChEAxguIARgPQgMgJgLgNQglgsgBg6QAChDAxgvQApgoA2gEQgMgdgBghQAChDAxgvQAvguBCACQAXAAAVAGQAFg8AtgqQAvguBCACQBCABArAvQAMgUASgRQAvguBCACQBEABAtAyQAbAdAJAiIAEgEQAwguBBACQBEACAuAyQAsAwgDBCQgDBEgzAsQgxAshCgFQhDgFgsgzQgWgbgJgfIgJAJQgyArhCgEQg9gFgqgrQgNAXgVATQgxArhCgEQgTgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgEBDgyAtIgMAKQAJAHAIAKQAtAvgDBCQgDA7gmApQAdANAYAaQAsAwgDBCQgCApgUAhIAOAAQBEACAtAyQAtAwgDBCQgEBDgyAtQgtAog6AAIgNgBg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AlaLYQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxguIASgPQgMgJgLgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAVAGQAFg8AsgqQAwguBBACQBCABAtAvQALgUASgRQAvguBBACQBEABAuAyQAaAdAKAiIAEgEQAvguBCACQBEACAtAyQApArABA6QAYgHAcABQBEABAtAyQAtAxgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QgjgqgCg2QgcAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgxArhCgEQg8gFgqgrQgNAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgyAEQANAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAvgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAuAyQAsAwgDBCQgDBDgzAtQgsAog7AAIgMgBg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AmxLYQhDgFgsgzQglgsgBg6QABguAXgkIgVAAQhDgFgsgzQglgsgBg6QABg/AqgsQghgPgagdQglgsgBg6QAChEAxguIARgPQgMgJgLgNQglgsgBg6QAChDAxgvQApgoA2gEQgMgdgBghQAChDAxgvQAvguBCACQAXAAAVAGQAFg8AtgqQAvguBCACQBCABAsAvQAMgUASgRQAvguBCACQBDABAtAyQAbAdAJAiIAEgEQAwguBBACQBEACAuAyQAoArACA6QAYgHAbABQBEABAuAyQAsAxgDBCQgBASgEARQALgCAMABQBEABAuAyQAsAxgDBCQgDBDgzAtQgxAqhCgEQhDgEgsg0QglgsgBg6QAAgWAGgUQgPACgPgBQhDgFgsg0QgjgqgDg2QgbAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgyArhBgEQg9gFgqgrQgNAXgVATQgyArhCgEQgTgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgEBDgyAtIgMAKQAJAHAIAKQAtAvgDBCQgDA7gmApQAdANAYAaQAsAwgDBCQgCApgUAhIAOAAQBEACAtAyQAtAwgDBCQgEBDgyAtQgtAog6AAIgNgBg");
	var mask_11_graphics_10 = new cjs.Graphics().p("An9LYQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxguIARgPQgMgJgKgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAUAGQAFg8AtgqQAwguBBACQBCABAtAvQALgUASgRQAwguBBACQBEABAtAyQAaAdAKAiIAEgEQAvguBCACQBEACAtAyQAoArACA6QAYgHAcABQBEABAtAyQAtAxgDBCQgBASgFARQAMgCAMABQBEABAtAyQAtAxgDBCQgCAZgIAWIAIAAQBEACAuAyQAsAwgDBBQgDBEgzAsQgxAshCgFQhDgFgsgzQglgsgBg6QAAgeAKgZIgPAAQhDgEgsg0QglgsgBg6QABgWAFgUQgOACgQgBQhDgFgsg0QgjgqgDg2QgbAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgwArhCgEQg9gFgrgrQgMAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAvgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAuAyQAsAwgDBCQgDBDgzAtQgtAog6AAIgMgBg");
	var mask_11_graphics_11 = new cjs.Graphics().p("ApKLYQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxguIASgPQgMgJgLgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAVAGQAFg8AsgqQAwguBBACQBCABAtAvQALgUASgRQAwguBBACQBEABAuAyQAaAdAKAiIAEgEQAuguBCACQBEACAtAyQApArABA6QAYgHAcABQBEABAtAyQAtAxgDBCQgBASgEARQALgCAMABQBEABAtAyQAtAxgDBCQgBAZgIAWIAHAAQBEACAuAyQAsAwgDBBQAAAOgDANIACAAQBEACAtAyQAtAwgDBCQgEBEgyAsQgyAshCgFQhDgFgsgzQglgsgBg6QABgSADgQIgIgBQhDgFgsgzQglgsgBg6QABgeAJgZIgPAAQhDgEgsg0QglgsgBg6QABgWAFgUQgOACgQgBQhDgFgsg0QgjgqgCg2QgcAIgfgCQhDgFgrgzQgWgbgJgfIgJAJQgxArhCgEQg9gFgqgrQgNAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgyAEQANAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAvgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAuAyQAsAwgDBCQgDBDgzAtQgsAog7AAIgMgBg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AqQLYQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxguIASgPQgMgJgLgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAVAGQAFg8AsgqQAwguBBACQBCABAtAvQALgUASgRQAwguBBACQBEABAuAyQAaAdAKAiIAEgEQAvguBBACQBEACAtAyQApArABA6QAYgHAcABQBEABAtAyQAtAxgDBCQgBASgEARQALgCAMABQBEABAtAyQAtAxgDBCQgBAZgIAWIAHAAQBEACAuAyQAsAwgDBBQAAAOgDANIACAAQBEACAtAyQAtAwgDBCQgBAagIAWQBAADArAwQAtAxgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgdAKgaIgCAAQhDgFgsgzQglgsgBg6QABgSADgQIgIgBQhDgFgsgzQglgsgBg6QABgeAJgZIgPAAQhDgEgsg0QglgsgBg6QABgWAFgUQgOACgQgBQhDgFgsg0QgjgqgCg2QgcAIgfgCQhCgFgsgzQgWgbgJgfIgJAJQgxArhCgEQg9gFgqgrQgNAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgyAEQANAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAvgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAuAyQAsAwgDBCQgDBDgzAtQgsAog7AAIgMgBg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AORMKQhDgFgsgzQglgsgBg6QAAgaAIgWIgMAAQhDgFgsg0QglgsgBg6QABgdAJgaIgBAAQhDgFgsgzQglgsgBg6QAAgSAEgQIgJgBQhDgFgsgzQglgsgBg6QABgdAKgZIgPAAQhDgFgsg0QglgsgBg6QAAgWAGgUQgPACgPgBQhDgFgsg0QgigqgDg2QgbAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgyArhCgEQg9gFgqgrQgNAXgVATQgyArhCgEQgTgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgEBDgyAtIgMAKQAJAHAIAKQAtAwgDBBQgDA7gmApQAdANAYAaQAsAwgDBCQgCApgUAhIAOAAQBEACAtAyQAtAwgDBCQgEBDgyAtQgyAshCgFQhDgFgsgzQglgsgBg6QABguAXgkIgVAAQhDgFgsgzQglgsgBg6QABg/AqgsQghgPgagdQglgsgBg6QAChDAxgvIARgPQgMgJgLgNQglgsgBg6QAChDAxgvQApgoA2gEQgMgdgBghQAChDAxgvQAvguBCACQAXAAAVAGQAFg8AtgqQAvguBCACQBCABAsAvQAMgUASgRQAvguBCACQBEABAtAyQAbAdAJAiIAEgEQAwguBBACQBDACAuAyQAoArACA6QAYgHAbABQBEABAuAyQAsAxgDBCQgBASgEARQALgCAMABQBEABAuAyQAsAxgDBCQgBAZgIAWIAIAAQBEACAtAyQAtAwgDBBQgBAOgDANIACAAQBEACAuAyQAsAwgDBCQgBAagIAWQBAADAsAwQAsAxgDBCQgBAVgGATIAFAAQBEACAuAyQAsAwgDBCQgDBEgzAsQgsAng7ABIgMgBg");
	var mask_11_graphics_14 = new cjs.Graphics().p("APrOGQhDgFgsg0QglgsgBg6QABg4AigpQgfALgjgCQhDgFgsg0QglgsgBg6QAAgZAIgWIgMgBQhDgFgsgzQglgsgBg6QABgeAJgZIgBAAQhDgFgsg0QglgsgBg6QAAgSAEgQIgJAAQhDgFgsgzQglgsgBg6QABgdAKgZIgPgBQhDgFgsgzQglgsgBg6QAAgXAGgTQgPABgPgBQhCgFgsgzQgjgqgDg3QgbAJgfgCQhDgFgsg0QgWgagJgfIgJAIQgyAshCgFQg9gEgqgsQgNAXgVATQgyAshCgFQgTgBgSgGQgFBBgxArQgoAjgzAEQAOAggCAlQgEBEgyAsIgMAKQAJAIAIAJQAtAxgDBCQgDA6gmAoQAdANAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAxgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAXgkIgVAAQhDgFgsg0QglgsgBg6QABg+AqgtQghgOgageQglgrgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgoA2gEQgMgcgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBCACAsAuQAMgUASgRQAvguBCACQBEACAtAyQAbAcAJAjIAEgEQAwguBBACQBEABAuAyQAnAsACA6QAYgIAbABQBEACAuAyQAsAwgDBCQgBASgEARQALgBAMAAQBEACAuAyQAsAwgDBCQgBAZgIAXIAIAAQBEABAtAyQAtAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAwgDBCQgBAZgIAWQBAAEAsAwQAsAwgDBCQgBAVgGAUIAFAAQBEABAuAyQAsAxgDBCQgCAzgeAmQAagJAfABQBEABAuAyQAsAxgDBCQgDBDgzAtQgsAng7AAIgMAAg");
	var mask_11_graphics_15 = new cjs.Graphics().p("ARIPgQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg4AhgpQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg6QAAgeAKgZIgBAAQhDgFgsg0QglgsgBg5QAAgSAEgQIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQgkgsgBg6QAAgXAGgTQgPABgPgBQhDgFgsgzQgkgqgCg3QgbAJgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgsQgNAXgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnApQAeANAYAaQAsAwgDBCQgCApgUAhIAOAAQBEABAtAyQAtAxgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsg0QglgsgBg6QABg+AqgsQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgoA2gEQgMgcgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAuQAMgUASgRQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBDACAuAyQAsAwgDBCQgBASgEARQALgBAMAAQBEACAuAyQAsAwgDBCQgBAZgIAXIAIAAQBEABAtAyQAtAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAYgIAWQBAAEAsAwQAsAwgDBCQgBAVgGAUIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAmQAbgJAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCQgEBDgyAtQgtAng7AAIgMAAg");
	var mask_11_graphics_16 = new cjs.Graphics().p("ASmQ2QhDgFgsgzQglgsgBg6IABgRQgTADgUgBQhDgFgsgzQglgsgBg6QAAgMACgMQgTADgVgBQhDgFgsgzQglgsgBg6QABg4AigqQgfALgjgCQhDgFgsgzQglgsgBg6QABgaAHgWIgMAAQhDgFgsg0QglgsgBg6QABgdAJgaIgBAAQhDgFgsgzQglgrgBg6QABgSADgQIgIgBQhDgFgsgzQglgsgBg6QAAgeAKgZIgPAAQhCgFgsg0QglgsgBg6QABgWAFgUQgOACgQgBQhDgFgsg0QgjgqgDg2QgbAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgxArhCgEQg9gFgrgrQgMAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAwgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCAogUAhIANAAQBEACAuAyQAsAwgDBCQgDBDgzAtQgxAshCgFQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgzQglgsgBg5QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxgvIARgPQgMgJgKgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAUAGQAFg8AtgqQAwguBBACQBCABAtAvQALgUASgRQAwguBBACQBEABAuAyQAaAdAKAiIAEgEQAvguBCACQBEACAtAyQAoArACA6QAYgHAcABQBEABAtAyQAsAxgDBCQgBASgFARQAMgCAMABQBEABAtAyQAtAxgDBCQgCAZgIAWIAIAAQBEACAuAyQAsAwgDBCQgBAOgCANIACAAQBEACAtAyQAtAwgDBCQgCAagIAWQBBADArAvQAtAxgDBCQgBAVgGATIAFAAQBEACAtAyQAtAwgDBCQgDA0geAmQAbgKAfABQBEACAtAyQAtAwgDBCIgCAQQAQgCARAAQBEACAuAyQAsAwgDBCIgBAJQAQgCARAAQBEACAuAyQAsAwgDBCQgDBEgzAsQgtAog6AAIgMgBg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AUUSQQhDgFgsgzQglgsgBg6QAAgSAEgRQgjAQgogDQhDgFgsgzQglgsgBg6IABgRQgTADgUgBQhDgFgsgzQglgsgBg6QAAgMACgMQgTADgVgBQhDgFgsgzQglgsgBg6QABg4AigqQgfALgjgCQhDgFgsgzQglgsgBg6QABgaAHgWIgMAAQhDgFgsg0QglgsgBg6QABgcAJgaIgBAAQhDgFgsgzQglgsgBg6QABgSADgQIgIgBQhDgFgrgzQglgsgBg6QAAgeAKgZIgPAAQhDgFgsg0QglgsgBg6QABgWAFgUQgOACgQgBQhDgFgsg0QgjgqgDg2QgbAIgfgCQhDgFgsgzQgWgbgJgfIgJAJQgxArhCgEQg9gFgrgrQgMAXgWATQgxArhCgEQgUgCgSgFQgFBAgxAsQgoAjgzAEQAOAfgCAmQgDBDgzAtIgMAKQAJAHAJAKQAsAwgDBCQgDA7gmApQAeANAXAaQAtAwgDBCQgCApgUAhIANAAQBEACAuAxQAsAwgDBCQgDBDgzAtQgxAshCgFQhDgFgsgzQglgsgBg6QABguAWgkIgVAAQhDgFgsgyQglgsgBg6QACg/ApgsQghgPgZgdQglgsgBg6QABhEAxgvIARgPQgMgJgKgNQglgsgBg6QABhDAxgvQApgoA3gEQgNgdAAghQABhDAxgvQAwguBBACQAYAAAUAGQAFg8AtgqQAwguBBACQBCABAtAvQALgUASgRQAwguBBACQBEABAuAyQAaAdAKAiIAEgEQAvguBCACQBEACAtAyQAoArACA6QAYgHAcABQBEABAtAyQAtAxgDBCQgBASgFARQAMgCAMABQBDABAtAyQAtAxgDBCQgCAZgIAWIAIAAQBEACAuAyQAsAwgDBCQgBAOgCANIACAAQBEACAtAyQAtAwgDBCQgCAagIAWQBBADArAwQAtAxgDBBQgBAVgGATIAFAAQBEACAtAyQAtAwgDBCQgDA0geAmQAbgKAfABQBEACAtAyQAtAwgDBCIgCAQQAQgCARAAQBEACAuAyQAsAwgDBCIgBAJQAQgCARAAQBEACAuAyQAsAwgDBCQgBAOgCANQAfgOAlABQBEACAuAyQAsAwgDBCQgDBEgzAsQgtAog6AAIgMgBg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AV+S7QhDgFgsgzQgRgUgJgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgTADgUgBQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AhgqQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg5QAAgeAKgZIgBAAQhDgFgsg0QgkgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgkgqgCg2QgbAIgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnAqQAeAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAvQAMgUASgSQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBDABAtAyQAtAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAnQAbgKAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAfgOAmABQBEABAtAyQAVAXAKAaQAfgPAmABQBEACAtAyQAtAwgDBCQgEBEgyAsQgtAog7AAIgMgBg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AUdS7QhDgFgsgzQgQgUgKgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgSADgVgBQhDgFgsg0QglgsgBg6QABgMABgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AigqQgfALgjgCQhDgFgsg0QglgsgBg6QAAgZAIgWIgMgBQhDgFgsgzQglgsgBg5QABgeAJgZIgBAAQhCgFgsg0QglgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAKgZIgPgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgjgqgDg2QgbAIgfgCQhDgFgsg0QgWgagJgfIgJAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgRgGQgFBBgxArQgoAjgzAEQAOAggCAlQgEBEgyAsIgMAKQAJAIAIAJQAtAxgDBCQgDA6gmAqQAdAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAXgkIgVAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBCACAsAvQAMgUASgSQAvguBCACQBEACAtAyQAbAcAJAjIAEgEQAwguBBACQBEABAuAyQAoAsACA6QAYgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBEABAsAyQAtAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgCAzgeAnQAagKAfABQBEABAuAyQAsAxgDBCIgBAQQAQgDARABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAggOAlABQBEABAtAyQAVAXAKAaQAggPAlABQAjABAeAOQAHgJAIgIQAwguBBACQBEABAuAyQAtAxgEBCQgDBDgzAtQgxArhCgEQgfgCgagNQgJAMgMAKQgtAog6AAIgNgBg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AUQS7QhDgFgsgzQgRgUgJgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgTADgUgBQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AhgqQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg5QAAgeAKgZIgBAAQhCgFgsg0QglgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgkgqgCg2QgbAIgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnAqQAeAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAvQAMgUASgSQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBEABAtAyQAsAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAnQAbgKAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAfgOAmABQBEABAtAyQAVAXAKAaQAfgPAmABQAjABAdAOQAHgJAJgIIAEgEQgbgngBgxQAChEAxgvQAvguBCACQBEACAtAyQAtAwgDBCQgEBDgxAsQAdAqgDA2QgDBDgzAtQgxArhCgEQgfgCgagNQgKAMgLAKQgtAog7AAIgMgBg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AUQS7QhDgFgsgzQgRgUgJgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgTADgUgBQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AhgqQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg5QAAgeAKgZIgBAAQhCgFgsg0QglgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgkgqgCg2QgbAIgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnAqQAeAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAvQAMgUASgSQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBEABAtAyQAsAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAnQAbgKAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAfgOAmABQBEABAtAyQAVAXAKAaQAfgPAmABQAjABAdAOQAHgJAJgIIAEgEQgbgngBgxQAAgPADgOQgpgOgegjQglgsgBg6QABhEAxgvQAwguBBACQBEACAuAyQAsAwgDBCIgCAWQAmAMAdAgQAtAwgDBCQgEBDgxAsQAdAqgDA2QgDBDgzAtQgxArhCgEQgfgCgagNQgKAMgLAKQgtAog7AAIgMgBg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AUQS7QhDgFgsgzQgRgUgJgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgTADgUgBQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AhgqQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg5QAAgeAKgZIgBAAQhCgFgsg0QglgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgkgqgCg2QgbAIgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnAqQAeAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAvQAMgUASgSQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBEABAtAyQAsAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAnQAbgKAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAfgOAmABQBEABAtAyQAVAXAKAaQAfgPAmABQAjABAdAOQAHgJAJgIIAEgEQgbgngBgxQAAgPADgOQgpgOgegjQglgsgBg6IABgSQg1gLglgrQglgsgBg6QAChDAxgvQAvguBCACQBEABAtAyQAtAxgDBCIgBAKQAyAJAkAoQAsAwgDBCIgCAWQAmAMAdAgQAtAwgDBCQgEBDgxAsQAdAqgDA2QgDBDgzAtQgxArhCgEQgfgCgagNQgKAMgLAKQgtAog7AAIgMgBg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AUQS7QhDgFgsgzQgRgUgJgXQgjAQgpgDQhDgFgsg0QglgsgBg6QABgRADgRQgiAQgpgDQhDgFgsg0QglgsgBg6IABgQQgTADgUgBQhDgFgsg0QglgsgBg6QAAgMACgLQgTADgUgBQhDgFgsg0QglgsgBg6QABg3AhgqQgeALgjgCQhDgFgsg0QglgsgBg6QAAgZAHgWIgLgBQhDgFgsgzQglgsgBg5QAAgeAKgZIgBAAQhCgFgsg0QglgsgBg6QAAgRAEgRIgJAAQhDgFgsg0QglgsgBg6QABgdAJgZIgOgBQhDgFgsgzQglgsgBg6QAAgWAGgUQgPABgPgBQhDgFgsgzQgkgqgCg2QgbAIgfgCQhDgFgsg0QgWgagKgfIgIAIQgyAshCgFQg9gEgqgrQgNAWgVATQgyAshCgFQgUgBgSgGQgEBBgxArQgoAjgzAEQANAggBAlQgEBEgyAsIgNAKQAKAIAIAJQAtAxgDBCQgDA6gnAqQAeAMAYAaQAsAxgDBCQgCApgUAhIAOAAQBEABAtAyQAtAwgDBCQgEBDgyAtQgyArhCgEQhDgFgsg0QglgsgBg6QABgtAWgkIgUAAQhDgFgsgzQglgsgBg6QABg+AqgtQghgOgageQglgsgBg6QAChDAxgvIARgPQgMgKgLgMQglgsgBg6QAChEAxgvQApgnA2gEQgMgdgBghQAChEAxgvQAvguBCACQAXABAVAGQAFg8AtgrQAvguBCACQBBACAtAvQAMgUASgSQAvguBCACQBEACAtAyQAaAcAKAjIAEgEQAwguBBACQBEABAuAyQAoAsABA6QAZgIAbABQBEACAuAyQAsAwgDBCQgBATgEAQQALgBAMAAQBEACAuAyQAsAwgDBCQgBAagIAWIAIAAQBEABAtAyQAsAxgDBCQgBAOgDANIACAAQBEABAuAyQAsAxgDBCQgBAZgIAXQBAADAsAwQAsAwgDBCQgBAVgGATIAFAAQBEABAuAyQAsAxgDBCQgDAzgeAnQAbgKAfABQBEABAuAyQAsAxgDBCIgBAQQAPgDASABQBEABAtAyQAtAxgDBCIgBAJQAQgDARABQBEABAtAyQAtAxgDBCQgBAOgDANQAfgOAmABQBEABAtAyQAVAXAKAaQAfgPAmABQAjABAdAOQAHgJAJgIIAEgEQgbgngBgxQAAgPADgOQgpgOgegjQglgsgBg6IABgSQg1gLglgrQgigogDgzQg5gKgngtQglgsgBg6QABhEAxgvQAwguBBACQBEACAuAyQAmAqADA3QA2AHAmAqQAtAxgDBCIgBAKQAyAJAkAoQAsAwgDBCIgCAWQAmAMAdAgQAtAwgDBCQgEBDgxAsQAdAqgDA2QgDBDgzAtQgxArhCgEQgfgCgagNQgKAMgLAKQgtAog7AAIgMgBg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:93.9345,y:207.9169}).wait(1).to({graphics:mask_11_graphics_1,x:86.6095,y:195.9169}).wait(1).to({graphics:mask_11_graphics_2,x:83.9345,y:183.2669}).wait(1).to({graphics:mask_11_graphics_3,x:83.9345,y:170.5919}).wait(1).to({graphics:mask_11_graphics_4,x:83.9345,y:159.5919}).wait(1).to({graphics:mask_11_graphics_5,x:91.2845,y:152.5919}).wait(1).to({graphics:mask_11_graphics_6,x:103.9345,y:150.9419}).wait(1).to({graphics:mask_11_graphics_7,x:117.2595,y:150.9419}).wait(1).to({graphics:mask_11_graphics_8,x:127.6095,y:150.9419}).wait(1).to({graphics:mask_11_graphics_9,x:136.2595,y:150.9419}).wait(1).to({graphics:mask_11_graphics_10,x:143.9345,y:150.9419}).wait(1).to({graphics:mask_11_graphics_11,x:151.6095,y:150.9419}).wait(1).to({graphics:mask_11_graphics_12,x:158.6095,y:150.9419}).wait(1).to({graphics:mask_11_graphics_13,x:166.2595,y:155.9419}).wait(1).to({graphics:mask_11_graphics_14,x:175.2595,y:168.2919}).wait(1).to({graphics:mask_11_graphics_15,x:184.5845,y:177.2919}).wait(1).to({graphics:mask_11_graphics_16,x:193.9345,y:185.9419}).wait(1).to({graphics:mask_11_graphics_17,x:204.9345,y:194.9419}).wait(1).to({graphics:mask_11_graphics_18,x:215.5876,y:199.2669}).wait(1).to({graphics:mask_11_graphics_19,x:225.2626,y:199.2669}).wait(1).to({graphics:mask_11_graphics_20,x:226.5876,y:199.2669}).wait(1).to({graphics:mask_11_graphics_21,x:226.5876,y:199.2669}).wait(1).to({graphics:mask_11_graphics_22,x:226.5876,y:199.2669}).wait(1).to({graphics:mask_11_graphics_23,x:226.5876,y:199.2669}).wait(137));

	// lady01
	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(160));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,135.3,1195.1,825.3);
// library properties:
lib.properties = {
	id: '78ADB1798F946C41928FFE4F3475CA14',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1765345566424", id:"Image"},
		{src:"images/lady_atlas_1.png?1765345566380", id:"lady_atlas_1"}
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
an.compositions['78ADB1798F946C41928FFE4F3475CA14'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;