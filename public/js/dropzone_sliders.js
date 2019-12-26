/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/backend/dropzone_sliders.js":
/*!**************************************************!*\
  !*** ./resources/js/backend/dropzone_sliders.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('form[name=form]').submit(function (event) {
  event.preventDefault(); //add stuff here
});
var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');
var type = $('#type_element').val(),
    id_element = $('#id_element').val(),
    method = '',
    url = '/admin/' + type;

if (id_element !== '') {
  url = '/admin/' + type + '/' + id_element;
}

redirectUrl = '/admin/' + type;
getMethod(id_element);
Dropzone.options.myDropzone = {
  headers: {
    'x-csrf-token': CSRF_TOKEN
  },
  method: method,
  url: url,
  dictDefaultMessage: "Нажмите или перетащите картинку в это поле",
  autoProcessQueue: false,
  uploadMultiple: false,
  parallelUploads: 100,
  maxFiles: 1,
  addRemoveLinks: true,
  dictRemoveFile: 'Удалить',
  acceptedFiles: "image/*",
  init: function init() {
    console.log('init');
    var submitButton = document.querySelector("#btn"),
        wrapperThis = this;
    submitButton.addEventListener('click', function () {
      console.log('submit click');

      if (wrapperThis.getQueuedFiles().length == 0) {
        console.log('Отправка из формы');

        var _type = $('#type_element').val(),
            _id_element = $('#id_element').val(),
            _url = '/admin/' + _type,
            action = $('#action').val(),
            name = $('#name_element').val(),
            description = $('#description_element').val(),
            rating = $('#rating_element').val(),
            is_activity = $('#is_activity_element').is(":checked");

        is_activity === true ? is_activity = 1 : is_activity = 0;
        rating === '' ? rating = 1 : rating = parseInt(rating);

        if (_id_element !== '') {
          _url = '/admin/' + _type + '/' + _id_element;
        }

        console.log(method);
        $.ajax({
          type: method,
          url: _url,
          data: {
            type: _type,
            action: action,
            name: name,
            description: description,
            rating: rating,
            is_activity: is_activity
          },
          success: function success(data) {
            getResponse(data, 'json');
          }
        });
      }
    });
    var id = $('#id_element').val();
    var thisDropzone = this;

    if (id) {
      $.get('/api/get_dropzone_images/' + id, function (data) {
        data = JSON.parse(data);
        $.each(data, function (key, value) {
          var mockFile = {
            name: value.src,
            size: value.size
          };
          thisDropzone.options.addedfile.call(thisDropzone, mockFile);
          thisDropzone.options.thumbnail.call(thisDropzone, mockFile, '/storage/' + value.type + '/' + value.src);
        });
      });
    }

    this.on("addedfile", function (file) {
      console.log('addedFile');
      file.added = 'addedfile';
      submitButton.addEventListener('click', function () {
        wrapperThis.processQueue();
        console.log('отправка из дропзоны 2');
      });
    });
  },
  sending: function sending(file, xhr, formData) {
    var type = $('#type_element').val(),
        action = $('#action').val(),
        name = $('#name_element').val(),
        description = $('#description_element').val(),
        rating = $('#rating_element').val(),
        is_activity = $('#is_activity_element').is(":checked");
    is_activity === true ? is_activity = 1 : is_activity = 0;
    rating === '' ? rating = 1 : rating = parseInt(rating);
    formData.append('type', type);
    formData.append('action', action);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('rating', rating);
    formData.append('is_activity', is_activity);
    console.log('отправка из дропзоны');
  },
  removedfile: function removedfile(file) {
    if (file.added) {
      var _ref;

      return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
    }

    swal({
      title: "Вы уверены?",
      text: "После удаления файл нельзя будет восстановить",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        var name = file.name;
        $.ajax({
          type: 'POST',
          url: '/delete_image',
          data: {
            name: name
          },
          dataType: 'html',
          success: function success(data) {
            data = JSON.parse(data);

            if (data['status'] == 'success') {
              swal("Удаление картинки прошло успешно", {
                icon: "success"
              });
            } else {
              swal("Что-то пошло не так...", {
                icon: "warning"
              });
            }
          }
        });

        var _ref2;

        return (_ref2 = file.previewElement) != null ? _ref2.parentNode.removeChild(file.previewElement) : void 0;
      } else {
        swal("Отмена удаления");
      }
    });
  },
  success: function success(data) {
    getResponse(data);
  }
};
/*-------------------------------------------------------------------ВСПОМОГИТАЛЕЬНЫЕ МЕТОДЫ----------------------------------------------------------------*/

function getResponse(data) {
  var json = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (json) {
    data = JSON.parse(data);
  }

  if (data['status'] === "success" || data === "success") {
    swal({
      title: "Загрузка успешна",
      text: "через несколько секунд произойдёт перенаправление на общую страницу",
      icon: "success"
    });
    setTimeout(function () {
      document.location.href = redirectUrl;
    }, 1000);
  } else {
    swal({
      title: "Ошибка загрузки",
      text: "Попробуйте ввести корректные данные",
      icon: "warning",
      buttons: true
    });
  }
}

function getMethod(id) {
  id != '' ? method = 'post' : method = 'post';
}

/***/ }),

/***/ 4:
/*!********************************************************!*\
  !*** multi ./resources/js/backend/dropzone_sliders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/artspeople.ru9/data/www/artspeople.ru/resources/js/backend/dropzone_sliders.js */"./resources/js/backend/dropzone_sliders.js");


/***/ })

/******/ });