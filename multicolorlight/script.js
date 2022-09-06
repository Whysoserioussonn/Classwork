var color = ["#FF00FF","#000080","#00FF00"];
var i = -1;
document.querySelector("button").addEventListener("click", function() 
 {
//i= i < color.length ? ++i : 0;
if (i < color.length)
{++i;
 document.querySelector("header").style.background = color [i];
  }
 else { i=0;
  document.querySelector("header").style.background = color [i];
  } 
}  )
