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