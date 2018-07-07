<h1>
  <center>
    😒
    <br/>
    simple-inline-styles
  </center>
</h1>

### Write inline CSS like CSS, not JSON

## Motivation

There are times when you have to write inline CSS. It is usually done by writing the styles as JSON. It works out of the box, and it works great.

Here's the thing, I don't like it.

I really like the way [styled-components](https://styled-components.com) allows you to write CSS-in-JS. I wanted to replicate that experience for inline styles without using `styled-components` or building another one.

## Installation

```
npm install simple-inline-styles --save
```

## Usage

The current approach.

```
{
  fontSize: 12,
  backgroundColor: bgColor,
  color: "#fff"
}
```

The advantage this gives you is, you can easily use variables because it is just plain and simple JavaScript. But, you also have limitations like, wrapping hyphenated keys in quotes because otherwise it won't be valid JSON, or use camelCase CSS properties, which isn't ideal either.

Using `simple-inline-styles` The above object can we written as

```
css`
  font-size: 12px;
  background-color: ${bgColor};
  color: #fff;
`;
```

## Vue Component Example

Let's take the example of a simple Vue Component. 

This is how you write inline styles (without this stupid package).

```
<template>
  <div :style="styleObject">
    Hello, world!
  </div>
</template>

<script>
export default {
  name: "simple-styles-example",
  data() {
    return {
      bgColor: "#333"
    };
  },
  computed: {
    styleObject() {
      return {
        fontSize: 12,
        backgroundColor: this.bgColor,
        color: #fff
      };
    }
  }
};
</script>
```

This is how you can write inline styles now (using this dumb package)

```
<template>
  <div :style="styleObject">
    Hello, world!
  </div>
</template>

<script>
import css from "simple-inline-styles";

export default {
  name: "simple-styles-example",
  data() {
    return {
      bgColor: "#333"
    };
  },
  computed: {
    styleObject() {
      return css`
        font-size: 12px;
        background-color: ${this.bgColor};
        color: #fff;
      `;
    }
  }
};
</script>
```

### Couldn't you have just used the `css` function from styled-components which does the same thing?

I could have. I didn't want to.