// SMS App
$('#text-area').keyup(function() {
    $('#char-count').text(100 - $(this).val().length);
});

// Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});
$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});

// Hobbies Selection App
$('#eating-check').change(function() {
    let card = $('#eating-card');
    handleCard(card);
});

$('#coding-check').change(function() {
    let card = $('#coding-card');
    handleCard(card);
});

$('#sleeping-check').change(function() {
    let card = $('#sleeping-card');
    handleCard(card);
});

// handle Card
let handleCard = (card) => {
    if(card.hasClass('d-none')){
        card.removeClass('d-none');
    }
    else{
        card.addClass('d-none');
    }
};











