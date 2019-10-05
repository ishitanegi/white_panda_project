var icons= document.querySelectorAll(".nav_icon");

for(var i = 0; i < icons.length; i++) {
		icons[i].addEventListener("click", function() {
			for (var i = 0; i < icons.length; i++) {
				icons[i].classList.remove("selected");
				console.log("img/blackicon_"+(i+1));
				icons[i].children[0].src="img/blackicon_"+(i+1)+".jpg";

			}
			this.classList.add("selected");
			var img= this.children;
			var src=img[0].src;
			index=src.indexOf("blackicon_")
			var value="img/blue_icon_".concat(src[index+10],".jpg") ;
			console.log(value);
			img[0].src=value;
		}
	)
}
console.log("connected");