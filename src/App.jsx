import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>ホームページへようこそ！</h2>
      <p>このサイトでは様々な情報を提供しています。</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>プロフィールページ</h2>
      <p>こちらはプロフィールページです。</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>お問い合わせページ</h2>
      <p>お気軽にお問い合わせください。</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>ページが見つかりません。</h2>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/react-router-app">
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#4f46e5",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: 0 }}>MyApp</h2>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            🏠 ホーム
          </Link>

          <Link
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            👤 プロフィール
          </Link>

          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            ✉️ お問い合わせ
          </Link>
        </nav>
      </header>

      <main
        style={{
          marginTop: "90px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;