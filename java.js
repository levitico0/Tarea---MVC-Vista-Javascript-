const form = document.getElementById('commentForm'),
      list = document.getElementById('commentList'),
      count = document.getElementById('charCount');

form.onsubmit = e => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<a href="#"><b>${form.name.value}:</b> ${form.comment.value}</a>`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);
    list.appendChild(li);
    form.reset(); 
    count.textContent = '200';
};

form.comment.oninput = () => count.textContent = 200 - form.comment.value.length;
