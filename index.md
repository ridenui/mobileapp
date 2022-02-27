## RidenUI OTA Index

{% assign doclist = site.pages | sort: 'url'  %}

# OTA per branch

<ul>
  {% for doc in doclist %}
    {% if doc.name contains '.md' or doc.name contains '.html' %}
      {% if doc.path != "/" and doc.tags contains 'ota' %}
        <li><a href="{{ site.baseurl }}{{ doc.url }}">{{ doc.title }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>
