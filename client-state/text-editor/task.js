const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clearBtn');
const STORAGE_KEY = 'textEditorContent';

window.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent !== null) {
        editor.value = savedContent;
    }
});

editor.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, editor.value);
});

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem(STORAGE_KEY);
});