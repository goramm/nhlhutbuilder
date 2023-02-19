function convertLbToKg() {
  var $el = $(document).find("#player_bio_table tr:last td:first");
  var kg = parseInt($el.text()) * 0.453;
  $el.text(`${Math.round(kg)} kg`);
}

function convertFootToCm() {
  var $el = $(document).find("#player_bio_table tr:last td:last");
  var [foot, inch]= $el.text().replace(/\s+/, "").split(`'`);
  $el.text(`${Math.round(parseInt(foot) * 30.48 + parseInt(inch) * 2.54)} cm`);
}

$('.view_player').on('click', () => {
  setTimeout(() => {
    convertLbToKg();
    convertFootToCm();
  }, 500);
});
