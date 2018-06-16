# DB 定義書

![](monologs.png)

DB 定義書は ER フォーマットで記述し、[eralchemy](https://github.com/Alexis-benoist/eralchemy)で ER 図を生成する。

ER フォーマットについては、[erd](https://github.com/BurntSushi/erd)を参照。

## eralchemy のインストール

On Mac OS

```
brew install eralchemy
```

On Other OS

```
pip install eralchemy
```

## ER 図の生成

eralchemy をインストール後、以下のコマンドを実行し、ER 図を png で出力する。

```
$ eralchemy -i todo.er -o todo.png
```

## 参考資料

- [Python: ERAlchemy を使って ER 図を描く](http://blog.amedama.jp/entry/2017/12/30/063023)
