---
layout: default
---











<!-- Blue Heart -->
<h1>Blue Heart</h1>
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


<h1>Milie Heart</h1>

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
<h1>Need Coffee</h1>
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
<h1>Pi</h1>
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
