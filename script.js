
document.getElementById('solve-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('input').value;
  const response = await fetch('/api/solve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });
  const data = await response.json();
  document.getElementById('result').innerText = data.result;
});
