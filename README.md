# Todo

シンプルな Todo 管理アプリケーションです。

## 要件

画面仕様書を参照

## 使用する技術要素

主に以下のライブラリ、フレームワーク、ツールを利用して構築を想定して居ます。

- TypeScript
- React
- Redux
- Next.js
- Express
- Mongodb

## 全体の設計・構成についての説明

アプリケーションは、モノリシックなサーバーにデプロイすることを想定して設計されています。

また、別途 DB サーバーが必要です。

### ディレクトリ構成

以下のようなディレクトリ構成を想定しています。

```
- controllers/ : apiのコントローラーのディレクトリです。
- models/      : apiのモデルのディレクトリです。
- routes/      : apiのルートのディレクトリです。
- modules/     : Redux関連モジュールが格納されています。
- containers/  : Reduxと連携するReactコンポーネントが格納されています。
- components/  : 再利用可能なReactコンポーネントが格納されています。
- pages/       : 画面単位のReactコンポーネントが格納されています。
- resources/   : apiを利用するクライアントのモジュールを格納しています。
- utils/       : UI関連のユーティリティを格納しています。
- .env         : 環境変数を管理するファイル
- server.js    : React, Next.js, Express,
```

## 開発環境のセットアップ手順

### 環境要件

- Node.js v.8.11.2
- Mongodb v.3.6.5

### インストール

このリポジトリをクローンして、以下のコマンドを実行してください。

```
$ npm install
```

### 環境変数

.env.sample をコピーして、.env ファイルを作成する。
