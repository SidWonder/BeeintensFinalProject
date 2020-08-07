/* eslint-disable max-len */
import deepmerge from 'deepmerge';
// import { nbsp } from 'utils/formatting';


export default (model) => deepmerge({
  data: { },
  common: { },
  texts: {
    common: {
      nav: {
        //search: 'Поиск',
        //lk: 'Личный кабинет',
        //fav: 'Избранное',
        //cart: 'Корзина',
        exit: 'Выход',
      },
    },
    /*catalog: {
      viewTypes: {
        model: 'Показать на модели',
        student: 'ЛК интерна',
        lesson: 'Урок',
      },
      sortFilter: {
        label: 'Сортировать',
      },
    },
    details: {
      characteristicsTitle: 'Характеристики',
      extraTitle: 'Будет полезно',
      actionButtonLabel: 'Добавить в корзину',
      favButtonLabel: 'В избранное',
      upsaleProductsHeading: 'Хорошо сочетается',
    },*/
  },
}, model, { arrayMerge: (_, incoming) => incoming });

