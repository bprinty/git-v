#!/usr/bin/env sh
#
# makefile for git-v plugin
# 
# @author <bprinty@gmail.com>
# ------------------------------------------------

# config
# ------
BIN_DIR   = /usr/local/bin
LOADER    = git-v
COMMANDS  = git-v-list git-v-add git-v-remove git-v-up git-v-down git-v-rc git-v-tag
TESTS     = test-full
REMOTE    = origin
VERSION   = `PATH=./bin:$$PATH git v -v`


# targets
# -------
all:
    @echo "usage: make [test|install|uninstall]"

install:
	install -d -m 0755 $(BIN_DIR)
	install -m 0755 bin/$(LOADER) $(BIN_DIR)
	for cmd in $(COMMANDS); do install -m 0644 bin/$$cmd $(BIN_DIR); done

uninstall:
	test -d $(BIN_DIR) && \
	cd $(BIN_DIR) && \
	rm -f $(LOADER) $(COMMANDS)

.PHONY: test
test:
	@PATH=`pwd`/bin:$$PATH && for cmd in $(TESTS); do bash ./test/$$cmd; done

release:
	TAG=$(VERSION) && git tag -d $$TAG || echo "local tag available"
	TAG=$(VERSION) && git push $(REMOTE) :$$TAG || echo "remote tag available"
	TAG=$(VERSION) && git tag $$TAG && git push $(REMOTE) $$TAG
