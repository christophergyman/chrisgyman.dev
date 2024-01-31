
# 🥡 Takeaways from NoBloat Project 🥡
The main purpose of starting the NoBloat website was that I wanted to create a website from scratch without using any prebuilt front-end libraries. From this process, I learned the fundamental reasons as to why we have these frameworks—the "Why" factor.

## ❔ The 'Why'... ❔
A significant problem I observe nowadays, from watching first years (from the perspective of a 4th year with a year in the industry) on campus trying to learn software development, is that they merely learn how to use a single framework, stick to it, do not understand the reasons for how and why they are using it, and run into technical debt. This follows a vicious cycle of learning a framework solely for the purpose of building something, then discarding it, barely scraping the surface. In the future, they end up tacking on other frameworks because of bad initial project design—interacting with frameworks like a black box rather than understanding them at a deeper level.

But why learn the deeper level of a framework? Because when you delve deeper into understanding why things are needed and how they are used, you can take a minimalist approach to development. Approaching a project with a minimalist mindset reduces the total complexity of a project.

🎲 Reducing complexity 🎲:
1. Minimal technical debt 🤌
2. Easier addition of features ➕
3. Efficient code debugging 🏃🏻‍


So, to learn front-end development in a relatively intelligent way, adopting a minimalist mindset when attempting my first front-end project is essential. Hence, the NoBloat project was conceived.

#What was learned?
The Main 3 Takeaways:
1. Repeating HTML = React Components
2. Server Side Rendering (SSR) = NextJS
3. Tailwindcss + DaisyUI = Minimal Code read CSS

## Repeating HTML = React Components
The first issue that I ran into with the site was that for every single page if I wanted to copy over the navbar, the project list, the way a list of items were ordered the HTML and CSS had to be repeated for each and every single page. This meant for every single new blog post and or page written on the site i had to copy paste and repeat so much code I had already written.

Hencefourth I needed to utilize ⭐ React Components ⭐.

Being able to just type in a single component name and have the entire set of HTML and CSS objects just work would have saved so much painstaking time. The worst thing was, if I did not like how the navbar looked after writing over 6 blog posts I had to go through manually and update all of the blog post pages even though the navbar has nothing to do with the blogs. However being able to just edit one component in one file and it would parase and update the DOM on all of the pages would have been amazing.

## Server Side Rendering (SSR) = NextJS

Another gripe I had with making a personal blog website is that all the pages were static. Any simple functionality to edit the DOM of the page had to either be done with a python script which I ended up developeing:


```
import os

def returnPosts():
    # Directory path
    directory_path = "pages"

    # Check if the directory exists
    if os.path.exists(directory_path) and os.path.isdir(directory_path):
        # Get the list of file names in the "pages" directory
        my_list = os.listdir(directory_path)

        #remove src and homepage from array
        strings_to_remove = ["homepage.html", "src"]
        my_list = [item for item in my_list if item not in strings_to_remove]

        return my_list
    else:
        print(f"The '{directory_path}' directory does not exist in the current working directory.")


if __name__ == "__main__":
    post_list = returnPosts()
    post_list_split = []
    for i in range(len(post_list)):
        post_list_split.append(post_list[0].split('_'))
    print(post_list_split)
```

Again this is similar to the Point above where if I needed to update the list of the "Most Recent Blog Posts" I would have to go through manually and update each new blog post title to the list 🤬. This essentially taught me the main need for having a page be dynamically loaded.

Is it nice to have a staticly loaded page that dont update making it incredibly fast? Yes of course, but having to painstankingly go through and update something on a page with a seperate manual script made in another lanauge, and or go through and manually re-write the HTML code is not worth that couple extra seconds saved form loading just basic HTML on the users browser. 

## Effecient Code Debuggin 

In some ways now thinking about this whilst writing this blog this point can be arugued for either way. It was easy to debug the site because it only used basic HTML CSS and PHP. But also if the site started to have a lot of content within it it became extremely difficult to manage. So now in hindsight I believe that if the website is a super simple read and present basc information its the best choice, however if you actually want to build large scale websites or front end projects going this route of a barebones site is not the way.


## Conclusion?

In summary, the process of developing a fully functional blog website named "nobloat" without relying on large modern frontend frameworks presented its challenges. However, this endeavor proved to be an invaluable learning experience, emphasizing the importance of these frameworks in web development. It provided a foundational understanding of the web and when to leverage specific tools.

Now equipped with a fully operational personal blog site, the next step involves adapting the "nobloat" website into a React + Next.js website. This transition is aimed at meeting the requirements of a proper .Dev website. By undertaking this evolution, the goal is to enhance the website's functionality and user experience.

The intention is to make the new website more dynamic, responsive, and feature-rich by incorporating React and Next.js, which are renowned for their efficiency in building modern web applications. The expected outcome is a polished and professional website that aligns with the standards expected of a .Dev domain. Keep an eye out for this post on the updated website, as the transformation unfolds! 😊







