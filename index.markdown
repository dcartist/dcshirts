---
layout: default
---
<div class="container lightbox" data-mdb-lightbox-init>
    <div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/blueheart' %}
   
<div class="col-lg-4"> <img 
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="image"  class="img-fluid" /></div>
    
<div class="col-lg-4">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
        alt="View of the City in the Mountains"
        class="w-100"
      />
    </div>


    {% endif %}
{% endfor %}
</div>
</div>
