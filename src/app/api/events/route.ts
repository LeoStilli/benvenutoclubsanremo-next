import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NextResponse } from "next/server";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "benvenuto-club-sanremo.firebaseapp.com",
  databaseURL:
    "https://benvenuto-club-sanremo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "benvenuto-club-sanremo",
  storageBucket: "benvenuto-club-sanremo.firebasestorage.app",
  messagingSenderId: "1051565967054",
  appId: "1:1051565967054:web:238d4f9d8badb382b0329f",
  measurementId: "G-8HCW85JKRM",
};

const app = initializeApp(firebaseConfig);

export async function GET() {
  const db = getDatabase(app);
  const reference = ref(db, "/events");

  try {
    const snapshot = await get(reference);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const events = Array.isArray(data)
        ? data.filter(Boolean)
        : Object.values(data);
      return NextResponse.json(events);
    } else {
      return NextResponse.json([], { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
