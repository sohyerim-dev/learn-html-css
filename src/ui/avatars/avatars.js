// DOM 선택부
const avatarButtons = document.querySelectorAll('.avatar-button');

// 함수 구현부
function toggleAriaLabel(button) {
  if (!button) return;
  button.setAttribute('aria-label', button.getAttribute('aria-label') === 'online' ? 'offline' : 'online');
}

// 이벤트 바인딩 영역
avatarButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    toggleAriaLabel(event.currentTarget);
  });
});
