var log = function()
{
var link = document.getElementById("add-cat")
var container = document.getElementById("cat-container")
var counter =  document.getElementById("counter")
link.addEventListener("click", function()
	{
		if(container.childElementCount >=16)	
		{
			var btn = document.createElement("button")
			btn.textContent = "clear"
			document.body.insertBefore(btn, counter)
			btn.addEventListener("click", function()
			{
				while(container.childElementCount >0)
				{
					container.removeChild(container.childNodes[0])
				}
			})

		}
		else
		{
		var image = document.createElement("img")
		// var container = document.getElementsByClassNAme("cat-container")[0];		
		image.setAttribute("src","cats.jpg")
		image.setAttribute("class","image-resize")
		container.appendChild(image)	
		counter.textContent = "You have "+container.childElementCount+ " cats"
	}
	})
}

document.addEventListener("DOMContentLoaded",log)