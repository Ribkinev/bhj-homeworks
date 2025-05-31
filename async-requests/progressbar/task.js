document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('file');
    const progressBar = document.getElementById('progress');

    if (fileInput.files.length === 0) {
        alert('Пожалуйста, выберите файл для загрузки.');
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentComlete = (event.loaded / event.total) * 100;
            progressBar.value = percentComlete;
        }
    };

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Файл успешно загружен!');
            progressBar.value = 0;
        } else {
            alert('Ошибка при загрузке файла'); 
        }
    };
    
    xhr.onerror = function() {
        alert('Произошла ошибка при отправке запроса');
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.send(formData);
});