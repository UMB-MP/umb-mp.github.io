(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/P1L":
    /*!*****************************************************!*\
      !*** ./src/app/dicom-viewer/thumbnail.directive.ts ***!
      \*****************************************************/

    /*! exports provided: ThumbnailDirective */

    /***/
    function P1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThumbnailDirective", function () {
        return ThumbnailDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ThumbnailDirective = /*#__PURE__*/function () {
        function ThumbnailDirective(elementRef) {
          _classCallCheck(this, ThumbnailDirective);

          this.elementRef = elementRef;
        }

        _createClass(ThumbnailDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Retrieve the DOM element itself
            this.element = this.elementRef.nativeElement; // Enable the element with Cornerstone

            cornerstone.enable(this.element);
            this.setImageData(this.imageData);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.refresh();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.setImageData(this.imageData);
          }
        }, {
          key: "setImageData",
          value: function setImageData(image) {
            this.imageData = image;

            if (this.imageData && this.element) {
              var viewport = cornerstone.getDefaultViewportForImage(this.element, this.imageData);
              cornerstone.displayImage(this.element, this.imageData, viewport); // Fit the image to the viewport window

              cornerstone.fitToWindow(this.element);
              cornerstone.resize(this.element, true);
            }
          }
        }]);

        return ThumbnailDirective;
      }();

      ThumbnailDirective.ɵfac = function ThumbnailDirective_Factory(t) {
        return new (t || ThumbnailDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ThumbnailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ThumbnailDirective,
        selectors: [["", "thumbnail", ""]],
        inputs: {
          imageData: "imageData"
        }
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/temp/Downloads/deephealth-annotate/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4X/e":
    /*!******************************************************!*\
      !*** ./src/app/info-dialog/info-dialog.component.ts ***!
      \******************************************************/

    /*! exports provided: InfoDialogComponent */

    /***/
    function XE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function () {
        return InfoDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var InfoDialogComponent = /*#__PURE__*/function () {
        function InfoDialogComponent() {
          _classCallCheck(this, InfoDialogComponent);
        }

        _createClass(InfoDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoDialogComponent;
      }();

      InfoDialogComponent.ɵfac = function InfoDialogComponent_Factory(t) {
        return new (t || InfoDialogComponent)();
      };

      InfoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InfoDialogComponent,
        selectors: [["info-dialog"]],
        decls: 185,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["width", "190", "alt", "DeepHealth Logo", "src", "assets/svg/deephealth.svg", 2, "margin-top", "0.25%"], [1, "mat-typography"], [2, "border-bottom", "#696969 1px inset", "padding-bottom", "2%"], [1, "far", "fa-square", 2, "font-size", "20pt"], [1, "fas", "fa-ruler-horizontal", 2, "font-size", "20pt"], [1, "fa", "fa-search", 2, "font-size", "20pt"], [1, "fa", "fa-arrows-alt", 2, "font-size", "20pt"], [1, "fas", "fa-search-plus", 2, "font-size", "20pt"], [1, "fa", "fa-sun", 2, "font-size", "20pt"], [1, "fa", "fa-adjust", 2, "font-size", "20pt"], [1, "fas", "fa-undo", 2, "font-size", "20pt"], [1, "fas", "fa-trash-alt", 2, "font-size", "20pt"], [1, "fa", "fa-backward", 2, "font-size", "20pt"], [1, "fa", "fa-forward", 2, "font-size", "20pt"], [1, "fa", "fa-bars", 2, "font-size", "20pt"], [1, "fa", "fa-play", 2, "font-size", "20pt"], [1, "fa", "fa-stop", 2, "font-size", "20pt"], [1, "fa", "fa-download", 2, "font-size", "20pt"], ["aria-label", "Project GitHub", "target", "_blank", "rel", "noopener", "href", "https://github.com/umb-deephealth/deephealth-annotate", "title", "Project GitHub"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 2, "margin-right", "1%"]],
        template: function InfoDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " DICOM Annotation Tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The DeepHealth Annotate DICOM Image Annotation Tool is a web-based platform for viewing and annotating DICOM files. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Tools are included for rectangular box and length measurement type annotations. The annotation metadata can then be exported as a .JSON file, which is intended to be parsed and used as training input for deep learning models, so that algorithms can more accurately identify these regions of interest within similar images in the future. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " You can get started by clicking the \"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Choose DICOM Files");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\" button in the top-right corner of the screen and then browsing to select all of the desired DICOM files to import from your local machine. You may also drag and drop the files directly onto the viewer window. If you would like to learn more about the viewer and annotation tools available, please continue reading below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Annotation Tools");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rectangle ROI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(Shortcut: R)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "This button will enable the Rectangular Box Tool, which allows you to draw a box around a region of interest. With the tool enabled, click a point on the image to place the first corner of the box, then click again to place the opposite corner, and a box will be drawn for you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " The annotation metadata generated by this tool includes x and y coordinates for the top-left corner of the box, as well as width and height values for the box. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Length");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(Shortcut: L)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "This button will enable the Length Measurement Tool, which allows you to draw a straight line on the image that includes automatically calculated length values. Simply click the point where you want the line to begin, then the end point, and the line will be drawn for you. This is useful for annotating the distance between two regions of interest, or measuring the length of any region. It may also be useful for annotating thin regions of interest that are not efficiently captured using the rectangular box tool.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " The annotation metadata generated by this tool includes x and y coordinates for the start and end points of the line, as well as a numerical length value and a string defining the units of length.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View Tools");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Image Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "This button enables content-based similar lesion image search function. Similar images are retrieved by either Autoencoder or SimCLR models");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "(Shortcut: P)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "This button enables the Pan Tool, which allows panning around the current active image using the left mouse button. Pan is also possible by default by using the right mouse button while any other tool is active.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Zoom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(Shortcut: Z)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "This button will enable the Zoom Tool, which allows you to adjust the zoom value of the current image using the left mouse button. With the tool chosen, click and drag along the viewer y-axis: Down to zoom in, up to zoom out.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Windowing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "(Shortcut: W)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "This button will enable the Windowing tool, which allows you to change the viewer's windowing values using the left mouse button. With the tool chosen, click and drag along the viewer x-axis to increase or decrease the WW value (Window Width, also known as contrast), or along the y-axis to adjust the WL value (Window Level, also known as brightness).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Invert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "(Shortcut: I)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "This button will invert the image colors.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Undo Annotation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "(Shortcut: U)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "This button will undo any annotations created with the last used tool.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Reset Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "(Shortcut: Esc)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "This button resets the current image to its initial state. This includes removing all annotations, as well as resetting zoom, windowing, and positioning.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Previous Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "(Shortcut: Left or Up arrows)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "If a multi-frame image is selected in the viewer, this button will move to the previous frame in the stack.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Next Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "(Shortcut: Right or Down arrows)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "If a multi-frame image is selected in the viewer, this button will move to the next frame in the stack.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Toggle Stack Scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "(Shortcut: S)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Clicking this button will toggle the Stack Scroll tool on/off. Stack scrolling allows for moving through an image stack in a multi-frame DICOM file using the mousewheel: Down for next frame, up for previous frame.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Play Clip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "(Shortcut: /)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "If a multi-frame image is selected in the viewer, this button will begin looping through the frames at a default 10 frames per second. Click \"Stop Clip\" to end the loop and return to static image viewing.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Stop Clip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "(Shortcut: /)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "If a multi-frame image is selected in the viewer and currently playing, this button will end the play loop and return you to static image viewing. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Exporting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Download Annotation Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "(Shortcut: Alt+Enter)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "This button exports all current annotations on any loaded images to a .JSON file. In the file, each DICOM image is represented as one JSON object containing any annotation metadata within that image as a set of key/value pairs. Therefore, the contents of the file is simply a list containing one of these objects for each image. See below for example JSON properties.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Simplified JSON example:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \"height\":25,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " \"left\":984,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \"top\":353,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \"uuid\":\"a084819e-f470-4477-af32-4a3d8a71b008\",");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " \"x\":141,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " \"y\":152,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \"length\":52,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " One of these .JSON files can then later be dropped onto the viewer to restore any annotations from the file onto their respective images, provided those images are also currently loaded.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Source & Contributing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "This project is provided open-source (MIT license) and your contributions are welcome! Please visit our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " repository for more information.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "mat-dialog-actions", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", " \"width\":76,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"unit\":\"mm\" ", "}", "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luZm8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs4REFBQSIsImZpbGUiOiJpbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgc3R5bGUgaXMgb3ZlcnJpZGRlbiBnbG9iYWxseSBpbiAvc3JjL3N0eWxlcy5zY3NzIFxuXG4gICBUaGlzIGlzIHJlcXVpcmVkIHRvIHN0eWxlIHRoZSBvdXRlciBtYXQtZGlhbG9nLWNvbnRhaW5lci4gKi9cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "4aB8":
    /*!*****************************************************!*\
      !*** ./src/app/dicom-viewer/dicom-viewer.module.ts ***!
      \*****************************************************/

    /*! exports provided: DicomViewerModule */

    /***/
    function aB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicomViewerModule", function () {
        return DicomViewerModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _dicom_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dicom-viewer.component */
      "WcTy");
      /* harmony import */


      var _cornerstone_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cornerstone.directive */
      "rijV");
      /* harmony import */


      var _thumbnail_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./thumbnail.directive */
      "/P1L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DicomViewerModule = function DicomViewerModule() {
        _classCallCheck(this, DicomViewerModule);
      };

      DicomViewerModule.ɵfac = function DicomViewerModule_Factory(t) {
        return new (t || DicomViewerModule)();
      };

      DicomViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: DicomViewerModule
      });
      DicomViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DicomViewerModule, {
          declarations: [_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_3__["DICOMViewerComponent"], _cornerstone_directive__WEBPACK_IMPORTED_MODULE_4__["CornerstoneDirective"], _thumbnail_directive__WEBPACK_IMPORTED_MODULE_5__["ThumbnailDirective"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
          exports: [_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_3__["DICOMViewerComponent"], _cornerstone_directive__WEBPACK_IMPORTED_MODULE_4__["CornerstoneDirective"], _thumbnail_directive__WEBPACK_IMPORTED_MODULE_5__["ThumbnailDirective"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./info-dialog/info-dialog.component */
      "4X/e");
      /* harmony import */


      var _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dicom-viewer/dicom-viewer.component */
      "WcTy");
      /* harmony import */


      var hotkeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! hotkeys-js */
      "m2rO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _dragdrop_dragdrop_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dragdrop/dragdrop.directive */
      "fY0L");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(dialog) {
          _classCallCheck(this, AppComponent);

          this.dialog = dialog;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Initialize the cornerstoneWADOImageLoaderCodecs
            cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
            cornerstoneWADOImageLoader.webWorkerManager.initialize({
              webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
              taskConfiguration: {
                'decodeTask': {
                  codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
                }
              }
            }); // Setup all Keyboard Shortcuts here

            Object(hotkeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])('p,z,w,i,r,l,alt+enter,u,esc,left,right,up,down,/,s', function (event, handler) {
              event.preventDefault();
              document.getElementById("viewer").focus();

              switch (handler.key) {
                case 'p':
                  document.getElementById('pan_bttn').click();
                  break;

                case 'z':
                  document.getElementById('zoom_bttn').click();
                  break;

                case 'w':
                  document.getElementById('windowing_bttn').click();
                  break;

                case 'i':
                  document.getElementById('invert_bttn').click();
                  break;

                case 'r':
                  document.getElementById('rectangleroi_bttn').click();
                  break;

                case 'l':
                  document.getElementById('length_bttn').click();
                  break;

                case 'alt+enter':
                  document.getElementById('export_bttn').click();
                  break;

                case 'u':
                  document.getElementById('undo_bttn').click();
                  break;

                case 'esc':
                  document.getElementById('reset_bttn').click();
                  break;

                case 'left':
                case 'up':
                  document.getElementById('previous_image_bttn').click();
                  break;

                case 'right':
                case 'down':
                  document.getElementById('next_image_bttn').click();
                  break;

                case '/':
                  document.getElementById('play_bttn').click();
                  break;

                case 's':
                  document.getElementById('stackscroll_bttn').click();
                  break;
              }
            });
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            document.documentElement.focus();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_0__["InfoDialogComponent"], {
              panelClass: 'custom-modalbox',
              autoFocus: false
            });
            dialogRef.afterClosed().subscribe(function (result) {//console.log(`Dialog result: ${result}`);
            });
          } // File drag & drop handler, event contains a FileList

        }, {
          key: "onFileDropped",
          value: function onFileDropped(event) {
            var fileType = event[0].type;
            var fileList = Array.from(event);
            var file = fileList[0];

            if (fileList.length == 1 && fileType == 'application/json') {
              this.viewPort.loadToolState(event);
            } else {
              this.loadDICOMImages(event);
            }
          }
          /**
           * Load selected DICOM images
           *
           * @param files list of selected dicom files
           */

        }, {
          key: "loadDICOMImages",
          value: function loadDICOMImages(files) {
            if (files && files.length > 0) {
              var imageList = [];
              var fileList = Array.from(files);
              fileList.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }

                if (b.name > a.name) {
                  return -1;
                }

                return 0;
              });
              cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge(); // loop thru the File list and build a list of wadouri imageIds (dicomfile:)

              for (var i = 0; i < fileList.length; i++) {
                var dicomFile = fileList[i];
                var imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
                imageList.push(imageId);
              }

              this.viewPort.resetAllTools(); // now load all Images, using their wadouri

              this.viewPort.loadStudyImages(imageList);
            } else {
              alert('Choose DICOM images to display.');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.viewPort = _t.first);
          }
        },
        decls: 14,
        vars: 2,
        consts: [["appDragdrop", "", 2, "height", "100%", "width", "100%", 3, "fileDropped"], [2, "display", "flex", "height", "calc(100% - 60px)", "width", "100%", "margin-top", "3.3em"], ["id", "viewer", 2, "height", "100%", "width", "100%", "margin", "1px", "border", "2px solid #1a1a1a", "font-size", "16px", 3, "enableViewerTools", "enablePlayTools"], ["role", "banner", 1, "toolbar"], ["aria-label", "DeepHealth Home", "target", "_blank", "rel", "noopener", "href", "https://deep.health", "title", "DeepHealth"], ["width", "170", "alt", "DeepHealth Logo", "src", "assets/svg/deephealth.svg", 2, "margin-top", "2%"], [1, "spacer"], [1, "choose_file"], ["type", "file", "multiple", "", "accept", "application/dicom", "id", "images", "title", "Select your images", 1, "hide_file", 3, "change"], ["mat-icon-button", "", 2, "margin", "10px", "color", "white", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileDropped", function AppComponent_Template_div_fileDropped_0_listener($event) {
              return ctx.onFileDropped($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "dicom-viewer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Choose DICOM Files ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AppComponent_Template_input_change_9_listener($event) {
              return ctx.loadDICOMImages($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "help_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("enableViewerTools", true)("enablePlayTools", true);
          }
        },
        directives: [_dragdrop_dragdrop_directive__WEBPACK_IMPORTED_MODULE_5__["DragdropDirective"], _dicom_viewer_dicom_viewer_component__WEBPACK_IMPORTED_MODULE_1__["DICOMViewerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #ddd;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  background-color: #000000;\n  color: white;\n  font-weight: 600;\n  border-bottom-width: 0.3em;\n  border-bottom-style: inset;\n  border-bottom-color: #d32251;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 6px;\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n  -moz-transition: opacity 0.2s ease-out;\n  -webkit-transition: opacity 0.2s ease-out;\n  -o-transition: opacity 0.2s ease-out;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n\n.choose_file[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background: #d32251;\n  position: relative;\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n  float: right;\n  cursor: pointer;\n  margin: 0 6px;\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n  -moz-transition: opacity 0.2s ease-out;\n  -webkit-transition: opacity 0.2s ease-out;\n  -o-transition: opacity 0.2s ease-out;\n}\n\n.choose_file[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n\n.hide_file[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  opacity: 0;\n  cursor: pointer;\n  right: 0;\n  top: 0;\n  height: 100%;\n  font-size: 24px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBKQUFBO0VBRUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFBRjs7QUFHQTtFQUNFLE9BQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSxcbiAgICBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNkZGQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4zZW07XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGluc2V0O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMjExLCAzNCwgODEpO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgNnB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xufVxuXG4udG9vbGJhciBpbWc6aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jaG9vc2VfZmlsZSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAzNCwgODEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5jaG9vc2VfZmlsZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmhpZGVfZmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "WcTy":
    /*!********************************************************!*\
      !*** ./src/app/dicom-viewer/dicom-viewer.component.ts ***!
      \********************************************************/

    /*! exports provided: DICOMViewerComponent */

    /***/
    function WcTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DICOMViewerComponent", function () {
        return DICOMViewerComponent;
      });
      /* harmony import */


      var _cornerstone_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cornerstone.directive */
      "rijV");
      /* harmony import */


      var _thumbnail_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./thumbnail.directive */
      "/P1L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function DICOMViewerComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var i_r6 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.showSeries(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var series_r5 = ctx.$implicit;
          var i_r6 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentSeriesIndex === i_r6));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("imageData", series_r5.imageList[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](series_r5.seriesDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](series_r5.imageCount);
        }
      }

      function DICOMViewerComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r9.redirectToGit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r11.enablePan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.enableZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.enableWindowing();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.invertImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.enableRectangle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.enableLength();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.saveToolState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.undoAnnotation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_div_7_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r19.resetImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("Pan"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("Pan"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("Zoom"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("Wwwc"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("RectangleRoi"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r1.showSelectedTool("Length"));
        }
      }

      function DICOMViewerComponent_button_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 53);
        }
      }

      function DICOMViewerComponent_button_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 54);
        }
      }

      function DICOMViewerComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.togglePlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DICOMViewerComponent_button_11_span_1_Template, 1, 0, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DICOMViewerComponent_button_11_span_2_Template, 1, 0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.showPlayStop);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.viewPort.isClipPlaying);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.viewPort.isClipPlaying);
        }
      }

      function DICOMViewerComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Patient:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.viewPort.patientName, " ");
        }
      }

      function DICOMViewerComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Instance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.viewPort.instanceNumber, " ");
        }
      }

      var DICOMViewerComponent = /*#__PURE__*/function () {
        function DICOMViewerComponent() {
          _classCallCheck(this, DICOMViewerComponent);

          this.enableViewerTools = false; // enable viewer tools

          this.enablePlayTools = false; // enable Play Clip tools

          this.downloadImagesURL = ''; // download images URL

          this.maxImagesToLoad = 9999999; // limit for the automatic loading of study images

          this.seriesList = []; // list of series on the images being displayed

          this.currentSeriesIndex = 0;
          this.currentSeries = {};
          this.imageCount = 0; // total image count being viewed

          this.loadedImages = [];
          this.imageIdList = [];
          this.targetImageCount = 0;
          this.loadingImages = false;
          this.annotationsList = []; // keep track of all tools/annotations used

          this.toolList = ["Pan", "Zoom", "Wwwc", "RectangleRoi", "Length"];
          this.selectedTool = '';
        }

        _createClass(DICOMViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.element = this.viewPort.element;
          } // control message for more images to load

        }, {
          key: "moreImagestoLoad",
          get: function get() {
            if (this.loadedImages.length < this.imageIdList.length && !this.loadingImages) {
              // are there any more images to load?
              var imagesToLoad = this.maxImagesToLoad <= 0 ? this.imageIdList.length - this.loadedImages.length : Math.min(this.maxImagesToLoad, this.imageIdList.length - this.loadedImages.length);
              return imagesToLoad.toString();
            } else return '';
          } // control display of a loading images progress indicator

        }, {
          key: "showProgress",
          get: function get() {
            return {
              display: this.loadingImages ? 'inline' : 'none'
            };
          }
        }, {
          key: "showSelectedTool",
          value: // control styling of a button for a tool that can be selected
          function showSelectedTool(tool) {
            if (tool == this.selectedTool) {
              return {
                'color': 'rgb(211, 34, 81)',
                'border': 'inset 2px',
                'border-color': 'whitesmoke',
                'background-color': '#343434'
              };
            } else {
              return {
                'color': 'white',
                'border-color': '#888888'
              };
            }
          }
        }, {
          key: "showButtonToggleEnabled",
          get: // control styling of the StackScroll toggle button
          function get() {
            if (this.viewPort.isScrollEnabled) {
              return {
                'color': 'rgb(211, 34, 81)',
                'border': 'inset 2px',
                'border-color': 'whitesmoke',
                'background-color': '#343434'
              };
            } else {
              return {
                'color': 'white',
                'border-color': '#888888'
              };
            }
          }
        }, {
          key: "showPlayStop",
          get: // control styling of the Play/Stop button
          function get() {
            if (this.viewPort.isClipPlaying) {
              return {
                'border-color': 'whitesmoke',
                'border-style': 'inset 2px'
              };
            } else {
              return {
                'color': 'white',
                'border-color': '#888888'
              };
            }
          }
        }, {
          key: "loadStudyImages",
          value:
          /**
           * Load dicom images for display
           *
           * @param imageIdList list of imageIds to load and display
           */
          function loadStudyImages(imageIdList) {
            var _this = this;

            this.element = this.viewPort.element;
            this.imageIdList = imageIdList;
            this.viewPort.resetViewer();
            this.viewPort.resetImageCache(); // clean up image cache

            this.seriesList = []; // start a new series list

            this.currentSeriesIndex = 0; // always display first series

            this.loadedImages = []; // reset list of images already loaded
            // loop thru all imageIds, load and cache them for exhibition (up the the maximum limit defined)

            var maxImages = this.maxImagesToLoad <= 0 ? imageIdList.length : Math.min(this.maxImagesToLoad, imageIdList.length);
            this.loadingImages = true; // activate progress indicator

            this.targetImageCount = maxImages;

            for (var index = 0; index < maxImages; index++) {
              var imageId = imageIdList[index];
              cornerstone.loadAndCacheImage(imageId).then(function (imageData) {
                _this.imageLoaded(imageData);
              });
            }
          }
          /**
           *
           * @param imageData the dicom image data
           */

        }, {
          key: "imageLoaded",
          value: function imageLoaded(imageData) {
            // build list of series in all loadded images
            var series = {
              studyID: imageData.data.string('x0020000d'),
              seriesID: imageData.data.string('x0020000e'),
              seriesNumber: imageData.data.intString('x00200011'),
              studyDescription: imageData.data.string('x00081030'),
              seriesDescription: imageData.data.string('x0008103e'),
              imageCount: 1,
              imageList: [imageData]
            }; // if this is a new series, add it to the list

            var seriesIndex = this.seriesList.findIndex(function (item) {
              return item.seriesID === series.seriesID;
            });

            if (seriesIndex < 0) {
              seriesIndex = this.seriesList.length;
              this.seriesList.push(series);
              this.seriesList.sort(function (a, b) {
                if (a.seriesNumber > b.seriesNumber) return 1;
                if (a.seriesNumber < b.seriesNumber) return -1;
                return 0;
              });
            } else {
              var seriesItem = this.seriesList[seriesIndex];
              seriesItem.imageCount++;
              seriesItem.imageList.push(imageData);
              seriesItem.imageList.sort(function (a, b) {
                if (a.data.intString('x00200013') > b.data.intString('x00200013')) return 1;
                if (a.data.intString('x00200013') < b.data.intString('x00200013')) return -1;
                return 0;
              });
            }

            this.loadedImages.push(imageData); // save to images loaded

            if (seriesIndex === this.currentSeriesIndex) {
              this.showSeries(this.currentSeriesIndex);
            }

            if (this.loadedImages.length >= this.targetImageCount) {
              // did we finish loading images?
              this.loadingImages = false; // deactivate progress indicator
            }

            this.enablePan();
          }
        }, {
          key: "showSeries",
          value: function showSeries(index) {
            if (this.viewPort.isClipPlaying) {
              this.stopClip();
            }

            this.currentSeriesIndex = index;
            this.currentSeries = this.seriesList[index];
            this.imageCount = this.currentSeries.imageCount; // get total image count

            this.viewPort.resetImageCache(); // clean up image cache

            for (var i = 0; i < this.currentSeries.imageList.length; i++) {
              var imageData = this.currentSeries.imageList[i];
              this.viewPort.addImageData(imageData);
            }
          }
          /**
           * Image scroll methods
           */

        }, {
          key: "nextImage",
          value: function nextImage() {
            if (this.imageCount > 1 && this.viewPort.currentIndex < this.imageCount && !this.viewPort.isClipPlaying) {
              this.viewPort.nextImage();
            }
          }
        }, {
          key: "previousImage",
          value: function previousImage() {
            if (this.viewPort.currentIndex > 0 && !this.viewPort.isClipPlaying) {
              this.viewPort.previousImage();
            }
          }
          /**
           * Methods to activate/deactivate viewer tools
           */
          // deactivate all tools

        }, {
          key: "resetAllTools",
          value: function resetAllTools() {
            if (this.imageCount > 0) {
              this.selectedTool = this.toolList[0];
              this.viewPort.resetAllTools();

              if (this.viewPort.isClipPlaying) {
                this.stopClip();
              }
            }
          } // activate windowing

        }, {
          key: "enableWindowing",
          value: function enableWindowing() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'Wwwc', {
                mouseButtonMask: 1
              }, ['Mouse']);
              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 2
              }, ['Mouse']); // pan right mouse

              this.selectedTool = this.toolList[2];
            }
          } // activate zoom

        }, {
          key: "enableZoom",
          value: function enableZoom() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'Zoom', {
                mouseButtonMask: 1
              }, ['Mouse']); // zoom left mouse

              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 2
              }, ['Mouse']); // pan right mouse

              this.selectedTool = this.toolList[1];
            }
          } // activate pan

        }, {
          key: "enablePan",
          value: function enablePan() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 1
              }, ['Mouse']);
              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 2
              }, ['Mouse']); // pan right mouse

              this.selectedTool = this.toolList[0];
            }
          } // activate image scroll

        }, {
          key: "enableScroll",
          value: function enableScroll() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'StackScroll', {
                mouseButtonMask: 1
              }, ['Mouse']);
            }
          }
        }, {
          key: "toggleScroll",
          value: function toggleScroll() {
            if (!this.viewPort.isClipPlaying) {
              this.viewPort.toggleScroll();
            }
          } // activate length measurement

        }, {
          key: "enableLength",
          value: function enableLength() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'Length', {
                mouseButtonMask: 1
              }, ['Mouse']);
              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 2
              }, ['Mouse']); // pan right mouse

              this.annotationsList.push('Length');
              this.selectedTool = this.toolList[4];
            }
          } // Download data as a .json file

        }, {
          key: "download",
          value: function download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename + '.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          } // save tool states - download annotation data for all images

        }, {
          key: "saveToolState",
          value: function saveToolState() {
            var exportArray = []; // Save viewer state to restore later

            var lastSeriesSeen = this.currentSeriesIndex;
            var lastCurrentImageIndex = this.viewPort.currentIndex;

            for (var i = 0; i < this.seriesList.length; ++i) {
              this.showSeries(i);

              var _iterator = _createForOfIteratorHelper(this.seriesList[i].imageList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var image = _step.value;
                  var imageAnnotations = {
                    studyID: image.data.string('x0020000d'),
                    seriesID: image.data.string('x0020000e'),
                    SOPInstanceUID: image.data.string('x00080018'),
                    annotations: {
                      lengthData: null,
                      rectangleData: null
                    }
                  };
                  var getter = cornerstoneTools.getElementToolStateManager(this.element).get;
                  var lengthToolData = getter(this.element, 'Length');
                  var rectangleRoiToolData = getter(this.element, 'RectangleRoi');
                  if (!lengthToolData) imageAnnotations.annotations.lengthData = null;else imageAnnotations.annotations.lengthData = lengthToolData.data;
                  if (!rectangleRoiToolData) imageAnnotations.annotations.rectangleData = null;else imageAnnotations.annotations.rectangleData = rectangleRoiToolData.data;

                  if (lengthToolData || rectangleRoiToolData) {
                    exportArray.push(imageAnnotations);
                  }

                  this.nextImage();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } // Restore viewer state after iterating through images


            this.showSeries(lastSeriesSeen);

            while (this.viewPort.currentIndex < lastCurrentImageIndex) {
              this.viewPort.nextImage();
            }

            this.download("annotations", JSON.stringify(exportArray));
          } // Load tool states from a .json file, restoring them to the viewer

        }, {
          key: "loadToolState",
          value: function loadToolState(event) {
            var _this2 = this;

            if (this.imageCount < 1) return; // Must have image(s) loaded to restore annotations

            var file = event[0];
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            reader.onload = function (evt) {
              var idToAnnotation = new Map();
              var jsonObj = JSON.parse(evt.target.result); // Populate the image id -> annotation map

              var _iterator2 = _createForOfIteratorHelper(jsonObj),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var element = _step2.value;
                  idToAnnotation.set(element.SOPInstanceUID, element.annotations);
                } // Save viewer state to restore later

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              var lastSeriesSeen = _this2.currentSeriesIndex;
              var lastCurrentImageIndex = _this2.viewPort.currentIndex; // Flip through all loaded images and restore tool state for each

              for (var i = 0; i < _this2.seriesList.length; ++i) {
                _this2.showSeries(i);

                var _iterator3 = _createForOfIteratorHelper(_this2.seriesList[i].imageList),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var image = _step3.value;
                    var currSOPInstanceUID = image.data.string('x00080018');
                    var rectData = void 0,
                        lengthData = void 0;

                    if (idToAnnotation.has(currSOPInstanceUID)) {
                      var annotations = idToAnnotation.get(currSOPInstanceUID);
                      rectData = annotations.rectangleData;
                      lengthData = annotations.lengthData;
                    } // Restore RectangleRoi annotations for current image


                    if (rectData != null) {
                      var _iterator4 = _createForOfIteratorHelper(rectData),
                          _step4;

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          var item = _step4.value;
                          cornerstoneTools.addToolState(_this2.element, 'RectangleRoi', item);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    } // Restore Length annotations for current image


                    if (lengthData != null) {
                      var _iterator5 = _createForOfIteratorHelper(lengthData),
                          _step5;

                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          var _item = _step5.value;
                          cornerstoneTools.addToolState(_this2.element, 'Length', _item);
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }
                    }

                    _this2.nextImage();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              } // Trigger the annotations to render again by activating tools


              _this2.enableRectangle();

              _this2.enableLength();

              _this2.enablePan(); // Restore viewer state after iterating through images


              _this2.showSeries(lastSeriesSeen);

              while (_this2.viewPort.currentIndex < lastCurrentImageIndex) {
                _this2.viewPort.nextImage();
              }

              _this2.viewPort.refreshImage();
            }; // File error handler


            reader.onerror = function () {
              console.log("Error reading JSON file.");
            };
          } // activate Rectangle ROI

        }, {
          key: "enableRectangle",
          value: function enableRectangle() {
            if (this.imageCount > 0) {
              cornerstoneTools.setToolActiveForElement(this.element, 'RectangleRoi', {
                mouseButtonMask: 1
              }, ['Mouse']);
              cornerstoneTools.setToolActiveForElement(this.element, 'Pan', {
                mouseButtonMask: 2
              }, ['Mouse']); // pan right mouse

              this.annotationsList.push('RectangleRoi');
              this.selectedTool = this.toolList[3];
            }
          } // Toggle clip playing

        }, {
          key: "togglePlay",
          value: function togglePlay() {
            if (this.viewPort.isClipPlaying) {
              this.stopClip();
            } else {
              this.playClip();
            }
          } // Play Clip

        }, {
          key: "playClip",
          value: function playClip() {
            if (this.imageCount > 0) {
              if (this.viewPort.isScrollEnabled) {
                this.viewPort.toggleScroll(); // Important to not change image while clip playing
              }

              var frameRate = 10;
              var stackState = cornerstoneTools.getToolState(this.element, 'stack');

              if (stackState) {
                frameRate = stackState.data[0].frameRate; // Play at a default 10 FPS if the framerate is not specified

                if (frameRate === undefined || frameRate === null || frameRate === 0) {
                  frameRate = 10;
                }
              }

              this.viewPort.togglePlayClip();
              cornerstoneTools.playClip(this.element, frameRate);
            }
          } // Stop Clip

        }, {
          key: "stopClip",
          value: function stopClip() {
            this.viewPort.togglePlayClip();
            cornerstoneTools.stopClip(this.element);
            this.viewPort.refreshImage();
          } // invert image

        }, {
          key: "invertImage",
          value: function invertImage() {
            if (this.imageCount > 0) {
              var viewport = cornerstone.getViewport(this.element); // Toggle invert

              viewport.invert = !viewport.invert;
              cornerstone.setViewport(this.element, viewport);
            }
          } // Undo Last Annotation

          /*
          This method currently removes all annotations from the last used tool.
          Example: if the user used the Length tool twice, followed by the RectangleROI tool twice, and then
          clicks "Undo", this method will clear both of the rectangle annotations. If the user clicks undo again,
          this method will clear both of the length annotations.
          */

        }, {
          key: "undoAnnotation",
          value: function undoAnnotation() {
            var popped = this.annotationsList.pop();
            cornerstoneTools.clearToolState(this.element, popped);
            this.viewPort.displayImage(this.viewPort.imageList[this.viewPort.currentIndex]);
          } // reset image

        }, {
          key: "resetImage",
          value: function resetImage() {
            if (confirm("Are you sure you want to reset all annotations?") == true) {
              if (this.imageCount > 0) {
                cornerstoneTools.clearToolState(this.element, "Length");
                cornerstoneTools.clearToolState(this.element, "Angle");
                cornerstoneTools.clearToolState(this.element, "Probe");
                cornerstoneTools.clearToolState(this.element, "EllipticalRoi");
                cornerstoneTools.clearToolState(this.element, "RectangleRoi");
                this.viewPort.displayImage(this.viewPort.imageList[this.viewPort.currentIndex]);
              }
            }
          }
        }, {
          key: "clearImage",
          value: function clearImage() {
            this.viewPort.resetViewer();
            this.viewPort.resetImageCache();
            this.seriesList = []; // list of series on the images being displayed

            this.currentSeriesIndex = 0;
            this.currentSeries = {};
            this.imageCount = 0; // total image count being viewed
          } ///// Redirect to the URL

        }, {
          key: "redirectToGit",
          value: function redirectToGit() {
            var url = 'http://fb81-35-185-164-29.ngrok.io/';
            window.open(url, '_blank');
          }
        }]);

        return DICOMViewerComponent;
      }();

      DICOMViewerComponent.ɵfac = function DICOMViewerComponent_Factory(t) {
        return new (t || DICOMViewerComponent)();
      };

      DICOMViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DICOMViewerComponent,
        selectors: [["dicom-viewer"]],
        viewQuery: function DICOMViewerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_cornerstone_directive__WEBPACK_IMPORTED_MODULE_0__["CornerstoneDirective"], 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_thumbnail_directive__WEBPACK_IMPORTED_MODULE_1__["ThumbnailDirective"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.viewPort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.thumbnails = _t);
          }
        },
        inputs: {
          enableViewerTools: "enableViewerTools",
          enablePlayTools: "enablePlayTools",
          downloadImagesURL: "downloadImagesURL",
          maxImagesToLoad: "maxImagesToLoad"
        },
        decls: 37,
        vars: 11,
        consts: [[2, "display", "flex", "width", "100%", "height", "100%"], [1, "thumbnailSelector", 2, "margin-right", "1px"], [1, "thumbnails", "list-group", 2, "height", "100%"], ["class", "list-group-item", "oncontextmenu", "return false", "unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "overflow", "hidden", "width", "100%", "height", "100%", "background-color", "#252525"], [2, "border", "2px groove #2c2c2c", "scrollbar-width", "none"], [1, "btn-group", 2, "margin-left", "32%", "margin-bottom", "2px", "border", "1px solid #4b4b4b", "border-style", "inset"], ["class", "btn-group", 4, "ngIf"], [1, "btn-group"], ["type", "button", "id", "previous_image_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Previous Image", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fa", "fa-backward"], ["type", "button", "class", "btn btn-sm btn-default", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "id", "play_bttn", 3, "ngStyle", "click", 4, "ngIf"], ["type", "button", "id", "next_image_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Next Image", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fa", "fa-forward"], ["type", "button", "data-container", "body", "id", "stackscroll_bttn", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Toggle Stack Scroll", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "fa", "fa-bars"], [3, "ngStyle"], ["diameter", "35", "strokeWidth", "3", "color", "accent", 2, "scrollbar-width", "none", "float", "inline-end", "margin-top", "7px", "margin-right", "7px"], ["oncontextmenu", "return false", "unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "cornerstone-enabled-image", 2, "width", "100%", "height", "calc(100% - 60px)", "position", "relative", "display", "inline-block", "color", "white"], ["cornerstone", "", "id", "dicomImage", 2, "width", "100%", "height", "100%", "top", "0px", "left", "0px", "position", "absolute", "outline", "none", "margin", "0 auto"], ["id", "mrtopright", 1, "viewer-text", 2, "position", "absolute", "right", "3px", "top", "3x"], [4, "ngIf"], ["id", "mrbottomleft", 1, "viewer-text", 2, "position", "absolute", "bottom", "3px", "left", "3px"], ["id", "zoomText"], ["id", "mrbottomright", 1, "viewer-text", 2, "position", "absolute", "bottom", "6px", "right", "3px"], ["id", "sliceText"], ["oncontextmenu", "return false", "unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "list-group-item", 3, "ngClass", "click"], ["thumbnail", "", "oncontextmenu", "return false", "unselectable", "on", "onselectstart", "return false;", "onmousedown", "return false;", 1, "csthumbnail", 3, "imageData"], [1, "text-center", "small", 2, "color", "white"], ["id", "mrtopright", 2, "position", "absolute", "top", "3px", "right", "3px"], ["id", "imageCount", 2, "color", "#e9e9e9", "font-size", "14pt"], ["type", "button", "id", "pan_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Pan", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "fa", "fa-search"], [1, "fa", "fa-arrows-alt"], ["type", "button", "id", "zoom_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Zoom", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "fas", "fa-search-plus"], ["type", "button", "id", "windowing_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Windowing", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "fa", "fa-sun"], ["type", "button", "data-container", "body", "id", "invert_bttn", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Invert", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fa", "fa-adjust"], ["type", "button", "id", "rectangleroi_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Rectangle ROI", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "far", "fa-square"], ["type", "button", "id", "length_bttn", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Length", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], [1, "fas", "fa-ruler-horizontal"], ["type", "button", "data-container", "body", "id", "export_bttn", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Download Annotation Data", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fa", "fa-download"], ["type", "button", "data-container", "body", "id", "undo_bttn", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Undo Annotation", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fas", "fa-undo"], ["type", "button", "data-container", "body", "id", "reset_bttn", "data-toggle", "tooltip", "data-placement", "bottom", "title", "Reset All Annotations", 1, "btn", "btn-sm", "btn-default", 3, "click"], [1, "fas", "fa-trash-alt"], ["type", "button", "data-container", "body", "data-toggle", "tooltip", "data-placement", "bottom", "id", "play_bttn", 1, "btn", "btn-sm", "btn-default", 3, "ngStyle", "click"], ["class", "fa fa-play", "title", "Play Clip", 4, "ngIf"], ["class", "fa fa-stop", "title", "Stop Clip", "style", "color:rgb(211, 34, 81);", 4, "ngIf"], ["title", "Play Clip", 1, "fa", "fa-play"], ["title", "Stop Clip", 1, "fa", "fa-stop", 2, "color", "rgb(211, 34, 81)"]],
        template: function DICOMViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DICOMViewerComponent_a_3_Template, 7, 6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DICOMViewerComponent_div_7_Template, 21, 6, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_Template_button_click_9_listener() {
              return ctx.previousImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DICOMViewerComponent_button_11_Template, 3, 3, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_Template_button_click_12_listener() {
              return ctx.nextImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DICOMViewerComponent_Template_button_click_14_listener() {
              return ctx.toggleScroll();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "mat-spinner", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DICOMViewerComponent_div_21_Template, 4, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DICOMViewerComponent_div_22_Template, 4, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "WW/WL:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Zoom:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Image:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.seriesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.enableViewerTools);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.enablePlayTools);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.showButtonToggleEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.showProgress);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewPort.patientName != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.viewPort.instanceNumber != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.viewPort.windowingValue, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.viewPort.zoomValue, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.imageCount > 0 ? ctx.viewPort.currentIndex + 1 : 0, "/", ctx.imageCount, "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _cornerstone_directive__WEBPACK_IMPORTED_MODULE_0__["CornerstoneDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _thumbnail_directive__WEBPACK_IMPORTED_MODULE_1__["ThumbnailDirective"]],
        styles: [".btn-default[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #202020;\n  border-color: #888888;\n  border-width: 2px;\n  border-style: outset;\n  font-size: 15pt;\n  background-image: none;\n  text-shadow: none;\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  background-color: #888888 !important;\n  color: rgb(211, 34, 81) !important;\n  border: double 2px;\n  border-color: #888888;\n}\n\n.thumbnailSelector[_ngcontent-%COMP%] {\n  width: 10%;\n  float: left;\n  margin-left: 0px;\n  height: 100%;\n  background-color: #2e2e2e;\n}\n\n.thumbnails[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 3px;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-bottom: 0px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.csthumbnail[_ngcontent-%COMP%] {\n  color: white;\n  background-color: black;\n  width: 100px;\n  height: 100px;\n  border: 0px;\n  padding: 0px;\n}\n\n.version[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  width: 106px;\n  text-align: center;\n}\n\na.list-group-item[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 2px;\n  border: 1px solid #838383;\n  margin-bottom: 6px;\n  margin-left: 0px;\n}\n\na.list-group-item.active[_ngcontent-%COMP%], a.list-group-item.active[_ngcontent-%COMP%]:hover, a.list-group-item.active[_ngcontent-%COMP%]:focus {\n  background-color: #4d4d4d;\n  border-color: rgb(211, 34, 81);\n}\n\n.viewer-text[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  color: white;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY29tLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTsrRUFDNkU7RUFDN0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6ImRpY29tLXZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1kZWZhdWx0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIGJvcmRlci1jb2xvcjogIzg4ODg4ODtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2IoMjExLCAzNCwgODEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogZG91YmxlIDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjODg4ODg4O1xufVxuXG4udGh1bWJuYWlsU2VsZWN0b3Ige1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlO1xufVxuXG4udGh1bWJuYWlscyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY3N0aHVtYm5haWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MzgzODM7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuYS5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlLFxuYS5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyLFxuYS5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGQ0ZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAzNCwgODEpO1xufVxuXG4udmlld2VyLXRleHQge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _dicom_viewer_dicom_viewer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dicom-viewer/dicom-viewer.module */
      "4aB8");
      /* harmony import */


      var _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./info-dialog/info-dialog.component */
      "4X/e");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _dragdrop_dragdrop_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dragdrop/dragdrop.directive */
      "fY0L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
          useValue: {
            appearance: 'fill'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _dicom_viewer_dicom_viewer_module__WEBPACK_IMPORTED_MODULE_8__["DicomViewerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_9__["InfoDialogComponent"], _dragdrop_dragdrop_directive__WEBPACK_IMPORTED_MODULE_11__["DragdropDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _dicom_viewer_dicom_viewer_module__WEBPACK_IMPORTED_MODULE_8__["DicomViewerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "fY0L":
    /*!************************************************!*\
      !*** ./src/app/dragdrop/dragdrop.directive.ts ***!
      \************************************************/

    /*! exports provided: DragdropDirective */

    /***/
    function fY0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragdropDirective", function () {
        return DragdropDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DragdropDirective = /*#__PURE__*/function () {
        function DragdropDirective() {
          _classCallCheck(this, DragdropDirective);

          this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        } // Dragover listener


        _createClass(DragdropDirective, [{
          key: "onDragOver",
          value: function onDragOver(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.fileOver = true;
          } // Dragleave listener

        }, {
          key: "onDragLeave",
          value: function onDragLeave(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.fileOver = false;
          } // Drop listener

        }, {
          key: "ondrop",
          value: function ondrop(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.fileOver = false;
            var files = evt.dataTransfer.files;

            if (files.length > 0) {
              this.fileDropped.emit(files);
            }
          }
        }]);

        return DragdropDirective;
      }();

      DragdropDirective.ɵfac = function DragdropDirective_Factory(t) {
        return new (t || DragdropDirective)();
      };

      DragdropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DragdropDirective,
        selectors: [["", "appDragdrop", ""]],
        hostVars: 2,
        hostBindings: function DragdropDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragdropDirective_dragover_HostBindingHandler($event) {
              return ctx.onDragOver($event);
            })("dragleave", function DragdropDirective_dragleave_HostBindingHandler($event) {
              return ctx.onDragLeave($event);
            })("drop", function DragdropDirective_drop_HostBindingHandler($event) {
              return ctx.ondrop($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fileover", ctx.fileOver);
          }
        },
        outputs: {
          fileDropped: "fileDropped"
        }
      });
      /***/
    },

    /***/
    "rijV":
    /*!*******************************************************!*\
      !*** ./src/app/dicom-viewer/cornerstone.directive.ts ***!
      \*******************************************************/

    /*! exports provided: CornerstoneDirective */

    /***/
    function rijV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CornerstoneDirective", function () {
        return CornerstoneDirective;
      });
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CornerstoneDirective = /*#__PURE__*/function () {
        function CornerstoneDirective(elementRef) {
          _classCallCheck(this, CornerstoneDirective);

          this.elementRef = elementRef;
          this.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
          this.fontSize = '15px';
          this.imageList = [];
          this.imageIdList = [];
          this.currentIndex = 0;
          this.patientName = ''; // current image Patient name, to display on the overlay

          this.hospital = ''; // current image Institution name, to display on the overlay

          this.instanceNumber = ''; // current image Instance #, to display on the overlay

          this.scrollEnabled = false;
          this.isCornerstoneEnabled = false;
          this.clipPlaying = false; // Cornerstone Tools we use

          this.WwwcTool = cornerstoneTools.WwwcTool;
          this.PanTool = cornerstoneTools.PanTool;
          this.ZoomTool = cornerstoneTools.ZoomTool;
          this.LengthTool = cornerstoneTools.LengthTool;
          this.RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
          this.ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
          this.PanMultiTouchTool = cornerstoneTools.PanMultiTouchTool;
          this.StackScrollTool = cornerstoneTools.StackScrollTool;
        }

        _createClass(CornerstoneDirective, [{
          key: "onResize",
          value: function onResize(event) {
            if (this.isCornerstoneEnabled) {
              cornerstone.resize(this.element, true);
            }
          }
        }, {
          key: "onMouseWheel",
          value: function onMouseWheel(event) {
            if (this.imageList.length > 0 && this.scrollEnabled) {
              if (event.deltaY > 0) {
                this.currentIndex++;

                if (this.currentIndex >= this.imageList.length) {
                  this.currentIndex = this.imageList.length - 1;
                }
              } else {
                this.currentIndex--;

                if (this.currentIndex < 0) {
                  this.currentIndex = 0;
                }
              }

              this.displayImage(this.imageList[this.currentIndex]);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Retrieve the DOM element itself
            this.element = this.elementRef.nativeElement; // now add the Tools we use

            cornerstoneTools.external.cornerstone = cornerstone;
            cornerstoneTools.external.Hammer = hammerjs__WEBPACK_IMPORTED_MODULE_0__;
            cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
            cornerstoneTools.init({
              globalToolSyncEnabled: true
            });
            cornerstoneTools.textStyle.setFont(this.fontSize + ' ' + this.fontFamily);
            cornerstoneTools.toolStyle.setToolWidth(1); // thickness of RectangleRoi or Length tool lines

            cornerstoneTools.toolColors.setToolColor('rgb(255, 255, 0)'); // Set color for inactive tools

            cornerstoneTools.toolColors.setActiveColor('rgb(0, 255, 0)'); // Set color for active tools

            cornerstoneTools.addTool(this.WwwcTool);
            cornerstoneTools.addTool(this.PanTool);
            cornerstoneTools.addTool(this.ZoomTool);
            cornerstoneTools.addTool(this.LengthTool);
            cornerstoneTools.addTool(this.RectangleRoiTool);
            cornerstoneTools.addTool(this.ZoomTouchPinchTool);
            cornerstoneTools.addTool(this.PanMultiTouchTool);
            cornerstoneTools.addTool(this.StackScrollTool); // Enable the element with Cornerstone

            this.resetViewer();
          }
        }, {
          key: "windowingValue",
          get: function get() {
            if (this.isCornerstoneEnabled) {
              var viewport = cornerstone.getViewport(this.element);

              if (this.currentImage && viewport) {
                return Math.round(viewport.voi.windowWidth) + "/" + Math.round(viewport.voi.windowCenter);
              }
            }

            return '';
          }
        }, {
          key: "zoomValue",
          get: function get() {
            if (this.isCornerstoneEnabled) {
              var viewport = cornerstone.getViewport(this.element);

              if (this.currentImage && viewport) {
                return viewport.scale.toFixed(2);
              }
            }

            return '';
          }
        }, {
          key: "isClipPlaying",
          get: function get() {
            return this.clipPlaying;
          }
        }, {
          key: "isScrollEnabled",
          get: function get() {
            return this.scrollEnabled;
          }
        }, {
          key: "resetViewer",
          value: function resetViewer() {
            this.disableViewer();
            cornerstone.enable(this.element);
            this.isCornerstoneEnabled = true;
          }
        }, {
          key: "disableViewer",
          value: function disableViewer() {
            this.element = this.elementRef.nativeElement;

            try {
              cornerstone.disable(this.element);
            } finally {}

            this.isCornerstoneEnabled = false;
          }
        }, {
          key: "resetImageCache",
          value: function resetImageCache() {
            this.imageList = [];
            this.imageIdList = [];
            this.currentImage = null;
            this.currentIndex = 0;
            this.patientName = '';
            this.hospital = '';
            this.instanceNumber = '';
          }
        }, {
          key: "previousImage",
          value: function previousImage() {
            if (this.imageList.length > 0) {
              this.currentIndex--;

              if (this.currentIndex < 0) {
                this.currentIndex = 0;
              }

              this.displayImage(this.imageList[this.currentIndex]);
            }
          }
        }, {
          key: "nextImage",
          value: function nextImage() {
            if (this.imageList.length > 0) {
              this.currentIndex++;

              if (this.currentIndex >= this.imageList.length) {
                this.currentIndex = this.imageList.length - 1;
              }

              this.displayImage(this.imageList[this.currentIndex]);
            }
          }
        }, {
          key: "refreshImage",
          value: function refreshImage() {
            this.displayImage(this.imageList[this.currentIndex]);
          }
        }, {
          key: "toggleScroll",
          value: function toggleScroll() {
            this.scrollEnabled = !this.scrollEnabled;
          }
        }, {
          key: "togglePlayClip",
          value: function togglePlayClip() {
            this.clipPlaying = !this.clipPlaying;
          }
        }, {
          key: "addImageData",
          value: function addImageData(imageData) {
            this.element = this.elementRef.nativeElement;
            this.imageList.push(imageData);
            this.imageIdList.push(imageData.imageId);

            if (this.imageList.length === 1) {
              this.currentIndex = 0;
              this.displayImage(imageData);
            }

            cornerstone.resize(this.element, true);
          }
        }, {
          key: "displayImage",
          value: function displayImage(image) {
            this.element = this.elementRef.nativeElement;
            var viewport = cornerstone.getDefaultViewportForImage(this.element, image);
            cornerstone.displayImage(this.element, image, viewport);
            this.currentImage = image; // Fit the image to the viewport window

            cornerstone.fitToWindow(this.element);
            cornerstone.resize(this.element, true); // get image info to display in overlays

            if (image.data.string('x00100010')) this.patientName = image.data.string('x00100010').replace(/\^/g, '');
            this.hospital = image.data.string('x00080080');
            this.instanceNumber = image.data.intString('x00200011') + '/' + image.data.intString('x00200013'); // Define the Stack object

            var stack = {
              currentImageIdIndex: this.currentIndex,
              imageIds: this.imageIdList
            };
            cornerstoneTools.addStackStateManager(this.element, ['playClip']); // Add the stack tool state to the enabled element

            cornerstoneTools.addStackStateManager(this.element, ['stack']);
            cornerstoneTools.addToolState(this.element, 'stack', stack); // Enable all tools we want to use with this element

            cornerstoneTools.setToolActiveForElement(this.element, 'StackScroll', {});
          } // deactivate all tools

        }, {
          key: "resetAllTools",
          value: function resetAllTools() {
            cornerstoneTools.setToolDisabledForElement(this.element, 'Wwwc');
            cornerstoneTools.setToolDisabledForElement(this.element, 'Pan');
            cornerstoneTools.setToolDisabledForElement(this.element, 'Zoom');
            cornerstoneTools.setToolDisabledForElement(this.element, 'Length');
            cornerstoneTools.setToolDisabledForElement(this.element, 'RectangleRoi');
            cornerstoneTools.setToolDisabledForElement(this.element, 'ZoomTouchPinch');
            cornerstoneTools.setToolDisabledForElement(this.element, 'PanMultiTouch');
            cornerstoneTools.setToolDisabledForElement(this.element, 'StackScroll');
          }
        }]);

        return CornerstoneDirective;
      }();

      CornerstoneDirective.ɵfac = function CornerstoneDirective_Factory(t) {
        return new (t || CornerstoneDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      CornerstoneDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CornerstoneDirective,
        selectors: [["", "cornerstone", ""]],
        hostBindings: function CornerstoneDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CornerstoneDirective_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("wheel", function CornerstoneDirective_wheel_HostBindingHandler($event) {
              return ctx.onMouseWheel($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map