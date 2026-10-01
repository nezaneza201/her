"use client";

import { useState } from "react";

const initialPromises = ["I promise to choose you.", "I promise to make you smile."];

export default function Home() {
  const [step, setStep] = useState("proposal");
  const [promises, setPromises] = useState(initialPromises);
  const [newPromise, setNewPromise] = useState("");
  const [noCount, setNoCount] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const addPromise = () => {
    const value = newPromise.trim();
    if (!value) return;
    setPromises((items) => [...items, value]);
    setNewPromise("");
  };

  const sealPromises = async () => {
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/queen-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: "YES", promises }),
      });
      if (!response.ok) throw new Error();
      setStep("sealed");
    } catch {
      setError("I couldn't send the message right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (step === "sealed") {
    return (
      <main className="screen">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <section className="card sealed">
          <div className="heart bigHeart">❤️</div>
          <p className="eyebrow">PROMISES SEALED</p>
          <h1>It&apos;s official, Queen.</h1>
          <p className="lead">Your answer and our little promises have been sealed with love.</p>
          <div className="promiseList">
            {promises.map((promise, index) => (
              <div className="promise" key={index}><span>♡</span>{promise}</div>
            ))}
          </div>
          <p className="tiny">Forever starts with one little &quot;yes.&quot; 💌</p>
        </section>
      </main>
    );
  }

  if (step === "yes") {
    return (
      <main className="screen">
        <div className="confetti" aria-hidden="true">✦ ✧ ♥ ✦ ♡ ✧ ♥ ✦</div>
        <section className="card celebration">
          <div className="heart bigHeart">💗</div>
          <p className="eyebrow">SHE SAID YES</p>
          <h1>My Queen said YES!</h1>
          <p className="lead">Okay… now let&apos;s make a few promises to each other.</p>
          <button className="primary" onClick={() => setStep("promises")}>
            Make our promises <span>→</span>
          </button>
        </section>
      </main>
    );
  }

  if (step === "promises") {
    return (
      <main className="screen">
        <div className="glow glowOne" />
        <div className="glow glowTwo" />
        <section className="card promisesCard">
          <p className="eyebrow">OUR LITTLE CONTRACT</p>
          <h1>What do you promise me?</h1>
          <p className="lead">Write anything your heart wants me to remember.</p>
          <div className="promiseList">
            {promises.map((promise, index) => (
              <div className="promise" key={index}><span>♡</span>{promise}</div>
            ))}
          </div>
          <div className="composer">
            <input
              value={newPromise}
              onChange={(event) => setNewPromise(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && addPromise()}
              placeholder="I promise to..."
              maxLength={160}
            />
            <button className="add" onClick={addPromise}>+</button>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="primary" onClick={sealPromises} disabled={sending}>
            {sending ? "Sealing..." : "Seal our promises ❤️"}
          </button>
          <p className="tiny">Your answer will be sent privately to me.</p>
        </section>
      </main>
    );
  }

  const noLabels = ["NO 😭", "Are you sure? 🥺", "Really? 😭", "Think again 😭", "You can&apos;t escape ❤️"];

  return (
    <main className="screen">
      <div className="glow glowOne" />
      <div className="glow glowTwo" />
      <section className="card proposal">
        <div className="heart">♥</div>
        <p className="eyebrow">A VERY IMPORTANT QUESTION</p>
        <h1>Hey Queen…</h1>
        <p className="question">I have a question for you.</p>
        <p className="lead">Will you be my girlfriend? ❤️</p>
        <div className="actions">
          <button className="primary yes" onClick={() => setStep("yes")}>YES ❤️</button>
          <button className="secondary" onClick={() => setNoCount((count) => count + 1)}>
            {noLabels[Math.min(noCount, noLabels.length - 1)]}
          </button>
        </div>
        {noCount > 0 && (
          <p className="playful">
            {noCount < 3 ? "Come onnn, Queen 😭❤️" : "Nice try. The YES button is waiting for you. 😌"}
          </p>
        )}
      </section>
    </main>
  );
}
