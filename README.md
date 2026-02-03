# minimax.css

> A reset CSS library with variables

@bakung-ui/minimax.css is a standalone "Reboot" stylesheet formerly bundled with @bakung-ui/bakung.css. I separated it specifically for simple blogs that don’t need a massive UI kit but still want to make the most of default HTML elements.

Our versioning is based on the year and month. Version 26.1.0 was launched in January 2026; all future releases, including minor updates, will follow this `year/month` format, for ex. `27.3.0` is release in March 2027.


**INSTALL**

```sh
npm i @bakung-ui/minimax.css
```

or

```sh
yarn add @bakung-ui/minimax.css
```

**Download**

https://github.com/bakung-ui/minimax.css/releases/latest/


**CDN**

https://app.unpkg.com/@bakung-ui/minimax.css@latest/

https://cdn.jsdelivr.net/npm/@bakung-ui/minimax.css@latest/


**REQUIREMENTS**

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Montserrat:wght@100..900&family=Sometype+Mono:wght@400..700&display=swap" rel="stylesheet">
    
    <!--
      Put your css files link here
    -->
  </head>
  <body>
  </body>
</html>
```


**CUSTOMIZE**

```
[MAIN FOLDER]
  ├ css                         // Files in here are editable
  | ├ _styles.css               // You can edit, though only to a limited extent
  | ├ _variables.css            
  | └ index.css                 // Entry file to merge css files
  └ dist                    
    ├  minimax-lite.min.css           // Without _variables.css
    ├  minimax.css        
    ├  minimax.min.css                // You shall use this for production
    └  minimax.min.static.css         // Without variables
```

Feel free to customize files in the css folder especially _variables.css file, after making changes, run command `npm run build` to build your changes, check your new build files in dist folder.

When changing the `font-family` in your CSS, ensure you also update the corresponding font link in the HTML `<head>`.


## What does it do?

* Reset HTML elements.
* Normalizes styles for a wide range of elements.
* Corrects bugs and common browser inconsistencies.
* Improves usability with subtle modifications.
* Explains what code does using detailed comments.


## Browser support

* Chromium*
* Firefox
* Safari


## Extended details and known issues

Additional detail and explanation of the esoteric parts of minimax.css.

#### origin

minimax.css use necolas/normalize.css, you can think this library is another variation with different flavor and additional toppings.

#### `pre, code, kbd, samp`

The `font-family: monospace, monospace` hack fixes the inheritance and scaling
of font-size for preformatted text. The duplication of `monospace` is
intentional. [Source](https://en.wikipedia.org/wiki/User:Davidgothberg/Test59).

#### `sub, sup`

Normally, using `sub` or `sup` affects the line-box height of text in all
browsers. [Source](https://gist.github.com/413930).

#### `select`

By default, Chrome on OS X and Safari on OS X allow very limited styling of
`select`, unless a border property is set. The default font weight on `optgroup`
elements cannot safely be changed in Chrome on OSX and Safari on OS X.

#### `[type="checkbox"]`

It is recommended that you do not style checkbox and radio inputs as Firefox's
implementation does not respect box-sizing, padding, or width.

#### `[type="number"]`

Certain font size values applied to number inputs cause the cursor style of the
decrement button to change from `default` to `text`.

#### `[type="search"]`

The search input is not fully stylable by default. In Chrome and Safari on
OSX/iOS you can't control `font`, `padding`, `border`, or `background`. In
Chrome and Safari on Windows you can't control `border` properly. It will apply
`border-width` but will only show a border color (which cannot be controlled)
for the outer 1px of that border. Applying `-webkit-appearance: textfield`
addresses these issues without removing the benefits of search inputs (e.g.
showing past searches).

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) in order to make the
contribution process easy and effective for everyone involved.


## Plugin guideline

If you intend to create repositories or distribution packages related to minimax.css, please follow the bakung-ui guidelines to ensure discoverability and ease of use for the community, [See the guideline](CONTRIBUTING.md#plugin-guidelines).


## 

[<img width="150" alt="image" src="https://github.com/user-attachments/assets/3f30b3fa-049a-47e0-a288-241f623c7325" />][npm-url] [<img width="150" alt="image" src="https://github.com/user-attachments/assets/66d52d95-465e-4d3e-a0f5-56922755507b" />][classic-yarn-url] 
[![changelog]][changelog-url]

[npm-url]: https://www.npmjs.com/package/@bakung-ui/minimax.css
[classic-yarn-url]: https://classic.yarnpkg.com/en/package/@bakung-ui/minimax.css
[yarn-url]: https://yarnpkg.com/package?name=@bakung-ui/minimax.css
[changelog-url]: CHANGELOG.md
