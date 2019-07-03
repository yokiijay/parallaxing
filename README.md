# Prallaxing

A light weight library to handle scrolling parallax effect. 一个轻量级页面滚动视差效果的库

## Preview 预览
<img width="350" src="https://i.postimg.cc/C1T6C2dV/parallaxing-preview.gif"/>

This is how it looks like, you can set the parallax scrolling effect for any element with different offsets.


 

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
```html
<div class='container'>
  <img class='child' src='...' />
</div>
```
Add some attributs to your `container` and `child` element like this:
```html
<div class='container' parallax>
  <img class='child' src='...' parallax-offset='500' />
</div>
```
then
```html
<script>
  parallaxing()
</script>
```
That's it! As you scrolling, your child will parallaxing to the container.


## Attributes Implementation 属性实现

### Container's attribute 容器属性
- [parallax]()

  Enable parallax

### Child's attributes 子对象属性

- [parallax-offset]()

  How long you wish for the parallax offset
- [parallax-out]()

  `0`-`100`, the percentage of screen height where you finished parallax
- [parallax-in]()

  `0`-`100`, the percentage of screen height where you started parallax

> Mention, you can't implements a container inside a container, and the child can't be wrapped by child, for now.

## Author 作者

[Yokiijay](https://github.com/yokiijay)
[于谦](https://github.com/yokiijay)

## Contact 联系
qq: 404643063