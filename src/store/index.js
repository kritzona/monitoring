import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
// import EventBus from '@/event-bus';

const listURL = [
  'http://siopr-analytical-portal.local/monitoring-broadcast.php',
  '/analitica/broadcast.php',
  'http://172.24.48.4/2708',
  'https://siopr.parma.tech/SIOPR_URA',
  'http://172.24.48.3/1Cv82dt',
];
const config = {
  broadcast: listURL[1],
  login: '',
  password: '',
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    operationalData: {
      circles: {
        total: {
          data: [
            2517,
            576,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 2517,
          bottomValue: 576,
        },
        tinao: {
          data: [
            186,
            33,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 186,
          bottomValue: 33,
        },
        zao: {
          data: [
            203,
            24,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 203,
          bottomValue: 24,
        },
        uzao: {
          data: [
            180,
            27,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 180,
          bottomValue: 27,
        },
        uao: {
          data: [
            429,
            133,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 429,
          bottomValue: 133,
        },
        uvao: {
          data: [
            182,
            64,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 182,
          bottomValue: 64,
        },
        vao: {
          data: [
            224,
            39,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 224,
          bottomValue: 39,
        },
        svao: {
          data: [
            297,
            66,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 297,
          bottomValue: 66,
        },
        sao: {
          data: [
            347,
            71,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 347,
          bottomValue: 71,
        },
        szao: {
          data: [
            208,
            35,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 208,
          bottomValue: 35,
        },
        cao: {
          data: [
            226,
            40,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 226,
          bottomValue: 40,
        },
        zelao: {
          data: [
            35,
            23,
          ],
          labels: [
            'С повышенным спросом',
            'Остальные',
          ],
          topValue: 35,
          bottomValue: 23,
        },
      },
      result: {
        totalStores: 19003,
        netStores: 6768,
        notNetStores: 12235,
      },
      stores: {
        data: [
          0,
          16,
          23,
          49,
          405,
          601,
          622,
          576,
        ],
        labels: [
          '13.03',
          '14.03',
          '15.03',
          '16.03',
          '17.03',
          '18.03',
          '19.03',
          '20.03',
        ],
      },
    },

    priceMonitoring: {
      topRed: {
        items: [
          {
            name: 'Рис шлифованный',
            value: '+12,61%',
          },
          {
            name: 'Мыло туалетное',
            value: '+9,71%',
          },
          {
            name: 'Подгузники детские',
            value: '+9,8%',
          },
          {
            name: 'Мыло хозяйственное',
            value: '+7,83%',
          },
          {
            name: 'Соль поваренная пищевая',
            value: '+7,74%',
          },
        ],
      },
      topGreen: {
        items: [
          {
            name: 'Морковь',
            value: '-4.81%',
          },
          {
            name: 'Хлеб и булочные изделия из пшеничной муки',
            value: '-4,6%',
          },
          {
            name: 'Мука пшеничная',
            value: '-4,43%',
          },
          {
            name: 'Вода питьевая, 5л',
            value: '-3,41%',
          },
          {
            name: 'Свинина (кроме бескостного мяса)',
            value: '-3,02%',
          },
        ],
      },
      table: {
        fields: [
          {
            key: 'id',
            label: '',
          },
          {
            key: 'productName',
            label: '',
          },

          {
            key: 'netStoresMin',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'netStoresMinPercent',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'netStoresMax',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'netStoresMaxPercent',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },

          {
            key: 'notNetStoresMin',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'notNetStoresMinPercent',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'notNetStoresMax',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
          {
            key: 'notNetStoresMaxPercent',
            label: '',
            // eslint-disable-next-line no-unused-vars
            formatter(value, key, item) {
              return Number(value).toFixed(2);
            },
          },
        ],
        items: [
          {
            id: 1,
            productName: 'Молоко сгущенное с сахаром, кг',
            netStoresMin: 152.63,
            netStoresMinPercent: 1.96,
            netStoresMax: 234.96,
            netStoresMaxPercent: 2.51,

            notNetStoresMin: 167.76,
            notNetStoresMinPercent: 8.39,
            notNetStoresMax: 223.76,
            notNetStoresMaxPercent: 6.59,
          },
          {
            id: 2,
            productName: 'Колбаса сырокопченая, кг',
            netStoresMin: 646.62,
            netStoresMinPercent: 4.46,
            netStoresMax: 1179.99,
            netStoresMaxPercent: 0.43,

            notNetStoresMin: 791.81,
            notNetStoresMinPercent: 1.07,
            notNetStoresMax: 1331.30,
            notNetStoresMaxPercent: -1.84,
          },
          {
            id: 3,
            productName: 'Консервы мясные, кг',
            netStoresMin: 202.97,
            netStoresMinPercent: 1.1,
            netStoresMax: 383.35,
            netStoresMaxPercent: 2.31,

            notNetStoresMin: 330.03,
            notNetStoresMinPercent: 11.84,
            notNetStoresMax: 503.03,
            notNetStoresMaxPercent: 5.23,
          },
          {
            id: 4,
            productName: 'Консервы рыбные натуральные и с добавлением масла, кг',
            netStoresMin: 197.18,
            netStoresMinPercent: 1.51,
            netStoresMax: 429.39,
            netStoresMaxPercent: -0.8,

            notNetStoresMin: 231.79,
            notNetStoresMinPercent: 7.71,
            notNetStoresMax: 525.53,
            notNetStoresMaxPercent: 4.26,
          },
          {
            id: 5,
            productName: 'Вода питьевая,1 л',
            netStoresMin: 24.47,
            netStoresMinPercent: 0.08,
            netStoresMax: 81.07,
            netStoresMaxPercent: -4.59,

            notNetStoresMin: 32.51,
            notNetStoresMinPercent: 2.04,
            notNetStoresMax: 82.31,
            notNetStoresMaxPercent: 0.64,
          },
          {
            id: 6,
            productName: 'Вода питьевая, 5 л',
            netStoresMin: 58.87,
            netStoresMinPercent: -3.41,
            netStoresMax: 90.36,
            netStoresMaxPercent: -0.37,

            notNetStoresMin: 67.13,
            notNetStoresMinPercent: 0.18,
            notNetStoresMax: 107.73,
            notNetStoresMaxPercent: 0.52,
          },
          {
            id: 7,
            productName: 'Говядина (кроме бескостного мяса), кг',
            netStoresMin: 410.09,
            netStoresMinPercent: 1.26,
            netStoresMax: 555.26,
            netStoresMaxPercent: -0.52,

            notNetStoresMin: 456.47,
            notNetStoresMinPercent: 4.44,
            notNetStoresMax: 714.42,
            notNetStoresMaxPercent: 0.96,
          },
          {
            id: 8,
            productName: 'Свинина (кроме бескостного мяса), кг',
            netStoresMin: 262.62,
            netStoresMinPercent: -3.02,
            netStoresMax: 360.52,
            netStoresMaxPercent: -4,

            notNetStoresMin: 290.02,
            notNetStoresMinPercent: 2.64,
            notNetStoresMax: 415.58,
            notNetStoresMaxPercent: -3.38,
          },
          {
            id: 9,
            productName: 'Куры (кроме окорочков), кг',
            netStoresMin: 158.3,
            netStoresMinPercent: 2.5,
            netStoresMax: 210.47,
            netStoresMaxPercent: -3.84,

            notNetStoresMin: 189.13,
            notNetStoresMinPercent: 0.06,
            notNetStoresMax: 249.39,
            notNetStoresMaxPercent: -2,
          },
          {
            id: 10,
            productName: 'Рыба мороженая неразделанная, кг',
            netStoresMin: 190.38,
            netStoresMinPercent: -1.97,
            netStoresMax: 382.22,
            netStoresMaxPercent: -1.8,

            notNetStoresMin: 302.01,
            notNetStoresMinPercent: -0.39,
            notNetStoresMax: 649.63,
            notNetStoresMaxPercent: 6.05,
          },
          {
            id: 11,
            productName: 'Масло сливочное, м.д.ж. 82,5%, кг',
            netStoresMin: 555.61,
            netStoresMinPercent: 5.56,
            netStoresMax: 866.38,
            netStoresMaxPercent: 3.99,

            notNetStoresMin: 628.15,
            notNetStoresMinPercent: 1.14,
            notNetStoresMax: 864.20,
            notNetStoresMaxPercent: 0.59,
          },
          {
            id: 12,
            productName: 'Масло подсолнечное рафинированное, кг',
            netStoresMin: 76.33,
            netStoresMinPercent: 0.45,
            netStoresMax: 130.75,
            netStoresMaxPercent: 2.41,

            notNetStoresMin: 104.07,
            notNetStoresMinPercent: 2.24,
            notNetStoresMax: 178.39,
            notNetStoresMaxPercent: -0.51,
          },
          {
            id: 13,
            productName: 'Молоко питьевое, м.д.ж. 2,5%, л',
            netStoresMin: 60.35,
            netStoresMinPercent: -0.18,
            netStoresMax: 86.29,
            netStoresMaxPercent: -2.18,

            notNetStoresMin: 66.85,
            notNetStoresMinPercent: 0.25,
            notNetStoresMax: 94.57,
            notNetStoresMaxPercent: -0.78,
          },
          {
            id: 14,
            productName: 'Яйца куриные, 10 шт',
            netStoresMin: 62.24,
            netStoresMinPercent: -1.73,
            netStoresMax: 86.67,
            netStoresMaxPercent: 0.38,

            notNetStoresMin: 71.88,
            notNetStoresMinPercent: 1.77,
            notNetStoresMax: 94.65,
            notNetStoresMaxPercent: -2.45,
          },
          {
            id: 15,
            productName: 'Сахар-песок, кг',
            netStoresMin: 30.93,
            netStoresMinPercent: 1.14,
            netStoresMax: 71.99,
            netStoresMaxPercent: -0.99,

            notNetStoresMin: 67.47,
            notNetStoresMinPercent: 3.64,
            notNetStoresMax: 117.21,
            notNetStoresMaxPercent: 9.81,
          },
          {
            id: 16,
            productName: 'Соль поваренная пищевая, кг',
            netStoresMin: 22.41,
            netStoresMinPercent: 7.74,
            netStoresMax: 78.89,
            netStoresMaxPercent: 0.24,

            notNetStoresMin: 41.14,
            notNetStoresMinPercent: 7.58,
            notNetStoresMax: 93.82,
            notNetStoresMaxPercent: -2.03,
          },
          {
            id: 17,
            productName: 'Чай черный байховый, кг',
            netStoresMin: 588.25,
            netStoresMinPercent: 2.09,
            netStoresMax: 1440.09,
            netStoresMaxPercent: 7.75,

            notNetStoresMin: 998.36,
            notNetStoresMinPercent: 8,
            notNetStoresMax: 1879.17,
            notNetStoresMaxPercent: 4.66,
          },
          {
            id: 18,
            productName: 'Мука пшеничная, кг',
            netStoresMin: 41.89,
            netStoresMinPercent: -4.43,
            netStoresMax: 71.97,
            netStoresMaxPercent: -6.94,

            notNetStoresMin: 59.79,
            notNetStoresMinPercent: 10.17,
            notNetStoresMax: 89.34,
            notNetStoresMaxPercent: -16.07,
          },
          {
            id: 19,
            productName: 'Хлеб ржаной, ржано-пшеничный, кг',
            netStoresMin: 58.41,
            netStoresMinPercent: -0.36,
            netStoresMax: 149.51,
            netStoresMaxPercent: -5.24,

            notNetStoresMin: 77.93,
            notNetStoresMinPercent: -0.29,
            notNetStoresMax: 150.31,
            notNetStoresMaxPercent: 1.23,
          },
          {
            id: 20,
            productName: 'Хлеб и булочные изделия из пшеничной муки, кг',
            netStoresMin: 56.79,
            netStoresMinPercent: -4.6,
            netStoresMax: 136.14,
            netStoresMaxPercent: -2.47,

            notNetStoresMin: 71.22,
            notNetStoresMinPercent: 2.22,
            notNetStoresMax: 146.86,
            notNetStoresMaxPercent: 5.45,
          },
          {
            id: 21,
            productName: 'Рис шлифованный, кг',
            netStoresMin: 77.36,
            netStoresMinPercent: 12.61,
            netStoresMax: 144.48,
            netStoresMaxPercent: 9.09,

            notNetStoresMin: 95.10,
            notNetStoresMinPercent: 7.34,
            notNetStoresMax: 167.62,
            notNetStoresMaxPercent: 2.08,
          },
          {
            id: 22,
            productName: 'Пшено, кг',
            netStoresMin: 63.99,
            netStoresMinPercent: 1.17,
            netStoresMax: 88.10,
            netStoresMaxPercent: -2.6,

            notNetStoresMin: 91.87,
            notNetStoresMinPercent: -3.78,
            notNetStoresMax: 118.99,
            notNetStoresMaxPercent: -2.83,
          },
          {
            id: 23,
            productName: 'Крупа гречневая-ядрица, кг',
            netStoresMin: 66.84,
            netStoresMinPercent: 2.42,
            netStoresMax: 100.54,
            netStoresMaxPercent: -1.93,

            notNetStoresMin: 85.69,
            notNetStoresMinPercent: 3.62,
            notNetStoresMax: 123.15,
            notNetStoresMaxPercent: -9.1,
          },
          {
            id: 24,
            productName: 'Крупы овсяная (или перловая), кг',
            netStoresMin: 52.94,
            netStoresMinPercent: 5.77,
            netStoresMax: 105.77,
            netStoresMaxPercent: 19.06,

            notNetStoresMin: 79.35,
            notNetStoresMinPercent: 0.76,
            notNetStoresMax: 39.58,
            notNetStoresMaxPercent: 2.41,
          },
          {
            id: 25,
            productName: 'Печенье, кг',
            netStoresMin: 138.88,
            netStoresMinPercent: -1.87,
            netStoresMax: 408.96,
            netStoresMaxPercent: -0.53,

            notNetStoresMin: 185.89,
            notNetStoresMinPercent: 1.41,
            notNetStoresMax: 491.49,
            notNetStoresMaxPercent: 3.09,
          },
          {
            id: 26,
            productName: 'Макаронные изделия из пшеничной муки высшего сорта, кг',
            netStoresMin: 70.96,
            netStoresMinPercent: 4.74,
            netStoresMax: 226.54,
            netStoresMaxPercent: -0.67,

            notNetStoresMin: 107.77,
            notNetStoresMinPercent: 10.83,
            notNetStoresMax: 267.65,
            notNetStoresMaxPercent: 0.71,
          },
          {
            id: 27,
            productName: 'Картофель, кг',
            netStoresMin: 23.91,
            netStoresMinPercent: 3.51,
            netStoresMax: 57.27,
            netStoresMaxPercent: 4.51,

            notNetStoresMin: 33.07,
            notNetStoresMinPercent: 9.11,
            notNetStoresMax: 57.05,
            notNetStoresMaxPercent: -13.5,
          },
          {
            id: 28,
            productName: 'Капуста белокочанная свежая, кг',
            netStoresMin: 24.05,
            netStoresMinPercent: -2.39,
            netStoresMax: 35.48,
            netStoresMaxPercent: -4.16,

            notNetStoresMin: 33.45,
            notNetStoresMinPercent: 0.63,
            notNetStoresMax: 44.27,
            notNetStoresMaxPercent: -3.45,
          },
          {
            id: 29,
            productName: 'Лук репчатый, кг',
            netStoresMin: 27.17,
            netStoresMinPercent: -2.51,
            netStoresMax: 54.16,
            netStoresMaxPercent: -8.99,

            notNetStoresMin: 34.45,
            notNetStoresMinPercent: 4.11,
            notNetStoresMax: 55.17,
            notNetStoresMaxPercent: -18.12,
          },
          {
            id: 30,
            productName: 'Морковь, кг',
            netStoresMin: 25.15,
            netStoresMinPercent: -4.81,
            netStoresMax: 46.76,
            netStoresMaxPercent: -3.03,

            notNetStoresMin: 37.32,
            notNetStoresMinPercent: 4.19,
            notNetStoresMax: 58.25,
            notNetStoresMaxPercent: -0.72,
          },
          {
            id: 31,
            productName: 'Яблоки, кг',
            netStoresMin: 82.56,
            netStoresMinPercent: 1,
            netStoresMax: 119.06,
            netStoresMaxPercent: -0.11,

            notNetStoresMin: 105.05,
            notNetStoresMinPercent: 2.17,
            notNetStoresMax: 144.86,
            notNetStoresMaxPercent: -0.33,
          },
          {
            id: 32,
            productName: 'Смесь детская (заменитель грудного молока), кг\t\t\t\n',
            netStoresMin: 645.90,
            netStoresMinPercent: 0.51,
            netStoresMax: 1053.25,
            netStoresMaxPercent: -0.24,

            notNetStoresMin: 801.98,
            notNetStoresMinPercent: 6.5,
            notNetStoresMax: 1526.28,
            notNetStoresMaxPercent: 6.38,
          },
          {
            id: 33,
            productName: 'Санитарно-гигиеническая маска, шт\t\t\t\n',
            netStoresMin: 9.64,
            netStoresMinPercent: '-',
            netStoresMax: 9.64,
            netStoresMaxPercent: '-',

            notNetStoresMin: '-',
            notNetStoresMinPercent: '-',
            notNetStoresMax: '-',
            notNetStoresMaxPercent: '-',
          },
          {
            id: 34,
            productName: 'Антисептик для рук, 50 мл\t\t\t\n',
            netStoresMin: 88.88,
            netStoresMinPercent: 0.2,
            netStoresMax: 117.04,
            netStoresMaxPercent: 4.32,

            notNetStoresMin: 98.15,
            notNetStoresMinPercent: -0.01,
            notNetStoresMax: 128.91,
            notNetStoresMaxPercent: -0.03,
          },
          {
            id: 35,
            productName: 'Антисептик для рук, 1л\t\t\t\n',
            netStoresMin: 208.5,
            netStoresMinPercent: -0.01,
            netStoresMax: 374,
            netStoresMaxPercent: -8.28,

            notNetStoresMin: 667.07,
            notNetStoresMinPercent: -0.1,
            notNetStoresMax: 878.87,
            notNetStoresMaxPercent: -0.02,
          },
          {
            id: 36,
            productName: 'Салфетки влажные, уп\t\t\t\n',
            netStoresMin: 38.12,
            netStoresMinPercent: -0.24,
            netStoresMax: 90.74,
            netStoresMaxPercent: -1.17,

            notNetStoresMin: 41.23,
            notNetStoresMinPercent: 1.88,
            notNetStoresMax: 107.04,
            notNetStoresMaxPercent: -2.75,
          },
          {
            id: 37,
            productName: 'Салфетки сухие, уп\t\t\t\n',
            netStoresMin: 28.92,
            netStoresMinPercent: -0.3,
            netStoresMax: 74.44,
            netStoresMaxPercent: 2.06,

            notNetStoresMin: 42.94,
            notNetStoresMinPercent: -0.72,
            notNetStoresMax: 100.44,
            notNetStoresMaxPercent: 3.15,
          },
          {
            id: 38,
            productName: 'Мыло туалетное,100 г\t\t\t\n',
            netStoresMin: 31.29,
            netStoresMinPercent: 9.71,
            netStoresMax: 76.50,
            netStoresMaxPercent: 14.16,

            notNetStoresMin: 42.41,
            notNetStoresMinPercent: 5.08,
            notNetStoresMax: 99.36,
            notNetStoresMaxPercent: 3.73,
          },
          {
            id: 39,
            productName: 'Мыло хозяйственное, 200 г\t\t\t\n',
            netStoresMin: 24.79,
            netStoresMinPercent: 7.83,
            netStoresMax: 39.67,
            netStoresMaxPercent: 3.07,

            notNetStoresMin: 36.07,
            notNetStoresMinPercent: 0.11,
            notNetStoresMax: 54.98,
            notNetStoresMaxPercent: 0.13,
          },
          {
            id: 40,
            productName: 'Паста зубная, шт, 75 гр\t\t\t\n',
            netStoresMin: 69.99,
            netStoresMinPercent: -0.55,
            netStoresMax: 213.33,
            netStoresMaxPercent: 0.16,

            notNetStoresMin: 86.08,
            notNetStoresMinPercent: 0.87,
            notNetStoresMax: 287.22,
            notNetStoresMaxPercent: 1.58,
          },
          {
            id: 41,
            productName: 'Щетка зубная, шт\t\t\t\n',
            netStoresMin: 54.66,
            netStoresMinPercent: -1.97,
            netStoresMax: 179.68,
            netStoresMaxPercent: -0.73,

            notNetStoresMin: 72.07,
            notNetStoresMinPercent: 0.19,
            notNetStoresMax: 274.53,
            notNetStoresMaxPercent: 5.84,
          },
          {
            id: 42,
            productName: 'Бумага туалетная, шт\t\t\t\n',
            netStoresMin: 18.51,
            netStoresMinPercent: 2.27,
            netStoresMax: 52.75,
            netStoresMaxPercent: -3.62,

            notNetStoresMin: 24.25,
            notNetStoresMinPercent: -0.29,
            notNetStoresMax: 68.98,
            notNetStoresMaxPercent: -1.81,
          },
          {
            id: 43,
            productName: 'Гигиенические прокладки, уп\t\t\t\n',
            netStoresMin: 33.89,
            netStoresMinPercent: 3.54,
            netStoresMax: 96.77,
            netStoresMaxPercent: 4.8,

            notNetStoresMin: 44.36,
            notNetStoresMinPercent: 1.72,
            notNetStoresMax: 105.37,
            notNetStoresMaxPercent: 0.04,
          },
          {
            id: 44,
            productName: 'Стиральный порошок, кг\t\t\t\n',
            netStoresMin: 101.64,
            netStoresMinPercent: 3.75,
            netStoresMax: 251.18,
            netStoresMaxPercent: -16.14,

            notNetStoresMin: 127.23,
            notNetStoresMinPercent: 0.49,
            notNetStoresMax: 321.94,
            notNetStoresMaxPercent: 0.09,
          },
          {
            id: 45,
            productName: 'Подгузники детские, уп\t\t\t\n',
            netStoresMin: 168.64,
            netStoresMinPercent: 9.08,
            netStoresMax: 389.16,
            netStoresMaxPercent: 5.12,

            notNetStoresMin: 323.09,
            notNetStoresMinPercent: 7.01,
            notNetStoresMax: 623.13,
            notNetStoresMaxPercent: 5.28,
          },
          {
            id: 46,
            productName: 'Спички, коробок\t\t\t\n',
            netStoresMin: 6.97,
            netStoresMinPercent: -1.55,
            netStoresMax: 17.46,
            netStoresMaxPercent: 0.23,

            notNetStoresMin: 16.09,
            notNetStoresMinPercent: -0.25,
            notNetStoresMax: 26.13,
            notNetStoresMaxPercent: -6.07,
          },
          {
            id: 47,
            productName: 'Свечи, шт\t\t\t\n',
            netStoresMin: 35.53,
            netStoresMinPercent: 4.16,
            netStoresMax: 118.46,
            netStoresMaxPercent: 0.93,

            notNetStoresMin: 72.19,
            notNetStoresMinPercent: 4.53,
            notNetStoresMax: 187.91,
            notNetStoresMaxPercent: -0.52,
          },
        ],
      },
    },

    salesVolumeMonitoring: {
      topRed: {
        items: [
          {
            name: 'Сахар-песок',
            value: '+324,43%',
          },
        ],
      },
      topGreen: {
        items: [
          {
            name: 'Мука пшеничная',
            value: '-215,54%',
          },
          {
            name: 'Макаронные изделия из пшеничной муки высшего сорта',
            value: '-208,45%',
          },
          {
            name: 'Сахар-песок',
            value: '-171,37%',
          },
          {
            name: 'Консервы рыбные натуральные с добавлением масла',
            value: '-162,91%',
          },
          {
            name: 'Консервы мясные',
            value: '-157,31%',
          },
        ],
      },
      sales: {
        prods: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
            '19.03',
          ],
          items: [
            {
              name: 'Хлеб и булочные изделия из пшеничной муки высшего сорта, кг',
              data: [425973, 407982, 419650, 464555, 479045, 445687, 415392],
            },
            {
              name: 'Хлеб из ржаной муки и из смеси муки ржаной и пшеничной, кг',
              data: [166608, 159712, 157506, 187317, 197776, 174360, 165203],
            },
            {
              name: 'Печенье, кг',
              data: [297882, 299454, 305203, 393103, 484325, 354826, 292980],
            },
            {
              name: 'Мука пшеничная, кг',
              data: [57011, 75097, 84464, 142292, 169893, 111192, 51414],
            },
            {
              name: 'Крупа гречневая-ядрица, кг',
              data: [112757, 139116, 159895, 196824, 166712, 114414, 88708],
            },
            {
              name: 'Рис шлифованный, кг',
              data: [106645, 144967, 171949, 311920, 279562, 193886, 133587],
            },
            {
              name: 'Крупы овсяная (или перловая, кг)\n',
              data: [69148, 83312, 90595, 186986, 209526, 131154, 90055],
            },
            {
              name: 'Макаронные изделия из пшеничной муки высшего сорта, кг\n',
              data: [207896, 257230, 287636, 567580, 682926, 314324, 154130],
            },
            {
              name: 'Масло подсолнечное, кг\n',
              data: [114197, 128756, 130828, 203153, 284343, 166725, 106313],
            },
            {
              name: 'Сахар-песок, кг\n',
              data: [162713, 198820, 221398, 409065, 693907, 430459, 250675],
            },
            {
              name: 'Соль поваренная пищевая, кг\n',
              data: [45305, 58890, 75438, 118325, 137695, 77467, 74645],
            },
            {
              name: 'Молоко сгущенное с сахаром\n',
              data: [26513, 31117, 32210, 50427, 8807, 58207, 4205],
            },
            {
              name: 'Колбаса сырокопченая, кг\n',
              data: [39250, 37176, 33049, 49357, 72033, 52398, 42584],
            },
            {
              name: 'Консервы мясные\n',
              data: [81129, 92063, 97968, 198116, 251232, 115850, 73847],
            },
            {
              name: 'Консервы рыбные натуральные и с добавлением масла\n',
              data: [112946, 135908, 144393, 275941, 454919, 231960, 142026],
            },
            {
              name: 'Чай черный байховый, кг\n',
              data: [90263, 98032, 96064, 137231, 173886, 114576, 83864],
            },
            {
              name: 'Масло сливочное, кг\n',
              data: [118184, 123747, 118699, 188839, 305135, 168701, 128269],
            },
            {
              name: 'Говядина (кроме бескостного мяса), кг\n',
              data: [2475, 3002, 2722, 2414, 4020, 3835, 3007],
            },
            {
              name: 'Свинина (кроме бескостного мяса), кг\n',
              data: [4901, 5218, 4636, 5500, 9419, 9001, 6036],
            },
            {
              name: 'Картофель, кг\n',
              data: [294053, 333306, 338121, 384051, 510138, 453381, 368063],
            },
            {
              name: 'Лук репчатый, кг\n',
              data: [136419, 154684, 163391, 188424, 254763, 207938, 168903],
            },
            {
              name: 'Морковь, кг\n',
              data: [132096, 148858, 152313, 165858, 202800, 181900, 150370],
            },
          ],
        },
        notProds: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
          ],
          items: [
            {
              name: 'Мыло туалетное, шт.\n',
              data: [45255, 58213, 59651, 102228, 146495, 96501, 68947],
            },
            {
              name: 'Мыло хозяйственное, шт.\n',
              data: [19061, 23394, 23745, 43653, 51717, 35765, 31208],
            },
            {
              name: 'Спички, коробок\n',
              data: [5291, 6486, 6522, 10980, 16050, 12500, 9240],
            },
            {
              name: 'Паста зубная, шт.\n',
              data: [58254, 67932, 67677, 89672, 113204, 74280, 54263],
            },
            {
              name: 'Щетка зубная, шт.\n',
              data: [17682, 20422, 20163, 20750, 23977, 18691, 15706],
            },
            {
              name: 'Свечи, шт.\n',
              data: [133, 85, 143, 162, 204, 158, 125],
            },
            {
              name: 'Бумага туалетная, шт.\n',
              data: [171900, 199180, 198179, 324640, 449121, 281938, 194523],
            },
            {
              name: 'Гигиенические прокладки, шт.\n',
              data: [65492, 78004, 80466, 120110, 180485, 119178, 84677],
            },
            {
              name: 'Памперсы детские, шт.\n',
              data: [5600, 5800, 6100, 6800, 9720, 6870, 5280],
            },
          ],
        },
        water: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
          ],
          items: [
            {
              name: 'Вода минеральная(без газа) и питьевая, л\n',
              data: [427150, 501680, 436700, 471050, 522300, 441989, 401876],
            },
          ],
        },
      },
    },

    salesVolumeFnsMonitoring: {
      topRed: {
        items: [
          {
            name: 'Сахар-песок',
            value: '-324,43%',
          },
        ],
      },
      topGreen: {
        items: [
          {
            name: 'Мука',
            value: '-171,2%',
          },
          {
            name: 'Сахар',
            value: '-155,21%',
          },
          {
            name: 'Рис',
            value: '-152,95%',
          },
          {
            name: 'Масло растительное',
            value: '-142,31%',
          },
          {
            name: 'Соль',
            value: '-140,79%',
          },
        ],
      },
      sales: {
        prods: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
          ],
          items: [
            {
              name: 'Макароны, кг',
              data: [417560, 399757, 404556, 700675, 1051000, 603423, 530328],
            },
            {
              name: 'Хлеб, кг',
              data: [721480, 614869, 605780, 694377, 810320, 745524, 686090],
            },
            {
              name: 'Мука, кг',
              data: [191689, 238223, 277080, 456032, 783884, 452555, 263431],
            },
            {
              name: 'Рис, кг',
              data: [156629, 181364, 213966, 359173, 453857, 275474, 180106],
            },
            {
              name: 'Картофель, кг',
              data: [616678, 637197, 642706, 724317, 1050616, 909647, 749750],
            },
            {
              name: 'Сахар, кг',
              data: [322887, 355003, 418210, 665136, 1116008, 665663, 428931],
            },
            {
              name: 'Печенье, кг',
              data: [144902, 130007, 131376, 161709, 220747, 160746, 146411],
            },
            {
              name: 'Говядина, кг',
              data: [34234, 29675, 26089, 27370, 51208, 39713, 33656],
            },
            {
              name: 'Свинина, кг',
              data: [122245, 111668, 90159, 107737, 174382, 122083, 115311],
            },
            {
              name: 'Масло сливочное, кг',
              data: [43468, 43515, 43679, 60780, 104664, 64558, 54357],
            },
            {
              name: 'Соль, кг',
              data: [58114, 61076, 69685, 89174, 165000, 127335, 90445],
            },
          ],
        },
        notProds: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
          ],
          items: [
            {
              name: 'Чай, шт',
              data: [343730, 312817, 297454, 363195, 492763, 365847, 299370],
            },
          ],
        },
        water: {
          labels: [
            '13.03',
            '14.03',
            '15.03',
            '16.03',
            '17.03',
            '18.03',
          ],
          items: [
            {
              name: 'Масло растительное, л',
              data: [236493, 249072, 245443, 400415, 630106, 378577, 266028],
            },
          ],
        },
      },
    },

    leftoversMonitoring: {
      topRed: {
        items: [
          {
            name: 'Сахар-песок, кг',
            value: '-30,20%',
          },
          {
            name: 'Санитарно-гигиеническая маска, шт',
            value: '-16,68%',
          },
          {
            name: 'Рис шлифованный, кг',
            value: '-9,65%',
          },
          {
            name: 'Морковь, кг',
            value: '-7,23%',
          },
          {
            name: 'Крупы овсяная (или перловая), кг',
            value: '-4,43%',
          },
        ],
      },
      topGreen: {
        items: [
          {
            name: 'Картофель, кг',
            value: '+105,16%',
          },
          {
            name: 'Свинина (кроме бескостного мяса), кг',
            value: '+75,18%',
          },
          {
            name: 'Капуста белокочанная свежая, кг',
            value: '+59,34%',
          },
          {
            name: 'Лук репчатый, кг',
            value: '+22,01%',
          },
          {
            name: 'Говядина (кроме бескостного мяса), кг',
            value: '+20,74%',
          },
        ],
      },
      table: {
        fields: [
          {
            key: 'id',
            label: '',
          },
          {
            key: 'productName',
            label: '',
          },

          {
            key: 'count',
            label: '',
          },
          {
            key: 'percent',
            label: '',
          },
        ],
        items: [
          {
            id: 1,
            productName: 'Молоко сгущенное с сахаром, кг',
            count: 634157.56,
            percent: -1.27,
          },
          {
            id: 2,
            productName: 'Колбаса сырокопченая, кг',
            count: 766030.31,
            percent: 0.08,
          },
          {
            id: 3,
            productName: 'Консервы мясные, кг',
            count: 553362.06,
            percent: 19.33,
          },
          {
            id: 4,
            productName: 'Консервы рыбные натуральные и с добавлением масла, кг',
            count: 2145127.10,
            percent: -0.94,
          },
          {
            id: 5,
            productName: 'Вода питьевая,1 л',
            count: 6067094.10,
            percent: 0.74,
          },
          {
            id: 6,
            productName: 'Вода питьевая, 5 л',
            count: 831981.04,
            percent: 13.94,
          },
          {
            id: 7,
            productName: 'Говядина (кроме бескостного мяса), кг',
            count: 117042.31,
            percent: 20.74,
          },
          {
            id: 8,
            productName: 'Свинина (кроме бескостного мяса), кг',
            count: 224157.79,
            percent: 75.18,
          },
          {
            id: 9,
            productName: 'Куры (кроме окорочков), кг',
            count: 313422.96,
            percent: -2.82,
          },
          {
            id: 10,
            productName: 'Рыба мороженая неразделанная, кг',
            count: 305482.99,
            percent: 3.93,
          },
          {
            id: 11,
            productName: 'Масло сливочное, м.д.ж. 82,5%, кг',
            count: 1185252.56,
            percent: 11.77,
          },
          {
            id: 12,
            productName: 'Масло подсолнечное рафинированное, кг',
            count: 1107776.90,
            percent: 2.69,
          },
          {
            id: 13,
            productName: 'Молоко питьевое, м.д.ж. 2,5%, л',
            count: 1124848.60,
            percent: 0.35,
          },
          {
            id: 14,
            productName: 'Яйца куриные, 10 шт',
            count: 1048105.69,
            percent: 0.88,
          },
          {
            id: 15,
            productName: 'Сахар-песок, кг',
            count: 1609854.37,
            percent: -30.20,
          },
          {
            id: 16,
            productName: 'Соль поваренная пищевая, кг',
            count: 508983.55,
            percent: -2.15,
          },
          {
            id: 17,
            productName: 'Чай черный байховый, кг',
            count: 3169565.66,
            percent: 0.51,
          },
          {
            id: 18,
            productName: 'Мука пшеничная, кг',
            count: 634578.79,
            percent: -2.11,
          },
          {
            id: 19,
            productName: 'Хлеб ржаной, ржано-пшеничный, кг',
            count: 227824.91,
            percent: 15.14,
          },
          {
            id: 20,
            productName: 'Хлеб и булочные изделия из пшеничной муки, кг',
            count: 381683.96,
            percent: -3.68,
          },
          {
            id: 21,
            productName: 'Рис шлифованный, кг',
            count: 548484.19,
            percent: -9.65,
          },
          {
            id: 22,
            productName: 'Пшено, кг',
            count: 95670.10,
            percent: 12.49,
          },
          {
            id: 23,
            productName: 'Крупа гречневая-ядрица, кг',
            count: 328221.50,
            percent: -3.19,
          },
          {
            id: 24,
            productName: 'Крупы овсяная (или перловая), кг',
            count: 378630.98,
            percent: -4.43,
          },
          {
            id: 25,
            productName: 'Печенье, кг',
            count: 6212447.02,
            percent: -1.12,
          },
          {
            id: 26,
            productName: 'Макаронные изделия из пшеничной муки высшего сорта, кг',
            count: 2140760.00,
            percent: 1.76,
          },
          {
            id: 27,
            productName: 'Картофель, кг',
            count: 2030643.83,
            percent: 105.16,
          },
          {
            id: 28,
            productName: 'Капуста белокочанная свежая, кг',
            count: 312247.79,
            percent: 59.34,
          },
          {
            id: 29,
            productName: 'Лук репчатый, кг',
            count: 787888.34,
            percent: 22.01,
          },
          {
            id: 30,
            productName: 'Морковь, кг',
            count: 321339.94,
            percent: -7.23,
          },
          {
            id: 31,
            productName: 'Яблоки, кг',
            count: 88715.58,
            percent: 16.90,
          },
          {
            id: 32,
            productName: 'Смесь детская (заменитель грудного молока), кг\t\t\t\n',
            count: 267654.54,
            percent: 1.37,
          },
          {
            id: 33,
            productName: 'Санитарно-гигиеническая маска, шт\t\t\t\n',
            count: 14513.20,
            percent: -16.68,
          },
          {
            id: 34,
            productName: 'Антисептик для рук, 50 мл\t\t\t\n',
            count: 26792.87,
            percent: -0.83,
          },
          {
            id: 35,
            productName: 'Антисептик для рук, 1л\t\t\t\n',
            count: '-',
            percent: '-',
          },
          {
            id: 36,
            productName: 'Салфетки влажные, уп\t\t\t\n',
            count: 963379.16,
            percent: 3.22,
          },
          {
            id: 37,
            productName: 'Салфетки сухие, уп\t\t\t\n',
            count: 782004.29,
            percent: 5.52,
          },
          {
            id: 38,
            productName: 'Мыло туалетное,100 г\t\t\t\n',
            count: 1198365.50,
            percent: 20.04,
          },
          {
            id: 39,
            productName: 'Мыло хозяйственное, 200 г\t\t\t\n',
            count: 226635.04,
            percent: -2.70,
          },
          {
            id: 40,
            productName: 'Паста зубная, шт, 75 гр\t\t\t\n',
            count: 2043732.20,
            percent: 2.80,
          },
          {
            id: 41,
            productName: 'Щетка зубная, шт\t\t\t\n',
            count: 1275855.00,
            percent: 2.17,
          },
          {
            id: 42,
            productName: 'Бумага туалетная, шт\t\t\t\n',
            count: 1779552.00,
            percent: 4.58,
          },
          {
            id: 43,
            productName: 'Гигиенические прокладки, уп\t\t\t\n',
            count: 1679324.00,
            percent: 2.89,
          },
          {
            id: 44,
            productName: 'Стиральный порошок, кг\t\t\t\n',
            count: 867716.20,
            percent: 4.46,
          },
          {
            id: 45,
            productName: 'Подгузники детские, уп\t\t\t\n',
            count: 522572.00,
            percent: 2.48,
          },
          {
            id: 46,
            productName: 'Спички, коробок\t\t\t\n',
            count: 272502.00,
            percent: 3.74,
          },
          {
            id: 47,
            productName: 'Свечи, шт\t\t\t\n',
            count: 140382.00,
            percent: 2.45,
          },
        ],
      },
    },
  },
  mutations: {

  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    UPDATE_OPERATIONAL_DATA: async (injectee, payload) => {
      const nowDate = new Date();

      let nowDateDay = nowDate.getDate();
      let nowDateMonth = nowDate.getMonth();
      const nowDateYear = nowDate.getFullYear();

      nowDateDay = nowDateDay < 10 ? String(`0${nowDateDay}`) : String(nowDateDay);
      nowDateMonth = nowDateMonth < 10 ? String(`0${nowDateMonth}`) : String(nowDateMonth);

      // eslint-disable-next-line no-unused-vars
      const request = await this.$axios({
        method: 'get',
        url: `${config.broadcast}`,
        params: {
          host: 'INNER',
          url: `/hs/EssentialGoods/page1/${nowDateYear}-${nowDateMonth}-${nowDateDay}`,
        },
        header: {
          Authorization: `Basic ${btoa('portalservice:portal!@3')}`,
        },
        withCredentials: true,
        crossDomain: true,
      }).then((response) => {
        return response;
      });
    },
    /* UPDATE_PRICE_MONITORING: async (injectee, payload) => {
      const nowDate = new Date();

      let nowDateDay = nowDate.getDate();
      let nowDateMonth = nowDate.getMonth();
      const nowDateYear = nowDate.getFullYear();

      nowDateDay = nowDateDay < 10 ? String(`0${nowDateDay}`) : String(nowDateDay);
      nowDateMonth = nowDateMonth < 10 ? String(`0${nowDateMonth}`) : String(nowDateMonth);

      // eslint-disable-next-line no-unused-vars
      const request = await this.$axios({
        method: 'get',
        url: `${config.broadcast}`,
        params: {
          host: 'INNER',
          url: `/hs/EssentialGoods/page2/${nowDateYear}-${nowDateMonth}-${nowDateDay}`,
        },
        header: {
          Authorization: `Basic ${btoa('portalservice:portal!@3')}`,
        },
        withCredentials: true,
        crossDomain: true,
      }).then((response) => {
        return response;
      });
    }, */
  },
  modules: {
  }
});
