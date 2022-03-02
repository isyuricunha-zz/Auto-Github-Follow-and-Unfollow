// ==UserScript==
// @name         Deixar de seguir todos os usuários na página atual do GitHub.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT License
// @description  Deixar de seguir todos os usuários no perfil do usuário atual.
// @author       Yuri Cunha
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// ==/UserScript==

(function() {
    'use strict';

    if (document.querySelectorAll('.user-following-container').length == 0) return;

    function unfollow_all() {

        console.log('Deixando de seguir todos os usuários...')
        const unfollowSwitchButton = document.getElementById('unfollow-all')
        unfollowSwitchButton.disabled = true
        unfollowSwitchButton.onclick = () => {}
        unfollowSwitchButton.innerText = 'Unfollow em progresso...'

        setInterval(() => {
            const unfollowButton = document.querySelector('input[value="Unfollow"]')
            if (unfollowButton !== null) {
                console.log(unfollowButton.title)
                unfollowButton.click()
                unfollowButton.remove()
            } else {
                console.log('Unfollows finalizado.')
                location.reload()
            }
        }, 2000);
    }

    document.querySelector('.js-profile-editable-area .js-user-profile-bio').insertAdjacentHTML('afterEnd', '<div class="mb-3"><button name="button" type="button" class="btn btn-block" id="unfollow-all">Deixar de seguir todos os usuários na página atual.</button></div>')
    console.log('Adicionado botão para deixar seguir todos os usuários.')

    document.getElementById('unfollow-all').onclick = unfollow_all;
})();