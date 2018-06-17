import * as React from "react";
export default () => (
  <div>
    <div className="search-todo-wrapper">
      <h2 className="search-todo-header">Todoを検索する</h2>
      <form>
        <input
          type="text"
          name="todolist-name"
          placeholder="検索したい文字列を入力してください"
        />
        <button>検索</button>
      </form>
    </div>

    <div className="search-results-wrapper">
      <h2 className="search-results-header">検索結果</h2>
      <div className="todo-search-result">
        <h3>ToDoが1件見つかりました。</h3>
        <ul className="todo-search-result-list">
          <li className="todo-search-result">
            <h4 className="todo-search-result-title">
              <a href="http://127.0.0.1:8081/detail.html">
                レポートを終わらせる
              </a>
            </h4>
            <div className="todo-search-result-info">
              <div>
                <p>リスト: レポート課題</p>
              </div>
              <div>
                <p>期限: 2016年8月15日</p>
                <p>作成日: 2016年7月14日</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>ToDoリストが2件見つかりました。</h3>
        <ul className="todo-list-search-result-list">
          <li className="todo-list-search-result">
            <h4 className="todo-list-search-result-title">
              <a href="http://127.0.0.1:8081/detail.html">買い物リスト</a>
            </h4>
            <div className="todo-list-search-result-info">
              <div />
              <div>
                <p>作成日: 2016年7月14日</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      /* 検索フォーム */

      .search-todo-wrapper > form {
        display: flex;
        padding: 10px;
      }

      .search-todo-wrapper > form > input {
        flex: 6;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }

      .search-todo-wrapper > form > button {
        flex: 1;
        font-size: 16px;
        margin: 3px;
        padding: 12px 20px;
        background-color: #c8c8c8;
        border-radius: 5px;
        color: white;
      }

      /* 検索結果 */
      .todo-search-result-info,
      .todo-list-search-result-info {
        display: flex;
      }

      .todo-search-result-info > div,
      .todo-list-search-result-info > div {
        flex: 1;
      }

      .todo-search-result-list,
      .todo-list-search-result-list {
        display: flex;
        padding: 10px;
        flex-direction: column;
      }

      .todo-search-result-list > li,
      .todo-list-search-result-list > li {
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
