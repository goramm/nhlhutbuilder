function convertLbToKg(text) {
  const kg = parseInt(text) * 0.453;
  return `${Math.round(kg)} kg`;
}

function convertFootToCm(text) {
  const [foot, inch]= text.replace(/\s+/, "").split(`'`);
  return `${Math.round(parseInt(foot) * 30.48 + parseInt(inch) * 2.54)} cm`;
}

function replaceLbToKg(element) {
  const $el = $(document).find(element);
  if ($el.length) {
    const result = convertLbToKg($el.text());
    console.log($el.text(), '=', result);
    $el.text(result);
  }
}

function replaceFootToCm(element) {
  const $el = $(document).find(element);
  if ($el.length) {
  	const result = convertFootToCm($el.text());
    console.log($el.text(), '=', result);
    $el.text(result);
  }
}

$(function() {
  $(document).ajaxComplete(function(event, request, settings){
    if (settings.url.startsWith('player-stats.php')) {
      setTimeout(() => {
        replaceLbToKg("#player_bio_table tr:last td:first");
        replaceFootToCm("#player_bio_table tr:last td:last");
      }, 1000);
    }
  });

  setTimeout(() => {
  	replaceLbToKg("#player_stats_table #weight");
    replaceFootToCm("#player_stats_table #height");
    replaceLbToKg("#player_stats_table_right #weight_2");
    replaceFootToCm("#player_stats_table_right #height_2");	
  }, 1000);
  
});
