import React, { useReducer } from 'react';

// Функция для проверки валидности email
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Определяем действия для reducer
const ACTIONS = {
  SET_FIELD: 'set_field',
  SET_ERRORS: 'set_errors',
  SUBMIT_FORM: 'submit_form',
  RESET_FORM: 'reset_form',
};

// Reducer для управления состоянием формы
const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        formSubmitted: true,
        errors: {},
      };
    case ACTIONS.RESET_FORM:
      return {
        name: '',
        email: '',
        message: '',
        errors: {},
        formSubmitted: false,
      };
    default:
      return state;
  }
};

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    message: '',
    errors: {},
    formSubmitted: false,
  };

  // Используем useReducer для управления состоянием формы
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Обработчик изменения полей
  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.SET_FIELD,
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!state.name) {
      validationErrors.name = 'Имя обязательно';
    }

    if (!state.email) {
      validationErrors.email = 'Email обязателен';
    } else if (!validateEmail(state.email)) {
      validationErrors.email = 'Неправильный формат email';
    }

    if (!state.message) {
      validationErrors.message = 'Сообщение обязательно';
    }

    if (Object.keys(validationErrors).length === 0) {
      dispatch({ type: ACTIONS.SUBMIT_FORM });
      setTimeout(() => dispatch({ type: ACTIONS.RESET_FORM }), 3000); // Сбрасываем форму через 3 секунды
    } else {
      dispatch({ type: ACTIONS.SET_ERRORS, errors: validationErrors });
    }
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET_FORM });
  };

  return (
    <div className="max-w-lg mx-auto my-10">
      {state.formSubmitted ? (
        <div className="bg-green-500 text-white p-4 rounded-lg">
          Форма успешно отправлена!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Имя
            </label>
            <input
              className={`shadow appearance-none border ${state.errors.name ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              name="name"
              type="text"
              placeholder="Ваше имя"
              value={state.name}
              onChange={handleChange}
            />
            {state.errors.name && <p className="text-red-500 text-xs italic">{state.errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border ${state.errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              name="email"
              type="text"
              placeholder="Ваш email"
              value={state.email}
              onChange={handleChange}
            />
            {state.errors.email && <p className="text-red-500 text-xs italic">{state.errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Сообщение
            </label>
            <textarea
              className={`shadow appearance-none border ${state.errors.message ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="message"
              name="message"
              placeholder="Введите ваше сообщение"
              value={state.message}
              onChange={handleChange}
            ></textarea>
            {state.errors.message && <p className="text-red-500 text-xs italic">{state.errors.message}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Отправить
            </button>
            <button
              type="button"
              onClick={handleReset} // Обработчик очистки
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Очистить
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
