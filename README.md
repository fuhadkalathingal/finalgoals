# finalgoals

          {%- for post in collections.post | reverse -%}
          {%- include 'article-snippet.njk' -%}
          {%- endfor -%}