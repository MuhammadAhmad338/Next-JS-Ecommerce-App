"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(2130);
;// CONCATENATED MODULE: ./components/HeroBanner.js




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/external_react_default().createElement("h3", null, heroBanner.midText), /*#__PURE__*/external_react_default().createElement("h1", null, heroBanner.largeText1), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(heroBanner.image),
    alt: "headphones",
    className: "hero-banner-image"
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, heroBanner.buttonText)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, "Description"), /*#__PURE__*/external_react_default().createElement("p", null, heroBanner.desc)))));
};

/* harmony default export */ const components_HeroBanner = (HeroBanner);
;// CONCATENATED MODULE: ./components/FooterBanner.js




const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    product,
    desc,
    buttonText,
    smallText,
    midText,
    image
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("p", null, discount), /*#__PURE__*/external_react_default().createElement("h3", null, largeText1), /*#__PURE__*/external_react_default().createElement("h3", null, largeText2), /*#__PURE__*/external_react_default().createElement("p", null, saleTime)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("p", null, smallText), /*#__PURE__*/external_react_default().createElement("h3", null, midText), /*#__PURE__*/external_react_default().createElement("p", null, desc), /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/external_react_default().createElement("img", {
    className: "footer-banner-image",
    src: (0,client/* urlFor */.u)(image)
  })));
};

/* harmony default export */ const components_FooterBanner = (FooterBanner);
// EXTERNAL MODULE: ./components/Product.js
var Product = __webpack_require__(8029);
;// CONCATENATED MODULE: ./pages/index.js






const Home = ({
  productdata,
  bannerdata
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(components_HeroBanner, {
    heroBanner: bannerdata?.length && bannerdata[0]
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "products-heading"
  }, /*#__PURE__*/external_react_default().createElement("h2", null, "Best Selling Products"), /*#__PURE__*/external_react_default().createElement("p", null, "Speakers of my variations")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "products-container"
  }, productdata?.map(product => /*#__PURE__*/external_react_default().createElement(Product/* default */.Z, {
    product: product
  }))), /*#__PURE__*/external_react_default().createElement(components_FooterBanner, {
    footerBanner: bannerdata && bannerdata[0]
  }));
};

const getServerSideProps = async () => {
  const productquery = '*[_type == "product"]';
  const productdata = await client/* client.fetch */.L.fetch(productquery);
  const bannerquery = '*[_type == "banner"]';
  const bannerdata = await client/* client.fetch */.L.fetch(bannerquery);
  return {
    props: {
      productdata,
      bannerdata
    }
  };
};
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,29], () => (__webpack_exec__(4573)));
module.exports = __webpack_exports__;

})();