$(document).ready(function(){
    $('.parallax').parallax();
$('.sidenav').sidenav();
$('.modal').modal();
 $('.dropdown-button').dropdown();
});
const today = new Date()
const Day2 = new Date(today)
Day2.setDate(Day2.getDate() + 1)
const Day3 = new Date(today)
Day3.setDate(Day2.getDate() + 2)
const Day4 = new Date(today)
Day4.setDate(Day2.getDate() + 3)
const Day5 = new Date(today)
Day5.setDate(Day2.getDate() + 4)
var current1;
var current;
function change(hh)
{
 


  current1=hh.srcElement.id;
  current=current1.substr(2);
  console.log(obj[statelist[current]])
  new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      hover:false,
      labels: [today.getDate(),Day2.getDate(),Day3.getDate(),Day4.getDate(),Day5.getDate()],
      datasets: [ { 
          data:obj[statelist[current]],
          label: String(statelist1[current]),
          borderColor: "#8e5ea2",
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Active Corona cases till today'
      },
      events:[],
      onClick:null,
    }
  });
  document.getElementById("cityname").innerHTML=statelist1[current];
  document.getElementById("citydata").innerHTML="<p>"+"Day 0:"+obj[statelist[current]][0]+"<br>"+"Day 1:"+obj[statelist[current]][1]+"<br>"+"Day 2:"+obj[statelist[current]][2]+"<br>"+"Day 3:"+obj[statelist[current]][3]+"<br>"+"Day 4:"+obj[statelist[current]][4]+"<br>"+"</p>";
}
new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      labels: [today.getDate(),Day2.getDate(),Day3.getDate(),Day4.getDate(),Day5.getDate()],
      datasets: [ { 
          data: india,
          label: "India",
          borderColor: "#8e5ea2",
          fill: false
        },
      ]
    },
    options: {
      title: {
        display: true,
        hover:false,
        text: 'Corona cases till today'
      }
    }
  });
  $("#select1").on('change', function() {
    console.log($(this));
})
  var statelist1=["India","Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Ladakh","Lakshadweep","Delhi","Puducherry"]
  statelist1.sort();
  for( var p in statelist1)
  {
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(statelist1[p]);
  node.style = "color:darkblue;padding:5px";  
  node.onclick=function (p){ change(p);};
  node.id="ll"+p;       // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("dropdown").appendChild(node); 
  }
  for( var q in statelist1)
  { 
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(statelist1[q]);
  node.onclick=function (q){ change(q)};
  node.id="li"+q;
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

    var request = new XMLHttpRequest()
    var statelist=[
      "ap",
      "ar",
      "as",
      "br",
      "ch",      
      "ct",
      "dd",
      "dn",
      "dl",
      "ga",
      "gj",
      "hr",
      "hp",
      "in",
      "jk",
      "jh",
      "ka",
      "kl",
      "la",
      "ld",
      "mp",
      "mh",
      "mn",
      "ml",
      "mz",
      "nl",
      "or",
      "py",
      "pb",
      "rj",
      "sk",
      "tn",
      "tg",
      "tr",
      "up",
      "ut",
      "wb"
      ]
var obj;     
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pure-sierra-11051.herokuapp.com/', true)
var data={}
var india=[]
request.onload = function() {
  console.log(this.response)
  data=this.response;
  obj = JSON.parse(data);
  for(var j=0;j<5;j++)
  { india[j]=0;
  for(var i in statelist)
  {
    if(statelist[i]!="in"){
    if(obj[statelist[i]][j]<0)
    obj[statelist[i]][j]=0;
  india[j]+=obj[statelist[i]][j];
    }
  }
}
if(obj["in"]==null||obj["in"]==undefined)
{
obj["in"][0]=obj["un"][0]+obj["un"][0];
obj["in"][1]=obj["un"][1]+obj["un"][1];
obj["in"][2]=obj["un"][2]+obj["un"][2];
    obj["in"][3]=obj["un"][3]+obj["un"][3];
    obj["in"][4]=obj["un"][4]+obj["un"][4];
console.log(india)
change({
"srcElement":{
  "id":"ll13"
}
})
}
obj = JSON.parse(data);
infbysex=[obj["male_inf"],obj["female_inf"]]

 deathbysex=[obj["dead_m"],obj["dead_f"]]
  deathbyage=[obj["dead_18"], obj["dead_30"],obj["dead_45"],obj["dead_60"],obj["dead_60plus"]]
   infbyage=[obj["inf_18"],obj["inf_30"], obj["inf_45"],obj["inf_60"],obj["inf_60plus"]]
 overall=[obj["ov_dead"],obj["ov_rec"],obj["ov_uncon"],]
 recoverybysex=[obj["re_m"],obj["re_f"]]
 recoverybyage=[ obj["re_18"],obj["re_30"],obj["re_45"],obj["re_60"],obj["re_60plus"]]
referesh();
console.log(overall)
 

}
var infbysex=[]

var infbyage=[]
var  deathbysex=[]
var deathbyage=[]
var overall=[]
var recoverybysex=[]
var recoverybyage=[]
referesh()
// Send request
request.send()


const sendMail = form => {
  const mailForm = document.forms[form]
  const email = mailForm.elements["email"].value.trim()
  const subject = "none"
  const message = mailForm.elements["message"].value.trim()

  const formData = {
    sender,
    email,
    subject,
    message
  }

  formData["*reply"] = "email"
  formData["*subject"] = "Nouveau message depuis ton site"
  formData["*default_email"] = process.env.ENFORMED_SEND_MAIL_TO

  if (
    process.env.NODE_ENV === "production" &&
    trap === "" &&
    mailForm.checkValidity() &&
    sender !== "" &&
    email !== "" &&
    subject !== null &&
    message !== null
  ) {
    fetch(`https://www.enformed.io/${process.env.ENFORMED_KEY}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((data) => {
        mailForm.elements["sender"].value = ""
        mailForm.elements["email"].value = ""
        mailForm.elements["subject"].value = ""
        mailForm.elements["message"].value = ""
      })
      .catch((err) => console.log(err))
  }
}
function referesh(){
new Chart(document.getElementById("myChart1"), {
  type: 'pie',
  data:  {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data:infbysex,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
            ]
        }]
}
});
new Chart(document.getElementById("myChart2"), {
  type: 'pie',
  data:   {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: deathbysex,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
            ]
        }]
}
});
new Chart(document.getElementById("myChart3"), {
  type: 'pie',
  data:  {
    labels: [
        "Male",
        "Female",
    ],
    datasets: [
        {
            data: recoverybysex,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
            ]
        }]
}
});
new Chart(document.getElementById("myChart4"), {
  type: 'pie',
  data: {
    labels: [
        "<18",
        "18-25",
        "25-40",
        "40-60",
        "60+"
    ],
    datasets: [
        {
            data: infbyage,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
}
});
new Chart(document.getElementById("myChart5"), {
  type: 'pie',
  data: {
    labels: [
      "<18",
      "18-25",
      "25-40",
      "40-60",
      "60+"
  ],
    datasets: [
        {
            data:  deathbyage,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
}
});
new Chart(document.getElementById("myChart6"), {
  type: 'pie',
  data: {
    labels: [
      "<18",
      "18-25",
      "25-40",
      "40-60",
      "60+"
  ],
    datasets: [
        {
            data: recoverybyage,
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
}
});
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Death", "Recovery", "Currently Hospitalised"],
    datasets: [
      {
        labels: "Covid Cases",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: overall
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Overall Death and Recovery Rate'
    }
    ,legend:false
  }
});
}
