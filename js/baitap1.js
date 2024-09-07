function displayInfo() {
    var name = document.getElementById('nameInput').value;
    var age = document.getElementById('ageInput').value;

    var output = document.getElementById('output');
    output.innerHTML = "<h1 class='name'>" + name + "</h1>" +
                       "<h2 class='age'>" + age + "</h2>";
}
