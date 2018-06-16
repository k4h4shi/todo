export default () => (
  <div className="app">
    <header>
      <h1>TODOリスト</h1>
    </header>
    <main className="app-content">
      <div className="add-todo-wrapper">
        <h2 className="add-todo-header">新しいTodoリストを作成する</h2>
        <div className="message-wrapper">
          <p className="error-message">
            ToDoリストの名称は30文字以内にしてください
          </p>
        </div>
        <form>
          <input
            type="text"
            name="todolist-name"
            placeholder="リスト名を入力してください"
          />
          <button>リストの作成</button>
        </form>
      </div>
      <div className="message-wrapper" />
      <div className="todo-lists-wrapper">
        <h2 className="add-todo-header">Todoリスト一覧</h2>
        <div className="message-wrapper">
          <p className="success-message">新しいToDoリストが作成されました。</p>
        </div>
        <ul className="todo-lists">
          <li className="todo-list">
            <h4 className="todo-list-title">
              <a href="">買い物リスト</a>
            </h4>
            <div className="todo-list-check-state">
              状態: 5個中3個がチェック済み
            </div>
            <div className="todo-list-due">期限: ~2016年8月30日</div>
          </li>
          <li className="todo-list">
            <h4 className="todo-list-title">
              <a href="">レポート課題</a>
            </h4>
            <div className="todo-list-check-state">
              状態: 5個中3個がチェック済み
            </div>
            <div className="todo-list-due">期限: ~2016年8月10日</div>
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
        padding: 10px;
      }

      .add-todo-wrapper > form > input {
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
        color: white;
      }

      .message-wrapper {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
      }

      .todo-lists {
        display: flex;
        padding: 10px;
        flex-direction: column;
      }

      .todo-lists > li {
        list-style: none;
        margin: 3px;
        padding: 12px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .todo-lists > li > label {
        flex: 1 1 auto;
      }
    `}</style>
  </div>
);
