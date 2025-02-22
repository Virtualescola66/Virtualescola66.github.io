---
layout: post
title:  "Utilisation d'une typographie spécifique dans les fichiers md"
author: MC
categories: [ Tutoriel, EduNum ]
tags: [md, tuto]
image: assets/images/1.jpg
description: "Comment écrire des fichiers md ? "
featured: true
hidden: true
rating: 4.9
---
`Ecrire dans une couleur spécifique <PATH>` c'est juste écrire entre "`" les mots qu'on souhaite faire ressortir.

- pour créer un `bullets` il suffit d'utiliser le symbole `-` ou `+`. Et donc pour faire un tiret devant un mot --tiret il suffit de placer deux signes moins `--` 
Si l'on veut placer en **gras une partie de phrase** `**`
+ ~~barrer une suite de mots~~ avec les caractères `~~`
en utilisant "#" 1, 2, 3, 4, 5 pour titre i
# titre 1
## titre 2
### titre 3
#### titre 4
##### titre 5
+ ==highlight==
+ \*escaped characters\*
Mettre dans un tableau de programmation avec les apostrophes arrières "```"

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
