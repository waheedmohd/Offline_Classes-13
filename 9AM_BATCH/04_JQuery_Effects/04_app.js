// hide() , show()
$('#btn-1').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'hide'){
        $('#card-1').hide(500);
        $(this).text('show');
    }
    else{
        $('#card-1').show(500);
        $(this).text('hide');
    }
});


// toggle()
$('#btn-2').click(function() {
    let buttonText = $(this).text();
    $('#card-2').toggle(500);
    if(buttonText === 'hide'){
        $(this).text('show');
    }
    else{
        $(this).text('hide');
    }
});

// fadeOut() , fadeIn() -> fadeToggle()
// slideup() , slideDown() -> slideToggle()