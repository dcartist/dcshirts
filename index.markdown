---
layout: default
---



<div class="container lightbox" data-mdb-lightbox-init>
<section>
<!-- Blue Heart -->
<h1>Blue Heart</h1>
    <div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/blueheart' %}
   
<div class="col-lg-3">

<p>{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}</p>
 <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>
</section>

<section>
<h1>Heart Enclosed</h1>
<!-- Millie Heart -->
<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/millieheart' %}
   
<div class="col-lg-3"> 
<p>{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}</p>
<img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>
</section>



<section>
<!-- NeedCoffee -->
<h1>Need Coffee</h1>
<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/needCoffee' %}
   
<div class="col-lg-3"> 
<p>{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}</p>
<img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>
</section>


<section>
<!-- Pi -->
<h1>Pi</h1>
<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/pi' %}
   
<div class="col-lg-3"> 
<p>{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}</p>
<img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>
</section>


<section>
<!-- Circle of Coffee -->
<h1>Circle of Coffee</h1>
<div class="row">
    {% for image in site.static_files %}
    {% if image.path contains 'images/circleOfCoffee' %}
   
<div class="col-lg-3">

<p>{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}</p>
 <img 
loading="lazy"
src="{{ site.baseurl }}{{ image.path }}" 
data-mdb-img="{{ site.baseurl }}{{ image.path }}" 
alt="{{ image.name | split: '.' | first | replace: 'unisex-staple-t-shirt-', '' }}"  class="img-fluid" /></div>
    {% endif %}
{% endfor %}
</div>
</section>




</div>
