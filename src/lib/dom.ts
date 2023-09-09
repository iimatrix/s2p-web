// 判断元素是否完全可见（水平方向）
export function isElementFullVisible(dom: HTMLElement, parent: Element) {
  console.log(dom, dom.offsetLeft, dom.clientWidth, document.documentElement.clientWidth, '..')
  return dom.offsetLeft + dom.clientWidth - document.documentElement.clientWidth < 5;
}



export function debounce(fn: () => void, timeout: number = 100) {
  let timer: any;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn();
    }, timeout);
  };
}