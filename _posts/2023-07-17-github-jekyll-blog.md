---
layout: post
title: 建立个人博客 博客是分享各种信息的网站
author: Kecheng Zhang
img: sea1.jpg
lang: zh
featured: true
excerpt: 这是我在使用Github Pages和Jekyll搭建个人博客过程中的一些经验和体会。
tags:
  - Github
  - Jekyll
---

# 简介

博客是分享各种信息的网站，包括生活记录，或者是技术性的指南之类的。我开始想建立博客的原因其实很简单，就是感觉拥有自己的网站很酷。

我进行了一些搜索，最后决定使用Github pages + Jekyll来建立一个静态的博客网站。主要是因为轻量而且免费。其实现成的模板有很多，可以直接套用上去，然后开始写些什么东西了。但是，我认为自己的网页，得自己亲自设计，才更有感觉。

当然了，在建立博客的过程中我遇到了很多问题，也学习了很多知识。前前后后花了一个星期才算是做出了最满意的1.0版本。这个版本包括基本的界面，文章的分页功能，以及Blog页右侧通过点击tag来找到带有相应tag的文章。

这篇博客的目的就是分享一些我的一些思路以及一些用到的技巧，希望可以帮助到大家。当然，我只是一个业余的爱好者，网站肯定还存在诸多不足，我也会继续学习来慢慢改进。

# 基础

其实基本的安装非常简单，只需要Github账号就好了。大致的流程是创以username.github.io命名的新仓库，安装Jekyll并在文件夹内生成新的博客，最后再进行一些个人的配置就好了。安装网上的教程有很多，在此就不过多赘述了。

需要注意的是，Github的免费账号必须将博客仓库设置为public才能够使网站成功部署。

我发现将仓库设置为private，但是不进行任何改动（不push东西上去），网站还是能被成功部署的，或许和page的部署特性有关。
# 网页设计

由于个人不想使用现成的模板，所以自己写代码来设计。在实际编写网站的过程中，我发现平衡美观与可维护性两者之间需要花费相当的功夫。我发现善用_includes和_layout这两个文件夹来使用一种预制件和模板的功能可以很好地提高可维护性。
# 选择特定Tag实现

给网页添加Tag选择功能是在博客建设中遇到的第一个难题。通过查阅jekyll的文档和参考网上的一些实现原理，我发现了一个比较好的方法。

大致上，就是利用jekyll内置的变量和Liquid来寻找所有的tag，然后使用JavaScript来读取所有的tag，并且控制每个块的显示和隐藏。

首先，制作tag集合。放入一个id为“tags”的一个块，然后通过{% raw %}{% for item in site.tags %}{% endraw %}来遍历站内的所有tags。这样，一个tag集合就做好了，具体代码如下：

```
<div id="tags">
    {% raw %}{% for item in site.tags %}{% endraw %}
        <div class="tag-block" id="{{ item[0] }}">
            {% raw %}{{ item[0] }}{% endraw %}
        </div>
    {% raw %}{% endfor %}{% endraw %}
</div>
```

接下来，就可以创建一个JS脚本，使用document.getElementById获得包含所有tag的列表了。这样子，就可以通过通过id来控制相应块的显示和隐藏了，代码如下：
```
function show(tag) {

    hidePosts("posts-all");
    show_all.style.display = "unset";
    
    for (i=0; i<tags.length; i++) {
        if (tags[i].id != tag) {
            hidePosts("posts-".concat(tags[i].id));
        } else {
            showPosts("posts-".concat(tags[i].id));
        }
    }
}
```
这样子，根据tag选择文章的功能就实现啦。最后，不要忘记设置一个显示全部的功能，否则就只能通过刷新来浏览全部内容了。

