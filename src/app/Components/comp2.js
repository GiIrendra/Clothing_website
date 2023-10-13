import React from "react";
import desig from "../styl.module.css";
import Image from "next/image";

const comp2 = () => {
  return (
    <>
    <div className={desig.comp2}>
        <div className="subComp21">
            hello its me 
        </div>
        <div className="subComp22">
            hello its comp 2
        </div>
        <div className={desig.subComp23}>
            <div className={desig.subComp2_3_1}>
            <Image
              src="/images/insta.png"
              width={20}
              height={20}
            />
            <Image
              src="/images/fb.png"
              width={20}
              height={20}
            />
            <Image
              src="/images/twitter.png"
              width={20}
              height={20}
            />
            <Image
              src="/images/medium.png"
              width={20}
              height={20}
            />
            </div>
            <div className={desig.subComp2_3_2}>
              <ul>
                <li>
                  Sitemap
                </li>
                <li>
                  Term of Service 
                </li>
                <li>
                  Privecy Policy
                </li>
              </ul>
            </div>
        </div>

    </div>
    </>
  )
}

export default comp2
