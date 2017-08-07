PUGS     = $(wildcard *.pug)
CSS      = $(wildcard *.css)
JS       = $(wildcard *.js)

OUT_DIR  = html

HTML_OUT = $(patsubst %.pug,$(OUT_DIR)/%.html,$(PUGS))
CSS_OUT  = $(patsubst %.css,$(OUT_DIR)/%.css, $(CSS))
JS_OUT   = $(patsubst %.js, $(OUT_DIR)/%.js,  $(JS))

all: $(HTML_OUT) $(CSS_OUT) $(JS_OUT)

$(OUT_DIR)/%.html: %.pug
	pug -o $(OUT_DIR) $<

$(OUT_DIR)/%.css: %.css
	cp $< $@

$(OUT_DIR)/%.js: %.js
	cp $< $@

