---
layout: post
title:  "Utilisation d'une typographie spécifique dans les fichiers md"
author: MC
categories: [ Tutoriel, EduNum ]
tags: [red, yellow]
image: assets/images/1.jpg
description: "Comment écrire des fichiers md ? "
featured: true
hidden: true
rating: 4.9
---
`Ecrire dans une couleur spécifique <PATH>` c'est juste écrire entre "`" les mots qu'on souhaite faire ressortir.

- pour créer un bullets il suffit d'utiliser le symbole `-` . If the existing directory isn't empty, you can pass the --force option with jekyll new . --force.
Education must also train one for quick, **resolute and effective thinking**.
Review products, books, movies, restaurant and anything you like on your Jekyll blog with Mediumish! JSON-LD ready for review property.
As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:

+ ~~strike through~~
+ ==highlight==
+ \*escaped characters\*
lines using triple back ticks:

```
.my-link {
    text-decoration: underline;
}
```

#### HTML

```html
<li class="ml-1 mr-1">
    <a target="_blank" href="#">
    <i class="fab fa-twitter"></i>
    </a>
</li>
```

#### CSS

```css
.highlight .c {
    color: #999988;
    font-style: italic; 
}
.highlight .err {
    color: #a61717;
    background-color: #e3d2d2; 
}
```
#### JS

```js
// alertbar later
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 280) {
        $('.alertbar').fadeIn();
    } else {
        $('.alertbar').fadeOut();
    }
});
```

#### Python

```python
print("Hello World")
```

#### Ruby

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

#### C

```c
printf("Hello World");
```
<p><iframe style="width:100%;" height="315" src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>
![walking]({{ site.baseurl }}/assets/images/8.jpg)
#### How to use?

It's actually really simple! Add the rating in your YAML front matter. It also supports halfs:

```html

A second major clue was provided by hospital orderly Travis (Stephen Graham): <span class="spoiler">Everybody dies. No mystery there. But why and how everyone dies. Now, there's a mystery worth solving. Probably the biggest mystery there is.</span>

#### So how do we do spoilers?

```html
<span class="spoiler">My hidden paragraph here.</span>
```

> Director Roland Suso Richter's enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney's own play "Point of Death" - a title that gave away the film's entire plot twist premise.

---
layout: post
title:  "Inception Movie"
author: john
categories: [ Jekyll, tutorial ]
tags: [red, yellow]
image: assets/images/1.jpg
description: "My review of Inception movie. Actors, directing and more."
rating: 4.5
---
```
