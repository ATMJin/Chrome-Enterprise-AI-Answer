// 抓取頁面內容
const startButton = document.querySelector('input[type="button"][value="開始作答"]');
startButton?.addEventListener('click', () => {
  setTimeout(() => {
    console.log("document.body:", document.body);
    const questForm = document.getElementById('responseForm');
    const table = questForm.querySelector('table');
    Array.from(table.querySelectorAll('tr')).slice(0, -1).forEach((el, index) => {
      chrome.runtime.sendMessage({ content: el.innerText }, (response) => {
        console.log("Response from OpenAI:", response);
        // 假設 Q 是一個已經選擇的元素
        var span = document.createElement('b'); // 創建一個新的 <span> 元素
        span.textContent = response; // 設置 <span> 的文本內容
        // 將 <span> 添加到 <td> 元素內
        el.querySelectorAll('td')[1].appendChild(span);
      });
    });
  }, 5000);
});

