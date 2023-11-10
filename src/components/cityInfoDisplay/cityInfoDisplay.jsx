import React, { useState, useEffect } from 'react';
import usePostalCode from '../../hooks/usePostalCode';
import getCityInfo from "../../services/getCityInfo";
import styles from "./cityInfoDisplay.module.css"
import AN from "../../public/assets/flags/AN.gif"
import AR from "../../public/assets/flags/AR.gif"
import CE from "../../public/assets/flags/CE.gif"
import CL from "../../public/assets/flags/CL.gif"
import CM from "../../public/assets/flags/CM.gif"
import CN from "../../public/assets/flags/CN.png"
import CT from "../../public/assets/flags/CT.gif"
import EX from "../../public/assets/flags/EX.gif"
import GA from "../../public/assets/flags/GA.gif"
import IB from "../../public/assets/flags/IB.gif"
import LO from "../../public/assets/flags/LO.png"
import M from "../../public/assets/flags/M.gif"
import ML from "../../public/assets/flags/ML.gif"
import MU from "../../public/assets/flags/MU.gif"
import NA from "../../public/assets/flags/NA.gif"
import O from "../../public/assets/flags/O.gif"
import PV from "../../public/assets/flags/PV.gif"
import S from "../../public/assets/flags/S.gif"
import VC from "../../public/assets/flags/VC.gif"



const abbreviationToImage = {
    AN: AN,
    AR: AR,
    CE: CE,
    CL: CL,
    CM: CM,
    CN: CN,
    CT: CT,
    EX: EX,
    GA: GA,
    IB: IB,
    LO: LO,
    M: M,
    ML: ML,
    MU: MU,
    NA: NA,
    O: O,
    PV: PV,
    S: S,
    VC: VC
};

export default function CityInfoDisplay() {
    const { postalCode } = usePostalCode();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        if (getCityInfo(postalCode) === "Error fetching city info") {

        } else {
            getCityInfo(postalCode).then(info => setInfo(info));
        }
    }, [postalCode]);

    return (
        <div>
            {info.map(({ state_abbreviation, place_name, state }) => (
                <div className={styles.test} key={state_abbreviation}>
                    <img className={styles.flag} src={abbreviationToImage[state_abbreviation]} alt={state_abbreviation} />
                    <div>
                        <p><b>Ciudad:</b> {place_name}</p>
                        <p><b>Comunidad:</b> {state}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
