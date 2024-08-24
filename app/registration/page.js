'use client'
import React, { useState , useEffect } from 'react';

const page = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");
  const [showSchoolSection, setShowSchoolSection] = useState(false);
  const [formData, setFormData] = useState({
    participants: [
      { name: "", class: "", phone: "", email: "" }, 
      { name: "", class: "", phone: "", email: "" }, 
      { name: "", class: "", phone: "", email: "" }
    ],
    mentor: { name: "", phone: "", email: "" },
    state: "",
    district: "",
    school: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      if (file.size > 5 * 1024 * 1024) { 
        alert("File size exceeds 5MB. Please select a smaller file.");
        e.target.value = ""; 
      } else {
        setSelectedFile(file);
      }
    }
  };

  

  const handleNationalityChange = (e) => {
    setSelectedNationality(e.target.value);
    setShowSchoolSection(e.target.value === "India");
    checkFormCompletion();
  };

  const handleInputChange = (e, idx, field, isMentor = false) => {
    if (isMentor) {
      setFormData({ ...formData, mentor: { ...formData.mentor, [field]: e.target.value } });
    } else {
      const updatedParticipants = [...formData.participants];
      updatedParticipants[idx][field] = e.target.value;
      setFormData({ ...formData, participants: updatedParticipants });
    }
    checkFormCompletion();
  };

  const handleFormSubmit = async () => {
    const payload = {
      eventName: selectedEvent,
      nationality: selectedNationality,
      state: formData.state,
      district: formData.district,
      school: formData.school,
      team: formData.participants,
      mentor: formData.mentor,
      fileType: selectedFile.type, 
    };
  
    try {
     
      
      const response = await fetch('/api/RegisterTeam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer dafjiuodsahufihadsiouafguyadshgfhuiadshfujihsuiadhfjdsahiufgjsaikofhuidshfguasfhiuodhsaiofhbndsaiuafghiodasuhfuyiasfghjmnadsjkvhbuyxchfklawnfeiu2817478345645923u68342ty6766438974hsdawvcmsdanhfiudhsuf`
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        
        
        const uploadUrl = responseData.uploadUrl;
        
        console.log(responseData.uploadUrl)
        const fileUploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': selectedFile.type,
          },
          body: selectedFile, 
        });
  
        if (fileUploadResponse.ok) {
          alert('Registration and file upload successful!');
        } else {
          alert('Registration successful, but file upload failed.');
        }
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An unexpected error occurred.',error);
    }
  };

  const checkFormCompletion = () => {
    const areParticipantsFilled = formData.participants.every(participant =>
      participant.name !="" && participant.class !="" && participant.phone!="" && participant.email!=""
    );

    const isMentorFilled = formData.mentor.name !="" && formData.mentor.email != "" && formData.mentor.phone != ""

    const isSchoolSectionFilled = showSchoolSection
      ? formData.state!="" && formData.district!="" && formData.school!=""
      : true;

    const isFormComplete = selectedEvent!="" && selectedNationality!="" && areParticipantsFilled && isSchoolSectionFilled && isMentorFilled;
    
    setIsButtonDisabled(!isFormComplete)
    
  };

  const isFormDisabled = !selectedEvent || !selectedNationality;
  console.log(isButtonDisabled)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4 bg-blue-50">


     



{
// selectedEvent === ""
true
 && (
  <div className="mb-8 flex flex-col items-center">
    <div className="container">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10  md:space-y-0 space-y-6 justify-center">
        
        {/* InnoVision Card */}
        <div
          onClick={() => {
            setSelectedEvent("InnoVision");
          }}
          className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-xl p-3 mb-6 md:mb-0 md:mr-4"
        >
          <div className="flex flex-col text-center h-auto p-5 rounded-2xl items-center">
            <div className="w-64 mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">𝕀ℕℕ𝕆𝕍𝕀𝕊𝕀𝕆ℕ</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                An Ideathon designed for school students, where young
                innovators present their ideas to address contemporary
                issues and challenges.
              </h3>
            </div>
          </div>
        </div>
        
        {/* Hackverse Card */}
        <div
          onClick={() => {
            setSelectedEvent("Hackverse");
          }}
          className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-2xl p-3 mb-6 md:mb-0 md:mr-4"
        >
          <div className="flex flex-col text-center p-5 items-center">
            <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">ℍ𝔸ℂ𝕂𝕍𝔼ℝ𝕊𝔼</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                A Hackathon for college students, challenging participants
                to develop cutting-edge technological solutions with
                real-world applications.
              </h3>
            </div>
          </div>
        </div>
        
        {/* Conclave Card */}
        <div
          onClick={() => {
            setSelectedEvent("Conclave");
          }}
          className="md:w-1/4 mt-10 md:mt-0 flex flex-col bg-blue-100 text-center items-center rounded-xl p-3"
        >
          <div className="flex flex-col text-center p-5 rounded-2xl items-center">
            <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">ℂ𝕆ℕℂ𝕃𝔸𝕍𝔼</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                A forum for educators from schools and colleges, focused on
                discussions around sustainable practices, education
                innovation, and the future of learning.
              </h3>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
)}

      {/* {selectedEvent!="" && <div className=" flex">
      <div className="flex items-center text-black">
        <input
          type="radio"
          id="InnoVision"
          name="event"
          value="InnoVision"
          checked={selectedEvent === 'InnoVision'}
          onChange={() => setSelectedEvent('InnoVision')}
          className="mr-2"
        />
        <label
          htmlFor="InnoVision"
          className={`card ${selectedEvent === 'InnoVision' }`}
          onClick={() => setSelectedEvent('InnoVision')}
        >
          InnoVision
        </label>
      </div>

      <div className="flex items-center text-black">
        <input
          type="radio"
          id="hackverse"
          name="event"
          value="Hackverse"
          checked={selectedEvent === 'Hackverse'}
          onChange={() => setSelectedEvent('Hackverse')}
          className="mr-2"
        />
        <label
          htmlFor="hackverse"
          className={`card ${selectedEvent === 'Hackverse' }`}
          onClick={() => setSelectedEvent('Hackverse')}
        >
          Hackverse
        </label>
      </div>

      <div className="flex items-center text-black ">
        <input
          type="radio"
          id="conclave"
          name="event"
          value="Conclave"
          checked={selectedEvent === 'Conclave'}
          onChange={() => setSelectedEvent('Conclave')}
          className="mr-2"
        />
        <label
          htmlFor="conclave"
          className={`card ${selectedEvent === 'Conclave' }`}
          onClick={() => setSelectedEvent('Conclave')}
        >
          Conclave
        </label>
      </div>
    </div>} */}


{/* remove false  */}
      {false && (
        <>
          <h1 className="text-3xl font-bold text-blue-800 mb-6">Register for {selectedEvent}</h1>

          {/* Nationality Selection */}


          <div className="mb-8">
            <label className="block text-blue-800 font-semibold mb-2">Nationality</label>
            <select 
              value={selectedNationality} 
              onChange={handleNationalityChange}
              className="block w-64 p-2 border rounded-md text-blue-800 bg-white"
            >
              <option value="">Select Nationality</option>
              {countryCodes.map((country) => (
                <option key={country.name} value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>







          {/* School Details (Conditional) */}

         
            <div className="mb-8 w-full">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">School Details</h2>
              <div className="flex flex-wrap gap-4">
                {showSchoolSection && (
                  
                  <div className="w-full md:w-1/4">
                  <label className="block text-blue-800 font-semibold mb-2">State</label>
                  <select 
                    disabled={isFormDisabled}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="block w-full p-2 border rounded-md text-blue-800 bg-white"
                  >
                    <option value="">Select State</option>
                    {indianStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                )}
                {showSchoolSection&&(
                  <div className="w-full md:w-1/3">
                  <label className="block text-blue-800 font-semibold mb-2">District</label>
                  <input 
                    type="text" 
                    disabled={isFormDisabled}
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                    placeholder="Enter District"
                  />
                </div>
                
                )}
                <div className="w-full md:w-1/3">
                  <label className="block text-blue-800 font-semibold mb-2">Name of the School</label>
                  <input 
                    type="text" 
                    disabled={isFormDisabled}
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                    placeholder="Enter School Name"
                  />
                </div>
              </div>
            </div>
          







          {/* Participant Details */}
          <div className="mb-8 w-full">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Participant Details</h2>
            {formData.participants.map((participant, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg text-blue-800 font-medium mb-4">Student {idx + 1}</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="w-full md:w-1/5">
                    <label className="block text-blue-800 font-semibold mb-2">Name</label>
                    <input 
                      type="text" 
                      disabled={isFormDisabled}
                      value={participant.name}
                      onChange={(e) => handleInputChange(e, idx, 'name')}
                      className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="w-full md:w-1/12">
                    <label className="block text-blue-800 font-semibold mb-2">Class</label>
                    <input 
                      type="String" 
                      disabled={isFormDisabled}
                      value={participant.class}
                      onChange={(e) => handleInputChange(e, idx, 'class')}
                      className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                      placeholder="Class"
                    />
                  </div>
                  <div className="w-full md:w-1/6">
                    <label className="block text-blue-800 font-semibold mb-2">Phone Number</label>
                    <div className="flex items-center">
                      <span className="mr-2 p-2 border rounded-md bg-blue-100 text-blue-800">
                        {countryCodes.find(country => country.name === selectedNationality)?.code || "+00"}
                      </span>
                      <input 
                        type="text" 
                        disabled={isFormDisabled}
                        value={participant.phone}
                        onChange={(e) => handleInputChange(e, idx, 'phone')}
                        className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/4">
                    <label className="block text-blue-800 font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      disabled={isFormDisabled}
                      value={participant.email}
                      onChange={(e) => handleInputChange(e, idx, 'email')}
                      className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>


{/* Mentor Details */}
<div className="mb-8 w-full">
  <h2 className="text-xl font-semibold text-blue-800 mb-4">Mentor Details</h2>
  <div className="flex flex-wrap gap-4 items-center">
    <div className="w-full md:w-1/4">
      <label className="block text-blue-800 font-semibold mb-2">Name</label>
      <input 
        type="text" 
        disabled={isFormDisabled}
        value={formData.mentor.name}
        onChange={(e) => handleInputChange(e, null, 'name', true)}
        className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
        placeholder="Enter Mentor Name"
      />
    </div>
    <div className="w-full md:w-1/6">
      <label className="block text-blue-800 font-semibold mb-2">Phone Number</label>
      <div className="flex items-center">
        <span className="mr-2 p-2 border rounded-md bg-blue-100 text-blue-800">
          {countryCodes.find(country => country.name === selectedNationality)?.code || "+00"}
        </span>
        <input 
          type="text" 
          disabled={isFormDisabled}
          value={formData.mentor.phone}
          onChange={(e) => handleInputChange(e, null, 'phone', true)}
          className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
          placeholder="Phone Number"
        />
      </div>
    </div>
    <div className="w-full md:w-1/4">
      <label className="block text-blue-800 font-semibold mb-2">Email</label>
      <input 
        type="email" 
        disabled={isFormDisabled}
        value={formData.mentor.email}
        onChange={(e) => handleInputChange(e, null, 'email', true)}
        className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
        placeholder="Enter Mentor Email"
      />
    </div>
  </div>
</div>
<div className="mb-8 w-full">
  <label className="block text-blue-800 font-semibold mb-2">Upload Document (jpg, pdf, jpeg, png - max 5MB)</label>
  <input 
    type="file" 
    accept=".jpg,.jpeg,.png,.pdf" 
    onChange={handleFileChange}
    className="block w-full p-2 border rounded-md text-blue-800 bg-white" 
  />
</div>




          {/* Make Payment Button */}

          <div className='flex'>

          <button
            
            className={`px-6 py-3 mx-5 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isButtonDisabled}
          >
            Make Payment
          </button>
          <button
            onClick={handleFormSubmit}
            className={`px-6 py-3 bg-blue-600 mx5 text-white font-semibold rounded-md hover:bg-blue-700 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isButtonDisabled}
          >
            Upload Receipt
          </button>

          </div>
        </>
      )}


      <p>Loading Soon.....</p>
    </div>
  );
};

const countryCodes = [
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
    { name: "Kazakhstan", code: "+7" },
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
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default page;