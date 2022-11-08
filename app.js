

document.querySelector('#ham').addEventListener('click', function () {
    document.querySelector('#ham').classList.toggle('open');
    document.querySelector('#nav').classList.toggle('hidden');
    document.querySelector('#one').classList.toggle('hidden');
    document.querySelector('#btn').classList.toggle('hidden');
});