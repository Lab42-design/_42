all: greet js 42

js: 
	tsc

greet: 
	echo 'building _42'


srcdir = ui/js/

modules = ${srcdir}fetch_partial.js\
		  ${srcdir}promise_dom.js

42: 
	uglifyjs --compress -- ${modules} > ui/js/42.js