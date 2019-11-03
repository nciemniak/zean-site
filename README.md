## About

This is a custom porfolio site built on top of the [Victor Hugo](https://github.com/netlify-templates/victor-hugo) boilerplate, primarily using styling from the [Lodi](https://github.com/xaviablaza/hugo-lodi-theme) theme. [Netlify](https://www.netlifycms.org/) is used for the site's content management system. See the Victor Hugo repo's readme for more details about the tools that are used by this site.

## Structure
```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css seperately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```