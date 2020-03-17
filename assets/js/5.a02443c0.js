(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-versioning-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-versioning-tool"}},[t._v("#")]),t._v(" Git Versioning Tool")]),t._v(" "),a("p",[t._v("Semantic versioning management for a project. Inspired by the "),a("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning 2.0.0"),a("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Clone the repo and install with make:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:bprinty/git-v.git\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("NOTE: Windows users that do not have Make installed will have to just copy executables to somewhere on their path:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# within git-bash for Windows")]),t._v("\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:bprinty/git-v.git\n~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" git-v\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" bin/* /usr/local/bin/\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h3",{attrs:{id:"tracking-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracking-files"}},[t._v("#")]),t._v(" Tracking Files")]),t._v(" "),a("p",[t._v("To start tracking specific files for version management with git-v, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Alternatively, just include a "),a("code",[t._v(".version")]),t._v(" file in the top-level directory of the repository with names of files to track version information for.")]),t._v(" "),a("p",[t._v("To remove a file from tracking with git-v, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" remove "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("package.json")]),t._v(" files in JavaScript projects and "),a("code",[t._v("src/__init__.py")]),t._v(" files in Python projects will be tracked for versioning. If you have a JavaScript or Python project, you don't need to explicitly track any version files.")])]),t._v(" "),a("h3",{attrs:{id:"listing-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listing-versions"}},[t._v("#")]),t._v(" Listing Versions")]),t._v(" "),a("p",[t._v("To list version numbers for tracked files, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" list\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0\n")])])]),a("h3",{attrs:{id:"semantic-versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-versioning"}},[t._v("#")]),t._v(" Semantic Versioning")]),t._v(" "),a("p",[t._v("To increment version numbers for all tracked files in a project:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version-type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Where "),a("code",[t._v("<version-type>")]),t._v(" is either major, minor, or patch. An example of incrementing each of these is below:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" up patch\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".1\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" up minor\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" up major\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".0\n")])])]),a("p",[t._v("You can also decrement the versioning with the same type of syntax:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" down patch\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".1 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" down minor\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" down major\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0\n")])])]),a("h3",{attrs:{id:"release-cycle-versioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-cycle-versioning"}},[t._v("#")]),t._v(" Release Cycle Versioning")]),t._v(" "),a("p",[t._v("To increment the release cycle of the project to the current commit hash, do:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" rc\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-rc7f4f6\n")])])]),a("p",[t._v("Or, to add a specific string as the release cycle tag (i.e. alpha, beta), use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" rc alpha\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-alpha\n")])])]),a("p",[t._v("To increment/decrement the version of a specified release cycle tag, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" rc beta up\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta.1\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" rc beta up\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta.1 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta.2\n\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" rc beta down\nmodule/__init__.py "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta.2 --"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(".0-beta.1\n")])])]),a("p",[t._v("Note: for any non-rc operation, all text after the "),a("code",[t._v("-")]),t._v(" component of the version scheme will be stripped off. To add the release-cycle information back, simply do git v rc again.")]),t._v(" "),a("h3",{attrs:{id:"tagging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging"}},[t._v("#")]),t._v(" Tagging")]),t._v(" "),a("p",[t._v("To create a tag for your repository with the current tracked version, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# normal tag")]),t._v("\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" tag\nCreated tag "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# creating a signed tag")]),t._v("\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" tag -s\nCreated tag "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was 0c3f704"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# creating a signed tag with a message")]),t._v("\n~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" tag -s -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a tag"')]),t._v("\n")])])]),a("p",[t._v("To delete a tag with the current tracked version, use:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" tag -d\nDeleted tag "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("was 0c3f704"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"questions-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions-feedback"}},[t._v("#")]),t._v(" Questions/Feedback")]),t._v(" "),a("p",[t._v("Submit an issue in the GitHub "),a("a",{attrs:{href:"https://github.com/bprinty/git-v/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue tracker"),a("OutboundLink")],1),t._v(" for the project.")])])}),[],!1,null,null,null);s.default=n.exports}}]);