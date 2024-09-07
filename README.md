# Selenium Test Project

## 概要

本プロジェクトは、Web アプリケーションの自動テストを実現するためのものです。  
Selenium を活用し、特にログイン機能のテストを自動化しています。  
また、リグレッションテストも自動化し、アプリケーションの品質を維持します。

さらに、テスト結果はメールで送信されるため、テストの結果を迅速に確認することが可能です。  
これにより、問題が発生した場合でも、すぐに対応することができます。

主な使用技術は Node.js、Selenium WebDriver、Mocha（テストフレームワーク）、そして GitHub Actions（CI/CD）です。  
これらの技術を組み合わせることで、信頼性の高い自動テスト環境を構築しています。
テストの実行から結果の通知までを自動化し、開発の効率化を実現します。

## 前提条件

- Node.js (バージョン 20.12.2 以上)
- Google Chrome
- Chrome WebDriver

## インストール方法

このリポジトリをクローンした後、以下のコマンドを実行して依存関係をインストールします。

```bash
npm install
```

## 使用技術

- Node.js
- Selenium WebDriver
- Mocha (テストフレームワーク)
- GitHub Actions (CI/CD)

## 実行方法

テストを実行するには、以下のコマンドを使用します。

```bash
npm test
```

## GitHub Actions 環境構築

このプロジェクトは GitHub Actions を使用して自動テストが可能です。
以下のステップに従って GitHub Actions の環境を構築してください。

1. **ワークフローファイルの設定**:

   - `.github/workflows`ディレクトリにワークフローファイル（例: `selenium-tests.yml`）を配置します。
   - ワークフローファイルにはテストの実行、結果のコミット、メールでの通知などのステップが含まれています。
     ※本プロジェクトでは、https://resend.com/ を使用しているため、下記の通りに設定しています。
     使用する SMTP サーバーのホストを設定してください。
     ```
     server_address: smtp.resend.com
     ```

2. **GitHub リポジトリの設定**:
   ※2024/09/07 時点

   - リポジトリにアクセスし、`Settings` > `Secrets and variables` > `Actions`をクリックします。
   - `[New repository secret]`をクリックします。
   - 必要なシークレットを追加します。
     `RESEND_USERNAME`：任意の SMTP サーバーのユーザ名
     `RESEND_PASSWORD`：任意の SMTP サーバーの API_KRY
     `MAIL_TO`：送信先のメールアドレス
     `MAIL_FROM`：送信元アドレスのアドレス※有料の SMTP サーバーを使用するときは、ドメイン取得し、登録する必要があります。

   ※Gmail の SMTP サーバーを使用する方法 ※Google 非推奨
   Gmail の SMTP サーバーを以下の設定項目を使用します。

   - `server_address`：Gmail の SMTP サーバーアドレス：smtp.gmail.com
   - `RESEND_USERNAME`：Gmail の SMTP ユーザー名：あなたの Gmail アドレス（例：you@gmail.com）
   - `RESEND_PASSWORD`：Gmail の SMTP パスワード：アプリパスワード（ 16 文字のパスワード）
   - `server_port`:587（TLS を使用する場合）または 465（SSL を使用する場合）
   - アプリパスワードの取得方法
     1. Gmail アカウントを用意する
     2. 2 段階認証を設定する※電話番号
     3. [https://myaccount.google.com/apppasswords]にアクセスし、発行する

3. **アクションの実行**:
   - リポジトリにプッシュするか、プルリクエストを作成すると、GitHub Actions が自動的にトリガーされます。
     ※下記の箇所を変更することで、特手のブランチを対象に実行することができます
     ```
     on:
     push:
       branches:
         - main #例えば、'develop'に変更
     pull_request:
       branches:
         - main
     ```
   - アクションの実行結果は GitHub の`Actions`タブで確認できます。

## テストの実行

GitHub Actions を使用して、`main` ブランチへのプッシュまたはプルリクエスト時に自動的にテストが実行されます。
結果はリポジトリにコミットされ、指定されたメールアドレスに送信されます。
