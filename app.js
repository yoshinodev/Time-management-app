$("#menu-toggle").click(function (e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
    if ($("#sidebar-wrapper").width() <= 60) { 
      $('.hiddensp').hide();
    } else {
      $(".hiddensp").show();
    }
  });
  
  $(document).ready(function(){$("#menuDropdown").click(function(){
$(this).next(".dropdown-menu").slideToggle();
});   
  });
  var counter = 1;
$(function() {
    var table = document.getElementById("timesheetTable");
        function newRow1(table){
            counter++;
            var NewRow2= $('#timesheetTable').append('<tr><td> Tittle ' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></td>' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></td>' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></td>' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></td>' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></td>' +
                    counter + '</td><td><input type="text" autocomplete="off" placement="left" class="cl-form-control cl-form-control-sm cl-timesheet-input cl-timesheet-show-dots' +
                    counter + '"/></td></tr>');
                };
    $('#plusrow').on('click', function (e) {
        e.preventDefault();
        newRow1(table);
        });
});

    $("#modalbtn").click(function (e) {
        e.preventDefault();
        $('#exampleModal').modal('show');
    });

  function allowDrop(ev) {
    ev.preventDefault();
  };
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.sortable);
 };
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 };

 var container2 = document.getElementsByClassName("container2")[0];
 var container3 = document.getElementsByClassName("container3")[0];
 var checkIcon = document.getElementById("check-icon");
 var xIcon = document.getElementById("x-icon");
 var i = 0;

 xIcon.addEventListener("click", function () {
     typeNote();
 });

 checkIcon.addEventListener("click", function () {
     createNote();
 });

 function typeNote(){
    if(container3.style.display === "none"){
        container3.style.display = "block";
    }
    else {
        container3.style.display = "none";
    }
 };

 function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width: 250px; height: 250px; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    });

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    });

    node0.addEventListener("dblclick", function(){
        node0.remove();
    });

    document.getElementById("note-text").value = '';
 };

 function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
 };

 function rotate (){
    var random_rotate = ["rotate(3deg", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
};

function color(){
   var random_color = ["#50C5B7", "#F5E663", "#E28413", "#F4C3C2", "#BFD7EA", "#F1B5CB", "#E39695", "#E88EED"];

   if(i > random_color.length){
       i = 0;
   }
   return random_color[i++];
};