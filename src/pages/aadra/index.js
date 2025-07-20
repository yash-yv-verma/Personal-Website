import Head from 'next/head';
import { useRef, useEffect } from 'react';

export default function Aadra() {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const errorRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Set dynamic date for all blog posts
  useEffect(() => {
    const dateElems = document.querySelectorAll('.blog-date');
    if (dateElems.length > 0) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateElems.forEach(elem => {
        elem.textContent = `${yyyy}-${mm}-${dd}`;
      });
    }
  }, []);

  // Login logic
  function checkLogin(e) {
    e.preventDefault();
    const u = usernameRef.current.value.trim();
    const p = passwordRef.current.value;
    if (u === 'aadra0807' && p === 'Aadra@Sharma@2004') {
      overlayRef.current.style.display = 'none';
      contentRef.current.style.display = '';
      return false;
    } else {
      errorRef.current.textContent = 'Incorrect username or password.';
      return false;
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aadra</title>
        <style>{`
          .blog-container {
            max-width: 700px;
            margin: 40px auto;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.07);
            padding: 32px 24px;
          }
          .blog-title {
            text-align: center;
            color: #ffb9dc;
            margin-bottom: 10px;
          }
          .blog-intro {
            text-align: center;
            color: #444;
            margin-bottom: 32px;
            font-size: 1.1em;
          }
          .blog-post {
            border-left: 4px solid #ffb9dc;
            margin-bottom: 28px;
            padding-left: 18px;
            position: relative;
          }
          .blog-date {
            color: #888;
            font-size: 0.95em;
            margin-bottom: 4px;
          }
          @media (max-width: 600px) {
            .blog-container { padding: 16px 4px; }
          }
          #loginOverlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(255,255,255,0.97);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          #loginBox {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.10);
            padding: 32px 24px;
            max-width: 320px;
            width: 100%;
            text-align: center;
          }
          #loginBox input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          #loginBox button {
            background: #ffb9dc;
            color: #fff;
            border: none;
            padding: 10px 24px;
            border-radius: 4px;
            font-size: 1em;
            cursor: pointer;
          }
          #loginError {
            color: #c00;
            font-size: 0.95em;
            margin-top: 8px;
          }
        `}</style>
      </Head>
      <div id="loginOverlay" ref={overlayRef}>
        <form id="loginBox" onSubmit={checkLogin}>
          <h2 style={{ color: '#ffb9dc' }}>Login</h2>
          <input type="text" id="username" placeholder="Username" autoComplete="username" ref={usernameRef} />
          <input type="password" id="password" placeholder="Password" autoComplete="current-password" ref={passwordRef} />
          <button type="submit">Enter</button>
          <div id="loginError" ref={errorRef}></div>
        </form>
      </div>
      <div className="blog-container" style={{ display: 'none' }} id="blogContent" ref={contentRef}>
        <h1 className="blog-title">Aadra</h1>
        <div className="blog-intro">
          Hi Aadra<br />
          This is where I&rsquo;ll write you updates, thoughts, and reasons to live.<br />
          I hope you read them once in a while.
        </div>
        {/* Blog posts start here */}
        <div className="blog-post" data-post-id="2025-07-07">
          <div className="blog-date"></div>
          <div>I hope you&rsquo;re doing ok Aadra. I don&rsquo;t know deep down how much this means to you, but I wanna say that I&rsquo;m here for you. I am your advocate. 
            I do feel for you and I think from your side always. I put you in this situation, I will definetely make sure to bring you out of it as well. That&rsquo;s my promise. I am working towards that promise so it comes true. 
            That&rsquo;s all I wanted to say. Please hang in there. If you feel you need someone to talk to please just do it. We can figure out the rest later but just text me so we can help you get out of that state. Be safe Aadra. I miss you.</div>
        </div>
        <div className="blog-post" data-post-id="2025-07-05">
          <div className="blog-date"></div>
          <div>I was thinking about you. Just wanted to say hi. Hope you&rsquo;re doing ok. Just hang in there. I know things are tough. But just believe. You will feel better soon.</div>
        </div>
        <div className="blog-post" data-post-id="2025-06-30">
          <div className="blog-date"></div>
          <div>First post. This is the start of our blog.</div>
        </div>
        {/* Add new blog-post divs above this line for each new day */}
      </div>
    </>
  );
} 