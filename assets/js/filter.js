
let tags = document.getElementById("tags").querySelectorAll("div");
show_all = document.getElementById("show-all");

// show the posts
function showPosts(id) {
    document.getElementById(id).style.display = "block";
}

// hide the posts
function hidePosts(id) {
    document.getElementById(id).style.display = "none";
}

// show all posts with the given tag
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

// show "all posts" section but hide others
function reset() {
    showPosts("posts-all");
    for (i=0; i<tags.length; i++) {
        hidePosts("posts-".concat(tags[i].id));
    }
    show_all.style.display = "none";
}

show_all.addEventListener("click", reset);

reset();

for (i=0; i<tags.length; i++) {
    tags[i].addEventListener("click", function() {
        show(this.id)
    });
}