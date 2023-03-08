(function() {
  "use strict";
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    if (functionalTemplate) {
      options.functional = true;
    }
    if (scopeId) {
      options._scopeId = "data-v-" + scopeId;
    }
    var hook;
    if (moduleIdentifier) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (injectStyles) {
          injectStyles.call(this, context);
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      options._ssrRegister = hook;
    } else if (injectStyles) {
      hook = shadowMode ? function() {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      } : injectStyles;
    }
    if (hook) {
      if (options.functional) {
        options._injectStyles = hook;
        var originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main = {
    computed: {
      buttons() {
        const buttons2 = [];
        this.content.group.forEach((element, index2) => {
          if (!element.linktopage.length && !element.url) {
            buttons2[index2] = {
              "label": element.label,
              "type": "",
              "message": "Manque page ou url",
              "class": element.type + " error"
            };
          } else {
            buttons2[index2] = {
              "label": element.label,
              "linktopage": element.linktopage,
              "url": element.url,
              "type": element.type,
              "message": "\xC9diter le bouton",
              "class": element.type
            };
          }
        });
        return buttons2;
      }
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c;
    return _c("div", { staticClass: "k-block-buttons" }, [_vm.content.group.length ? _c("div", { staticClass: "k-block-buttons-group" }, _vm._l(_vm.buttons, function(item, index2) {
      return _c("button", { key: index2, class: item.class, attrs: { "type": "button", "title": item.message }, on: { "click": _vm.open } }, [_c("span", [_vm._v(_vm._s(item.label))]), !item.type ? _c("k-icon", { attrs: { "type": "alert" } }) : _vm._e()], 1);
    }), 0) : _c("div", { staticClass: "k-block-buttons-group-empty", on: { "click": _vm.open } }, [_c("button", { staticClass: "empty", attrs: { "type": "button" } }, [_c("k-icon", { attrs: { "type": "edit" } }), _c("span", [_vm._v(_vm._s(_vm.$t("field.blocks.buttons.emptyState")))])], 1)])]);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns,
    false,
    null,
    null,
    null,
    null
  );
  __component__.options.__file = "/Users/baptiste/Documents/git/afils/composer/plugins/kirby3-block-buttons/src/components/buttons.vue";
  const buttons = __component__.exports;
  const index = "";
  panel.plugin("repliq/kirby3-block-buttons", {
    blocks: {
      buttons
    }
  });
})();
