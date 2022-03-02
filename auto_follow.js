// ==UserScript==
// @name         Seguir todos os usuários na página atual.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT License
// @description  Seguir todos os usuários no perfil dos usuários atuais
// @author       Yuri Cunha
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// ==/UserScript==

(function() {
    'use strict';

    if (document.querySelectorAll('.user-followers-container').length == 0) return;

    function follow_all() {

        console.log('Começando a seguir...')
        const followButton = document.getElementById('follow-all')
        followButton.disabled = false
        followButton.onclick = () => {}
        followButton.innerText = 'Seguindo usuários...'

        setInterval(() => {
            const followButton = document.querySelector('input[value="Follow"]')
            if (followButton !== null) {
                console.log(followButton.title)
                followButton.click()
                followButton.remove()
            } else {
                console.log('Follows finished')
                location.reload()
            }
        }, 2000);
    }

    document.querySelector('.js-profile-editable-area .js-user-profile-bio').insertAdjacentHTML('afterEnd', '<div class="mb-3"><button name="button" type="button" class="btn btn-block" id="follow-all">Seguir todos os usuários na página atual.</button></div>')
    console.log('Added follow button')

    document.getElementById('follow-all').onclick = follow_all;
})();