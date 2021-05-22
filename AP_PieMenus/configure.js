////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//
//           Script MC_pieMenu.js v0.0.1
//
//     This script creates a shortcut to the pie menu.
//
//     written by Mathieu Chaptel m.chaptel@gmail.com
//		Adam Phillips customisation for individual piemenus
//
//   This script is made available under the Mozilla Public license 2.0.
//   https://www.mozilla.org/en-US/MPL/2.0/
//
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

function configure(packageFolder, packageName) {
	
//	Node view piemenu		////////////////////
  var nodepieShortcutID = "NodePie_AP_PieMenu";
  var nodepieLaunchCommand = 'AP_nodePiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/MC_piemenus_AP.js";

//	Paint tools piemenu		////////////////////
  var paintpieShortcutID = "PaintPie_AP_PieMenu";
  var paintpieLaunchCommand = 'AP_paintPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/MC_piemenus_AP.js";
  
//	Select tools piemenu		////////////////////
  var selectpieShortcutID = "SelectPie_AP_PieMenu";
  var selectpieLaunchCommand = 'AP_selectPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/MC_piemenus_AP.js";
  
//	Select tools piemenu		////////////////////
  var animpieShortcutID = "AnimPie_AP_Piemenu";
  var animpieLaunchCommand = 'AP_animatePiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/MC_piemenus_AP.js";
 
 //	Select tools piemenu		////////////////////
  var fxpieShortcutID = "FXPie_AP_Piemenu";
  var fxpieLaunchCommand = 'AP_effectsPiemenu in ' + specialFolders.userScripts + "/packages/AP_PieMenus/MC_piemenus_AP.js";


//	Create Individual Pie Shortcuts
  var nodepieShortcut = {
    id: nodepieShortcutID,
    text: "Node Pie Menu",
    action: nodepieLaunchCommand,
    longDesc: "Opens a pie menu for some common Node View tools and tasks.\nNOTE: Cable Cutter is available only in Harmony Premium 20 or higher",
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

  ScriptManager.addShortcut(nodepieShortcut);
  ScriptManager.addShortcut(paintpieShortcut);
  ScriptManager.addShortcut(selectpieShortcut);
  ScriptManager.addShortcut(animpieShortcut);
  ScriptManager.addShortcut(fxpieShortcut);
  
}

exports.configure = configure
