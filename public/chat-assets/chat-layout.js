/* eslint-disable no-unused-vars, no-undef, no-eval */
function InitializeControls() {
  const { $ } = window;
  const winwidth = $(window).width();
  const winheight = $(window).height();
  if (!chatSDKGlobals.ClientParameters.Three_PanelLayout) {
    $('#Panel1').css('width', winwidth * .40);
    $('#Panel1').css('height', winheight * .19);
  }
  const panel1width = $('#Panel1').width();
  const panel1height = $('#Panel1').height();
  $('#PageUrl').css('width', panel1width);
  $('#PageUrl').css('height', panel1height);
  const panel1position = $('#Panel1').position();
  const panel1left = panel1position.left;
  const panel1top = panel1position.top;
  $('#Panel2').css('width', panel1width);
  $('#Panel2').css('left', panel1left);
  $('#Panel2').css('top', panel1top + panel1height + 10);
  $('#Panel2').css('height', panel1height * 2.5);
  const panel2position = $('#Panel2').position();
  const panel2left = panel2position.left;
  const panel2top = panel2position.top;
  const panel2height = $('#Panel2').height();
  $('#Panel3').css('left', panel1left);
  $('#Panel3').css('top', panel2top + panel2height + 10);
  $('#Panel3').css('height', panel1height + 50);
  $('#Panel3').css('width', panel1width);
  const panel3height = $('#Panel3').height();
  const panel3position = $('#Panel3').position();
  const panel3top = $('#panel3position').top;
  const panel3width = $('#panel3position').width;
  const containerwidth = $('#maincontainer').width();
  const containerheight = $('#maincontainer').height();
  $('#Panel1').css('width', winwidth * .95);
  $('#Panel1').css('height', winheight * .19);
  if (!chatSDKGlobals.ClientParameters.Three_PanelLayout) {
      $('#Panel4').css('top', panel1top);
      $('#Panel4').css('left', panel1width + 30);
      $('#Panel4').css('width', winwidth * .55);
      $('#Panel4').css('height', panel1height + panel2height +
          panel3height + 23.5);
  } else {
      $('#Panel4').css({
          'display': 'none'
      });
  }
  $('#Panel1').css('width', panel1width - 1);
  const chatstatusposition = $('#chatstatus').position();
  const chatstatusright = $('#chatstatusposition').right;
  const chatstatustop = $('#chatstatusposition').top;
  $('#send').css('height', panel3height * .20);
  $('#send').css('width', panel3width * .70);
  $('#send').css('top', chatstatustop - 1);
  $('#send').css('left', chatstatusright + 1);
  $('#disconnect').css('height', panel3height * .20);
  $('#disconnect').css('width', panel3width * .70);
  $('#disconnect').css('top', chatstatustop - 1);
  try {
      eval('"use strict"; class EmojiPicker {}');
      const emojis = new EmojiPicker();
  } catch (error) { /* Ignore */ }
}
