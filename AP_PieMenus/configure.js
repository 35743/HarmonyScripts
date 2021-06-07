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

function configure(packageFolder, packageName) {
	
//	Node view piemenu		////////////////////
  var nodepieShortcutID = "NodePie_AP_PieMenu";
  var nodepieLaunchCommand = 'AP_nodePiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";

//	Paint tools piemenu		////////////////////
  var paintpieShortcutID = "PaintPie_AP_PieMenu";
  var paintpieLaunchCommand = 'AP_paintPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";
  
//	Select tools piemenu		////////////////////
  var selectpieShortcutID = "SelectPie_AP_PieMenu";
  var selectpieLaunchCommand = 'AP_selectPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";
  
//	Anim tools piemenu		////////////////////
  var animpieShortcutID = "AnimPie_AP_Piemenu";
  var animpieLaunchCommand = 'AP_animatePiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";
 
 //	Effects nodes piemenu		////////////////////
  var fxpieShortcutID = "FXPie_AP_Piemenu";
  var fxpieLaunchCommand = 'AP_effectsPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";

 //	Timeline tools piemenu		////////////////////
  var timelinepieShortcutID = "TimelinePie_AP_Piemenu";
  var timelinepieLaunchCommand = 'AP_timelinePiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/AP_piemenus.js";
  


//	Create Individual Pie Shortcuts
  var nodepieShortcut = {
    id: nodepieShortcutID,
    text: "Node Pie Menu",
    action: nodepieLaunchCommand,
    longDesc: "Opens a pie menu for some common Node View tools and tasks.\nNOTE: Cable Cutter is removed in 1.0.3",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }

  var paintpieShortcut = {
    id: paintpieShortcutID,
    text: "Paint Pie Menu",
    action: paintpieLaunchCommand,
    longDesc: "Opens pie menu for some common painting tools and tasks.",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }
  
  var selectpieShortcut = {
    id: selectpieShortcutID,
    text: "Selection Pie Menu",
    action: selectpieLaunchCommand,
    longDesc: "Opens pie menu for some common selection tools and tasks.",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }
  
  var animpieShortcut = {
    id: animpieShortcutID,
    text: "Animation Pie Menu",
    action: animpieLaunchCommand,
    longDesc: "Opens pie menu for some common animation tools and tasks.",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }
 
 var fxpieShortcut = {
    id: fxpieShortcutID,
    text: "Effects Pie Menu",
    action: fxpieLaunchCommand,
    longDesc: "Opens pie menu for some common effects nodes.",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }
  
 var timelinepieShortcut = {
    id: timelinepieShortcutID,
    text: "Timeline Pie Menu",
    action: timelinepieLaunchCommand,
    longDesc: "Opens pie menu for some common timeline operations:\nPlay, go to first & last frames, loop playback\nExtend Exposure of selected drawing to current frame\nDuplicate drawing\nClear and Pull\nAdd Empty drawing",
    categoryId: "PieMenu",
    categoryText: "Pie Menu"
  }
  
  ScriptManager.addShortcut(nodepieShortcut);
  ScriptManager.addShortcut(paintpieShortcut);
  ScriptManager.addShortcut(selectpieShortcut);
  ScriptManager.addShortcut(animpieShortcut);
  ScriptManager.addShortcut(fxpieShortcut);
  ScriptManager.addShortcut(timelinepieShortcut);
  
}

exports.configure = configure
