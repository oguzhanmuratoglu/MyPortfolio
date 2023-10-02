const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const videos = document.querySelectorAll(".video");
const urlArray = ["url(https://raw.githubusercontent.com/oguzhanmuratoglu/MyPortfolio/main/img/SnakeGame.jpg)", "url(https://raw.githubusercontent.com/oguzhanmuratoglu/MyPortfolio/main/img/BrickGame.jpg)", "url(https://raw.githubusercontent.com/oguzhanmuratoglu/MyPortfolio/main/img/ETradeWebSite.jpg)", "url(https://raw.githubusercontent.com/oguzhanmuratoglu/MyPortfolio/main/img/CVEditor.jpg)"];


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function initializeReadLessListener(e) {
            e.preventDefault();
            let metin ="";
            switch (e.target.id) {

                case "readless-1":
                    metin = "I have intermediate knowladge in C# based Windows Form, WebAPI, MVC and <a id='readmore-1' class='readmore' onclick='initializeReadMoreListener(event)'> Read More.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
                case "readless-2":
                    metin = "I have an intermediate level in these subjects. This site was made using only html css and <a id='readmore-2' class='readmore' onclick='initializeReadMoreListener(event)'> Read More.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
                case "readless-3":
                    metin = "I use the Angular framework in the front-end part and I usually write my projects in Angular.<a id='readmore-3' class='readmore' onclick='initializeReadMoreListener(event)'> Read More.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
                case "readless-4":
                    metin = "I prefer to use node.js as the backend, especially when I decide to  keep the data<a id='readmore-4' class='readmore' onclick='initializeReadMoreListener(event)'> Read More.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
            }
}

function initializeReadMoreListener(e) {
        e.preventDefault(); 
        let metin="";
            switch (e.target.id) {
                case "readmore-1":
                    metin = "I have intermediate knowladge in C# based Windows Form, WebAPI, MVC and Web Application. I am also familiar with .NET libraries such as EntityFramework, AutoMapper, Identity, JWT, RabitMq, SignalR, Serilog, NLog, FluentValidation, Autofac, Pagination, MailService, SendGrid, Json Web Token. <a id='readless-1' class='readless' onclick='initializeReadLessListener(event)'> Read Less.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
            
                case "readmore-2":
                    metin = "I have an intermediate level in these subjects. This site was made using only html css and javascript. I also wrote many of my game projects using javascript. I also have project experience with Angular and Typescript.<a id='readless-2' class='readless' onclick='initializeReadLessListener(event)'> Read Less.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
                case "readmore-3":
                    metin = "I use the Angular framework in the front-end part and I usually write my projects in Angular. I have knowledge about Angular CLI, components and inter-component communication, event binding and property binding, Observables and RxJS libraries, HTTP requests.<a id='readless-3' class='readless' onclick='initializeReadLessListener(event)'> Read Less.</a>";
                    e.target.parentElement.innerHTML = metin;
                    break;
                case "readmore-4":
                        metin = "I prefer to use node.js as the backend, especially when I decide to  keep the data of my projects in the MongoDB database. I have knowledge about creating an Http server in Node.js, express framework, real-time communication with Socket.io and deployment methods.<a id='readless-4' class='readless' onclick='initializeReadLessListener(event)'> Read Less.</a>";
                        e.target.parentElement.innerHTML = metin;
                        break;
            }
}


for(let index in videos){

    if(index==="entries") break;
    let video =videos[index];
    video.style.backgroundImage = urlArray[index];
}

$(document).ready(function(){

    $(".video").hover(hoverVideo, hideVideo);

  function hoverVideo(){
      $('video', this).get(0).play();
  }

  function hideVideo(){
      $('video', this).get(0).pause();
  }

  })

