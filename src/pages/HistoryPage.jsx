import { useState, useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import MuseumHero from "../components/history/MuseumHero";
import LearningArtifacts from "../components/history/LearningArtifacts";
import MuseumStats from "../components/history/MuseumStats";
import { getResults } from "../api/api";

export default function HistoryPage() {
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await getResults();
        const data = response.data;
        setResults(
          [...data].sort(
            (a, b) => new Date(b.attemptedAt) - new Date(a.attemptedAt)
          )
        );
      } catch (error) {
        console.error("Failed to fetch results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBFD]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <MuseumHero />

        <LearningArtifacts results={results} />

        <MuseumStats results={results} />
      </main>
    </div>
  );
}