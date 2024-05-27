"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {};

export default function page({}: Props) {
  const [apiPatientPrivilege, setAPIPatientPrivilege] = useState([]);
  const [SSOId, setSSOId] = useState("");
  const [PIDorPassport, setPIDorPassport] = useState("");
  const [HN, setHN] = useState("");
  const [FullName, setFullName] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [PatientInfoActiveDate, setActiveDate] = useState("");
  const [PatientInfoUpdateDate, setUpdateDate] = useState("");

  const fetchAPIPatientPrivilege = async () => {
    try {
      var ssoid = "1160100078831";
      //const response = await axios.get(`http://livetc.hc-hospital.com:52773/HCHIntraAPI/GetPatientSSO/${ssoid.trim()}`);

      const response = await axios.get(
        `http://livetc.hc-hospital.com:52773/HCHIntraAPI/GetPatientSSO/1160100078831`
      );
      setSSOId(response.data.PatientInfo.ssoid);
      setPIDorPassport(response.data.PatientInfo.PIDorPassport);
      setHN(response.data.PatientInfo.HN);
      setFullName(response.data.PatientInfo.FullName);
      setGender(response.data.PatientInfo.Gender);
      setDOB(response.data.PatientInfo.DOB);
      setActiveDate(response.data.PatientInfo.ActiveDate);
      setUpdateDate(response.data.PatientInfo.UpdateDate);
      setAPIPatientPrivilege(response.data.PatientInfo);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchAPIPatientPrivilege();
  }, []);
  const handleSubmit = async (e: React.FocusEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="card-body bg-neutral-content shadow-xl">
          <div className="flex-1 p-6">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-4">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="col-span-2 grid h-35 card bg-neutral-content card-bordered border-warning  rounded-box place-items-center shadow-xl">
                  <div></div>
                  <br></br>
                  <h3 className="text-xl">
                    ตรวจสอบสิทธิประกันสังคมโรงพยาบาลหัวเฉียว
                  </h3>
                  <br></br>
                  <div className="flex w-full justify-center">
                    <div className="grid grid-cols-4 gap-6">
                      <input
                        type="text"
                        placeholder="หมายเลขบัตรประกันสังคม"
                        className="col-span-3 input input-bordered input-neutral-content w-full max-w-xs"
                      />
                      <div className="form-control">
                        <button type="submit" className="btn btn-info">
                          ค้นหา
                        </button>
                      </div>

                      <br></br>
                    </div>
                  </div>
                </div>

                <div className="divider divider-warning text-lg">
                  รายละเอียด
                </div>
                <div className="text-lg p-8 grid grid-cols-2  gap-4 card  bg-neutral-content card-bordered border-warning rounded-box shadow-xl">
                  <label className="label font-bold md:text-center">
                    HN: {HN}
                  </label>

                  <p className=" text-start"></p>

                  <label className="label text-left md:text-center">
                    ชื่อ-นามสกุล:
                    <p className="label-text font-bold text-start">
                      {FullName}
                    </p>
                  </label>
                  <label></label>

                  <label className="label text-left md:text-center">
                    เพศ:
                    <p className="label-text font-bold text-start">{Gender}</p>
                  </label>
                  <label></label>

                  <label className="label text-left md:text-center">
                    เกิด:
                    <p className="label-text font-bold text-start">{DOB}</p>
                  </label>
                  <label></label>

                  <label className="label text-left md:text-center">
                    มีสิทธิประกันสังคมวันที่:
                    <p className="label-text font-bold text-start">
                      {PatientInfoActiveDate}
                    </p>
                  </label>
                  <label></label>
                  <label className="label-text text-center">
                    ข้อมูลเมื่อวันที่ :{PatientInfoUpdateDate}
                  </label>
                  <label></label>
                </div>
              </div>
            </div>

            {/*  
</form> */}
          </div>
        </div>
      </div>
    </>
  );
}
