document.addEventListener("DOMContentLoaded", function () {
    function createParagraph() {
        let helloworld = document.createElement('h1');
        helloworld.textContent = 'Hello world!';
        document.body.appendChild(helloworld);
    }
    createParagraph();
});