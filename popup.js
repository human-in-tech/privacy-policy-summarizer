document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const response = await fetch('http://127.0.0.1:5000/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText })
    });
    const data = await response.json();
    document.getElementById('summary').innerText = data.summary;
  });
  