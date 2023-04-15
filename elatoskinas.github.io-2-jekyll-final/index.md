---
title: Home
layout: default
css:
 - index
 - about
 - projects
 - skills
 - popup
js:
  - about
---

<div class="profile">
        <img src="assets/img/avatar.png" class="avatar">
        <h1>{{site.data.profile.name}}</h1>
        <h1>{{site.data.profile.handle}}</h1>
        <h2>Hobbyist programmer, the sole member & founder of <br />Enlighten Works, second-year CS&E student at TU Delft</h2>
        <div class="links">
            {% for link in site.data.external-links %}
                <a href="{{link.url}}"><img src="{{link.icon}}" class="external-link"></a>
            {% endfor %}
        </div>
</div>

<div class="about">
    <section>
        <header>
            <a><h2>Hello World!</h2></a>
        </header>

        <h3>I'm Evaldas, and I am a junior student developer!</h3>

        <p>I would describe myself as curious, highly motivated, hard working and passionate about programming.
            My main interest revolves around software & application development. However, I keep an open mind
            and am currently on the path to decide which Computer Science discipline I would like to get involved
            in the most!
        </p>

        <div class="info-entries">
            {% for entry in site.data.profile.info %}
                <div class="info-entry">
                    <div class="info-entry-icon">
                        <i class="fas {{entry.icon}}"></i>
                        {{entry.name}}
                    </div>
                    
                    <p>{{entry.content}}</p>
                </div>
            {% endfor %}
        </div>
        <br>
    </section>

    <section>
        <header>
            <h2>Skills</h2>
        </header>

        <div id="skills-navbar">
            <!-- Create Navbar from all the category data in skills -->
            {% for category in site.data.skills.categories %}
                <button class="skill-category-choice info-button" menu="{{category.name}}">{{category.name}}</button>
            {% endfor %}
        </div>

        <!-- Create skill menu for each category -->
        <div id="skill-menus">
            <!-- Create menu for each category -->
            {% for category in site.data.skills.categories %}
                <div id="skills-{{category.name}}" class="skill-box">
                    <!-- Create entry for each skill -->
                    {% for skill in category.skills %}
                        {% include skill.html %}
                    {% endfor %}
                </div>
            {% endfor %}
        </div>
    </section>

    <section>
        <header>
            <h2>Projects</h2>
        </header>

        <div class="skill-box">
            {% for project in site.data.projects %}
                {% include project.html %}
            {% endfor %}
        </div>
    </section>

    <section>
        <header>
            <h2>Other Activity</h2>
        </header>

        <div class="activities">
            {% for activity in site.data.other-activity %}
                {% include activity.html %}

                {% if forloop.last == false %}
                    <hr>
                {% endif %}
            {% endfor %}
        </div>
    </section>

    <section>
        <p>
            Site uses icons from:
            <a href="https://icons8.com/">Icons8</a>
            <a href="https://www.iconfinder.com/">IconFinder</a>
        </p>
    </section>
</div>