---
title: "Projects"
permalink: /projects/
layout: single
---

{% assign items = site.projects | sort: "order" %}
{% for p in items %}
### [{{ p.title }}]({{ p.url }})
{{ p.excerpt | strip_html }}
{% if p.links %}
- Links:
  {% for l in p.links %}
  - [{{ l.label }}]({{ l.url }})
  {% endfor %}
{% endif %}
---
{% endfor %}
