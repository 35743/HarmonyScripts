////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//           Script AP_piemenus.js v0.0.2
//
//     This script creates category pie menus 
// 		Written by APhillips based on original piemenu written 
//		by Mathieu Chaptel m.chaptel@gmail.com
//
//   This script is made available under the Mozilla Public license 2.0.
//   https://www.mozilla.org/en-US/MPL/2.0/
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

try{
  include(specialFolders.userScripts + "/openHarmony.js");
}catch(err){
  MessageBox.information ("Problem loading OpenHarmony. Check that it is installed or get it here: \nhttps://github.com/cfourney/OpenHarmony")
}

function AP_paintPiemenu(){
  // we start a list of widgets to display in our pieMenu.
  
  var mainWidgets = [];
  // add some buttons that activate tools and tool actions
/*  
  mainWidgets.push(new $.oToolButton("Eraser"))
*/
  mainWidgets.push(new $.oActionButton(
    "onActionFlatten()",
    "drawingView",
    "Flatten",
    specialFolders.resource + "/icons/drawingtool/flattentool.png"
	)) 
  mainWidgets.push(new $.oActionButton(
      "onActionChooseBrushToolInRepaintBrushMode()",
      "scene",
      "Repaint",
      specialFolders.resource + "/icons/drawingtool/repaintbrush.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionChooseBrushToolInBrushMode()",
      "scene",
      "Brush",
      specialFolders.resource + "/icons/drawingtool/brush.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionToggleDrawBehindMode()",
      "scene",
      "Paint Behind",
      specialFolders.resource + "/icons/toolproperties/draw_behind.svg"
	))
	  
  mainWidgets.push(new $.oActionButton(
		"onActionChooseDropperTool()",
		"drawingView",
		"Dropper",
		specialFolders.resource + "/icons/colour/dropper.svg"
	  ))
	
  mainWidgets.push(new $.oActionButton(
      "onActionChoosePaintToolInRepaintMode()",
      "scene",
      "Repaint",
      specialFolders.resource + "/icons/drawingtool/repaint.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionChoosePaintToolInUnpaintMode()",
      "scene",
      "Unpaint",
      specialFolders.resource + "/icons/drawingtool/unpaint.svg"
	))	
	
  mainWidgets.push(new $.oActionButton(
      "onActionChoosePaintToolInPaintUnpaintedMode()",
      "scene",
      "Paint Unpainted",
      specialFolders.resource + "/icons/drawingtool/paintunpainted.svg"
	))
	

  // we initialise our main menu. The numerical values are for the minimum and maximum angle of the
  // circle in multiples of Pi. Going counterClockwise, 0 is right, 1 is left, -0.5 is the bottom from the right,
  // and 1.5 is the bottom from the left side. 0.5 is the top of the circle.
  var menu = new $.oPieMenu("menu", mainWidgets, false, -0.635, 1.365);

  // configurating the look of it by adding gradients (any type supported by QBrush can be used)
  // this can be helpful to visually identify the different pie menus
  var backgroundGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuBg = menu.backgroundColor;
 
  backgroundGradient.setColorAt(1, new QColor(80, 32, 0, 255));
  backgroundGradient.setColorAt(0.66, new QColor(61, 24, 0, 255));			//outer ring
  backgroundGradient.setColorAt(.655, new QColor(255, 255, 0, 255));		//divider
  backgroundGradient.setColorAt(.65, new QColor(210, 97, 0, 120));			//inner disc
  backgroundGradient.setColorAt(0, new QColor(210, 97, 0, 33));
  
  
  var sliceGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuColor = menu.sliceColor;
  sliceGradient.setColorAt(1, new QColor(255, 255, 220, 255));              //cap
  sliceGradient.setColorAt(.99, new QColor(255, 78, 0, 120));               //outer band
  sliceGradient.setColorAt(.66, new QColor(255, 78, 0, 120));               //outer band
  sliceGradient.setColorAt(.655, new QColor(255, 255, 220, 255));           //divider
  sliceGradient.setColorAt(.65, new QColor(255, 78, 0, 120));               //outer band
  sliceGradient.setColorAt(0, new QColor(255, 180, 0, 120));                //inner wedge

  menu.backgroundColor = backgroundGradient;
  menu.sliceColor = sliceGradient;
  UiLoader.setSvgIcon(menu.button, specialFolders.resource + "/icons/drawingtool/paint.svg");
  menu.show();
}

function AP_nodePiemenu(){
  // we start a list of widgets to display in our pieMenu.
  
  var mainWidgets = [];
  // add some buttons that activate tools and tool actions
  
  mainWidgets.push(new $.oActionButton(
      "onActionCreateComposite()",
      "Node View",
      "Composite",
      specialFolders.resource + "/icons/modulelibrary/composite.png"
	))
	
	
  mainWidgets.push(new $.oActionButton(
      "onActionCreateDisplay()",
      "Node View",
      "Display",
      specialFolders.resource + "/icons/modulelibrary/display.png"
	))
	
  mainWidgets.push(new $.oActionButton(
		"onActionAddVectorElement()",
		"timelineView",
		"Empty Drawing",
		specialFolders.resource + "/icons/timeline/layer.svg"
	  ))
	  
  mainWidgets.push(new $.oActionButton(
      "onActionToggleCableCutter()",
      "Node View",
      "Cable Cutter",
      specialFolders.resource + "/icons/network/cable_cutter.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionCreatePeg()",
      "Node View",
      "Add Peg",
      specialFolders.resource + "/icons/timeline/addpeg.svg"
	))
	

  mainWidgets.push(new $.oActionButton(
      "onActionAddCameraElement()",
      "timelineView",
      "Camera",
      specialFolders.resource + "/icons/timeline/addcamera.svg"
	))
  mainWidgets.push(new $.oActionButton(
		"onActionSelCreateGroupWithComposite()",
		"Node View",
		"GroupComp",
		specialFolders.resource + "/icons/drawing/group.svg"
	  )) 
	  	  
  mainWidgets.push(new $.oActionButton(
		"onActionSelMergeInto()",
		"Node View",
		"Ungroup",
		specialFolders.resource + "/icons/drawing/ungroup.svg"
	  ))

  // we initialise our main menu. The numerical values are for the minimum and maximum angle of the
  // circle in multiples of Pi. Going counterClockwise, 0 is right, 1 is left, -0.5 is the bottom from the right,
  // and 1.5 is the bottom from the left side. 0.5 is the top of the circle.
  var menu = new $.oPieMenu("menu", mainWidgets, false, -0.635, 1.365);

  // configurating the look of it by adding gradients (any type supported by QBrush can be used)
  // this can be helpful to visually identify the different pie menus
  var backgroundGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuBg = menu.backgroundColor;
  backgroundGradient.setColorAt(1, new QColor(0, 24, 90, 255));
  backgroundGradient.setColorAt(0.66, new QColor(0, 14, 53, 255));		//outer ring
  backgroundGradient.setColorAt(.655, new QColor(0, 233, 255, 255));	//divider
  backgroundGradient.setColorAt(.65, new QColor(0, 55, 210, 120));		//inner disc
  backgroundGradient.setColorAt(0, new QColor(0, 55, 210, 33));
  
  
  var sliceGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuColor = menu.sliceColor;
  sliceGradient.setColorAt(1, new QColor(120, 233, 255, 255));			//cap
  sliceGradient.setColorAt(.99, new QColor(0, 112, 202, 120));			//outer band
  sliceGradient.setColorAt(.66, new QColor(0, 112, 202, 120));			//outer band
  sliceGradient.setColorAt(.655, new QColor(120, 233, 255, 255));		//divider
  sliceGradient.setColorAt(.65, new QColor(0, 112, 202, 120));			//outer band
  sliceGradient.setColorAt(0, new QColor(66, 220, 255, 120));			//inner wedge

  menu.backgroundColor = backgroundGradient;
  menu.sliceColor = sliceGradient;
  menu.button.icon = new QIcon(specialFolders.userScripts + "/packages/AP_PieMenus/icons/AP_nodeico.png");
  menu.show();
}

function AP_selectPiemenu(){
  // we start a list of widgets to display in our pieMenu.
  
  var mainWidgets = [];
  // add some buttons that activate tools and tool actions
  
  mainWidgets.push(new $.oActionButton(
      "onActionChooseSelectToolInColorMode()",
      "scene",
      "Colour",
      specialFolders.resource + "/icons/toolproperties/selectbycolour.svg"
	))

  mainWidgets.push(new $.oActionButton(
      "paste()",
      "selection",
      "Paste",
      specialFolders.resource + "/icons/edit/paste.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
    "onActionChooseSelectToolInNormalMode()",
    "scene",
    "Select",
    specialFolders.resource + "/icons/drawingtool/select.svg"
	)) 
	
  mainWidgets.push(new $.oActionButton(
    "onActionRedo()",
    "sceneUI",
    "Redo",
    specialFolders.resource + "/icons/edit/redo.png"
	)) 
  
  mainWidgets.push(new $.oActionButton(
		"onActionSaveEverything()",
		"sceneUI",
		"Save",
		specialFolders.resource + "/icons/file/save.png"
	  ))
	  
  mainWidgets.push(new $.oActionButton(
	  "onActionUndo()",
	  "sceneUI",
	  "Undo",
	  specialFolders.resource + "/icons/edit/undo.png"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionChooseContourEditorTool()",
      "cameraView",
      "Contour",
      specialFolders.resource + "/icons/drawingtool/contoureditor.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "cut()",
      "selection",
      "Cut",
      specialFolders.resource + "/icons/edit/cut.svg"
	))

  // we initialise our main menu. The numerical values are for the minimum and maximum angle of the
  // circle in multiples of Pi. Going counterClockwise, 0 is right, 1 is left, -0.5 is the bottom from the right,
  // and 1.5 is the bottom from the left side. 0.5 is the top of the circle.
  var menu = new $.oPieMenu("menu", mainWidgets, false, -0.635, 1.365);

  // configurating the look of it by adding gradients (any type supported by QBrush can be used)
  // this can be helpful to visually identify the different pie menus
  var backgroundGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuBg = menu.backgroundColor;
  
  backgroundGradient.setColorAt(1, new QColor(66, 15, 5, 255));
  backgroundGradient.setColorAt(0.66, new QColor(46, 10, 5, 255));		//outer ring 
  backgroundGradient.setColorAt(.655, new QColor(255, 233, 255, 255));	//divider
  backgroundGradient.setColorAt(.65, new QColor(138, 30, 16, 120));		//inner disc
  backgroundGradient.setColorAt(0, new QColor(138, 30, 16, 33));
  
  
  var sliceGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuColor = menu.sliceColor;
  sliceGradient.setColorAt(1, new QColor(120, 233, 255, 255));			//cap
  sliceGradient.setColorAt(.99, new QColor(164, 37, 19, 120));			//outer band
  sliceGradient.setColorAt(.66, new QColor(164, 37, 19, 120));			//outer band
  sliceGradient.setColorAt(.655, new QColor(120, 233, 255, 255));		//divider
  sliceGradient.setColorAt(.65, new QColor(164, 37, 19, 120));			//outer band
  sliceGradient.setColorAt(0, new QColor(249, 55, 29, 120));			//inner wedge

  menu.backgroundColor = backgroundGradient;
  menu.sliceColor = sliceGradient;
  UiLoader.setSvgIcon(menu.button, specialFolders.resource + "/icons/drawingtool/contoureditor.svg");
  menu.show();
}

function AP_animatePiemenu(){
  // we start a list of widgets to display in our pieMenu.
  
  var mainWidgets = [];
  // add some buttons that activate tools and tool actions
  
  mainWidgets.push(new $.oActionButton(
	  "onActionChooseSpTranslateTool()",
	  "cameraView",
	  "Translate",
	  specialFolders.resource + "/icons/cameratoolbar/translatetool.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
	  "onActionChooseSpRotateTool()",
	  "cameraView",
	  "Rotate",
	  specialFolders.resource + "/icons/cameratoolbar/rotatetool.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
      "onActionAnimatedKeyframeMode()",
      "sceneUI",
      "AutoKey On",
      specialFolders.resource + "/icons/cameratoolbar/keyframeanimatedmode.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
		"onActionOnionSkinToggle()",
		"onionSkinResponder",
		"OnionSkin",
		specialFolders.resource + "/icons/drawingtool/onionskin_showeye.svg"
	  ))
	  
  mainWidgets.push(new $.oActionButton(
      "onActionToggleControl()",
      "scene",
      "Show/Hide Control",
      specialFolders.resource + "/icons/camera/showcontrol.svg"
	))
	
  mainWidgets.push(new $.oActionButton(
    "onActionAutoLightTable()",
    "drawingView",
    "Light Table",
    specialFolders.resource + "/icons/drawingtool/lighttable.png"
	))	
	
  mainWidgets.push(new $.oActionButton(
      "onActionStaticKeyframeMode()",
      "sceneUI",
      "AutoKey Off",
      specialFolders.resource + "/icons/cameratoolbar/keyframestaticmode.svg"
	))	

  mainWidgets.push(new $.oActionButton(
      "onActionChooseSpScaleTool()",
      "cameraView",
      "Scale",
      specialFolders.resource + "/icons/cameratoolbar/scaletool.svg"
	))	

  // we initialise our main menu. The numerical values are for the minimum and maximum angle of the
  // circle in multiples of Pi. Going counterClockwise, 0 is right, 1 is left, -0.5 is the bottom from the right,
  // and 1.5 is the bottom from the left side. 0.5 is the top of the circle.
  var menu = new $.oPieMenu("menu", mainWidgets, false, -0.635, 1.365);

  // configurating the look of it by adding gradients (any type supported by QBrush can be used)
  // this can be helpful to visually identify the different pie menus
  var backgroundGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuBg = menu.backgroundColor;
  backgroundGradient.setColorAt(1, new QColor(0, 42, 17, 255));
  backgroundGradient.setColorAt(0.66, new QColor(0, 32, 3, 255));		//outer ring
  backgroundGradient.setColorAt(.655, new QColor(0, 233, 255, 255));	//divider
  backgroundGradient.setColorAt(.65, new QColor(0, 122, 11, 120));		//inner disc
  backgroundGradient.setColorAt(0, new QColor(0, 122, 11, 33));0
  
  
  var sliceGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuColor = menu.sliceColor;
  sliceGradient.setColorAt(1, new QColor(120, 233, 255, 255));			//cap
  sliceGradient.setColorAt(.99, new QColor(93, 139, 4, 120));			//outer band
  sliceGradient.setColorAt(.66, new QColor(93, 139, 4, 120));			//outer band
  sliceGradient.setColorAt(.655, new QColor(120, 233, 255, 255));		//divider
  sliceGradient.setColorAt(.65, new QColor(93, 139, 4, 120));			//outer band
  sliceGradient.setColorAt(0, new QColor(0, 247, 22, 120));				//inner wedge

  menu.backgroundColor = backgroundGradient;
  menu.sliceColor = sliceGradient;
  UiLoader.setSvgIcon(menu.button, specialFolders.resource + "/icons/cameratoolbar/keyframeanimatedmode.svg");
  menu.show();
}

function AP_effectsPiemenu(){
  // we start a list of widgets to display in our pieMenu.
  
  var mainWidgets = [];
  // add some buttons that activate tools and tool actions

   var turbNoiseButton = new $.oPieButton(
    specialFolders.resource + "../../Plugins/TurbulentNoise/resources/TurbulentNoise.png",
    "Turbulent Noise"
  )
  turbNoiseButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "TurbulentNoise" )
    turbNoiseButton.closeMenu();
  }
  mainWidgets.push(turbNoiseButton);
  
  
  var cutterButton = new $.oPieButton(
    specialFolders.resource + "/icons/effects/cutter.png",
    "Cutter"
  )
  cutterButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "CUTTER" )
    cutterButton.closeMenu();
  }
  mainWidgets.push(cutterButton);

  var imgTransformButton = new $.oPieButton(
    specialFolders.resource + "/icons/effects/pegapply.png",
    "Image Transform"
  )
  imgTransformButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "PEG_APPLY3" )
    imgTransformButton.closeMenu();
  }
  mainWidgets.push(imgTransformButton);
  
    var fadeButton = new $.oPieButton(
    specialFolders.resource + "/icons/effects/fade.png",
    "Transparency"
  )
  fadeButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "FADE" )
    fadeButton.closeMenu();
  }
  mainWidgets.push(fadeButton);
  
    var greyscaleButton = new $.oPieButton(
    specialFolders.resource + "/icons/effects/colour2bw.png",
    "Greyscale"
  )
  greyscaleButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "COLOR2BW")
    greyscaleButton.closeMenu();
  }
  mainWidgets.push(greyscaleButton); 

    var gaussblurButton = new $.oPieButton(
    specialFolders.resource + "../../Plugins/GaussianBlur/resources/gaussianblur.png",
    "Gaussian Blur"
  )
  
  gaussblurButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "GAUSSIANBLUR-PLUGIN" )
    gaussblurButton.closeMenu();
  }
  mainWidgets.push(gaussblurButton); 

 
    var refractButton = new $.oPieButton(
    specialFolders.resource + "/icons/effects/refract.png",
    "Refract"
  )
  
  refractButton.activate = function(){
    Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "REFRACT" )
    refractButton.closeMenu();
  }
  mainWidgets.push(refractButton); 
  
   
  var mattecompButton = new $.oPieButton(
    specialFolders.resource + "/icons/modulelibrary/mattecomposite.png",
    "Matte Composite"
  )
  
  mattecompButton.activate = function(){
	Action.perform( "onActionAddModuleByName(QString)", "moduleResponder", "MATTE_COMPOSITE" )
    mattecompButton.closeMenu();
  }
  mainWidgets.push(mattecompButton); 
  
  
  
  // we initialise our main menu. The numerical values are for the minimum and maximum angle of the
  // circle in multiples of Pi. Going counterClockwise, 0 is right, 1 is left, -0.5 is the bottom from the right,
  // and 1.5 is the bottom from the left side. 0.5 is the top of the circle.
  var menu = new $.oPieMenu("menu", mainWidgets, false, -0.635, 1.365);

  // configurating the look of it by adding gradients (any type supported by QBrush can be used)
  // this can be helpful to visually identify the different pie menus
  var backgroundGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuBg = menu.backgroundColor;
  backgroundGradient.setColorAt(1, new QColor(44, 35, 79, 255));
  backgroundGradient.setColorAt(0.66, new QColor(29, 23, 52, 255));		//outer ring
  backgroundGradient.setColorAt(.655, new QColor(240, 120, 255, 255));	//divider
  backgroundGradient.setColorAt(.65, new QColor(78, 63, 143, 120));		//inner disc
  backgroundGradient.setColorAt(0, new QColor(78, 63, 143, 33));
  
  
  var sliceGradient = new QRadialGradient (new QPointF(menu.center.x, menu.center.y), menu.maxRadius);
  var menuColor = menu.sliceColor;
  sliceGradient.setColorAt(1, new QColor(255, 222, 255, 255));			//cap
  sliceGradient.setColorAt(.99, new QColor(88, 70, 163, 120));			//outer band
  sliceGradient.setColorAt(.66, new QColor(88, 70, 163, 120));			//outer band
  sliceGradient.setColorAt(.655, new QColor(255, 222, 255, 255));		//divider
  sliceGradient.setColorAt(.65, new QColor(88, 70, 163, 120));			//outer band
  sliceGradient.setColorAt(0, new QColor(196, 117, 255, 120));			//inner wedge

  menu.backgroundColor = backgroundGradient;
  menu.sliceColor = sliceGradient;
  UiLoader.setSvgIcon(menu.button, specialFolders.resource + "/icons/timeline/effect.svg");
  menu.show();
}