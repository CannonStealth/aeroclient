(this.webpackJsonpaeroclient=this.webpackJsonpaeroclient||[]).push([[0],{10:function(e,s,c){"use strict";var t=c(11),r=c(0),n=c(1);c(233);s.a=function(){var e=Object(n.useState)(window.innerWidth<800?"A":"AeroClient"),s=Object(t.a)(e,2),c=s[0],i=s[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){i(window.innerWidth<800?"A":"AeroClient")}))}),[]),Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("div",{className:"logo-container",children:Object(r.jsxs)("h1",{className:"logo",children:[Object(r.jsx)("span",{className:"red",children:c.slice(0,4)}),c.slice(4)]})}),Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)("a",{href:"https://github.com/aero-ware/aeroclient",target:"_blank",rel:"noreferrer",className:"red",children:Object(r.jsx)("i",{className:"fab fa-github"})}),Object(r.jsx)("a",{href:"https://www.npmjs.com/org/aeroware",target:"_blank",rel:"noreferrer",className:"red",children:Object(r.jsx)("i",{className:"fab fa-npm fa-1x"})}),Object(r.jsx)("a",{href:"https://discord.gg/JdTQG3a9Ye",target:"_blank",rel:"noreferrer",className:"red",children:Object(r.jsx)("i",{className:"fab fa-discord"})})]})]})}},12:function(e,s,c){"use strict";c.r(s);var t=c(0),r=c(1),n=c.n(r),i=c(8),j=c.n(i),d=c(9);j.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(d.a,{})}),document.getElementById("root"))},231:function(e,s,c){},232:function(e,s,c){},233:function(e,s,c){},234:function(e,s,c){},235:function(e,s,c){},9:function(e,s,c){"use strict";(function(e){var t=c(0),r=c(5),n=c.n(r),i=c(1),j=(c(231),c(232),c(10));c(234),c(235);s.a=function(){return Object(i.useEffect)((function(){n.a.configure({languages:["typescript"]}),document.querySelectorAll("pre code").forEach((function(e){n.a.highlightBlock(e)}));var s=window.location.hash.slice(1),c=document.getElementById(s);c&&e((function(){return c.scrollIntoView({behavior:"smooth",block:"start"})}))}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(j.a,{}),Object(t.jsx)("aside",{className:"sidebar",children:Object(t.jsx)("div",{className:"viewport",children:Object(t.jsxs)("main",{className:"sidebar-links",children:[Object(t.jsx)("a",{href:"#welcome",children:"Welcome"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#documentation",children:"Documentation"}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#aeroclient",children:"AeroClient"}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#options",children:"Options"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#properties",children:"Properties"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#methods",children:"Methods"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#middleware",children:"Middleware"}),Object(t.jsx)("br",{})]}),Object(t.jsx)("a",{href:"#command",children:"Command"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#usage",children:"Usage"}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#commands",children:"Commands"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#events",children:"Events"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#messages",children:"Messages"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#locales",children:"Locales"})]}),Object(t.jsx)("a",{href:"#logger",children:"Logger"}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#logger-methods",children:"Methods"}),Object(t.jsx)("br",{})]}),Object(t.jsx)("a",{href:"#utils",children:"utils"}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#input",children:"Input"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#parsing",children:"Parsing"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#timing",children:"Timing"}),Object(t.jsx)("br",{}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#stopwatch",children:"Stopwatch"}),Object(t.jsxs)("div",{className:"t",children:[Object(t.jsx)("a",{href:"#stopwatch-properties",children:"Properties"}),Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#stopwatch-methods",children:"Methods"})]})]}),Object(t.jsx)("a",{href:"#pagination",children:"Pagination"}),Object(t.jsx)("br",{}),Object(t.jsx)("div",{className:"t",children:Object(t.jsx)("a",{href:"#pagination-options",children:"Options"})})]})]})]})})}),Object(t.jsx)("article",{className:"docs",children:Object(t.jsx)("div",{className:"viewport",children:Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:"welcome",children:[Object(t.jsxs)("h2",{children:[Object(t.jsx)("a",{id:"welcome",href:"#welcome",children:"#"})," ","Welcome!"]}),Object(t.jsxs)("p",{children:["Welcome to the AeroClient v1 documentation.",Object(t.jsx)("br",{}),Object(t.jsx)("a",{href:"#documentation",className:"red",children:"Click here skip the welcome section."})]}),Object(t.jsx)("h3",{children:"About"}),Object(t.jsxs)("p",{children:["AeroClient is a discord.js framework that focuses on customization.",Object(t.jsx)("br",{}),"It is fully customizable due to the many options and flags you can set.",Object(t.jsx)("br",{}),"AeroClient also features something new in discord.js frameworks: middleware."]}),Object(t.jsx)("p",{children:"In short, AeroClient is"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:"modular;"}),Object(t.jsx)("li",{children:"performant;"}),Object(t.jsx)("li",{children:"flexible;"}),Object(t.jsx)("li",{children:"and easy to use."})]}),Object(t.jsx)("p",{children:"Also, since AeroClient is written in TypeScript, it provides it's own typings."}),Object(t.jsx)("h3",{children:"Example (using ES6 import/export)"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'import AeroClient from "@aeroware/aeroclient";\n\n// create a client with default settings and commands\nconst client = new AeroClient({\n    token: "token",\n    prefix: "prefix",\n    useDefaults: true,\n    logging: true,\n});'})}),Object(t.jsx)("h3",{children:"Included Packages"}),Object(t.jsxs)("p",{children:[Object(t.jsx)("a",{href:"http://npmjs.com/package/@aeroware/logger",target:"_blank",rel:"noreferrer",className:"red",children:"@aeroware/logger"}),Object(t.jsx)("br",{}),"AeroWare's own extremely minimal logging utility."]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("a",{href:"http://npmjs.com/package/@aeroware/discord-utils",target:"_blank",rel:"noreferrer",className:"red",children:"@aeroware/discord-utils"}),Object(t.jsx)("br",{}),"AeroWare's small package that contains many utilities for discord.js"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("a",{href:"http://npmjs.com/package/date-fns",target:"_blank",rel:"noreferrer",className:"red",children:"date-fns"}),Object(t.jsx)("br",{}),"A formatting utility for dates and time."]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("a",{href:"http://npmjs.com/package/ms",target:"_blank",rel:"noreferrer",className:"red",children:"ms"}),Object(t.jsx)("br",{}),"A small utility to convert strings to milliseconds and back."]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("a",{href:"http://npmjs.com/package/keyv",target:"_blank",rel:"noreferrer",className:"red",children:"keyv"}),Object(t.jsx)("br",{}),"A key-value based in-memory storage that can be persistent."]})]}),Object(t.jsxs)("div",{className:"documentation",children:[Object(t.jsxs)("h2",{children:[Object(t.jsx)("a",{id:"documentation",href:"#documentation",className:"red",children:"#"})," ","Documentation"]}),Object(t.jsxs)("h3",{children:[Object(t.jsx)("a",{id:"aeroclient",href:"#aeroclient",className:"red",children:"#"})," ","AeroClient"]}),Object(t.jsx)("h4",{children:"Constructor"}),Object(t.jsxs)("p",{children:["The constructor takes two arguments: AeroClient options, and"," ",Object(t.jsx)("a",{href:"https://discord.js.org/#/docs/main/stable/class/Client",children:"Client"})," options.",Object(t.jsx)("br",{}),"It's less confusing and easy to manage."]}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"new AeroClient(clientOptions, options);\n"})}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"clientOptions"})," \u2013 AeroClient options",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"options"})," \u2013"," ",Object(t.jsx)("a",{href:"https://discord.js.org/#/docs/main/stable/class/Client",children:"Client"})," options",Object(t.jsx)("h4",{id:"options",children:"AeroClientOptions"}),Object(t.jsxs)("p",{children:["Keep in mind that all of these are ",Object(t.jsx)("em",{children:"optional"}),", but some of them are recommended."]}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"token"}),"\xa0\u2013 The client's token"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"prefix"}),"\xa0\u2013 The client's prefix"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"logging"}),"\xa0\u2013 Flag to enable logging"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"loggerHeader"}),"\xa0\u2013 The client's logger's header"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"loggerShowFlags"}),"\xa0\u2013 Recommended if your terminal doesn't have colors"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"commandsPath"}),"\xa0\u2013 Path where all your command files are found"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"eventsPath"}),"\xa0\u2013 Path where all your event files are found"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"messagesPath"}),"\xa0\u2013 Path where your predefined custom response messages are"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"languagesPath"}),"\xa0\u2013 Path where your predefined translated messages are"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"connectionUri"}),"\xa0\u2013 A uri to connect to your database so AeroClient can store data"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"useDefaults"})," \u2013 Flag to enable default commands and settings"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"persistentCooldowns"})," \u2013 Flag to enable persistent cooldowns"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"responses"})," \u2013 Response info"]}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"cooldown"})," \u2013 Reponse to send when the command is on cooldown"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"error"})," \u2013 Response to send when an error occurs"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"usage"})," \u2013 Response to send when the usage is incorrect"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"nsfw"})," \u2013 Response to send when an NSFW command is used in a SFW channel"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"guild"})," \u2013 Response to send when a guild only command is used in a direct message"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"dm"})," \u2013 Response to send when a direct message only command is used in a guild"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"staff"})," \u2013 Response to send when a non-staff user attempts to use a staff only command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"guarded"})," - Response to send when someone attempts to disable a guarded command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"disabled"})," - Response to send when someone attmempts to run a disabled command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"perms"})," - Response to send when someone attempts to run a command but doesn't have sufficient permissions"]})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"staff"})," \u2013 Array of strings of staff ids"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"customHandler"})," \u2013 A callback to use instead of our command handler"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"readyCallback"})," \u2013 A callback to use instead of our ready event callback"]})]}),Object(t.jsx)("h4",{children:"ClientOptions"}),Object(t.jsxs)("p",{children:["View the discord.js docs ",Object(t.jsx)("a",{href:"https://discord.js.org/#/docs/main/stable/typedef/ClientOptions",children:"here"}),"."]}),Object(t.jsx)("h4",{id:"properties",children:"Properties"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"commands"})," \u2013 Collection of all stored commands"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"logger"})," \u2013 Logger used to log events"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"prefixes"})," \u2013 Keyv that stores prefixes for each guild"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"clientOptions"})," \u2013 The client options that were passed into the constructor"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"localeStore"})," \u2013 Stored locales for each user"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"locales"})," \u2013 Stored translated resopnses"]})]}),Object(t.jsx)("h4",{id:"methods",children:"Methods"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"registerCommand(command)\n"})}),Object(t.jsxs)("p",{children:["Registers a command object into the client's ",Object(t.jsx)("code",{children:"commands"})," property."]}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"command"})," \u2013 Command object to register",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"loadCommands(directory)\n"})}),Object(t.jsx)("p",{children:"Registers all commands in a directory."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"directory"})," \u2013 Directory to load",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"loadEvents(directory)\n"})}),Object(t.jsx)("p",{children:"Registers all events in a directory."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"directory"})," \u2013 Directory to load",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"loadMessages(directory)\n"})}),Object(t.jsx)("p",{children:"Loads a JSON file with the custom messages."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"path"})," \u2013 Path to the JSON file",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"loadLocales(directory)\n"})}),Object(t.jsx)("p",{children:"Registers all locales in a directory."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"directory"})," \u2013 Directory to load",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"paginate(message, pages, options)\n"})}),Object(t.jsxs)("p",{children:["The docs for this method are ",Object(t.jsx)("a",{href:"#pagination",children:"here"}),"."]}),Object(t.jsx)("h4",{id:"middleware",children:"Middleware"}),Object(t.jsxs)("p",{children:["AeroClient introduces something new in discord.js frameworks.",Object(t.jsx)("br",{}),"This something new is called middleware. If you have used express you may know what it is,",Object(t.jsx)("br",{}),"but if you don't, we will explain.",Object(t.jsx)("br",{}),"Middleware in our framework refers to a function that runs right before command execution.",Object(t.jsx)("br",{}),"They are also is executed in the order you used them, and they change AeroClient's behaviour."]}),Object(t.jsx)("p",{children:"First, let's see the method to use middleware."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"use(middleware)\n"})}),Object(t.jsx)("p",{children:"Applies middleware to the client."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"middleware"})," \u2013 The middleware function",Object(t.jsx)("br",{}),Object(t.jsxs)("p",{children:["The middleware function will get two parameters.",Object(t.jsx)("br",{}),"The first is the context object and the second is a function."]}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'client.use(({ message }, next) => {\n    if (message.content.includes("some bad word")) {\n        message.reply("no u");\n        next(true);\n    }\n});\n'})}),Object(t.jsxs)("p",{children:["The context object has three properties. The message, the arguments for the command, and the command object itself.",Object(t.jsx)("br",{}),"Note that in the event that a command is not found, ",Object(t.jsx)("code",{children:"command"})," will be undefined."]}),Object(t.jsxs)("p",{children:["Calling the next function without any parameters will allow other middleware to execute, like express.",Object(t.jsx)("br",{}),"However, if you pass in ",Object(t.jsx)("code",{children:"true"}),", the middleware stops command execution as well."]}),Object(t.jsxs)("p",{children:["In the above example, if a message contains ",Object(t.jsx)("code",{children:"some bad word"}),", the client will reply ",Object(t.jsx)("code",{children:"no u"})," and stop command execution.",Object(t.jsx)("br",{}),"This means that even if the user used ",Object(t.jsx)("code",{children:"!help some bad word"}),", the client will not execute the help command."]}),Object(t.jsx)("h3",{id:"command",children:"The Command type"}),Object(t.jsx)("h4",{children:"Properties"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"name"})," \u2013 Name of the command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"aliases"})," \u2013 Aliases of the command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"category"})," \u2013 The command's category"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"args"})," \u2013 If arguments are required"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"minArgs"})," \u2013 Minimum amount of arguments required"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"maxArgs"})," \u2013 Maximum amount of arguments required"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"usage"})," \u2013 The command's usage"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"cooldown"})," \u2013 Cooldown in seconds"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"description"})," \u2013 Short description of the command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"details"})," \u2013 Long description of the command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"guildOnly"})," \u2013 If the command can only be executed in a guild"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"staffOnly"})," \u2013 If the command can only be executed by staff"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"dmOnly"})," \u2013 If the command can only be executed in a direct message"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"nsfw"})," \u2013 If the command can only be executed in an NSFW channel"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"hidden"})," \u2013 If the command should be hidden from the default help command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"guarded"})," - If the command should be protected from being disabled"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"permissions"})," - Array of"," ",Object(t.jsx)("a",{href:"https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS",children:"PermissionString"})," that contains the required permissions to run this command. Not checked if command is run in DMs."]})]}),Object(t.jsx)("h4",{children:"Methods"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"callback(context)\n"})}),Object(t.jsx)("p",{children:"The callback takes one parameter, the context object. Its properties are listed below."}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"message"}),"\xa0\u2013 The message obejct from the message event"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"args"})," \u2013 The arguments for the command"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"client"})," \u2013 The AeroClient instance"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"text"}),"\xa0\u2013 Full message content"]})]}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"context"})," \u2013 The context object",Object(t.jsx)("br",{}),Object(t.jsx)("h3",{id:"usage",children:"Usage"}),Object(t.jsx)("h4",{id:"commands",children:"Commands"}),Object(t.jsxs)("p",{children:["AeroClient supports two ways for declaring commands.",Object(t.jsx)("br",{}),"The first way we shall look at is ",Object(t.jsx)("code",{children:"client.registerCommand"})]}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'client.registerCommand({\n    name: "hello",\n    callback({ message }) {\n        message.reply("hi!");\n    }\n})\n'})}),Object(t.jsx)("p",{children:"You can also wrap it in a function and export it from another file."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'module.exports = (client) => {\n    client.registerCommand({\n        name: "hello",\n        callback({ message }) {\n            message.reply("hi!");\n        }\n    })\n}\n'})}),Object(t.jsx)("p",{children:"Or export the command object itself."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'module.exports = {\n    name: "hello",\n    callback({ message }) {\n        message.reply("hi!");\n    }\n}\n'})}),Object(t.jsx)("p",{children:"Generally the second method is preferred since it is more concise."}),Object(t.jsx)("h4",{id:"events",children:"Events"}),Object(t.jsx)("p",{children:"AeroClient also supports individual event files."}),Object(t.jsx)("p",{children:"In each file, there should be one export. An example is show below."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:'module.exports = {\n    name: "guildMemberAdd",\n    once: false,\n    callback(member) {\n        member.user.send("hello");\n    }\n}\n'})}),Object(t.jsx)("p",{children:"There are three properties. The name, whether it should execute once or every time it is emitted, and finally, the callback to execute."}),Object(t.jsx)("h4",{id:"messages",children:"Messages"}),Object(t.jsx)("p",{children:"AeroClient allows you to configure response messages with a JSON file."}),Object(t.jsxs)("p",{children:["Simple add the path to the JSON file in as the ",Object(t.jsx)("code",{children:"messagesPath"})," option."]}),Object(t.jsx)("h4",{id:"locales",children:"Locales and translated responses"}),Object(t.jsxs)("p",{children:["AeroClient supports a number of locales.",Object(t.jsx)("br",{}),"Your translated messages should be contained in a JSON file with the locale as the name.",Object(t.jsx)("br",{}),"For example, a JSON file with French translations would be named ",Object(t.jsx)("code",{children:"fr.json"}),".",Object(t.jsx)("br",{}),"AeroClient will automatically load all support locales if you add the ",Object(t.jsx)("code",{children:"languagesPath"})," option.",Object(t.jsx)("br",{}),"AeroClient supports the following locales: ",Object(t.jsx)("code",{children:"ar, en, fr, zh, de, pt, ru, es"})]}),Object(t.jsx)("h3",{id:"logger",children:"Logger"}),Object(t.jsxs)("p",{children:["The Logger class is a simple logger that can be configured easily.",Object(t.jsx)("br",{}),"Logger instances only have methods and do not have properties."]}),Object(t.jsx)("h4",{children:"Constructor"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"new Logger(header, showFlags)\n"})}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"header"}),"\xa0\u2013 Custom header for the logger. Defaults to ",Object(t.jsx)("code",{children:"logger"}),".",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"showFlags"}),"\xa0\u2013 Flag to show flags or not.",Object(t.jsx)("h4",{id:"logger-methods",children:"Methods"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"success(message)\n"})}),Object(t.jsx)("p",{children:"Logs a message in green."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message to log",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"info(message)\n"})}),Object(t.jsx)("p",{children:"Logs a message in blue."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message to log",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"warn(message)\n"})}),Object(t.jsx)("p",{children:"Logs a message in yellow."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message to log",Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"error(message)\n"})}),Object(t.jsx)("p",{children:"Logs a message in red."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message to log",Object(t.jsx)("br",{}),Object(t.jsx)("h2",{id:"utils",children:"utils"}),Object(t.jsx)("h3",{id:"input",children:"Input"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"getReply(message, options)\n"})}),Object(t.jsx)("p",{children:"Helper method for getting text input."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"options"})," \u2013 Options for the method",Object(t.jsx)("br",{}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"time"})," \u2013 Time limit for answers"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"user"})," \u2013 Specific user to accept answers from"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"keywords"}),"\xa0\u2013 Array of strings for acceptable answers"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"regex"})," \u2013\xa0Regular expression to test answers"]})]}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"getReaction()\n"})}),Object(t.jsx)("p",{children:"Helper method for getting reaction input."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"options"})," \u2013 Options for the method",Object(t.jsx)("br",{}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"time"})," \u2013 Time limit for answers"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"user"})," \u2013 Specific user to accept answers from"]})]}),Object(t.jsx)("h3",{id:"parsing",children:"Parsing"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.formatMacroCase(str)\n"})}),Object(t.jsx)("p",{children:"Converts macro case strings to a more readable string."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"string"})," \u2013 String to format",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.formatList(items)\n"})}),Object(t.jsx)("p",{children:"Converts an array of strings into a more readable string."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"items"})," \u2013 Array to format",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.parseUsers(message, args)\n"})}),Object(t.jsx)("p",{children:"Gets user objects from command arguments."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"args"})," \u2013 Command arguments",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.parseMembers(message, args)\n"})}),Object(t.jsx)("p",{children:"Gets member objects from command arguments."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"args"})," \u2013 Command arguments",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.parseRoles(message, args)\n"})}),Object(t.jsx)("p",{children:"Gets role objects from command arguments."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"args"})," \u2013 Command arguments",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.trim(str, length)\n"})}),Object(t.jsx)("p",{children:"Trims a string to the specified length and replaces the last three characters with a ellipsis."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"str"})," \u2013 String to trim",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"length"})," \u2013 Max length of the string",Object(t.jsx)("br",{}),Object(t.jsx)("h3",{id:"timing",children:"Timing"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.aDelayOf(ms)\n"})}),Object(t.jsxs)("p",{children:["Waits for a set amount of millliseconds, then continues execution. Only works with ",Object(t.jsx)("code",{children:"await"}),"."]}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.getStopwatch()\n"})}),Object(t.jsx)("p",{children:"Creates a stopwatch object for use."}),Object(t.jsx)("h3",{id:"stopwatch",children:"Stopwatch"}),Object(t.jsx)("h4",{id:"stopwatch-properties",children:"Properties"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"elapsedTime"})," \u2013 Elapsed time from when the stopwatch started"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"isRunning"})," \u2013 If the stopwatch is running or not"]})]}),Object(t.jsx)("h4",{id:"stopwatch-methods",children:"Methods"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"start()\n"})}),Object(t.jsx)("p",{children:"Starts the stopwatch."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"stop()\n"})}),Object(t.jsx)("p",{children:"Stops the stopwatch."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"reset()\n"})}),Object(t.jsx)("p",{children:"Reset the stopwatch."}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"restart()\n"})}),Object(t.jsx)("p",{children:"Restarts the stopwatch."}),Object(t.jsx)("h4",{id:"pagination",children:"Pagination"}),Object(t.jsx)("pre",{children:Object(t.jsx)("code",{children:"utils.paginate(message, pages, options)\n"})}),Object(t.jsx)("p",{children:"Starts a pagination."}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"message"})," \u2013 Message object",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"pages"})," \u2013 Array of"," ",Object(t.jsx)("a",{href:"https://discord.js.org/#/docs/main/stable/class/MessageEmbed",children:"MessageEmbed"})," instances",Object(t.jsx)("br",{}),Object(t.jsx)("span",{className:"red",children:"@param"})," ",Object(t.jsx)("code",{children:"options"})," \u2013 Options for the pagination",Object(t.jsx)("br",{}),Object(t.jsx)("p",{id:"pagination-options",children:"The options are:"}),Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"startingPage"})," \u2013 The page to show when pagination is first displayed"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"time"})," \u2013 Time in milliseconds to show the pagination"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"fastForwardAndRewind"})," \u2013 Enables two extra features with options",Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"time"})," \u2013\xa0Time in milliseconds to accept answers"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"rewindPrompt"})," \u2013 Custom prompt to ask when rewinding"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"fastForwardPrompt"})," \u2013\xa0Custom prompt to ask when fast forwarding"]})]})]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"goTo"})," \u2013 Enables an extra feature with options",Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"time"})," \u2013\xa0Time in milliseconds to accept answers"]}),Object(t.jsxs)("li",{children:[Object(t.jsx)("code",{children:"prompt"})," \u2013 Custom prompt to ask"]})]})]})]})]}),Object(t.jsx)("div",{className:"footer",id:"footer",style:{opacity:.5,fontSize:"1rem",paddingTop:"2rem"},children:"Copyright 2021 \xa9 AeroWare"})]})})})]})}}).call(this,c(18).setImmediate)}},[[12,1,2]]]);
//# sourceMappingURL=main.5dffafec.chunk.js.map