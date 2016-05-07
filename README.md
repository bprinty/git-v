git-v
========

Git plugin for managing project version numbers. 

THIS PROJECT IS IN DEVELOPMENT MODE AND IS NOT READY FOR USE. PLEASE DO NOT CLONE IT YET.


## Installation:

Clone the repo and install with make:

```bash
~$ git clone git@github.com:bprinty/git-v.git
~$ make install
```

NOTE: Windows users that do not have Make installed will have to just copy executables to somewhere on their path:

```bash
# within git-bash for Windows
~$ git clone git@github.com:bprinty/git-v.git
~$ cd git-v
~$ cp bin/* /usr/local/bin/
```


## Usage:

To start tracking a file for version management with git-v, use:

```bash
~$ git v add <file>
```

To remove a file from tracking with git-v, use:

```bash
~$ git v remove <file>
```

To list version numbers for tracked files, use:

```bash
~$ git v list
module/__init__.py ... 1.0.0
```

To increment version numbers for all tracked files in a project:

```bash
~$ git v up <version-type>
```

Where ```<version-type>``` is either major, minor, or subminor. An example of incrementing each of these is below:

```bash
~$ git v up subminor
module/__init__.py ... 1.0.0 --> 1.0.1

~$ git v up minor
module/__init__.py ... 1.0.0 --> 1.1.0

~$ git v up major
module/__init__.py ... 1.0.0 --> 2.0.0
```

To increment the release cycle of the project to the current commit hash, do:

```bash
~$ git v rc
module/__init__.py ... 1.0.0 --> 1.0.0-rc7f4f6
```

Note: for any non-rc operation, the ```-rc``` component of the version scheme will be stripped off. To add the ```-rc``` component, simply do git v rc again.


## Questions/Feedback:

Submit an issue in the GitHub issue tracker.
