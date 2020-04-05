const getBoardTemplate = () => (
  `
    <!-- Контент -->
    <section class="board container">
      <!-- Сортировка -->
      <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
      </div>

      <!-- Задачи -->
      <div class="board__tasks"></div>
    </section>
  `
);

export {getBoardTemplate};
