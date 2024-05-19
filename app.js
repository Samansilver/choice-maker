const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  creatTag(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    });

    setRandom();
  }
});

function creatTag(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function setRandom() {
  const time = 30;

  const interval = setInterval(() => {
    const randonTag = theRandomTag();

    highlightTag(randonTag);

    setTimeout(() => {
      unHighlightTag(randonTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randonTag = theRandomTag();

      highlightTag(randonTag);
    }, 100);
  }, time * 100);
}

function theRandomTag() {
  const tag = document.querySelectorAll('.tag');
  return tag[Math.floor(Math.random() * tag.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}


