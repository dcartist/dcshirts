---
layout: default
---

<!-- Blue Heart -->
<div class="container lightbox" data-mdb-lightbox-init>
    <div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/blueheart' %}
   
<div class="col-lg-3"> <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{image.name}}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>


<!-- Millie Heart -->

<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/millieheart' %}
   
<div class="col-lg-3"> <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{image.name}}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>

<!-- NeedCoffee -->

<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/needCoffee' %}
   
<div class="col-lg-3"> <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{image.name}}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>

<!-- Pi -->

<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/pi' %}
   
<div class="col-lg-3"> <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{image.name}}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>





</div>
