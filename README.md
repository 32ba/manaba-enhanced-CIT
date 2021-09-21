# manaba Enhanced for CIT

Make your manaba a little bit more comfortable.

このソフトウェアは「manaba Enhanced for Tsukuba」を千葉工業大学向けにリビルドしたものです。
mkobayashime氏に感謝いたします。

フォーク元: https://github.com/mkobayashime/manaba-enhanced

**For students of Chiba Institute of Technology.**

## Supported Univ. / 対応大学
- Chiba Institute of Technology / 千葉工業大学

If you want to use it in your univ., please follow the [instruction](https://github.com/32ba/manaba-enhanced-CIT#how-to-add-support-for-your-univ) below. 

## Features

1. Assignments will be colored according to the time to the deadline.

    Red: 1 day remaining  
    Yellow: 3 days remaining  
    Green: 7 days remaining

1. The report entered in the report input screen will be auto-saved, and not disappear even if the page is closed.

1. Highlight the publication deadline of course newses and course contents.

1. Remove the confirmation dialogue when you click links.

## Changes from the original
The following functions have been removed because they do not exist in Chiba Institute of Technology's manaba.

1. Enable filtering of courses in mypage by terms/modules.

1. Add a context menu to open the attend code in Respon.

## 機能

1. マイページに表示される課題一覧を、締切までの時間によって色分けします

    赤: 期限まであと1日  
    黄: 期限まであと3日  
    緑: 期限まであと7日

1. レポート入力画面で入力しているレポートを自動保存し、ページを閉じても消えないようにします

1. コースニュースやコンテンツの公開期限を強調表示します

1. 外部リンクをクリックした際の確認ダイアログを取り除きます

## Fork元からの変更点
以下の機能が千葉工業大学のmanabaには存在しない為、削除されています。

1. 出席コードをResponで開く右クリックメニューを追加します

1. マイページのコースをモジュールでフィルターする機能を追加します

## Disclaimer / 免責事項

This is an unofficial software and has nothing to do with the administration of the Chiba Institute of Technology.

We will not be held responsible for any damages and troubles caused by this software.

これは大学非公式のソフトウェアであり、千葉工業大学とは無関係です

私達はこのソフトウェアを利用したことによるいかなる損害、トラブルに対する責任を負いません

## Development

```
make // Install dependencies

make watch // Run in dev mode

make build // When the app is ready to publish in store

make format // Run Prettier

make lint // Run ESLint

make typecheck // Run typecheck
```

## How to add support for your univ.

If your univ. is using manaba and there is *Assignments* tab in the mypage, please follow the instruction below to use this extension.

1. Fork this repository.
1. Replace `matches` of `content_scripts` in `manifest.json` with the url of manaba of your univ..
1. Build and install in Chrome.  

あなたの大学がmanabaを導入しており、マイページに「未提出課題」タブが存在する場合、以下の手順で対応が可能です。

1. このレポジトリをフォークする。
1. `manifest.json`に記述されている`content_scripts`の`matches`をあなたの大学のmanabaのURLに変更する。
1. ビルドしChromeにインストールする。  

## Contribution

Suggestions and pull requests are welcomed!

## License

[MIT License](./LICENSE)