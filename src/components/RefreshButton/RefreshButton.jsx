import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useMatch } from "../../context/matchDetails/matchDetails";

function RefreshButton() {

    const { matches, fetchMatches } = useMatch();

    const [spinning, setSpinning] = useState(false);

    const handleClick = () => {
        setSpinning(true);
        setTimeout(() => {
            setSpinning(false);
        }, 1000);

        console.log("fetching new api data");

        fetchMatches();
    };

    return (
        <button onClick={handleClick} className="flex items-center gap-2 text-white hover:text-blue-800 cursor-pointer ms-10 ">
            <ArrowPathIcon className={`h-6 w-6 text-gray-100  shadow-white sm:h-8 sm:w-8 ${spinning ? "animate-spin" : ""}`} />
        </button>
    );
}

export default RefreshButton;
