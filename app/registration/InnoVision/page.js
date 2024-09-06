'use client'
import ScrollingText from "@/components/ScrollingText";
import SearchableDropdown from "@/components/SearchableDropdown";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [schoolDetails, setSchoolDetails] = useState({
    state: "",
    district: "",
    school: "",
    principalName: "",
    principalPhone: "",
    principalEmail: "",
  });
  const [participants, setParticipants] = useState([]);
  const [mentor, setMentor] = useState({ name: "", phone: "", email: "" });
  const [sameAsPrincipal, setSameAsPrincipal] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState({
    tracks: [],
    platform: "",
    text: "",
  });
  const [confirmed, setConfirmed] = useState(false);
  const [file, setFile] = useState(null);




  const handleCountryChange = (e) => {
    setSelectedCountry(e);
  };

  const handleAddParticipants = (count) => {
    const newParticipants = [];
    for (let i = 0; i < count; i++) {
      newParticipants.push({ name: "", class: "", phone: "", email: "" });
    }
    setParticipants(newParticipants);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB. Please select a smaller file.");
        e.target.value = "";
      } else {
        setFile(file);
      }
    }
  };

  const handleSameAsMentorChange = (e)=>{
    setSameAsPrincipal(e.target.checked)
    e.target.checked?
    setMentor(
       {email :schoolDetails.principalEmail,
        phone:schoolDetails.principalPhone,
        name:schoolDetails.principalName}
      )
      :setMentor({ name: "", phone: "", email: "" })


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true)
    const countryCode = countries.find(
      (country) => country.name === selectedCountry
    )?.code;

    const mentorWithCountryCode = {
      ...mentor,
      phone: `${countryCode} ${mentor.phone}`,
    };

    const participantsWithCountryCode = participants.map((participant) => ({
      ...participant,
      phone: `${countryCode} ${participant.phone}`,
    }));

    const principalPhoneWithCode = `${countryCode} ${schoolDetails.principalPhone}`;

    const fileContent = await toBase64(file);
    const payload = {
      eventName: "InnoVision",
      team: participantsWithCountryCode,
      state: schoolDetails.state,
      district: schoolDetails.district,
      school: schoolDetails.school,
      principalName: schoolDetails.principalName,
      principalPhone: principalPhoneWithCode,
      principalEmail: schoolDetails.principalEmail,
      nationality: selectedCountry,
      confirmed: false,
      mentor: mentorWithCountryCode,
      tracksInterested: additionalInfo.tracks,
      howDidYouHearAboutUs: {
        platform: additionalInfo.platform,
        text: additionalInfo.text,
      },
      fileType: file.type,
      fileContent: fileContent.split(",")[1],
    };
    
    if(((selectedCountry=="India" && schoolDetails.state!="" && schoolDetails.district!="")|| selectedCountry!="India")){
    try {
      const response = await fetch("/api/RegisterTeam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer dafjiuodsahufihadsiouafguyadshgfhuiadshfujihsuiadhfjdsahiufgjsaikofhuidshfguasfhiuodhsaiofhbndsaiuafghiodasuhfuyiasfghjmnadsjkvhbuyxchfklawnfeiu2817478345645923u68342ty6766438974hsdawvcmsdanhfiudhsuf`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Registration successful");
        router.push("/");
      } else {
        alert("please fill all the details correctly")
        setButtonDisabled(false)
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("please fill all the details correctly")
      setButtonDisabled(false)
    }
  }else{
    alert("please fill all the details correctly")
  }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <ScrollingText notifiaction={"Registring NOW "} className="bg-blue-50" />
      <div className="flex justify-center w-full  min-h-screen bg-blue-50 p-6 text-black">
        <form
          className="bg-blue-50 p-6 bg-blue w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Register For InnoVision
          </h2>

          {/* <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            className="w-full border rounded p-2 text-sm"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div> */}
          <div className="sm:flex  w-full">
            <div className="sm:w-1/3 sm:mr-5 w-full mt-3 sm:mt-0">
          <SearchableDropdown
            list={countries.map((item) => item.name)}
            handleListSelect={(country) => {
              handleCountryChange(country);
            }}
            listName={"Country"}
          />
          </div>
          {selectedCountry === "India" && (
                    <>
                      {/* <div className="flex flex-col sm:mr-5 sm:w-1/4">
                        <label className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <select
                          className=" border rounded p-2 text-sm"
                          type="text"
                          value={schoolDetails.state}
                          onChange={(e) =>
                            setSchoolDetails({
                              ...schoolDetails,
                              state: e.target.value,
                            })
                          }
                        >
                          <option value="">Select State</option>
                          {indianStates.map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div> */}
                      <div className="flex flex-col sm:mr-5 sm:w-1/4 mt-3 sm:mt-0">
                      <SearchableDropdown
                        list={indianStates}
                        handleListSelect={(state) =>
                          setSchoolDetails({
                            ...schoolDetails,
                            state: state,
                          })
                        }
                        listName={"State"}
                        className="flex flex-col sm:mr-5 sm:w-1/4"
                      />
                      </div>

                      <div className="flex flex-col sm:mr-5 sm:w-1/4 mt-3 sm:mt-0">
                        <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-800">*</span>District
                        </label>
                        <input
                          className="w-full border rounded p-2 text-sm"
                          type="text"
                          value={schoolDetails.district}
                          onChange={(e) =>
                            setSchoolDetails({
                              ...schoolDetails,
                              district: e.target.value,
                            })
                          }
                        />
                      </div>
                    </>
                  )}
          </div>

          {selectedCountry && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">School Details</h3>
              <div className="flex flex-col">
                <div className="sm:flex">
                  

                  <div className="flex flex-col sm:mr-5 sm:w-1/4 ">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Name of the School
                    </label>
                    <input
                      className="border rounded p-2 text-sm"
                      type="text"
                      value={schoolDetails.school}
                      onChange={(e) =>
                        setSchoolDetails({
                          ...schoolDetails,
                          school: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  {/* principal details */}

                  <div className="space-y-2 mt-5">
                    <h3 className="text-lg font-semibold">Principal Details</h3>
                    <div className="sm:flex">
                      <div className="flex flex-col sm:mr-5 sm:w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-800">*</span>Full Name
                        </label>
                        <input
                          className="w-full border rounded p-2 text-sm"
                          type="text"
                          value={schoolDetails.principalName}
                          onChange={(e) =>
                            setSchoolDetails({
                              ...schoolDetails,
                              principalName: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="flex flex-col sm:mr-5 sm:w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-800">*</span>Phone
                        </label>

                        <div className=" flex ">
                          <div className="border rounded p-2 text-sm flex justify-center items-center">
                            {countries.find(
                              (country) => country.name === selectedCountry
                            )?.code || "+00"}
                          </div>
                          <input
                            className="w-full border rounded p-2 text-sm"
                            type="phone"
                            value={schoolDetails.principalPhone}
                            onChange={(e) =>
                              setSchoolDetails({
                                ...schoolDetails,
                                principalPhone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:mr-5 sm:w-1/3">
                        <label className="block text-sm font-medium text-gray-700">
                        <span className="text-red-800">*</span>Email
                        </label>
                        <input
                          className="w-full border rounded p-2 text-sm"
                          type="email"
                          value={schoolDetails.email}
                          onChange={(e) =>
                            setSchoolDetails({
                              ...schoolDetails,
                              principalEmail: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {schoolDetails.school &&
            schoolDetails.principalName &&
            schoolDetails.principalPhone &&
            schoolDetails.principalEmail && (

              <div className="space-y-2">
                                                  <h3 className="text-xl font-semibold">Student Details</h3>

                <label className="block text-sm font-medium text-gray-700">
                <span className="text-red-800">*</span>Number of Students
                </label>
                <select
                  className="w-1/5 border rounded p-2 text-sm"
                  onChange={(e) => handleAddParticipants(e.target.value)}
                >
                  <option value="">Select</option>
                  {[1, 2, 3].map((num, idx) => (
                    <option key={idx} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            )}

          {participants.length > 0 &&
            participants.map((participant, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-md font-semibold">Student {index + 1}</h4>
                <div className="sm:flex ">
                  <div className="flex flex-col sm:mr-5 sm:w-1/4">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Full Name
                    </label>
                    <input
                      className=" border rounded p-2 text-sm"
                      type="text"
                      value={participant.name}
                      onChange={(e) =>
                        setParticipants(
                          participants.map((p, i) =>
                            i === index ? { ...p, name: e.target.value } : p
                          )
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col sm:mr-5 sm:w-1/5">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Class
                    </label>
                    <select
                      className="border rounded p-2 text-sm"
                      value={participant.class}
                      onChange={(e) =>
                        setParticipants(
                          participants.map((p, i) =>
                            i === index ? { ...p, class: e.target.value } : p
                          )
                        )
                      }
                    >
                      <option value="">Select Class</option>
                      {[11, 12].map((cls, idx) => (
                        <option key={idx} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col sm:mr-5 sm:w-1/3 ">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Phone
                    </label>
                    <div className=" flex ">
                      <div className="border rounded p-2 text-sm flex justify-center  items-center">
                        {countries.find(
                          (country) => country.name === selectedCountry
                        )?.code || "+00"}
                      </div>

                      <input
                        className=" border w-full rounded p-2 text-sm"
                        type="phone"
                        value={participant.phone}
                        onChange={(e) =>
                          setParticipants(
                            participants.map((p, i) =>
                              i === index ? { ...p, phone: e.target.value } : p
                            )
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:mr-5 sm:w-1/4">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Email
                    </label>
                    <input
                      className=" border rounded p-2 text-sm"
                      type="email"
                      value={participant.email}
                      onChange={(e) =>
                        setParticipants(
                          participants.map((p, i) =>
                            i === index ? { ...p, email: e.target.value } : p
                          )
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}

          {participants.length > 0 &&
            participants.every(
              (p) => p.name && p.class && p.phone && p.email
            ) && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Mentor Details</h3>
                <label className=" text-sm font-medium text-gray-700 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={sameAsPrincipal}
                  onChange={(e) => {handleSameAsMentorChange(e)}}
                />
                Same as Principal Details
              </label>
                <div className="sm:flex">
                  <div className="flex flex-col sm:mr-5 sm:w-1/3">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Full Name
                    </label>
                    <input
                      className="w-full border rounded p-2 text-sm"
                      type="text"
                      value={mentor.name}
                      onChange={(e) =>
                        setMentor({ ...mentor, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex flex-col sm:mr-5 sm:w-1/3">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Phone
                    </label>

                    <div className=" flex ">
                      <div className="border rounded p-2 text-sm flex justify-center items-center">
                        {countries.find(
                          (country) => country.name === selectedCountry
                        )?.code || "+00"}
                      </div>
                      <input
                        className="w-full border rounded p-2 text-sm"
                        type="phone"
                        value={mentor.phone}
                        onChange={(e) =>
                          setMentor({ ...mentor, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:mr-5 sm:w-1/3">
                    <label className="block text-sm font-medium text-gray-700">
                    <span className="text-red-800">*</span>Email
                    </label>
                    <input
                      className="w-full border rounded p-2 text-sm"
                      type="email"
                      value={mentor.email}
                      onChange={(e) =>
                        setMentor({ ...mentor, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}

          {mentor.name && mentor.phone && mentor.email && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-800">*</span>Tracks Interested
              </label>
              {tracks.map((track, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={additionalInfo.tracks.includes(track)}
                    value={track}
                    onChange={(e) =>
                      setAdditionalInfo({
                        ...additionalInfo,
                        tracks: additionalInfo.tracks.includes(e.target.value)
                          ? additionalInfo.tracks.filter(
                              (t) => t !== e.target.value
                            )
                          : [...additionalInfo.tracks, e.target.value],
                      })
                    }
                  />
                  <label className="ml-2">{track}</label>
                </div>
              ))}

              <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-800">*</span>How Did You Hear About Us?
              </label>
              <select
                className="w-1/4 border rounded p-2 text-sm"
                onChange={(e) =>
                  setAdditionalInfo({
                    ...additionalInfo,
                    platform: e.target.value,
                    text: howDidYouHearList.find(
                      (p) => p.platform === e.target.value
                    )?.textRequired
                      ? ""
                      : additionalInfo.text,
                  })
                }
              >
                <option value="">Select Platform</option>
                {howDidYouHearList.map((platform, idx) => (
                  <option key={idx} value={platform.platform}>
                    {platform.platform}
                  </option>
                ))}
              </select>

              {additionalInfo.platform &&
                howDidYouHearList.find(
                  (p) => p.platform === additionalInfo.platform
                )?.textRequired && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">
                      Please Specify
                    </label>
                    <input
                      className="w-full border rounded p-2 text-sm"
                      type="text"
                      value={additionalInfo.text}
                      onChange={(e) =>
                        setAdditionalInfo({
                          ...additionalInfo,
                          text: e.target.value,
                        })
                      }
                    />
                  </>
                )}
            </div>
          )}

          {additionalInfo.platform && additionalInfo.tracks.length > 0 && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
              <span className="text-red-800">*</span>Upload Receipt (max 5MB, jpg/pdf/jpeg/png)
              </label>
              <input
                className="w-full border rounded p-2 text-sm"
                type="file"
                accept=".jpg,.jpeg,.pdf,.png"
                onChange={handleFileChange}
              />

              <label className=" text-sm font-medium text-gray-700 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                />
                I confirm that I am the mentor for this team, and I have filled
                out this application form on behalf of the students.
              </label>
              <div className="flex justify-center">
                <button
                  className={` px-6 py-3 mx-5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 ${
                    !confirmed ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={!confirmed}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://feebook.southindianbank.com/FeeBookUser/userhome"
                    );
                  }}
                  target="_blank"
                >
                  Make Payment
                </button>

                <button
                  className={` px-6 py-3 mx-5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 ${
                    !confirmed || !file ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={!confirmed && !file && buttonDisabled}
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

const countries = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Barbados", code: "+1-246" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Cape Verde", code: "+238" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo (Brazzaville)", code: "+242" },
  { name: "Congo (Kinshasa)", code: "+243" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar (Burma)", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Korea", code: "+850" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts and Nevis", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Timor-Leste", code: "+670" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+379" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const tracks = [
  "Sustainability",
  "Technology",
  "AI",
  "Analytics",
  "Education",
  "Entrepreneurship",
  "Social Impact",
  "Others",
];

const howDidYouHearList = [
  { platform: "LinkedIn", textRequired: false },
  { platform: "Facebook", textRequired: false },
  { platform: "Instagram", textRequired: false },
  { platform: "CHRIST Faculty", textRequired: true },
  { platform: "CHRIST Students", textRequired: true },
  { platform: "Other", textRequired: true },
];

export default Page;
