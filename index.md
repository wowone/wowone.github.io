<html>
<body>
  <h1>It works!</h1>
  
  <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
  </ul>
</body>
</html>
