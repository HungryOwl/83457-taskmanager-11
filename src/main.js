import {getMenuTemplate} from './components/menu';
import {getFilterTemplate} from './components/filter';
import {getTaskTemplate} from './components/task';
import {getEditTaskTemplate} from './components/editTask';
import {getBoardTemplate} from './components/board';
import {getLoadMoreButtonTemplate} from './components/loadMoreButton';

const TASK_COUNT = 3;
const elem = {};

const getHtmlElement = (className) => {
  const element = document.querySelector(`.${className}`);

  if (!element) {
    throw new Error(`Элемент не найден`);
  }
  return element;
};

const renderTemplate = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const renderTemplates = (...templates) => {
  templates.forEach((template) => {
    let {container} = template;

    elem[container] = !elem[container] ? getHtmlElement(container) : elem[container];
    container = elem[container];

    renderTemplate(container, template.render(), template.place);
  });
};

const renderTasks = (count) => {
  for (let i = 0; i < count; i++) {
    renderTemplate(elem.board__tasks, getTaskTemplate());
  }
};

renderTemplates(
    {container: `main__control`, render: getMenuTemplate},
    {container: `main`, render: getFilterTemplate},
    {container: `main`, render: getBoardTemplate},
    {container: `board`, render: getLoadMoreButtonTemplate},
    {container: `board__tasks`, render: getEditTaskTemplate}
);

renderTasks(TASK_COUNT);
