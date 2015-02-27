# jsidiots-gulpfile
**A gulpfile.js for JS idiots (like me)**

This is a gulpfile that simply works, is easy to understand and aimed at webdevelopers starting a new website project - without the fancy stuff (yes, I am talking about you, Browserifiers).

**What it does for you**
* uses sass (supporting the scss-syntax) and minifying your css for production
* autoprefixes your css-file depending on your choice of browsers you want to support
* autorefreshes browsers and brower-synchronizing
* concatenates, minifies and lints your js-files
* creates all the files needed for production in the build directory
* minifies images (jpg, png, jpg, svg)
* tests the pagespeed of your site
* includes various icon references for touch devices and a favicon.ico as a reminder

**gulp commands**
* `gulp`: starts the server (using browsersync so that you can easily test your sites on all devices available). Refreshes the browsers automatically when you edit and save your scss, js or index.html files.
* `gulp production`: copies all the files you need for deployment into the build folder
* `gulp clear`: deletes all files in your build folder
* `gulp psi`: tests the speed of your site with google page speed (make sure to edit the name of your live site in your gulpfile)




