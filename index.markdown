---
layout: default
---

<div class="intro gradiented-background container-fluid" >
<div class="row"><h1>T-shirt Choices</h1></div>
<div class="row">
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
</div>
<div class="row"></div>

</div>

<div class="container lightbox" data-mdb-lightbox-init>
<section>
<!-- Blue Heart -->
<h2>Blue Heart</h2>
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
<h2>Heart Enclosed</h2>
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
<h2>Need Coffee</h2>
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
<h2>Pi</h2>
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
<h2>Circle of Coffee</h2>
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
