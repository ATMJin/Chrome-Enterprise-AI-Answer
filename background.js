chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const question = message.content;

  // 呼叫 OpenAI API
  fetch('https://api.openai.com/v1/chat/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer `,
    },
    body: JSON.stringify({
      model: "gpt-4o", // 可以選擇不同的模型
      messages: [{ "role": "system", "content": "回答下面問題，不需要解釋，只要答案:" }, { "role": "user", "content": question }],
      max_tokens: 100,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("OpenAI 回應:", data?.choices[0]?.message?.content);
      sendResponse(data?.choices[0]?.message?.content);
    })
    .catch((error) => {
      console.error("API 發送失敗:", error);
      sendResponse("解答失敗");
    });

  // 告知 Chrome 這是異步回應
  return true;
});
