help:
	echo "make install|build|test"

install:
	cd end-common-js	&& npm install
	cd end-module		&& npm install
	cd lib-common-js	&& npm install
	cd lib-module		&& npm install
	cd react-common-js	&& npm install
	cd react-module		&& npm install

build:
	cd lib-common-js	&& npm build
	cd lib-module		&& npm build
	cd react-common-js	&& npm build
	cd react-module		&& npm build
	cd end-common-js	&& npm build
	cd end-module		&& npm build

test:
	cd lib-common-js	&& npm test
	cd lib-module		&& npm test
	cd react-common-js	&& npm test
	cd react-module		&& npm test
	cd end-common-js	&& npm test
	cd end-module		&& npm test

prepare:
	cd lib-common-js	&& npm prepare
	cd lib-module		&& npm prepare
	cd react-common-js	&& npm prepare
	cd react-module		&& npm prepare
	cd end-common-js	&& npm prepare
	cd end-module		&& npm prepare

