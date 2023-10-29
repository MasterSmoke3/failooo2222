const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
 
// Добавляем обработчик события загрузки файла
fileInput.addEventListener('change', (e) => {
// Получаем файл из события
const file = e.target.files[0];
 
// Создаем объект FileReader для чтения файла
const fr = new FileReader();
 
// Добавляем обработчик события прочтения файла
fr.addEventListener('load', (e) => {
// Получаем содержимое файла
const content = e.target.result;
 
// Создаем элемент списка и добавляем его в список файлов
const li = document.createElement('li');
li.textContent = file.name;
fileList.appendChild(li);
 
// Сохраняем файл в локальном хранилище
localStorage.setItem(file.name, content);
});
 
// Читаем файл
fr.readAsText(file);
});
 
// Выводим список всех файлов
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
 
  const li = document.createElement('li');
  li.textContent = key;
  fileList.appendChild(li);
}  