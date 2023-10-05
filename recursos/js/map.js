document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19695.30639228255!2d-8.489933631435294!3d51.89904631791557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48449011eea438e1%3A0x89d820ed644651d1!2s26%20Knapp&#39;s%20Square%2C%20Shandon%2C%20Cork%2C%20T23%20TP46!5e0!3m2!1ses!2sie!4v1689271811162!5m2!1ses!2sie"></iframe>
    `
    ;
}, 500);

});