// JavaScript Document


startList = function() {
	if (document.all&&document.getElementById) {
		mainNavRoot = document.getElementById("nav");
		for (i=0; i<mainNavRoot.childNodes.length; i++) {
			node = mainNavRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}
window.onload=startList;