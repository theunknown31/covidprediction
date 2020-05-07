$(document).ready(function(){
    $('.parallax').parallax();
$('.sidenav').sidenav();
$('.modal').modal();
 $('.dropdown-button').dropdown();
});

new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Maharastra",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "India",
          borderColor: "#8e5ea2",
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Corona cases till today'
      }
    }
  });
  
  var statelist=["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"]
  for( var i in statelist)
  {
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(statelist[i]);
  node.style = "color:darkblue;padding:5px";         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("dropdown").appendChild(node); 
  }
  for( var i in statelist)
  {
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(statelist[i]);
  node.style = "color:darkblue;padding:5px";         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("dropdown1").appendChild(node); 
  }
  
  var textWrapper = document.querySelector('.ml1 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i+1)
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: (el, i, l) => 80 * (l - i)
    }).add({
      targets: '.ml1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });