"use client";

import { useEffect, useState } from "react";

const myPromises = [
  { title: "To choose you, even from far away", text: "I promise that distance will never make you feel forgotten. I will keep choosing you in the ordinary days, the difficult days, and every beautiful day in between." },
  { title: "To communicate, not disappear", text: "I promise to talk to you honestly. When life gets busy, I will communicate instead of leaving you wondering. I will make time for our calls, our messages, our little updates, and our conversations that somehow turn into hours." },
  { title: "To give you my loyalty", text: "I promise to protect what we are building. My attention, my intentions, and my heart will not be playing games behind your back. I want you to feel secure with me, not suspicious of me." },
  { title: "To respect your heart", text: "I promise to respect your boundaries, your opinions, your choices, your dreams, your family, and the person you are becoming. Loving you should never mean controlling you." },
  { title: "To be soft with you", text: "I promise to remember that you are someone I love, not someone I need to defeat in an argument. Even when we disagree, I will try to speak with patience, kindness, and softness." },
  { title: "To trust you", text: "I promise to build trust instead of demanding it. I will not punish you for things you did not do, and I will give you the honesty and consistency that make trust feel safe." },
  { title: "To make time for you", text: "I promise that 'I'm busy' will never become an excuse for making you feel unimportant. I will make room for you because you are part of my life, not an interruption to it." },
  { title: "To keep growing with you", text: "I promise to keep becoming a better man—not only for myself, but for the future we may build together. I want us to grow without growing apart." }
];

const herPromises = [
  { title: "Communicate with me", text: "Promise me that when something is wrong, you will tell me instead of silently carrying it alone. Let us talk through the distance, not let the distance talk for us." },
  { title: "Give me your time", text: "I don't need every minute of your day. I just want some of your real time—the little calls, random texts, good mornings, good nights, and moments where it feels like we're together." },
  { title: "Be loyal to us", text: "Promise me that while we are apart, you will protect the relationship we chose. No secret games, no unnecessary situations, no making each other compete for a place we already promised to give each other." },
  { title: "Respect me", text: "Promise me that even when we disagree, you will never intentionally make me feel small. Let respect remain the floor beneath everything we build." },
  { title: "Stay soft with me", text: "Promise me that your heart will remain gentle with mine. When I miss you, when I'm tired, when I'm insecure, give me reassurance before judgment. Let home be something we feel in each other." },
  { title: "Trust me", text: "Promise me that you will trust what we are building. Ask me when you are unsure. Talk to me before assuming. Let honesty be stronger than fear." },
  { title: "Don't let distance become an excuse", text: "Promise me that the miles will be a challenge we face together, not a reason to stop trying. Even on the hardest days, let's remember why we started." },
  { title: "Keep choosing us", text: "Promise me that when life changes, you will still make an effort to find me in it. I don't need perfection. I need consistency, honesty, effort, and a heart that still says, 'I'm here.'" }
];

const whyYou = [
  { title: "You feel like home", text: "There is something about talking to you that makes the world feel a little quieter. I can be myself with you, and that matters more than perfect words." },
  { title: "I love your little things", text: "It isn't only the big moments. It is your random messages, your laugh, the way you react to things, and all the tiny details that slowly became special to me." },
  { title: "You make me want to grow", text: "I don't want to love you while staying the same person. You make me think about the man I want to become and the kind of relationship I want to build." },
  { title: "I choose the real you", text: "Not an imaginary perfect version. You—with your moods, dreams, fears, softness, stubborn moments and beautiful imperfections." }
];

const distanceRules = [
  "We talk before we assume.",
  "We don't use silence as punishment.",
  "Busy is okay. Disappearing without communication isn't.",
  "We protect each other's trust.",
  "We make time, even when the day is messy.",
  "We remember that we're on the same team."
];

export default function Home() {
  const [showLetter, setShowLetter] = useState(false);
  const [time, setTime] = useState("");
  const [missMessage, setMissMessage] = useState(false);
  const [secret, setSecret] = useState(false);

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const openLetter = () => {
    setShowLetter(true);
    setTimeout(() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <main className="lovePage">
      <div className="aurora auroraOne" />
      <div className="aurora auroraTwo" />
      <div className="floatingHearts" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, index) => <span key={index} style={{ "--i": index }}>♥</span>)}
      </div>

      {!showLetter ? (
        <section className="letterLanding">
          <div className="envelope">
            <div className="miniHeart">♡</div>
            <p className="eyebrow">OPEN WHEN YOU&apos;RE READY, MI AMORCITO</p>
            <h1>A letter<br />for you.</h1>
            <p>Not just a proposal. Not just pretty words. A little promise from my heart to yours.</p>
            <button className="primary openLetter" onClick={openLetter}>Open my heart <span>♡</span></button>
            <div className="scrollHint">there&apos;s something I want you to know</div>
          </div>
        </section>
      ) : (
        <>
          <section className="loveHero">
            <p className="eyebrow">FOR THE GIRL I CALL MI AMORCITO</p>
            <h1>Hey, <em>Mi Amorcito.</em></h1>
            <div className="heroHeart">♥</div>
            <p className="heroSub">If distance is the price of finding something real, I&apos;ll learn every mile.</p>
          </section>

          <article className="letter" id="letter">
            <p className="salutation">Mi Amorcito,</p>
            <p>I don't know if a website can properly explain what I feel for you, but I'm going to try anyway. Because sometimes the heart has too much to say, and a simple <strong>&quot;I love you&quot;</strong> doesn't feel like enough.</p>
            <p>I want you to know that if we choose each other, I'm not choosing only the easy days. I'm choosing the late-night conversations, the missed calls, the moments when we miss each other badly, the days when life gets busy, and all the little moments that will make the distance feel smaller.</p>
            <p>We may be far from each other physically, but I don't want you to ever feel far from my heart. I want to know how your day went. I want to hear the random stories. I want your good mornings, your sleepy good nights, your laughter, your silence when you need it, and even those little &quot;guess what happened?&quot; messages.</p>
            <div className="quote"><span>“</span>I don't promise that loving from a distance will always be easy. I promise that you won't have to carry the distance alone.<span>”</span></div>
            <p>I want us to build something where communication is normal, loyalty is natural, respect is constant, softness is safe, and trust is something we grow together—not something we demand from each other.</p>
            <p>So before we call this ours, these are the promises I want to make to you. And beside them are the promises I hope you will make to me—not because love should feel like a contract, but because beautiful relationships deserve beautiful intentions.</p>
            <div className="signature"><span>With all my heart,</span><strong>Your man. ❤️</strong></div>
          </article>

          <section className="promiseSection">
            <div className="sectionIntro">
              <p className="eyebrow">WHY YOU</p>
              <h2>Why I choose <em>you.</em></h2>
              <p>Not because you are perfect. Because somewhere along the way, you became someone I genuinely don't want to do life without.</p>
            </div>
            <div className="promiseGrid">
              {whyYou.map((item, index) => <div className="promiseCard specialCard" key={item.title}><div className="promiseNumber">♡ 0{index + 1}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}
            </div>
          </section>

          <section className="promiseSection">
            <div className="sectionIntro">
              <p className="eyebrow">THE PROMISES I&apos;M MAKING YOU</p>
              <h2>What I promise <em>you.</em></h2>
              <p>These are not promises to sound perfect. They are promises to keep trying, keep communicating, and keep choosing you.</p>
            </div>
            <div className="promiseGrid">
              {myPromises.map((promise, index) => <div className="promiseCard" key={promise.title}><div className="promiseNumber">0{index + 1}</div><h3>{promise.title}</h3><p>{promise.text}</p></div>)}
            </div>
          </section>

          <section className="distance">
            <div className="distanceOrb">∞</div>
            <p className="eyebrow">FOR THE MILES BETWEEN US</p>
            <h2>Distance is a chapter.<br /><em>Not the ending.</em></h2>
            <p>There will be days when I wish I could simply walk over to you, hold your hand, look at you, and say everything without a screen between us. Until that day, we'll use every call, every message, every voice note and every little effort to close the gap.</p>
            <div className="ruleLine">same sky · different places · one heart</div>
          </section>

          <section className="promiseSection rulesSection">
            <div className="sectionIntro">
              <p className="eyebrow">OUR LITTLE RULES</p>
              <h2>For the days <em>apart.</em></h2>
              <p>Not rules to control each other. Just little reminders for when the miles get heavy.</p>
            </div>
            <div className="ruleGrid">
              {distanceRules.map((rule, index) => <div className="ruleCard" key={rule}><span>♡</span><p><strong>0{index + 1}</strong>{rule}</p></div>)}
            </div>
          </section>

          <section className="missSection">
            <div className="missCard">
              <p className="eyebrow">FOR THE MOMENT YOU MISS ME</p>
              <h2>When you miss your man…</h2>
              <p>Don't close this page yet.</p>
              <button className="primary" onClick={() => setMissMessage(!missMessage)}>{missMessage ? "Hide my message ♡" : "Open this when you miss me"}</button>
              <div className={"missReveal " + (missMessage ? "visible" : "")}>
                <span>♥</span>
                <p>Close your eyes for a second. Imagine me beside you, holding your hand and telling you, &quot;I'm still here.&quot; Distance can't erase the moments we've shared, and it can't decide what we become. Until I can hold you for real, let this little page remind you that somewhere out there, your man is thinking about you.</p>
                <strong>Now smile for me, Mi Amorcito. ❤️</strong>
              </div>
            </div>
          </section>

          <section className="promiseSection herSide">
            <div className="sectionIntro">
              <p className="eyebrow">AND THESE ARE THE ONES I HOPE YOU&apos;LL GIVE ME</p>
              <h2>What I hope <em>you promise.</em></h2>
              <p>You don't have to promise perfection. Promise me effort, honesty, and a heart that keeps coming back to us.</p>
            </div>
            <div className="promiseGrid">
              {herPromises.map((promise, index) => <div className="promiseCard" key={promise.title}><div className="promiseNumber">♡ 0{index + 1}</div><h3>{promise.title}</h3><p>{promise.text}</p></div>)}
            </div>
          </section>

          <section className="songMemory">
            <div className="songVinyl">♪</div>
            <p className="eyebrow">OUR LITTLE SOUNDTRACK</p>
            <h2>One day, this distance will be a <em>memory.</em></h2>
            <p>Put on the song that reminds you of us. Let it play while you read this again. One day, we'll hear it together in the same place.</p>
            <div className="songLine">our song · our story · our next chapter</div>
          </section>

          <section className="secretSection">
            <button className="secretButton" onClick={() => setSecret(!secret)}>{secret ? "You found it ❤️" : "There&apos;s one more thing… ✦"}</button>
            {secret && <div className="secretMessage"><span>♡</span><p>My favorite part of this whole page isn't the words. It's the person I made them for.</p><strong>Mi Amorcito, you are the reason I wanted to make something this soft. ❤️</strong></div>}
          </section>

          <section className="finalNote">
            <p className="eyebrow">ONE LAST THING</p>
            <h2>If it&apos;s you, <em>I&apos;ll make the distance worth it.</em></h2>
            <p>I don't want a relationship that only looks beautiful from the outside. I want the real thing—the kind where two people can be honest, vulnerable, loyal, playful, patient, and completely themselves.</p>
            <p>So if you choose me, Mi Amorcito, I will choose you too. Not once. Not only when everything feels perfect. I will choose you in the little ways, over and over again.</p>
            <div className="finalSignature"><span>Always yours,</span><strong>Mr. Patiqula ❤️</strong><small>{time}</small></div>
          </section>

          <button className="backTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
        </>
      )}
    </main>
  );
}
