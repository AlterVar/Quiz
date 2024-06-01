/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\n\nclass App {\n  constructor() {\n    this.router = new _router_js__WEBPACK_IMPORTED_MODULE_0__.Router();\n    window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));\n    window.addEventListener('popstate', this.handleRouteChanging.bind(this));\n  }\n  handleRouteChanging() {\n    this.router.openRoute();\n  }\n}\nnew App();\n\n//# sourceURL=webpack://quiz/./src/app.js?");

/***/ }),

/***/ "./src/components/answers.js":
/*!***********************************!*\
  !*** ./src/components/answers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Answers: () => (/* binding */ Answers)\n/* harmony export */ });\nclass Answers {\n  constructor() {\n    this.answers = [];\n    this.quiz = null;\n    this.userResults = null;\n    this.currentQuestionIndex = 1;\n    const xhr = new XMLHttpRequest();\n    xhr.open('GET', 'https://testologia.ru/get-quiz-right?id=' + sessionStorage.getItem('testId'), false); //исправить id\n    xhr.send();\n    const xhr2 = new XMLHttpRequest();\n    xhr2.open('GET', 'https://testologia.ru/get-quiz?id=' + sessionStorage.getItem('testId'), false);\n    xhr2.send();\n    if (xhr.status === 200 && xhr.responseText && xhr2.status === 200 && xhr2.responseText) {\n      try {\n        this.answers = JSON.parse(xhr.responseText);\n        this.quiz = JSON.parse(xhr2.responseText);\n        this.userResults = JSON.parse(sessionStorage.getItem('results'));\n      } catch (e) {\n        location.href = '#/result';\n      }\n      this.processAnswers();\n    } else {\n      location.href = '#/';\n    }\n  }\n  processAnswers() {\n    const testName = document.getElementById('test-name');\n    testName.innerText = sessionStorage.getItem('testName');\n    const user = document.getElementById('user');\n    user.innerText = sessionStorage.getItem('name') + ' ' + sessionStorage.getItem('lastName') + ', ' + sessionStorage.getItem('email');\n    this.showQuestions();\n  }\n  showQuestions() {\n    const questionsElems = document.getElementById('questions');\n    questionsElems.innerHTML = '';\n    this.quiz.questions.forEach(question => {\n      const questionElem = document.createElement('div');\n      questionElem.className = 'test-question';\n      const questionTitle = document.createElement('h2');\n      questionTitle.setAttribute('class', 'question-title');\n      questionTitle.innerHTML = '<span>Вопрос ' + this.currentQuestionIndex + ':</span> ' + question.question;\n      questionElem.appendChild(questionTitle);\n      const optionsElems = document.createElement('div');\n      optionsElems.setAttribute('class', 'question-options');\n      questionElem.appendChild(optionsElems);\n      questionsElems.appendChild(questionElem);\n      question.answers.forEach(answer => {\n        const optionElem = document.createElement('div');\n        optionElem.className = 'test-question-option';\n        const inputId = 'answer-' + answer.id;\n        const inputElem = document.createElement('input');\n        inputElem.className = 'option-answer';\n        inputElem.setAttribute('id', inputId);\n        inputElem.setAttribute('type', 'radio');\n        inputElem.setAttribute('name', 'answer');\n        inputElem.setAttribute('value', answer.id);\n        const labelElem = document.createElement('label');\n        labelElem.setAttribute('for', inputId);\n        labelElem.innerText = answer.answer;\n\n        //Проверяем, правильный ли это вариант ответа\n        if (typeof this.userResults[this.currentQuestionIndex - 1] !== 'undefined') {\n          if (answer.id === this.userResults[this.currentQuestionIndex - 1].chosenAnswerId) {\n            if (this.answers[this.currentQuestionIndex - 1] === this.userResults[this.currentQuestionIndex - 1].chosenAnswerId) {\n              optionElem.className += ' right-answer';\n              inputElem.style.border = '6px solid #5FDC33';\n              inputElem.setAttribute('checked', 'checked');\n            } else {\n              optionElem.className += ' wrong-answer';\n              inputElem.style.border = '6px solid #DC3333';\n              inputElem.setAttribute('checked', 'checked');\n            }\n          }\n        }\n        optionElem.appendChild(inputElem);\n        optionElem.appendChild(labelElem);\n        optionsElems.appendChild(optionElem);\n      });\n      this.currentQuestionIndex++;\n    });\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/components/answers.js?");

/***/ }),

/***/ "./src/components/choice.js":
/*!**********************************!*\
  !*** ./src/components/choice.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Choice: () => (/* binding */ Choice)\n/* harmony export */ });\n/* harmony import */ var _utils_session_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/session-manager.js */ \"./src/utils/session-manager.js\");\n\nclass Choice {\n  constructor() {\n    this.quizzes = [];\n    _utils_session_manager_js__WEBPACK_IMPORTED_MODULE_0__.SessionManager.checkUserData();\n    const xhr = new XMLHttpRequest();\n    xhr.open('GET', 'https://testologia.ru/get-quizzes', false);\n    xhr.send();\n    if (xhr.status === 200 && xhr.responseText) {\n      try {\n        this.quizzes = JSON.parse(xhr.responseText);\n      } catch (e) {\n        location.href = '#/';\n      }\n      this.processQuizzes();\n    } else {\n      location.href = '#/';\n    }\n  }\n  processQuizzes() {\n    const choiceOptionsElem = document.getElementById('choice-options');\n    if (this.quizzes && this.quizzes.length > 0) {\n      //вывели, что нам пришло с бэка в консоль, чтобы понять, что использовать\n      this.quizzes.forEach(quiz => {\n        const that = this; //quiz\n        const choiceOptionElem = document.createElement('div');\n        choiceOptionElem.className = 'choice-option';\n        choiceOptionElem.setAttribute('data-id', quiz.id);\n        choiceOptionElem.onclick = function () {\n          sessionStorage.setItem('testName', quiz.name);\n          that.chooseQuiz(this); // this = choiceOptionElem\n        };\n        const choiceOptionTextElem = document.createElement('div');\n        choiceOptionTextElem.className = 'choice-option-text';\n        choiceOptionTextElem.innerText = quiz.name;\n        const choiceOptionArrowElem = document.createElement('div');\n        choiceOptionArrowElem.className = 'choice-option-arrow';\n        const choiceOptionImageElem = document.createElement('img');\n        choiceOptionImageElem.setAttribute('src', 'images/arrow.svg');\n        choiceOptionImageElem.setAttribute('alt', 'Стрелка');\n        choiceOptionArrowElem.appendChild(choiceOptionImageElem);\n        choiceOptionElem.appendChild(choiceOptionTextElem);\n        choiceOptionElem.appendChild(choiceOptionArrowElem);\n        choiceOptionsElem.appendChild(choiceOptionElem);\n      });\n    }\n  }\n  chooseQuiz(element) {\n    const dataId = element.getAttribute('data-id');\n    if (dataId) {\n      sessionStorage.setItem('testId', dataId);\n      location.href = '#/test';\n    }\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/components/choice.js?");

/***/ }),

/***/ "./src/components/registration.js":
/*!****************************************!*\
  !*** ./src/components/registration.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registration: () => (/* binding */ Registration)\n/* harmony export */ });\nclass Registration {\n  constructor() {\n    this.agreeElement = null;\n    this.processElement = null;\n    this.fields = [{\n      name: 'name',\n      id: 'name',\n      element: null,\n      regex: /^[А-Я][а-я]+\\s*$/,\n      valid: false\n    }, {\n      name: 'lastName',\n      id: 'lastName',\n      element: null,\n      regex: /^[А-Я][а-я]+\\s*$/,\n      valid: false\n    }, {\n      name: 'email',\n      id: 'email',\n      element: null,\n      regex: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\n      valid: false\n    }];\n    const that = this;\n    this.fields.forEach(item => {\n      item.element = document.getElementById(item.id);\n      item.element.onchange = function () {\n        that.validateField.call(that, item, this);\n      };\n    });\n    this.agreeElement = document.getElementById('agree');\n    this.agreeElement.onchange = function () {\n      that.validateForm();\n    };\n    this.processElement = document.getElementById('process');\n    this.processElement.onclick = function () {\n      that.processForm();\n    };\n  }\n  validateField(field, element) {\n    if (!element.value || !element.value.match(field.regex)) {\n      element.parentNode.style.borderColor = 'red';\n      field.valid = false;\n    } else {\n      element.parentNode.removeAttribute('style');\n      field.valid = true;\n    }\n    this.validateForm();\n  }\n  validateForm() {\n    const validForm = this.fields.every(item => item.valid);\n    const isValid = this.agreeElement.checked && validForm === true;\n    if (isValid) {\n      this.processElement.removeAttribute('disabled');\n    } else {\n      this.processElement.setAttribute('disabled', 'disabled');\n    }\n    return isValid;\n  }\n  processForm() {\n    if (this.validateForm()) {\n      this.fields.forEach(item => {\n        sessionStorage.setItem(item.name, item.element.value);\n      });\n      location.href = '#/choice';\n    }\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/components/registration.js?");

/***/ }),

/***/ "./src/components/result.js":
/*!**********************************!*\
  !*** ./src/components/result.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Result: () => (/* binding */ Result)\n/* harmony export */ });\nclass Result {\n  constructor() {\n    document.getElementById('result-score').innerText = sessionStorage.getItem('score') + '/' + sessionStorage.getItem('total');\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/components/result.js?");

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Test: () => (/* binding */ Test)\n/* harmony export */ });\n/* harmony import */ var _utils_session_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/session-manager.js */ \"./src/utils/session-manager.js\");\n\nclass Test {\n  constructor() {\n    this.quiz = null;\n    this.questionTitleElem = null;\n    this.progressBarElem = null;\n    this.prevBtnElem = null;\n    this.nextBtnElem = null;\n    this.passBtnElem = null;\n    this.currentQuestionIndex = 1;\n    this.userResult = [];\n    _utils_session_manager_js__WEBPACK_IMPORTED_MODULE_0__.SessionManager.checkUserData();\n    const testId = sessionStorage.getItem('testId');\n    if (testId) {\n      const xhr = new XMLHttpRequest();\n      xhr.open('GET', 'https://testologia.ru/get-quiz?id=' + testId, false);\n      xhr.send();\n      if (xhr.status === 200 && xhr.responseText) {\n        try {\n          this.quiz = JSON.parse(xhr.responseText);\n        } catch (e) {\n          location.href = '#/';\n        }\n        this.startQuiz();\n      } else {\n        location.href = '#/';\n      }\n    } else {\n      location.href = '#/';\n    }\n  }\n  startQuiz() {\n    document.getElementById('pre-title').innerText = this.quiz.name;\n    this.progressBarElem = document.getElementById('progress-bar');\n    this.questionTitleElem = document.getElementById('question-title');\n    this.optionsElem = document.getElementById('answer-options');\n    this.nextBtnElem = document.getElementById('next');\n    this.nextBtnElem.onclick = this.move.bind(this, 'next');\n    this.passBtnElem = document.getElementById('pass');\n    this.passBtnElem.onclick = this.move.bind(this, 'pass');\n    this.prevBtnElem = document.getElementById('prev');\n    this.prevBtnElem.onclick = this.move.bind(this, 'prev');\n    this.prepareProgressBar();\n    this.showQuestion();\n    let seconds = 59;\n    const timerElem = document.getElementById('timer');\n    const interval = setInterval(function () {\n      seconds--;\n      timerElem.innerText = seconds;\n      if (seconds === 0) {\n        clearInterval(interval);\n        this.complete();\n      }\n    }.bind(this), 1000);\n  }\n  prepareProgressBar() {\n    for (let i = 0; i < this.quiz.questions.length; i++) {\n      const itemElem = document.createElement('div');\n      itemElem.className = 'progress-bar-item ' + (i === 0 ? 'active' : '');\n      const itemCircleElem = document.createElement('div');\n      itemCircleElem.className = 'progress-bar-item-circle';\n      const itemTextElem = document.createElement('div');\n      itemTextElem.className = 'progress-bar-item-text';\n      itemTextElem.innerText = 'Вопрос ' + (i + 1);\n      itemElem.appendChild(itemCircleElem);\n      itemElem.appendChild(itemTextElem);\n      this.progressBarElem.appendChild(itemElem);\n    }\n  }\n  showQuestion() {\n    const activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];\n    this.questionTitleElem.innerHTML = '<span>Вопрос ' + this.currentQuestionIndex + ':</span> ' + activeQuestion.question;\n    this.optionsElem.innerHTML = '';\n    const that = this;\n    const chosenOption = this.userResult.find(item => item.questionId === activeQuestion.id);\n    activeQuestion.answers.forEach(answer => {\n      const optionElem = document.createElement('div');\n      optionElem.className = 'test-question-option';\n      const inputId = 'answer-' + answer.id;\n      const inputElem = document.createElement('input');\n      inputElem.className = 'option-answer';\n      inputElem.setAttribute('id', inputId);\n      inputElem.setAttribute('type', 'radio');\n      inputElem.setAttribute('name', 'answer');\n      inputElem.setAttribute('value', answer.id);\n      if (chosenOption && chosenOption.chosenAnswerId === answer.id) {\n        inputElem.setAttribute('checked', 'checked');\n      }\n      inputElem.onchange = function () {\n        that.chooseAnswer();\n      };\n      const labelElem = document.createElement('label');\n      labelElem.setAttribute('for', inputId);\n      labelElem.innerText = answer.answer;\n      optionElem.appendChild(inputElem);\n      optionElem.appendChild(labelElem);\n      this.optionsElem.appendChild(optionElem);\n    });\n    if (chosenOption && chosenOption.chosenAnswerId) {\n      this.nextBtnElem.removeAttribute('disabled');\n      this.passBtnElem.style.pointerEvents = 'none';\n      this.passBtnElem.style.color = 'gray';\n      this.passBtnElem.children[0].style.visibility = 'hidden';\n    } else {\n      this.nextBtnElem.setAttribute('disabled', 'disabled');\n      this.passBtnElem.style.pointerEvents = 'auto';\n      this.passBtnElem.style.color = '#6933DC';\n      this.passBtnElem.children[0].style.visibility = 'visible';\n    }\n    if (this.currentQuestionIndex === this.quiz.questions.length) {\n      this.nextBtnElem.innerText = 'Завершить';\n    } else {\n      this.nextBtnElem.innerText = 'Далее';\n    }\n    if (this.currentQuestionIndex > 1) {\n      this.prevBtnElem.removeAttribute('disabled');\n    } else {\n      this.prevBtnElem.setAttribute('disabled', 'disabled');\n    }\n  }\n  chooseAnswer() {\n    this.nextBtnElem.removeAttribute('disabled');\n    this.passBtnElem.style.pointerEvents = 'none';\n    this.passBtnElem.style.color = 'gray';\n    this.passBtnElem.children[0].style.visibility = 'hidden';\n  }\n  move(action) {\n    const activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];\n    const chosenAnswer = Array.from(document.getElementsByClassName('option-answer')).find(element => {\n      return element.checked;\n    });\n    let chosenAnswerId = null;\n    if (chosenAnswer && chosenAnswer.value) {\n      chosenAnswerId = Number(chosenAnswer.value);\n    }\n    const existingResult = this.userResult.find(item => item.questionId === activeQuestion.id);\n    if (existingResult) {\n      existingResult.chosenAnswerId = chosenAnswerId;\n    } else {\n      this.userResult.push({\n        questionId: activeQuestion.id,\n        chosenAnswerId: chosenAnswerId\n      });\n    }\n    if (action === 'next' || action === 'pass') {\n      this.currentQuestionIndex++;\n    } else {\n      this.currentQuestionIndex--;\n    }\n    if (this.currentQuestionIndex > this.quiz.questions.length) {\n      this.complete();\n      return;\n    }\n    Array.from(this.progressBarElem.children).forEach((item, index) => {\n      const currentItemIndex = index + 1;\n      item.classList.remove('complete');\n      item.classList.remove('active');\n      if (currentItemIndex === this.currentQuestionIndex) {\n        item.classList.add('active');\n      } else if (currentItemIndex < this.currentQuestionIndex) {\n        item.classList.add('complete');\n      }\n    });\n    this.showQuestion();\n  }\n  complete() {\n    const testId = sessionStorage.getItem('testId');\n    const name = sessionStorage.getItem('name');\n    const lastName = sessionStorage.getItem('lastName');\n    const email = sessionStorage.getItem('email');\n    const xhr = new XMLHttpRequest();\n    xhr.open('POST', 'https://testologia.ru/pass-quiz?id=' + testId, false);\n    xhr.setRequestHeader('Content-Type', 'application.json;charset=UTF-8');\n    xhr.send(JSON.stringify({\n      name: name,\n      lastName: lastName,\n      email: email,\n      results: this.userResult\n    }));\n    let results = JSON.stringify(this.userResult);\n    sessionStorage.setItem('results', results);\n    if (xhr.status === 200 && xhr.responseText) {\n      let result = null;\n      try {\n        result = JSON.parse(xhr.responseText);\n      } catch (e) {\n        location.href = '#/';\n      }\n      if (result) {\n        sessionStorage.setItem('score', result.score);\n        sessionStorage.setItem('total', result.total);\n        location.href = '#/result';\n      }\n    } else {\n      location.href = '#/';\n    }\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/components/test.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_registration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/registration.js */ \"./src/components/registration.js\");\n/* harmony import */ var _components_choice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/choice.js */ \"./src/components/choice.js\");\n/* harmony import */ var _components_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/test.js */ \"./src/components/test.js\");\n/* harmony import */ var _components_result_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/result.js */ \"./src/components/result.js\");\n/* harmony import */ var _components_answers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/answers.js */ \"./src/components/answers.js\");\n\n\n\n\n\nclass Router {\n  constructor() {\n    this.routes = [{\n      route: '#/',\n      title: 'Главная',\n      template: 'templates/index.html',\n      styles: 'styles/index.css',\n      load: () => {}\n    }, {\n      route: '#/registration',\n      title: 'Регистрация',\n      template: 'templates/registration.html',\n      styles: 'styles/registration.css',\n      load: () => {\n        new _components_registration_js__WEBPACK_IMPORTED_MODULE_0__.Registration();\n      }\n    }, {\n      route: '#/choice',\n      title: 'Выбор теста',\n      template: 'templates/choice.html',\n      styles: 'styles/choice.css',\n      load: () => {\n        new _components_choice_js__WEBPACK_IMPORTED_MODULE_1__.Choice();\n      }\n    }, {\n      route: '#/test',\n      title: 'Прохождение теста',\n      template: 'templates/test.html',\n      styles: 'styles/test.css',\n      load: () => {\n        new _components_test_js__WEBPACK_IMPORTED_MODULE_2__.Test();\n      }\n    }, {\n      route: '#/result',\n      title: 'Результат теста',\n      template: 'templates/result.html',\n      styles: 'styles/result.css',\n      load: () => {\n        new _components_result_js__WEBPACK_IMPORTED_MODULE_3__.Result();\n      }\n    }, {\n      route: '#/answers',\n      title: 'Ответы к тесту',\n      template: 'templates/answers.html',\n      styles: 'styles/answers.css',\n      load: () => {\n        new _components_answers_js__WEBPACK_IMPORTED_MODULE_4__.Answers();\n      }\n    }];\n  }\n  async openRoute() {\n    const newRoute = this.routes.find(item => {\n      return item.route === window.location.hash;\n    });\n    if (!newRoute) {\n      //Здесь и будем использовать 404 страницу муахаха\n      window.location.href = '#/';\n      return;\n    }\n    document.getElementById('content').innerHTML = await fetch(newRoute.template).then(response => response.text());\n    document.getElementById('styles').setAttribute('href', newRoute.styles);\n    document.getElementById('page-title').innerText = newRoute.title;\n    newRoute.load();\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/router.js?");

/***/ }),

/***/ "./src/utils/session-manager.js":
/*!**************************************!*\
  !*** ./src/utils/session-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SessionManager: () => (/* binding */ SessionManager)\n/* harmony export */ });\nclass SessionManager {\n  static checkUserData() {\n    let name = sessionStorage.getItem('name');\n    let lastName = sessionStorage.getItem('lastName');\n    let email = sessionStorage.getItem('email');\n    if (!name || !lastName || !email) {\n      location.href = '#/';\n    }\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/utils/session-manager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;