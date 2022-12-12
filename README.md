
# CodeCrust (CC) - Time Ago Module

This is a simple **Node JS** module that calculates the time elapsed by subtracting the time an entry was made from the current time. It has a good pattern of displaying the time like "just now", "1 second ago", "2 minutes ago", "2 hours ago", "1 day ago", "2 weeks ago", "1 month ago", "2 years ago" and so on. 

The module can be useful and intergrated in various applications for time formatting such as in blog posts, comments, user posts, social networks or literally any app that uses time. The module is constantly being updated and it is open source, easy to use, flexible and scalable.

# Getting Started

To use the module, follow the steps below:
- install the module in your project by running the command **"npm install cc-time-ago"**
- include the modlule in your project by using the import syntax i.e **const timeAgo = require('time-ago');**
- the time-ago module only has one method and it only accepts one arguement which is the time an entry was made in milliseconds. We advise you to use the javasript time object with the method **now()** i.e **Date.now()**.
- pass in the entry time and you are good to go i.e **timeAgo(entryTime);**

## Note

Feel free to contribute to the module and your pull requests will be reviewed and approved. For any problems encounterd or further queries, kindly raise the issues.

### Happy Coding! :)

**Time Ago Module &copy; 2022, a product of CodeCrust Inc.**
