# Box Layout Module

Layout page components in no-scroll, absolute-positioned, single-screen enviroment.

## Installation

```sh
npm install --save @wildebeest/boxlayout
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules

## Usage

### HTML

```html
<!DOCTYPE html>
<html>
    <head>...</head>
    <body>
        <div class="box-layout">
            <div class="box-layout__top scroll-box">
                <div>...</div>
            </div>
            <div class="box-layout__left scroll-box">
                <div class="scroll-box__pane">...</div>
            </div>
            <div class="box-layout__center scroll-box">
                <div class="scroll-box__pane">...</div>
            </div>
            <div class="box-layout__right scroll-box">
                <div class="scroll-box__pane">...</div>
            </div>
            <div class="box-layout__bottom scroll-box">
                <div class="scroll-box__pane">...</div>
            </div>
        </div>
    </body>
</html>
```

### JS

1. Create Appication

```ts
let app = new Application();
app.run([BoxLayoutModule]);
```

2. Create Box Layout Component

```ts
let boxLayoutElement = document.querySelector('.box-layout');
let boxLayout = app.getContainer().get(BoxLayout);
boxLayout.initialize(boxLayoutElement, {
    top: 80,
    right: 400,
    bottom: 200,
    left: 200,
    deviders: {
        dragable: true
    }
});
```

3. Bind DOM Elements To Layout

```ts
boxLayout.bindElement(document.querySelector('.box-layout__top'), 'top');
boxLayout.bindElement(document.querySelector('.box-layout__left'), 'left');
boxLayout.bindElement(document.querySelector('.box-layout__center'), 'center');
boxLayout.bindElement(document.querySelector('.box-layout__right'), 'right');
boxLayout.bindElement(document.querySelector('.box-layout__bottom'), 'bottom');
```

This is the result of such a configuration with some css styles and random data.

![](https://media.giphy.com/media/KFnKBvupJflGhH26EH/giphy.gif)

### Add Scroll Bars

1. Add ScrollModule to Application

```ts
app.run([ScrollModule, BoxLayoutModule]);
```

2. Create Scroll Box Components   

```ts
let scrollBoxElements = document.querySelectorAll('.scroll-box');
let scrollBoxes = [];
for (let i = 0; i < scrollBoxElements.length; i++) {
    let box = app.getContainer().get(ScrollBox);
    box.initialize(scrollBoxElements[i], {});
    scrollBoxes.push(box);
}
```

3. Recalculate Scroll Box On Box Layout Resize

```ts
boxLayout.getEmitter().on('resize', (event) => {
    for (let i = 0; i < scrollBoxes.length; i++) {
        scrollBoxes[i].recalc();
    }
});
```

This is the result of box layout with scroll boxes and some custom css.

![](https://media.giphy.com/media/Urh4ReIRiyufQSNbrq/giphy.gif)