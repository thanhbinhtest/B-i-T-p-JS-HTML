var timer;
var countdownTime = 600; // 10 minutes in seconds

function startCountdown() {
    clearInterval(timer); // Clear any existing timer
    timer = setInterval(function() {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;

        if (countdownTime <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerText = 'Time’s up!';
        } else {
            document.getElementById('timer').innerText = 
                (minutes < 10 ? '0' : '') + minutes + ':' + 
                (seconds < 10 ? '0' : '') + seconds;
            countdownTime--;
        }
    }, 1000);
}
