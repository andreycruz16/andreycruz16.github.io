import { useEffect, useState } from "react";

const REDIRECT_URL = "https://markandrey.vercel.app";
const REDIRECT_SECONDS = 5;
const isRootPath = () => {
  const { pathname } = window.location;
  return pathname === "/" || pathname === "/index.html";
};

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);
  const [redirectEnabled] = useState(() => isRootPath());

  useEffect(() => {
    if (!redirectEnabled) {
      return undefined;
    }

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(countdownTimer);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    const redirectTimer = window.setTimeout(() => {
      window.location.assign(REDIRECT_URL);
    }, REDIRECT_SECONDS * 1000);

    return () => {
      window.clearInterval(countdownTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [redirectEnabled]);

  if (!redirectEnabled) {
    return (
      <main className="shell">
        <section className="card">
          <p className="eyebrow">Direct page access</p>
          <h1>Redirection is disabled on this path.</h1>
          <p className="copy">
            Only the root URL redirects to the current site.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="shell">
      <section className="card" aria-live="polite">
        <p className="eyebrow">Redirect notice</p>
        <h1>Redirecting in {secondsLeft} second{secondsLeft === 1 ? "" : "s"}</h1>
        <p className="copy">
          This site now lives on{" "}
          <a href={REDIRECT_URL}>{REDIRECT_URL.replace("https://", "")}</a>.
        </p>
        <a className="button" href={REDIRECT_URL}>
          Go now
        </a>
      </section>
    </main>
  );
}
