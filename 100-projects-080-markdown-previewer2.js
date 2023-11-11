'use strict'

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', updatePreview);

function updatePreview() {
    const markdown = editor.value;
    preview.innerHTML = marked(markdown);
}

document.getElementById('loadSample').addEventListener('click', loadSampleMarkdown);
document.getElementById('clear').addEventListener('click', clearMarkdown);

function loadSampleMarkdown() {
    const sampleMarkdown = `
    # Hello World!
    
    This is a sample markdown.
    
    ## This is a sub-heading
    
    **This text will be bold**
    
    _This text will be italic_
    
    - This is a list item
    
    [This is a link](http://www.example.com)
    
    \`\`\`
    This is a code block
    \`\`\`
    
    > This is a quote
    `;
    ;
    editor.value = sampleMarkdown;
    updatePreview();
}

function clearMarkdown() {
    editor.value = '';
    updatePreview();
}

