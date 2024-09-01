function toggleAnswer(index) {
    const answer = document.querySelectorAll('.answer')[index];
    const arrow = document.querySelectorAll('.arrow')[index];

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.classList.remove('rotate');
    } else {
        answer.style.display = 'block';
        arrow.classList.add('rotate');
    }
}