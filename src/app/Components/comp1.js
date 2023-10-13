import React from "react";
import desig from "../styl.module.css";
import Image from "next/image";

const comp1 = () => {
  return (
    <>
      <div className={desig.comp1}>
        <div className={desig.subComp1}>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={120}
              height={90}
              style={{ borderRadius: "50%" }}
            />
            <h5>T-shirt</h5>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1687442723959-f2b967997f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzaG9ydHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
            />
            <h5>Shorts</h5>
          </div>
          <div>
            <Image
              src="https://media.istockphoto.com/id/1456313503/photo/close-up-image-of-indian-man-collapsed-on-back-in-middle-of-crumpled-bed-sheets-looking-at.jpg?s=612x612&w=0&k=20&c=H1FWbV8_7n7wDftKQmdbJi3bHosBkqXr91Ty1Yh4p10="
              width={120}
              height={120}
              style={{ borderRadius: "50%" }}
            />
            <h5>Hoodies</h5>
          </div>
          <div>
            <Image
              src="https://media.istockphoto.com/id/1301595825/photo/smiling-young-woman-jumping-and-exercising-isolated-on-pastel-background.jpg?s=612x612&w=0&k=20&c=qkcHyqWkPf51BNLu9H7eblIgrWz2nVl7j_eqTvF5odA="
              width={150}
              height={90}
              style={{ borderRadius: "50%" }}
            />
            <h5>Jogger</h5>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwa3VydGllcyUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={110}
              height={90}
              style={{ borderRadius: "50%" }}
            />
            <h5>Kurties</h5>
          </div>
        </div>
        <div className={desig.middleComp}></div>
        <div className={desig.subComp2}>
          <div className="imgDiv1">
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={400}
              height={500}
            />
          </div>
          <div className="imgDiv2">
            <Image
              src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={333}
              height={100}
            />
          </div>
          <div className="imgDiv3">
            <Image
              src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default comp1;
