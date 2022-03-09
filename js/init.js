import Model from './src/model.js';
import View from './src/view.js';
const $ = (select) => document.querySelector(select);
(function startSearchVillage() {
  const villageInfo = $('.village-info');
  const model = new Model();
  const view = new View(model, villageInfo);
})();
