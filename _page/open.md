---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: main
permalink: /open/
---
    {% for image in site.static_files %}
    {% if image.path contains 'images/blueheart' %}
        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        <img src="{{ ../image.path }}" alt="image" />
    {% endif %}
{% endfor %}
