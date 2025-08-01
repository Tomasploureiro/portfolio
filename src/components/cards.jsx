import "../app/globals.css";
import { FaCode, FaMobileAlt, FaPaintBrush, FaBolt } from "react-icons/fa";


const Cards = ( card ) => (
	<div className="flex border-1 border-solid border-[var(--border)] bg-[var(--bgcard)] h-[334px] flex-grow rounded-l pt-12 pb-10 pl-10 pr-10">
        <div className="flex flex-col pt-23 items-start text-left"> 
            <div className={`${card.color}`}> {card.icon} </div>
            <h2 className={`text-lg font-semibold ${card.color}`}> {card.title} </h2>
            <p className="text-sm mt-3"> {card.desc}  </p> 
        </div>
    </div>

);

export default Cards;