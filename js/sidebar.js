var btn=document.getElementById("sidebar-button"),sidebar=document.getElementById("sidebar");btn.addEventListener("click",function(t){sidebar.classList.toggle("open"),btn.classList.toggle("open"),t.stopPropagation()});