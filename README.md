![Parallaxing-logo](https://i.postimg.cc/h4yp8bsv/logo-2x.png)
# Prallaxing

A light weight library to handle scrolling parallax effect. 一个轻量级页面滚动视差效果的库

## Preview 预览 [Demo](https://yokiijay.github.io/parallaxing/dist/index.html)
<img width="350" src="https://i.postimg.cc/C1T6C2dV/parallaxing-preview.gif"/>


This is how it looks like, you can set the parallax scrolling effect for any element with different offsets.

就如看起来这样，你可以设置滚动时候任何物体的相对位移差。


 

## Installing 安装

via `<script>` tag
```html
<script src="parallaxing.min.js"></script>
```

or you can via [npm](https://www.npmjs.com/package/parallaxing) or [yarn](https://www.npmjs.com/package/parallaxing)
```sh
#npm
npm install parallaxing

#yarn
yarn add parallaxing
```


And you can import it as follow:

```javascript
import parallaxing from 'parallaxing';
```

## Example 例子

Example HTML:

HTML例子:
```html
<div >
  <img src='...' />
</div>
```
`parallax`: Add `parallax` attribute to parent node to enable parallax effect,

`parallax-offset`: add `parallax-offset=500` attribute to child node to set `500` px distance of parallax ：

给外层节点加属性 `parallax` 来启用视差效果，给子节点加属性 `parallax-offset=500` 来设置视差距离:
```html
<div parallax>
  <img src='...' parallax-offset='500' />
</div>
```
then

最后调用`parallaxing()`
```html
<script>
  parallaxing()
</script>
```
That's it! As you scrolling, your child will parallaxing to the container.

就这样! 随着你滚动，你的子元素会相对父容器产生位移差（视差效果）.


## Attributes Implementation 属性实现

### Container's attribute 容器属性
- [parallax]()

  Enable parallax 让这部分生效

### Child's attributes 子对象属性

- [parallax-offset]()

  How long you wish for the parallax offset 你想要偏移的距离
- [parallax-out]()

  `0`-`100`, the percentage of screen height where you finished parallax
  
  结束偏移的屏幕高度的百分比，屏幕最顶端为0，最底端为100
- [parallax-in]()

  `0`-`100`, the percentage of screen height where you started parallax

  开始偏移的屏幕高度的百分比，屏幕最顶端为0，最底端为100


> Mention, you can't implements a container inside a container, and the child can't be wrapped by child, for now.
注意， 你暂时不能嵌套使用，未来等作者更新吧!

## Author 作者

[Yokiijay](https://github.com/yokiijay)
[于谦](https://github.com/yokiijay)

## Contact 联系
qq: 404643063