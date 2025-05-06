document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const contentDiv = document.getElementById('content');

    uploadBtn.addEventListener('click', function() {
        if (fileInput.files.length === 0) {
            alert('请先选择一个Word文档');
            return;
        }

        const file = fileInput.files[0];
        if (!file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
            alert('请选择Word文档（.doc或.docx格式）');
            return;
        }

        // 这里我们暂时只显示文件名，因为在浏览器中直接读取Word文件内容需要额外的库
        contentDiv.innerHTML = `
            <div style="padding: 20px; background-color: #e8f4f8; border-radius: 4px;">
                <h3>已选择文件：${file.name}</h3>
                <p>文件大小：${(file.size / 1024).toFixed(2)} KB</p>
                <p>注意：要完整读取Word文件内容，需要在服务器端处理或使用专门的JavaScript库。</p>
            </div>
        `;
    });

    // 添加拖放功能
    const uploadSection = document.querySelector('.upload-section');
    
    uploadSection.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = '#3498db';
    });

    uploadSection.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = '#ddd';
    });

    uploadSection.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = '#ddd';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            uploadBtn.click();
        }
    });
}); 