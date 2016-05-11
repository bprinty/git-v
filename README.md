git-v
========

Semantic versioning management for a project.


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

Where ```<version-type>``` is either major, minor, or patch. An example of incrementing each of these is below:

```bash
~$ git v up patch
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

Or, to add a specific string as the release cycle tag (i.e. alpha, beta), use:

```bash
~$ git v rc alpha
module/__init__.py ... 1.0.0 --> 1.0.0-alpha
```

Note: for any non-rc operation, all text after the ```-``` component of the version scheme will be stripped off. To add the release-cycle information back, simply do git v rc again.


## Questions/Feedback:

Submit an issue in the GitHub issue tracker.
