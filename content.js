// 抓取頁面內容
const pageContent = document.body.innerText || document.body.textContent;

// 發送內容給 background.js 進行 API 處理
chrome.runtime.sendMessage({ content: pageContent }, (response) => {
  console.log("Response from OpenAI:", response);
});
