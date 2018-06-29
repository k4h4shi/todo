# Todo

シンプルな Todo 管理アプリケーションです。

## コマンド

```
$ npm start               # 動作確認用サーバーの起動
$ npm test                # 自動テストの実施
$ npm run dev             # 開発用サーバーの起動
$ npm run build           # 動作確認用ビルドを生成
$ npm run deploy          # 動作確認用環境へデプロイ
```

## 使用した技術要素

主に以下のライブラリ、フレームワーク、ツールを利用して構築しました。

- TypeScript
- React
- Next.js
- Express
- Mongodb

## 全体の設計・構成についての説明

React + Next.js のクライアントが、Express の API を叩くような構成です。

DB には mongodb を利用しており、Express からは Mongoose を経由で操作しています。

アプリケーションはモノリシックにデプロイする想定で実装しています。

また、アプリケーションの動作には、別途 mongodb サーバーを必要とします。

### ディレクトリ構成

以下のようなディレクトリ構成をとっています。

```
- server
  - index.ts     : Next.js, Express, Mongooseなどの設定です。
  - controllers/ : apiのコントローラーのディレクトリです。
  - models/      : apiのモデルのディレクトリです。
  - routes/      : apiのルートのディレクトリです。
- components/    : 再利用可能なReactコンポーネントが格納されています。
- config/        : 設定関連のモジュールを格納しています。
- pages/         : 画面単位のReactコンポーネントが格納されています。
- resources/     : apiを利用するクライアントのモジュールを格納しています。
- types/         : 型定義のファイルを格納しています。
- .env           : 環境変数を管理するファイル
```

#### API 関連のディレクトリ

- server/

server/以下で API を実装しています。

API は JSON を View とする MVC のような構成をとっています。

#### クライアント関連のディレクトリ

- pages/
- components/
- resources/
- config/
- types

Next.js はページ単位でコンポーネントを作っていきます。

pages/配下のコンポーネントはルートと対応しており、今回は 3 ページ(Top, 詳細, 検索)のコンポーネントを用意しています。

pages/配下のコンポーネントは、resources/配下のモジュールで API と通信し、components/配下のコンポーネントで View を構成します。

config/, types/は、各モジュールから必要に応じて依存されます。

## 独自機能について

独自機能としては、以下の仕様のタブ機能を実装しました。

### タブ機能

トップページに、ToDo リストの完了状態によって、リストを出し分けるタブを追加する。

なお、ToDo リストの完了とは、1 つ以上の Todo を持ち、リストの全ての ToDo が完了している状態の事をさす。

タブの選択肢は、以下のようにする。

#### 全て

全ての ToDo リストを表示

#### 完了済み

Todo を持ち、かつ全ての Todo が完了している Todo リストを表示

#### 未完了

Todo を持たないまたは、いずれかの ToDo が完了していない ToDo リストのみを表示

## 開発環境

開発環境は、以下の手順に剃ってセットアップしてください。

### 環境要件

- Node.js v.8.11.2
- Mongodb v.3.6.5

### チェックアウトとインストール

このリポジトリをクローンして、以下のコマンドを実行してください。

```
$ npm install
```

### 環境変数

.env.sample をコピーして、.env ファイルを作成してください。

現在の設定項目は以下です。

```
# server
PORT=3000                               # サーバーのポート
NODE_ENV="development"                  # NODE_ENV
# mongo db
MONGO_DATABASE=mongodb://localhost/todo # mongodbの接続先
```

### mongod の起動

アプリケーションを起動する前に、local で mongod を起動しておきます。

この時立ち上げた mongod への接続 URI は、前述の環境変数に設定しておいてください。

```
$ mongod
```

mongodb のコレクション等は、アプリケーションが必要に応じて作成します。

もしテストデータが必要であれば、プロジェクトルートにて以下のコマンドを実行してください。

以下のコマンドは mongodb の db 名は、todo だと想定しています。

```
mongoimport --db todo --collection todos --file ./db/dump/todos.json
mongoimport --db todo --collection todolists --file ./db/dump/todolists.json
```

### 起動

以下の環境で開発用サーバーが立ち上がります。

```
$ npm run dev
```

以下のように標準出力されていれば完了です。

```
connected to mongodb
Ready on http://localhost:3000
```

## 動作確認用環境

動作確認用環境も用意しました。

アプリケーションは、[Zeit now](https://zeit.co/now)にデプロイしており、MongoDB サーバは[mLab](https://mlab.com/)を利用しています。
