"use client";

import { useState } from "react";

const promisesToHer = [
["Communication","I promise I will not let distance become silence. I will talk to you, listen to you, check on you, and make space for us even on busy days."],
["Loyalty","I promise to protect what we have. I will choose you when you are near and when you are far away."],
["Respect","I promise to respect your feelings, boundaries, dreams, time, and the woman you are becoming."],
["Softness","I promise to be gentle with your heart. When you are tired or hurting, I will listen before I judge."],
["Trust","I promise to ask instead of assuming, communicate instead of disappearing, and choose understanding over suspicion."],
["Your time","I promise to make time for you. Good mornings, good nights, calls, little updates and simply showing up."],
["Patience","I promise to remember that it is us against the problem, never me against you."]
];

const promisesFromHer = [
["Communication","Talk to me when you miss me, when something hurts, when you are happy, and when you need me. Don't make me guess what is happening in your heart."],
["Your time","I don't need every second of your day. I just want to feel that I have a place in it and that I am remembered."],
["Loyalty","Be loyal when nobody is watching, especially when distance makes it easy to feel alone."],
["Respect","Respect my heart, boundaries, dreams, and feelings. Even when we disagree, never forget the love underneath the argument."],
["Softness","Keep your heart soft with me. Let me come to you without being afraid that my feelings are too much."],
["Trust","Trust me enough to communicate before you doubt me. If something feels wrong, come to me and let us talk."],
["Effort","Promise that distance will never become an excuse to stop trying. We may not be in the same place, but we can keep choosing each other."]
];

function FloatingHearts() {
  return <div className="floatingHearts" aria-hidden="true">
    {["♡","♥","✦","♡","♥","✧","♡","♥"].map((h,i)=><span key={i} style={{"--i":i}}>{h}</span>)}
  </div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!open) return <main className="letterLanding"><FloatingHearts/><div className="landingGlow"/>
    <section className="envelope">
      <div className="miniHeart">♥</div><p className="eyebrow">A LETTER FOR MY QUEEN</p>
      <h1>For the girl<br/>my heart chose.</h1>
      <p>Some things are too beautiful to fit inside a text message.</p>
      <button className="primary openLetter" onClick={()=>setOpen(true)}>Open my heart <span>♡</span></button>
      <div className="scrollHint">made with love · just for you</div>
    </section>
  </main>;

  return <main className="lovePage"><FloatingHearts/><div className="aurora auroraOne"/><div className="aurora auroraTwo"/>
    <header className="loveHero"><p className="eyebrow">TO MY QUEEN</p><h1>Distance is a road.<br/><em>It is not the end.</em></h1><div className="heroHeart">♥</div><p className="heroSub">A little promise from my heart to yours.</p></header>

    <article className="letter">
      <p className="salutation">My Queen,</p>
      <p>I don't know exactly what the future will look like, and I won't pretend that loving from far away will always be easy. There will be days when I wish I could reach for your hand instead of reaching for my phone.</p>
      <p>But I don't want distance to make us strangers. I want it to teach us how to love with intention — how to communicate, trust, be patient, and keep choosing each other even when we cannot physically be together.</p>
      <p>This isn't a promise that everything will always be perfect. It's something more honest: when things get difficult, I will remember <em>why I chose you.</em></p>
      <div className="quote"><span>“</span>Two hearts do not need to live in the same place to belong to each other.<span>”</span></div>
      <p>I want to be your safe place. The person you call after the worst day, the person you tell when something beautiful happens, the person who knows your moods, dreams, fears and random thoughts — and still looks at you with softness.</p>
      <p>When distance feels heavy, I want us to remember: <strong>we are not waiting for love to begin. We are already building it.</strong></p>
      <div className="signature"><span>Always choosing you,</span><strong>Mr Patiqula ❤️</strong></div>
    </article>

    <section className="promiseSection"><div className="sectionIntro"><p className="eyebrow">MY SIDE OF THE PROMISE</p><h2>What I promise you.</h2><p>Not perfect promises. Real ones. The kind I want to live, not just say.</p></div>
      <div className="promiseGrid">{promisesToHer.map(([title,text],i)=><div className="promiseCard" key={title}><div className="promiseNumber">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}</div>
    </section>

    <section className="promiseSection herSide"><div className="sectionIntro"><p className="eyebrow">YOUR SIDE OF THE PROMISE</p><h2>What I hope you promise me.</h2><p>Not to control your heart — but to protect what we are building together.</p></div>
      <div className="promiseGrid">{promisesFromHer.map(([title,text])=><div className="promiseCard" key={title}><div className="promiseNumber">♡</div><h3>{title}</h3><p>{text}</p></div>)}</div>
    </section>

    <section className="distance"><div className="distanceOrb">∞</div><p className="eyebrow">OUR LONG-DISTANCE RULE</p><h2>Never let miles speak<br/><em>louder than us.</em></h2><p>If we miss each other, we say it. If we are hurt, we talk. If life gets busy, we communicate. If we disagree, we don't disappear. And if distance feels impossible, we remind each other why we started.</p><div className="ruleLine">communication · loyalty · trust · respect · softness · effort</div></section>

    <section className="finalNote"><div className="bigHeart">❤️</div><p className="eyebrow">ONE LAST THING</p><h2>Until the distance becomes<br/><em>“remember when we were far apart?”</em></h2><p>I will keep choosing you in the little things: good mornings, late-night calls, random “I miss you” texts, difficult conversations, quiet days, and every version of us that comes next.</p><div className="finalSignature"><span>With all my heart,</span><strong>Yours, always. ❤️</strong></div></section>

    {showTop && <button className="backTop" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>↑</button>}
  </main>;
}