export default function parallaxing() {
  const allParallaxParents = document.querySelectorAll('*[parallax]')
  let allParallax = []

  /*------------------ Initial ------------------*/
  allParallaxParents.forEach(el => {
    const rect = el.getBoundingClientRect() // 获取parent的边界
    const { top, height } = rect // 只需要拿到parent距离屏幕顶部距离 和 自身高度
    const MidY = top + height / 2 // parent的中线距离屏幕顶部距离
    const children = el.querySelectorAll('*[parallax-offset]')
    allParallax.push({
      parent: el,
      children
    })

    children.forEach(child => {
      const OFFSET = -Number(child.getAttribute('parallax-offset')) // 视差值
      const OUT = (Number(child.getAttribute('parallax-out'))||0) / 100 * window.innerHeight // 出点
      const IN = (Number(child.getAttribute('parallax-in'))||100) / 100 * window.innerHeight // 入点
      let Y = getTransform(child, 'translateY'),
          X = getTransform(child, 'translateX'),
          Rotation = getTransform(child, 'rotate'),
          Scale = getTransform(child, 'scale')
      
      child.Y = Y
      child.X = X
      child.Rotation = Rotation
      child.Scale = Scale
      // 改变child的transform
      child.style.transform = `translate(${X}px,${Y + modulate(MidY, [OUT, IN], [-OFFSET / 2, OFFSET / 2])}px) rotate(${Rotation}deg) scale(${Scale||1})`
    })
  })

  /*------------------ Listen ------------------*/
  window.addEventListener('scroll', childrenParallaxing)

  /*------------------ Functions ------------------*/
  function childrenParallaxing() {
    allParallax.forEach(object => {
      const { parent, children } = object
      const rect = parent.getBoundingClientRect() // 获取parent的边界
      const { top, height } = rect // 只需要拿到parent距离屏幕顶部距离 和 自身高度
      const MidY = top + height / 2 // parent的中线距离屏幕顶部距离

      children.forEach(child => {
        const { Y, X, Rotation, Scale } = child
        const OFFSET = -Number(child.getAttribute('parallax-offset')) // 视差值
        const OUT = (Number(child.getAttribute('parallax-out'))||0) / 100 * window.innerHeight // 出点
        const IN = (Number(child.getAttribute('parallax-in'))||100) / 100 * window.innerHeight // 入点
        // 改变child的transform
        child.style.transform = `translate(${X}px,${Y + modulate(MidY, [OUT, IN], [-OFFSET / 2, OFFSET / 2])}px) rotate(${Rotation}deg) scale(${Scale || 1})`
      })
    })
  }

  /*------------------ Utils ------------------*/

  // 联动函数 例如modulate(50,[0,100],[500,1000]) => 750
  function modulate(i, [a, b], [c, d]) {
    return (i - a) / (b - a) * (d - c) + c
  }

  // 获取transform函数
  function getTransform(target, property) {
    const style = window.getComputedStyle(target, null)
    const str = style.getPropertyValue("-webkit-transform") ||
      style.getPropertyValue("-moz-transform") ||
      style.getPropertyValue("-ms-transform") ||
      style.getPropertyValue("-o-transform") ||
      style.getPropertyValue("transform") ||
      "fail...";

    if (str === 'none') return 0


    let values = str.split('(')[1]
    values = values.split('(')[0]
    values = values.split(',')

    let [a, b, c, d, e, f] = [...values]

    // scale
    const scale = Math.sqrt(a * a + b * b)

    // rotate
    const sin = b / scale
    const rotate = Math.round(Math.asin(sin) * (180 / Math.PI))

    // translateX
    const translateX = parseFloat(e)

    // translateY
    const translateY = parseFloat(f)

    const object = {
      scale,
      rotate,
      translateX,
      translateY
    }

    // if (!object[property]) return console.error('没有找到:' + property)
    return {
      scale,
      rotate,
      translateX,
      translateY
    }[property]
  }
}