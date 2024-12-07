const input = document.getElementById('num');

input.addEventListener('blur', () => {
  const value = input.value.trim();
  
  // Перевіряємо, чи введено число та вилучаємо всі нецифрові символи
  const digits = value.replace(/\D/g, '');
  
  // Підрахунок суми цифр
  let sum = 0;
  for (let char of digits) {
    sum += Number(char);
  }

  // Створюємо та додаємо новий елемент <p> з результатом
  const p = document.createElement('p');
  p.textContent = `Сума цифр: ${sum}`;
  document.body.appendChild(p);
});
