'use strict'

$(document).ready(function () {
    function updatePreview() {
        const markdown = $('#editor').val();
        $('#preview').html(marked(markdown));
    }

    $('#editor').on('input', updatePreview);

    $('#loadSample').on('click', function () {
        const sampleMarkdown = `
        # Hello World!
        
        This is a sample markdown.
        
        ## This is a sub heading
        
        **This text will be bold**
        
        _This text will be italic_
        
        - This is a list item
        
        [This is a link](http://www.example.com)
        
        \`\`\`
        This is a code block
        \`\`\`
        
        > This is a quote
        `;

        $('#editor').val(sampleMarkdown);
        updatePreview();
    });

    $('#clear').on('click', function () {
        $('#editor').val('');
        updatePreview();
    });
});