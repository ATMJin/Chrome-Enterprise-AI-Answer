chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const pageContent = message.content;

  sendResponse(pageContent);

  // 呼叫 OpenAI API
  //   fetch("https://api.openai.com/v1/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer YOUR_OPENAI_API_KEY`,
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo", // 可以選擇不同的模型
  //       prompt: pageContent,
  //       max_tokens: 100,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("OpenAI 回應:", data.choices[0].text);
  //       sendResponse(data.choices[0].text);
  //     })
  //     .catch((error) => {
  //       console.error("API 發送失敗:", error);
  //       sendResponse("Error processing request");
  //     });

  // 告知 Chrome 這是異步回應
  return true;
});
