'use strict'

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', updatePreview);

function updatePreview() {
    const markdown = editor.value;
    preview.innerHTML = marked(markdown);
}

