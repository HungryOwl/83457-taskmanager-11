import {getMenuTemplate} from './components/menu';
import {getFilterTemplate} from './components/filter';
import {getTaskTemplate} from './components/task';
import {getEditTaskTemplate} from './components/edit-task';
import {getBoardTemplate} from './components/board';
import {getLoadMoreButtonTemplate} from './components/load-more-button';

const TASK_COUNT = 3;
const elem = {};

const getHtmlElement = (className) => {
  const element = document.querySelector(`.${className}`);

  if (!element) {
    throw new Error(`Элемент ${className} не найден`);
  }

  return element;
};

const renderTemplate = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const renderTemplates = (...templates) => {
  templates.forEach((template) => {
    let {className} = template;

    elem[className] = !elem[className] ? getHtmlElement(className) : elem[className];
    renderTemplate(elem[className], template.render(), template.place);
  });
};

const renderTasks = (count) => {
  for (let i = 0; i < count; i++) {
    renderTemplate(elem.board__tasks, getTaskTemplate());
  }
};

renderTemplates(
    {className: `main__control`, render: getMenuTemplate},
    {className: `main`, render: getFilterTemplate},
    {className: `main`, render: getBoardTemplate},
    {className: `board`, render: getLoadMoreButtonTemplate},
    {className: `board__tasks`, render: getEditTaskTemplate}
);

renderTasks(TASK_COUNT);
