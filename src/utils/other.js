export function debounce(callback, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      callback.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
export const clickButtonScroll = (
  targetPosition = document.body.scrollHeight
) => {
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  })
}
