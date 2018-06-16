export default () => (
  <div className="app">
    <header>
      <h1>TODOリスト</h1>
    </header>
    <main className="app-content">
      <div className="add-todo-wrapper">
        <h2 className="add-todo-header">新しいTodoを作成する</h2>
        <form>
          <div className="form-inputs">
            <div className="form-input">
              <span>ToDo名:</span>
              <input
                type="text"
                name="todolist-name"
                placeholder="ToDo名を入力してください"
              />
            </div>
            <div className="form-input">
              <span>期限:</span>
              <input
                type="text"
                name="todolist-name"
                placeholder="期限を入力してください"
              />
            </div>
          </div>
          <button>追加</button>
        </form>
      </div>
      <div className="message-wrapper" />
      <div className="todo-lists-wrapper">
        <h2 className="add-todo-header">Todo一覧</h2>
        <ul className="todo-list">
          <li>
            <div>
              <h4 className="todo-list-title">レポートサマリーを作る</h4>
              <div className="todo-list-due">期限: ~2016年8月30日</div>
              <div className="todo-list-created">作成日: ~2016年8月30日</div>
            </div>
            <button>未完了</button>
          </li>
          <li>
            <div>
              <h4 className="todo-list-title">レポート表紙を作る</h4>
              <div className="todo-list-due">期限: ~2016年8月10日</div>
              <div className="todo-list-created">作成日: ~2016年8月30日</div>
            </div>
            <button className="completed">完了</button>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <p className="copy-right">
        © 2018
        <a href="http://k4h4shi.com">k4h4shi</a>
      </p>
    </footer>
    <style jsx>{`
      .add-todo-wrapper > form {
        display: flex;
        padding: 12px 33px;
      }

      .form-inputs {
        display: flex;
        flex-direction: column;
        padding-right: 20px;
        flex: 6;
      }

      .form-input {
        display: flex;
      }

      .form-input > span {
        flex: 1;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
      }

      .form-input > input {
        flex: 6;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }

      .add-todo-wrapper > form > button {
        flex: 1;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        background-color: #c8c8c8;
        border-radius: 5px;
      }

      .message-wrapper {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }

      .todo-list {
        display: flex;
        padding: 10px;
        flex-direction: column;
      }

      .todo-list > li {
        display: flex;
        list-style: none;
        margin: 3px;
        padding: 12px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .todo-list > li > div {
        flex: 6;
      }

      .todo-list > li > button {
        flex: 1;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        background-color: #f76776;
        border-radius: 5px;
        color: white;
      }

      .todo-list > li > button.completed {
        flex: 1;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        background-color: #72eaa6;
        border-radius: 5px;
        color: white;
      }
    `}</style>
  </div>
);
