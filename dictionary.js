
async function fetchEquations() {
  const response = await fetch('/api/equations');
  const equations = await response.json();
  populateTable(equations);
  populateTopics(equations);
}

function populateTable(equations) {
  const tbody = document.querySelector('#equations-table tbody');
  tbody.innerHTML = '';
  equations.forEach(eq => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${eq.name}</td>
      <td>${eq.formula}</td>
      <td>${eq.description}</td>
      <td>${eq.topic}</td>
    `;
    tbody.appendChild(row);
  });
}

function populateTopics(equations) {
  const topics = [...new Set(equations.map(eq => eq.topic))];
  const select = document.getElementById('topic-filter');
  topics.forEach(topic => {
    const option = document.createElement('option');
    option.value = topic;
    option.text = topic;
    select.appendChild(option);
  });
}

document.getElementById('search').addEventListener('input', async (e) => {
  const query = e.target.value.toLowerCase();
  const response = await fetch('/api/equations');
  const equations = await response.json();
  const filtered = equations.filter(eq =>
    eq.name.toLowerCase().includes(query) ||
    eq.formula.toLowerCase().includes(query)
  );
  populateTable(filtered);
});

document.getElementById('topic-filter').addEventListener('change', async (e) => {
  const topic = e.target.value;
  const response = await fetch('/api/equations');
  const equations = await response.json();
  const filtered = topic ? equations.filter(eq => eq.topic === topic) : equations;
  populateTable(filtered);
});

fetchEquations();
