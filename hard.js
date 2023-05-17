const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const today = new Date().getDay();

const daysOfWeek = document.getElementById('daysOfWeek');

for (let i = 0; i<week.length; i++){
  const li = document.createElement('li');
  li.textContent = week[i];
  if (i === today){
    li.style.fontWeight = 'bold';
  }
  if (week[i] === 'Saturday' || week[i] === 'Sunday'){
    li.style.fontStyle = 'italic';
  }
  daysOfWeek.appendChild(li);
}

