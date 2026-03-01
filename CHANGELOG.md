# Changes to minimax.css

### v26.3.0

* Add `outline-offset: 0;` to `*:focus-visible`.

* Add `:focus-visible` support to `[type="radio"]`.

* Remove repetition property `line-height` in `body`.

* Update, moved `a` focus, hover, visited styles to `[href]`.

* Update `--backdrop--bg-color` value to darker color.

* Update `backdrop-filter` of `dialog::backdrop, [popover]::backdrop` to `blur(1px)`;

* Change `--border-color-boundary` into `--boundary--border-color`.

* Split `--boundary--border` into `--boundary--border-width`, `--boundary--border-style` and `--boundary--border-color`.

* Split `--kbd_-kbd--border` into `--kbd_-kbd--border-width`, `--kbd_-kbd--border-style` and `--kbd_-kbd--border-color`.

* Split `--controls--border` into `--controls--border-width`, `--controls--border-style` and `--controls--border-color`.

* Split `--dialog--border` into `--dialog--borders-width`, `--dialog--border-style` and `--dialog--border-color`.

* Add `min-height: 100vh;` to `body`.

* Add `:target` selector, with its property-value `scroll-margin-block: 5ex;`.

* Update `option` add `color` and `background-color` properties for selected option.

* Add new variable `--controls--borders-radius` for `button`, `input`, `select`, and `textarea`.

* Add new variabloe `--dialog--borders-radius` for `dialog`.

* Add variable `--small-header--font-weight` for `td` and `dt` elements.

### v26.2.0

* Update button, [type="button"], [type="reset"], [type="submit"], and .btn for :active, :focus, and :hover.

* Add property scroll-behavior to html element.

* Update h3, h4, h5, h6 line-height property.

* Update h5, h6 letter-spacing property.

* Add ::file-selector-button styles.

* Update th element font-weight.

* Named css/_minimax.css into css/_styles.css.

* Add css/index.css file to act as entry file for merge css files.

* Update postcss.config.js.

* Add file cssnano.config.js.

* Update package.json for build scripts and add entry point for unpkg.

* Add compiled static files (replaces variable with static value) to distribution files.

### 26.01.3

* Update changelog

### 26.01.2

* Update img property

* Add  figure & figcaption elements

* Add --elements-block-level-space variable

* Add --boundary--border variable

* Update fieldset and hr border to use --boundary--border variable


### 26.01 (Januari 2026)

* Update README.md


### 26.01 (Januari 2026)

* Publish to public 


### alpha/beta version

* use necolas/normalize.css version 8.0.1 as base source.
