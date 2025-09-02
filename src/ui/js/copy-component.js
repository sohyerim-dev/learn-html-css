// 프롬프트
/* .ui-component 안에 마크업 중에서 .copy-component 버튼을 클릭하면 버튼을 제외한 마크업 코드가 복사되도록 자바스크립트를 구현해줘
이때 DOM 선택, 함수 구현, 이벤트 바인딩을 구분해서 만들어줘 */

// DOM 선택부
const uiComponent = document.querySelector('.ui-component');
const copyButton = uiComponent?.querySelector('.copy-component');

// 함수 구현부
function copyMarkupExceptButton(container, button) {
  if (!container || !button) return;
  // 버튼을 제외한 HTML 추출
  const clone = container.cloneNode(true);
  const btn = clone.querySelector('.copy-component');
  if (btn) btn.remove();
  const markup = clone.innerHTML.trim();
  // 클립보드 복사
  navigator.clipboard.writeText(markup).then(() => {
    button.textContent = '복사됨!';
    setTimeout(() => {
      button.textContent = '복사';
    }, 1200);
  });
}

// 이벤트 바인딩 영역
copyButton?.addEventListener('click', () => {
  copyMarkupExceptButton(uiComponent, copyButton);
});
