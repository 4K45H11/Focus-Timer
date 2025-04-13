
# 🎯 Focus Timer

A minimalist **Focus Timer** web app that helps users concentrate by providing a timer with background nature sounds like **rain**, **forest**, and **lake** (piano). Built with **HTML, CSS (Bootstrap), and vanilla JavaScript**.

---

## 🚀 Features

- ⏱️ Selectable timer durations (1, 5, 10, 25, 45 minutes)
- 🎵 Ambient soundscapes: Rain, Forest, Lake (Piano)
- 🔄 Controls for play, pause, resume, reset
- 🔊 Volume control per sound
- 🔁 Background music loops automatically
- 🛑 Sounds can be paused, resumed, or reset independently
- 🔔 Bell alert with audio on timer completion

---

## 📁 File Structure

```
FocusTimer/
│
├── index.html          # Main HTML structure
├── audio.js            # Handles all music/audio controls
├── timer.js            # Implements timer logic and events
└── resources/
    ├── rain.mp3
    ├── forest.mp3
    ├── piano.mp3
    ├── bell.mp3
    ├── rain.png
    ├── forest.png
    └── piano.png
```

---

## 🧠 Code Breakdown

### 📄 `index.html`

- Responsive layout using **Bootstrap 5**
- Contains:
  - A timer display
  - Time duration selector
  - Start, pause, resume, and reset controls
  - Cards for each soundscape with image, description, and individual controls

### 🎼 `audio.js`

Handles ambient background sound logic:
- Preloads and loops audio using the `Audio()` constructor
- Manages:
  - Play, pause, resume, reset for each sound
  - Volume adjustment (`input[type="range"]`)
  - Ensures only one soundscape plays at a time
- Disables other sound options while one is playing
- Shows/hides control panels per sound

### ⏲️ `timer.js`

Handles the main timer functionality:
- Tracks elapsed time using `setInterval`
- Handles timeouts using `setTimeout`
- Provides controls to:
  - Start timer for selected duration
  - Pause/resume functionality preserving remaining time
  - Reset clears all intervals, sound alerts, and resets display
- On completion:
  - Plays a bell sound
  - Displays a congratulatory `alert`

---

## ⚙️ Technologies Used

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla)
- Audio API

---

## ✅ How to Use

1. Select a duration from the **dropdown**.
2. Click **Start** to begin the timer.
3. Click any **Play** button to start a background sound.
4. Control sound via **Pause**, **Resume**, **Reset**, and **Volume** sliders.
5. Once the timer completes, a bell sound plays, followed by an alert message.

---

## 💡 Highlights

- Designed with **focus productivity** in mind
- Clean UI with **Bootstrap** components
- Encourages mindfulness with natural sound loops
- Demonstrates:
  - Timer control using intervals/timeouts
  - Audio playback control
  - DOM interaction

---

## 📌 Possible Enhancements

- Add **dark mode** toggle
- Store user preferences in **localStorage**
- Add **progress bar** or circular timer
- Let users **upload custom soundtracks**
