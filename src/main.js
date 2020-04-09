import {getMenuTemplate} from './components/menu';
import {getFilterTemplate} from './components/filter';
import {getTaskTemplate} from './components/task';
import {getEditTaskTemplate} from './components/edit-task';
import {getBoardTemplate} from './components/board';
import {getLoadMoreButtonTemplate} from './components/load-more-button';

const TASK_COUNT = 3;
const elem = {};
const mainClassNames = [`main`, `main__control`];
const secondaryClassNames = [`board`, `board__tasks`];

const getHtmlElement = (className) => {
  const element = document.querySelector(`.${className}`);

  if (!element) {
    throw new Error(`Элемент ${className} не найден`);
  }

  return element;
};

const getContainerClasses = (classNamesArr, obj) => {
  return classNamesArr.forEach((className) => {
    obj[className] = getHtmlElement(className);
  });
};

const renderTemplate = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const renderTemplates = (...templates) => {
  templates.forEach((template) => {
    let {container} = template;
    renderTemplate(container, template.render(), template.place);
  });
};

const renderTasks = (count) => {
  for (let i = 0; i < count; i++) {
    renderTemplate(elem.board__tasks, getTaskTemplate());
  }
};

getContainerClasses(mainClassNames, elem);
renderTemplates(
    {container: elem.main__control, render: getMenuTemplate},
    {container: elem.main, render: getFilterTemplate},
    {container: elem.main, render: getBoardTemplate}
);


getContainerClasses(secondaryClassNames, elem);
renderTemplates(
    {container: elem.board, render: getLoadMoreButtonTemplate},
    {container: elem.board__tasks, render: getEditTaskTemplate}
);

renderTasks(TASK_COUNT);

