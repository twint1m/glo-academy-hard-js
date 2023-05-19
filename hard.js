const output = {
  outA: document.querySelector('.output_a'),
  outB: document.querySelector('.output_b'),  
  date: ['4', '2', '2020'],
  time: ['23', '5', '33'],

  updateDateTime: function () {
    const now = new Date();
    output.date = [now.getDate().toString(), (now.getMonth() + 1).toString(), now.getFullYear().toString()];
    output.time = [now.getHours().toString(), now.getMinutes().toString(), now.getSeconds().toString()];
    output.start();
  },

  outputA: function () {
    if (output.time[0] === '1' || output.time[0] === '21'){
      return 'Сегодня вторник, ' + output.date[0] +  ' февраля ' + output.date[2] + ' года, ' + output.time[0] + ' час ' + output.date[1] + ' минуты ' + output.time[2] + ' секунды';
    } else if (output.time[0] >= 2 && output.time[0] <= 4 || output.time[0] >= 22 && output.time[0] <= 23) {
      return 'Сегодня вторник, ' + output.date[0] +  ' февраля ' + output.date[2] + ' года, ' + output.time[0] + ' часа ' + output.date[1] + ' минуты ' + output.time[2] + ' секунды';
    } else if (output.time[0] >= 5 && output.time[0] <= 20) {
      return 'Сегодня вторник, ' + output.date[0] +  ' февраля ' + output.date[2] + ' года, ' + output.time[0] + ' часов ' + output.date[1] + ' минуты ' + output.time[2] + ' секунды';
    }
  },

  outputB: function () {
    for (let i = 0; i < output.date.length; i++){
      if (output.date[i].length == 1) {
        output.date[i] = '0' + output.date[i];
      }
    }
    for (let i = 0; i < output.time.length; i ++){
      if (output.time[i].length == 1){
        output.time[i] = '0' + output.time[i];
      }
    }
    return output.date[0] + '.' + output.date[1] + '.' + output.date[2] + ' - ' + output.time[0] + ':' + output.time[1] + ':' + output.time[2];
  },

  start: function() {
    output.outA.textContent = output.outputA();
    output.outB.textContent = output.outputB();
  }
}

// вызываем функцию обновления даты и времени каждую секунду
setInterval(output.updateDateTime, 1000);

output.start();
