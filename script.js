function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    if (name === "" || email === "" || number === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}