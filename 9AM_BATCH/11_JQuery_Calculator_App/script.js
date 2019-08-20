// Click on minus button
$('#minus-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on plus button
$('#plus-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on divide button
$('#divide-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on multiply button
$('#multiply-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Equals Button
$('#equals-button').click(function() {
    calculate();
});

// Calculate
let calculate = () => {
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let operator = $('#operator').text();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number.parseFloat(firstNumber);
        let num2 = Number.parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        $('#result-button').text(result);
    }
};

// Click on clear button
$('#clear-button').click(function() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#operator').text('+');
    $('#result-button').text('RESET');
});