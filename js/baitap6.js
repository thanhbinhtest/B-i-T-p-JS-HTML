var noButton = document.getElementById('noButton');
var yesButton = document.getElementById('yesButton');
var attempts = 0;

noButton.addEventListener('click', function() {
    attempts++;
    if (attempts >= 3) {
        var parent = noButton.parentNode;
        parent.appendChild(yesButton);
        parent.appendChild(noButton);
        alert('Có thể Bạn nên chọn lại.');
        attempts = 0; // Reset attempts
    } else {
        alert('Có thể Bạn nên chọn lại.');
    }
});

yesButton.addEventListener('click', function() {
    alert('Xin lỗi, bạn không phải là đối tượng của mình.');
});
