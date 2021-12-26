  // Deal With Tabs Our Products
  $('.tabs-section .tab-switch li').click(function () {
    // Add Selected Class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');
    // Hide All Divs
    $('.tabs-section .tabs-content  div').hide();
    // Show Div Connected With This Link
    $($(this).data('class')).show();
  });
  // Deal With Tabs Products And Solutions
  $('.prod-sol-sec .tab-switch li').click(function () {
    // Add Selected Class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');
    // Hide All Divs
    $('.prod-sol-sec .tabs-content  div').hide();
    // Show Div Connected With This Link
    $($(this).data('class')).show();
  });
  
