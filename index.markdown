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



    {% endif %}
{% endfor %}
</div>
</div>
