# 🎟️ RushLess - Smart Crowd Management

**Live Demo:** [https://spectacular-salamander-a6f0b0.netlify.app/](https://spectacular-salamander-a6f0b0.netlify.app/)

RushLess is a premium, real-time crowd management web application designed for campus facilities (like the Mess, Sports Complex, and Library). It replaces traditional ID card scanning or manual logbooks with secure Google Authentication, dynamic Apple Watch-style QR codes, and a blazing-fast Firebase backend.

---

## 🚀 How to Use RushLess

### For Students
1. **Login:** Open the live link and click **Sign in with Google**. You must use your valid `@iitj.ac.in` email address. The app automatically extracts your Roll Number.
2. **Select Facility:** Browse the live dashboard. You can dive into specific buildings (e.g., `Sports Complex` → `Badminton` → `Court 4`) and see exactly how many people are currently inside.
3. **Generate Pass:** Select your destination to generate a secure, animated QR code. 
4. **Active Passes:** Once scanned in by an operator, return to the Home dashboard. You'll see an **"Active Pass"** shortcut card showing how long you've been inside and allowing you to quickly pull your QR code back up for checkout.

### For Facility Operators
1. **Access Scanner:** On the initial login screen, click the **📸 Open Scanner Mode** button.
2. **Authenticate:** Enter the Operator Secret Phrase (managed securely in Firebase `admin_secret`).
3. **Scan Users:** Point the camera at a student's animated QR ticket. 
   - **First Scan:** Automatically checks the student **IN**, increments the live facility count, and triggers a green success badge.
   - **Second Scan:** Automatically checks the student **OUT**, decrements the live facility count, shows the duration of their visit, and triggers an orange departure badge.

---

## ✨ Key Features & Premium UI

### 🔒 Security & Authentication
- **Verified Google Sign-In:** Strictly limited to the `@iitj.ac.in` domain. Non-institute emails are instantly rejected.
- **Operator Protection:** Scanner mode is completely hidden from logged-in students and protected by a realtime Firebase-synced secret password.


### 📊 Real-Time Dynamic Dashboard
- **Live Headcounts:** See exactly how many people are inside any location before you go.
- **Deep Nesting:** Supports infinite facility nesting (e.g., separating Badminton into 8 distinct courts, Table Tennis into 4 courts, Squash into 2 courts, etc.).
- **Active Passes:** Smart dashboard tracking instantly surfaces your active check-ins so you never forget your court number or desk.

### Micro-interactions
- **Dynamic Fun Facts:** Checking out calculates and displays a personalized fun fact on the success overlay, such as:
  - **Session Duration:** *"💡 Fun Fact: You just spent 45 minutes here!"*
  - **Frequency:** *"💡 Fun Fact: This is your 5th time at the gym this week!"*
  - **Time of Day:** *"💡 Fun Fact: You're an early bird! Only 10% of users hit the gym before 7 AM."*
  - **Crowd Comparison:** *"💡 Fun Fact: You stayed longer than 80% of people at the Mess today."*

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** Pure HTML5, CSS3, and Vanilla JavaScript. (Zero framework bloat for instant loading).
- **Backend:** Firebase Realtime Database.
  - `/counts`: Tracks the live current headcount of every specific facility.
  - `/active_users`: Tracks the exact users currently inside a location, alongside their exact millisecond check-in timestamps.
  - `admin_secret`: Stores the secure phrase required to access the HTML5 QR camera scanner.
- **Auth:** Firebase Authentication (Google Auth Provider).



