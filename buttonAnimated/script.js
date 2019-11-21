const buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach(function(btn) {
    btn.addEventListener('click', addElement);
});

function addElement(e) {
    const addDiv = document.createElement('div');
    const maxValue = Math.max(this.clientWidth, this.clientHeight);
    const rect = this.getBoundingClientRect();
    const style = addDiv.style;
    style.width = maxValue + 'px';
    style.height = maxValue + 'px';
    style.left = e.clientX - rect.left - (maxValue / 2) + 'px';
    style.top = e.clientY - rect.top - (maxValue / 2) + 'px';

    addDiv.addEventListener('animationend', function () {
        this.remove();
    })
    addDiv.classList.add('pulse');
    this.append(addDiv);
    console.log(rect, e.clientX, maxValue);
}
