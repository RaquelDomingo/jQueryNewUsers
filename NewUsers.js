$(document).ready(function(){
  $("#adduser").click(function(){
    var first = $("input[name=first]").val();
    var last = $("input[name=last]").val();
    var email = $("input[name=email]").val();
    var contact = $("input[name=contact]").val();
  console.log(first, last, email, contact)

  $("tbody").append ('<tr><td>' + first + '</td><td>' + last + '</td><td>' + email + '</td><td>' + contact + '</td></tr>');
  });
});
