const data = {
  E: { sound: "media/soundskit/808/8081.wav" },
  R: { sound: "media/soundskit/Chant/chant.wav" },
  T: { sound: "media/soundskit/Clap/Clap.wav" },
  D: { sound: "media/soundskit/HiHatAndMore/Hihat.wav" },
  F: { sound: "media/soundskit/Kick/kick.wav" },
  G: { sound: "media/soundskit/Snap/snap.wav" },
  C: { sound: "media/soundskit/Snare/snare2.wav" },
  V: { sound: "media/soundskit/HiHatAndMore/cowbell.wav" },
  B: { sound: "media/soundskit/HiHatAndMore/cymbal.wav" },
};
const construct = () => {
  for (const letter in data) {
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("drum");

    let h2 = document.createElement("h2");
    h2.textContent = letter;

    keyDiv.appendChild(h2);

    document.getElementById("musicBox").appendChild(keyDiv);

    keyDiv.addEventListener("click", (e) => {
      let letter = e.currentTarget.querySelector("h2").textContent;
      playDrum(letter);
    });
  }
};

const playDrum = (letter) => {
  const audio = new Audio();
  audio.src = data[letter].sound;
  console.log;
  audio.play();
};

construct();

//ON PRESS (faire en sorte que les touches communique)
window.addEventListener("keydown", handleKeyEvents);

function handleKeyEvents(e) {
  playDrum(e.key.toUpperCase());
}
