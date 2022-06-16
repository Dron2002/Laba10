$.getJSON('https://usersdogs.dmytrominochkin.cloud/dogs', function(data){
	/* console.log(data); */
  $(data).each(function(i, hero){
  	$('#heroesBody').append($("<tr>")
    	.append($("<td>").append('<a data-modal-btn="my_modal'+hero.id+'"  class="sulcka"  href="#"  > <div class="a2"> <img class="foto" src="https://usersdogs.dmytrominochkin.cloud'+hero.dogImage+'" alt="edf" height="100px"> '+ '<span class="a3">' +hero.title+'<div class="a6">'+ hero.sex +'</div>'+'</span>'+'</div>'+'</a>' +'<div data-modal-window="my_modal'+hero.id+'" class="modal"> <div class="close_modal_window">&times</div> <div class="modal_content"> <div class="modal_inner"> <div class="modal_title"><img class="foto1" src="https://usersdogs.dmytrominochkin.cloud'+hero.dogImage+'" alt="edf" ></div> </div> <div class="ccc">  <span class="c2">'+hero.title+'<br>  </span> <hr> <span class="c3"> Sex: <br> </span>  '+hero.sex+' <br> <hr> <span class="c3">    Age: <br> </span> '+hero.age+' <br> <span class="c3"> Personality: <br> </span>'+ hero.description+' <br> <div> <a href="" class="pressed-button"><img  src="https://i.ibb.co/ZmJQ8mt/free-icon-phone-call-126509.png" alt="free-icon-phone-call-126509" width="20px"> Adopt Me </a> <div>  </div> </div> </div>' ))
      
      );
       
  let btns = document.querySelectorAll("*[data-modal-btn]")
  
  for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
  let name = btns[i].getAttribute('data-modal-btn');
  let modal = document.querySelector("[data-modal-window='"+name+"']");
  modal.style.display = "block";
  
  let close = modal.querySelector(".close_modal_window");
  close.addEventListener('click',function(){
    modal.style.display = "none";
  })
    })
  }
  
  
  window.onclick = function(e){
    if(e.target.hasAttribute('data-modal-window')){
      let modals = document.querySelectorAll("*[data-modal-window]");
      for(let i = 0; i<modals.length; i++){
        modals[i].style.display = "none";
    }
  }
  }
  });
})
	
	.fail(function(e){
		console.log('error:');
		console.error(e);
	})
