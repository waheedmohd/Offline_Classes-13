let lessonsArray = ["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
// Get all the HTML Elements
let originalTextElement = $('#original-text');
let textAreaBox = $('#text-area');
let messageCard = $('#message-card');
let messageElement = $('#message');
let resetButton = $('#reset-button');
let minutesElement = $('#minutes');
let secondsElement = $('#seconds');
let milliSecondsElement = $('#m-seconds');
let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timerRunning = false;
let interval = 0;

// keyup event on text Area Box
textAreaBox.keyup(function() {
    let textEnteredLength = $(this).val().length;
    if(textEnteredLength === 1 && !timerRunning){
        // start timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = originalTextElement.text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// Click on Reset Button
resetButton.click(function() {
    clearInterval(interval); // stop the timer
    clearFields();
});

// evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-danger').removeClass('bg-success').removeClass('bg-primary').addClass('bg-light');
        messageElement.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-danger').removeClass('bg-light').removeClass('bg-primary').addClass('bg-success');
            messageElement.text('Congratulations');
            clearInterval(interval); // stops the timer
            $('#congrats-modal').modal('show'); // to display the modal
            $('#congrats-sound').trigger('play'); // play the audio file
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-danger').removeClass('bg-success').removeClass('bg-light').addClass('bg-primary');
                messageElement.text('Correct Dude!');
            }
            else{
                // red
                messageCard.removeClass('bg-light').removeClass('bg-success').removeClass('bg-primary').addClass('bg-danger');
                messageElement.text('Wrong Dude!');
                $('#clap-sound').trigger('play'); // play the audio file
            }
        }
    }
};

// start Timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));
};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// clearFields
let clearFields = () => {
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    timerRunning = false;
    interval = 0;
    textAreaBox.val('');
    messageCard.removeClass('bg-danger').removeClass('bg-success').removeClass('bg-primary').addClass('bg-light');
    messageElement.text('');
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');
    originalTextElement.text('Thanks Dude!  Try another Lesson');
};

// changeText
let changeText = (index) => {
    originalTextElement.text(lessonsArray[index]);
};