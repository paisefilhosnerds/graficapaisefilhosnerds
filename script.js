const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#produto').value = button.dataset.product;
  document.querySelector('#orcamento').scrollIntoView({behavior: 'smooth'});
  setTimeout(() => document.querySelector('#nome').focus(), 500);
}));

const form = document.querySelector('#quote-form');
const result = document.querySelector('#result');
const message = document.querySelector('#message');
form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const produto = document.querySelector('#produto').value;
  const quantidade = document.querySelector('#quantidade').value;
  const ideia = document.querySelector('#ideia').value.trim();
  message.textContent = `Olá! Meu nome é ${nome}. Gostaria de um orçamento para ${quantidade} unidade(s) de ${produto}.\n\nMinha ideia: ${ideia}`;
  result.hidden = false;
  result.scrollIntoView({behavior: 'smooth', block: 'center'});
});

document.querySelector('#copy').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(message.textContent);
    status.textContent = 'Copiado!';
  } catch {
    const range = document.createRange();
    range.selectNode(message);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    status.textContent = 'Texto selecionado para copiar.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
