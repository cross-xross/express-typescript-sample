# Expressアプリケーションの雛形プロジェクト

## 概要
ExpressでWebAPIを作る時の雛形プロジェクトです。  
以下の構成のプロジェクトとして使えます。

- TypeScript
- Express
- webpack
- jest

## 使い方

```bash
// TypeScriptのビルド＆サーバ起動　※ファイルに変更があれば自動で再ビルド
npm run server
// テスト
npm test
// テスト + カバレッジ取得
npm run test-with-coverage