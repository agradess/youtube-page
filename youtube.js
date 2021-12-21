
function main() {
  $('#navbar').hide();
  $('#navbar-open').on('click', function() {
    $('#navbar').toggle();
  });
}

$(document).ready(main);