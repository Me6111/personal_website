// C:\Users\user\Desktop\projects\m_portfolio\button.js

window.onload = function() {
    const button = document.getElementById('helloButton');
    button.addEventListener('click', function() {
        const div = document.getElementById('helloDiv');
        const helloSign = document.createElement('p');
        helloSign.textContent = 'Hello';
        div.appendChild(helloSign);
    });
}