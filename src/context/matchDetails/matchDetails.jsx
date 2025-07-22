import { createContext, useContext, useEffect, useMemo, useState } from "react";
import mockMatches from "../../mockAPI/mockMatches";

const matchDetailsContext = createContext();

const API_KEYS = [
    import.meta.env.VITE_API_KEY_1,
    import.meta.env.VITE_API_KEY_2
];


export const MatchDetailsProvider = ({ children }) => {
    const [matches, setMatches] = useState({});
    const [keyIndex, setKeyIndex] = useState(0);

    async function fetchMatches() {


        // development purpose 


        // if (import.meta.env.MODE === "development") {
        //     setMatches(mockMatches);
        //     return;
        // }




        for (let i = 0; i < API_KEYS.length; i++) {
            const key = API_KEYS[i];
            try {
                const res = await fetch(
                    `https://api.cricapi.com/v1/currentMatches?apikey=${key}&offset=0`
                );
                const data = await res.json();

                if (data && !data.error && data.data && data.data.length > 0) {
                    setMatches(data);
                    setKeyIndex(i);
                    return;
                }

                console.warn(`Key ${i + 1} might be exhausted. Trying next...`);
            } catch (err) {
                console.error(`Error with key ${i + 1}:`, err);
            }
        }

        console.error("All API keys failed. Using mock data.");
        setMatches(mockMatches);
    }

    return (
        <matchDetailsContext.Provider value={{ matches, fetchMatches }}>
            {children}
        </matchDetailsContext.Provider>
    );
};

export const useMatch = () => useContext(matchDetailsContext);
