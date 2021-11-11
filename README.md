# <img src="https://i.imgur.com/DAYNWrR.png" alt="Google Keep Clone" width="240"/>

## 簡介

✨ [DEMO](https://durable-matter-327719.web.app/)✨
🥳 仿 GOOGLE KEEP 服務的全端記事 App，歡迎點選登入頁 ![](https://i.imgur.com/VubeeWu.png =15%x) 立即體驗！
🥳 你可以使用社群帳號註冊登入，並設定偏好的主題或檢視模式。
🥳 記事提供一般與清單雙編輯模式，可以新增自訂分類標籤，並設定記事顏色、排序任務、上傳圖片、新增預覽網址等...
🥳 能固定重要或封存不想顯示的記事，並提供多種搜尋篩選模式，簡單歸類輕鬆找。

## 使用工具

#### 前端

🧰 [React](https://create-react-app.dev/) - 前端架構使用 hook 進行畫面與資料處理
🧰 [React router dom](https://www.npmjs.com/package/react-router-dom) - 管理頁面路由
🧰 [styled-components](https://styled-components.com/) - 元件化樣式並搭配 CSS 變數管理
🧰 [Axios](https://github.com/axios/axios) - API 呼叫與管理
🧰 [Redux Toolkit](https://redux-toolkit.js.org/) - 處理記事與標籤資料
🧰 [react-contenteditable](https://www.npmjs.com/package/react-contenteditable) - 記事內文編輯
🧰 [autolinker](https://www.npmjs.com/package/autolinker) - 擷取內文網址連結
🧰 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - 任務清單拖拉與排列
🧰 [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton) - loading 畫面製作

#### 後端

🔩 [Express](https://expressjs.com/) - 後端架構
🔩 [mongoose](https://mongoosejs.com/) - 連接操作 MongoDB Atlas 資料庫
🔩 [bcryptjs](https://www.npmjs.com/package/bcryptjs) - 加密處理密碼
🔩 [Passport.js](http://www.passportjs.org/) - 註冊與驗證使用者權限
🔩 [passport-jwt](https://www.npmjs.com/package/passport-jwt) + [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - 信箱密碼登入註冊會員
🔩 [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20) - OAuth 登入註冊會員
🔩 [multer](https://github.com/expressjs/multer) - 處理用戶上傳圖片檔案

## 特點

#### 💡 註冊登入

- 提供自訂帳密與 Google 帳號二種登入方式
- 自動登入、自動登出功能（token 期限為 10 天）

<img src="https://i.imgur.com/0EhOpRl.gif" alt="" width="30%"/>

#### 💡 客製化樣式

- 固定 ⇄ 收縮 選單
- 格狀 ⇄ 清單 檢視模式
- 日間 🌞 ⇄ 夜間 🌚 檢視模式

![](https://i.imgur.com/NncQHYs.gif)

#### 💡 多元搜尋模式

- 關鍵字搜尋：搜尋記事標題、內容、清單列表
- 類型搜尋：搜尋包含清單/包含圖片/包含連結之記事
- 標籤搜尋：搜尋自定義分類標籤
- 顏色搜尋：搜尋特定顏色記事

<img src="https://i.imgur.com/jSYdmqF.gif" alt=""/>

#### 💡 新增編輯自定義分類

- 側欄編輯標籤鈕可以新增、刪除、修改分類標籤
- 編輯記事可搜尋特定標籤，若無符合標籤可直接於記事新增

![](https://i.imgur.com/yqf6Wdh.gif)

#### 💡 新增記事

- 新增記事標題、內文
- 選擇記事背景色 🎨
- 選擇記事標籤 🏷️
- 切換清單模式，拖拉排序、勾選、刪除清單項目
- 新增、刪除預覽連結 🔗
- 上傳、刪除圖片 🖼️
- 固定記事 📌
- 封存記事 📁

![](https://i.imgur.com/TnlEyxG.gif)

#### 💡 編輯、刪除記事

- 點選記事卡片外層可以編輯顏色、標籤、建立副本、封存、刪除記事
- 點開卡可以編輯卡片內容，新增記事的功能這裡通通能做

![](https://i.imgur.com/CuRWffz.gif)
