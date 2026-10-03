function showEmail() {
    document.getElementById("email").innerHTML = '<a href="mailto:danielbalcar22@gmail.com" id="email">danielbalcar22@gmail.com</a>';
    document.getElementById("showEmail").remove();
}
function showPhone() {
    document.getElementById("phone").innerHTML = '<a href="tel:+420737658015" id="phone">+420&nbsp;737&nbsp;658&nbsp;015</a>';
    document.getElementById("showPhone").remove();
}

function showPFP(show) {
    if (show) {
        document.getElementById("img").src = "/static/img/pfp-real.png"
    } else {
        document.getElementById("img").src = "/static/img/pfp-fake.png"
    }
}