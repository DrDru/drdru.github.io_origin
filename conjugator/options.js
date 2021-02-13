'use strict';

var OPTION_IDS = {
  GODAN: 'godan',
  I_ADJ: 'iadj',
  ICHIDAN: 'ichidan',
  IRREGULAR: 'irregular',
  NA_ADJ: 'naadj',
  TO_BE: 'to_be'
};

var generateOptions = function(id, opts) {
  opts.forEach(function(opt) {
    opt[1] = "opt-" + opt[1];
    opt.unshift($("#"+id));
    genFullOption.apply(this, opt)
  });
};

// Adds an label to the options menu
function genLabel(desc) {
  var $label = $('<div/>', {class: 'option-label'});
  $label.text(desc);
  return $label;
}

// Adds an option to the options menu
function genOption(desc) {
  var $option = $('<div/>', {class: 'check-box'});
  var $input = $('<input/>', {type: 'checkbox', value: '0', id: desc, name: ''});
  $input.prop('checked', true);
  var $label = $('<label/>', {for: desc});
  $option.append($input);
  $option.append($label);
  return $option;
}

function genFullOption(target, label, opt) {
  var $container = $('<div/>', {class: 'checkboxContainer'});
  var $labelContainer = $('<div/>', {class: 'labelContainer'});
  $labelContainer.append(genLabel(label));
  $container.append($labelContainer);
  $container.append(genOption(opt));
  target.append($container);
}

function setConfig(str) {
  str=""+str;
  if (!str.length) {
    return;
  }
  var bits = parseInt("" + str, 36, 10);
  $("#option-menu input:checkbox").each(
      function() {
        var bval = +$(this).data('cfg');
        $(this).prop("checked", !!(bits & bval));
      });
}
