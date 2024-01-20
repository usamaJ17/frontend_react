// components/AppProfile.js
import React, { useState, useEffect } from "react";
import { addProfiledata } from "../api/internal";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AppProfile = () => {
  const user = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [livingWith, setLivingWith] = useState("");
  const [relationshipsDescription, setRelationshipsDescription] = useState("");
  const [currentlyEmployed, setCurrentlyEmployed] = useState("");
  const [physicalHealth, setPhysicalHealth] = useState("");
  const [seriousIllnesses, setSeriousIllnesses] = useState("");
  const [medicationOrSubstances, setMedicationOrSubstances] = useState("");
  const [mentalHealthSymptoms, setMentalHealthSymptoms] = useState("");
  const [treatmentForMentalHealth, setTreatmentForMentalHealth] = useState("");
  const [suicidalThoughts, setSuicidalThoughts] = useState("");
  const [familyMentalHealth, setFamilyMentalHealth] = useState("");
  const [relationshipWithFamily, setRelationshipWithFamily] = useState("");
  const [childhoodAndYouth, setChildhoodAndYouth] = useState("");
  const [birthAndEarlyChildhood, setBirthAndEarlyChildhood] = useState("");
  const [educationalAndCareerDevelopment, setEducationalAndCareerDevelopment] =
    useState("");
  const [significantLifeEvents, setSignificantLifeEvents] = useState("");
  const [typicalDiet, setTypicalDiet] = useState("");
  const [regularExercise, setRegularExercise] = useState("");
  const [consumptionHabits, setConsumptionHabits] = useState("");
  const [stressManagement, setStressManagement] = useState("");
  const [relationshipDescription, setRelationshipDescription] = useState("");
  const [selfImage, setSelfImage] = useState("");
  const [therapyExpectations, setTherapyExpectations] = useState('');
const [specificGoals, setSpecificGoals] = useState('');

  const labels = {
    en: {
      fullname: "Fullname",
      email: "Email",
      birthday: "Birthday",
      address: "Address",
      occupation: "Occupation",
      education: "Education",
      gender: "Gender",
      maritalStatus: "Marital Status",
      heading: "Current life situation:",
      livingWith: " Who do you live with?",
      relationshipsDescription:
        "How would you describe your relationships with friends and family?",
      currentlyEmployed: " Are you currently employed?",
      heading1: "Health status:",
      heading2: "Mental health:",
      heading3: "Family history:",
      heading4: "Development history:",
      heading6: "Emotional and social aspects:",
      heading7: "Goals and expectations:",
      physicalHealth: "How would you describe your current physical health?",
      seriousIllnesses: "Have you had any serious illnesses in the past?",
      medicationOrSubstances:
        "Do you regularly take medication or other substances?",
      mentalHealthSymptoms:
        "Do you experience symptoms like anxiety, sadness, or anger?",
      treatmentForMentalHealth:
        "Have you ever been treated for a mental health condition?",
      suicidalThoughts: "Have you ever thought about or attempted suicide?",
      familyMentalHealth:
        "Are there any mental health conditions in your family?",
      relationshipWithFamily:
        "What is your relationship with your family members?",
      childhoodAndYouth:
        "How was your childhood and youth in terms of your family?",
      birthAndEarlyChildhood:
        "Were there any issues during your birth or early childhood?",
      educationalAndCareerDevelopment:
        "How was your educational and career development?",
      significantLifeEvents: "What significant life events have shaped you?",
      heading5:"Lifestyle and habits:",
      typicalDiet: "How would you describe your typical diet?",
      regularExercise: "Do you engage in regular exercise?",
      consumptionHabits: "Do you consume alcohol, tobacco, or drugs?",
      stressManagement: "How do you handle stress and difficulties?",
      relationshipDescription: "How would you describe your relationships?",
      selfImage: "What is your self-image and self-esteem?",
      therapyExpectations: "What do you hope to achieve from the therapy?",
  specificGoals: "Do you have specific goals you want to achieve?",
    },
    de: {
      fullname: "Vollständiger Name",
      email: "Email",
      birthday: "Geburtstag",
      address: "Adresse",
      occupation: "Beruf",
      education: "Höchster Bildungsabschluss",
      gender: "Geschlecht",
      maritalStatus: "Familienstand",
      heading: "Aktuelle Lebenssituation:",
      livingWith: "Mit wem leben Sie zusammen?",
      heading5:"Lebensstil und Gewohnheiten:",
      relationshipsDescription:
        "Wie würden Sie Ihre Beziehungen zu Freunden und Familie beschreiben? ",
      currentlyEmployed: "Sind Sie aktuell berufstätig?",
      heading1: "Gesundheitszustand:",
      heading2: "Psychische Gesundheit:",
      heading3: "Familienanamnese:",
      heading4: "Entwicklungsgeschichte:",
      heading6: "Emotionale und soziale Aspekte:",
      heading7: "Ziele und Erwartungen:",
      physicalHealth:
        "Wie würden Sie Ihren aktuellen körperlichen Gesundheitszustand beschreiben?",
      seriousIllnesses:
        "Hatten Sie in der Vergangenheit ernsthafte Erkrankungen?",
      medicationOrSubstances:
        "Nehmen Sie regelmäßig Medikamente oder andere Substanzen ein?",
      mentalHealthSymptoms:
        "Leiden Sie unter bestimmten Symptomen wie Angst, Traurigkeit oder Wut?",
      treatmentForMentalHealth:
        "Wurden Sie jemals wegen einer psychischen Erkrankung behandelt?",
      suicidalThoughts:
        "Haben Sie jemals an Selbstmord gedacht oder Versuche unternommen?",
      familyMentalHealth: "Gibt es psychische Erkrankungen in Ihrer Familie?",
      relationshipWithFamily:
        "Wie ist Ihr Verhältnis zu Ihren Familienmitgliedern?",
      childhoodAndYouth:
        "Wie war Ihre Kindheit und Jugend in Bezug auf Ihre Familie?",
      birthAndEarlyChildhood:
        "Gab es Probleme während Ihrer Geburt oder in Ihrer frühen Kindheit?",
      educationalAndCareerDevelopment:
        "Wie war Ihre schulische und berufliche Entwicklung?",
      significantLifeEvents:
        "Welche wichtigen Lebensereignisse haben Sie geprägt?",
        typicalDiet: "Wie sieht Ihre typische Ernährung aus?",
      regularExercise: "Treiben Sie regelmäßig Sport?",
      consumptionHabits: "Konsumieren Sie Alkohol, Tabak oder Drogen?",
      stressManagement: "Wie gehen Sie mit Stress und Schwierigkeiten um?",
      relationshipDescription: "Wie würden Sie Ihre Beziehungen beschreiben?",
      selfImage: "Wie ist Ihr Selbstbild und Ihr Selbstwertgefühl?",
      therapyExpectations: "Was erhoffen Sie sich von der Therapie?",
  specificGoals: "Haben Sie spezifische Ziele, die Sie erreichen möchten?",
    },
  };

  const askAboutLanguage = async () => {
    const { value: selectedLanguage } = await Swal.fire({
      title: "Select Language For This From",
      input: "select",
      inputOptions: {
        en: "English",
        de: "German",
      },
      inputPlaceholder: "Select a language",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "OK",
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("You need to select a language");
          }
        });
      },
    });

    if (selectedLanguage) {
      console.log("Selected Language:", selectedLanguage);
      setSelectedLanguage(selectedLanguage);
    }
  };

  const getLabelsByLanguage = (language) => {
    return labels[language] || labels["en"];
  };

  const handleSave = async () => {


    const language = selectedLanguage || "en";

    const labelsForLanguage = getLabelsByLanguage(language);

    const data = {
      fullname,
      email,
      birthday,
      address,
      occupation,
      education,
      gender,
      maritalStatus,
      user,
      livingWith,
      relationshipsDescription,
      currentlyEmployed,
      physicalHealth,
      seriousIllnesses,
      medicationOrSubstances,
      mentalHealthSymptoms,
      treatmentForMentalHealth,
      suicidalThoughts,
      familyMentalHealth,
      relationshipWithFamily,
      childhoodAndYouth,
      birthAndEarlyChildhood,
      educationalAndCareerDevelopment,
      significantLifeEvents,
      typicalDiet,
      regularExercise,
      consumptionHabits,
      stressManagement,
      relationshipDescription,
      selfImage,
      therapyExpectations,
      specificGoals,
    };

    try {
      // Save profile data
      const response = await addProfiledata(data);
      console.log("Profile data saved:", response);

      const emailResponse = await sendProfileDataEmail(data);
      console.log('Email sent successfully:', emailResponse);

      // Handle success or navigate to another page
    } catch (error) {
      console.error("Error saving profile data:", error.message);
      // Handle errors and show a message to the user
    }
  };

  const sendProfileDataEmail = async (profileData) => {
    try {
      const response = await fetch('https://mern-back-1jic.onrender.com/api/send-profiledata-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    askAboutLanguage();
  }, []);

  const renderLabels = () => {
    const languageLabels = getLabelsByLanguage(selectedLanguage);
  
    return {
      fullname: languageLabels.fullname || "Fullname",
      email: languageLabels.email || "Email",
      birthday: languageLabels.birthday || "Birthday",
      address: languageLabels.address || "Address",
      occupation: languageLabels.occupation || "Occupation",
      education: languageLabels.education || "Education",
      gender: languageLabels.gender || "Gender",
      maritalStatus: languageLabels.maritalStatus || "Marital Status",
      heading: languageLabels.heading || "Current life situation:",
      heading1: languageLabels.heading1 || "Health status:",
      heading2: languageLabels.heading2 || "Mental health:",
      heading3: languageLabels.heading3 || "Family history:",
      heading4: languageLabels.heading4 || "Development history:",
      heading5: languageLabels.heading5 || "Lifestyle and habits:",
      heading6: languageLabels.heading6 || "Emotional and social aspects:",
      heading7: languageLabels.heading7 || "Emotional and social aspects:",
      livingWith: languageLabels.livingWith || "Who do you live with?",
      relationshipsDescription:
        languageLabels.relationshipsDescription ||
        "How would you describe your relationships with friends and family?",
      currentlyEmployed:
        languageLabels.currentlyEmployed || "Are you currently employed?",
      physicalHealth:
        languageLabels.physicalHealth ||
        "How would you describe your current physical health?",
      seriousIllnesses:
        languageLabels.seriousIllnesses ||
        "Have you had any serious illnesses in the past?",
      medicationOrSubstances:
        languageLabels.medicationOrSubstances ||
        "Do you regularly take medication or other substances?",
      familyMentalHealth:
        languageLabels.familyMentalHealth ||
        "Are there any mental health conditions in your family?",
      relationshipWithFamily:
        languageLabels.relationshipWithFamily ||
        "What is your relationship with your family members?",
      childhoodAndYouth:
        languageLabels.childhoodAndYouth ||
        "How was your childhood and youth in terms of your family?",
      birthAndEarlyChildhood:
        languageLabels.birthAndEarlyChildhood ||
        "Was there any trouble during your birth or early childhood?",
      educationalAndCareerDevelopment:
        languageLabels.educationalAndCareerDevelopment ||
        "How was your educational and career development?",
      significantLifeEvents:
        languageLabels.significantLifeEvents ||
        "Which significant life events have shaped you?",
      mentalHealthSymptoms:
        languageLabels.mentalHealthSymptoms ||
        "Do you experience any mental health symptoms?",
      treatmentForMentalHealth:
        languageLabels.treatmentForMentalHealth ||
        "Have you ever been treated for a mental health condition?",
      suicidalThoughts:
        languageLabels.suicidalThoughts ||
        "Have you ever thought about or attempted suicide?",
      typicalDiet: languageLabels.typicalDiet || "Wie sieht Ihre typische Ernährung aus?",
      regularExercise: languageLabels.regularExercise || "Treiben Sie regelmäßig Sport?",
      consumptionHabits: languageLabels.consumptionHabits || "Konsumieren Sie Alkohol, Tabak oder Drogen?",
      stressManagement: languageLabels.stressManagement || "Wie gehen Sie mit Stress und Schwierigkeiten um?",
      relationshipDescription: languageLabels.relationshipDescription || "Wie würden Sie Ihre Beziehungen beschreiben?",
      selfImage: languageLabels.selfImage || "Wie ist Ihr Selbstbild und Ihr Selbstwertgefühl?",
      therapyExpectations: languageLabels.therapyExpectations || "What do you hope to achieve from the therapy?",
      specificGoals: languageLabels.specificGoals || "Do you have specific goals you want to achieve?",
    };
  };
  
  

  return (
    <div className="">
      <div className="flex mb-4 justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().fullname}
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().birthday}
            </label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().address}
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().occupation}
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().education}
            </label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().gender}
            </label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().maritalStatus}
            </label>
            <input
              type="text"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-[570px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading}</h1>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
            {renderLabels().livingWith}
          </label>
          <input
            type="text"
            value={livingWith}
            onChange={(e) => setLivingWith(e.target.value)}
            className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().relationshipsDescription}
          </label>
          <textarea
            value={relationshipsDescription}
            onChange={(e) => setRelationshipsDescription(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().currentlyEmployed}
          </label>
          <select
            value={currentlyEmployed}
            onChange={(e) => setCurrentlyEmployed(e.target.value)}
            className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mr-[610px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading1}</h1>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-3">
            {renderLabels().physicalHealth}
          </label>
          <textarea
            value={physicalHealth}
            onChange={(e) => setPhysicalHealth(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().seriousIllnesses}
          </label>
          <textarea
            value={seriousIllnesses}
            onChange={(e) => setSeriousIllnesses(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex mb-4 justify-center items-center">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().medicationOrSubstances}
          </label>
          <textarea
            value={medicationOrSubstances}
            onChange={(e) => setMedicationOrSubstances(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          />
        </div>
      </div>
      <div className="flex justify-center mr-[610px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading2}</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
              {renderLabels().mentalHealthSymptoms}
            </label>
            <input
              type="text"
              value={mentalHealthSymptoms}
              onChange={(e) => setMentalHealthSymptoms(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().treatmentForMentalHealth}
            </label>
            <input
              type="text"
              value={treatmentForMentalHealth}
              onChange={(e) => setTreatmentForMentalHealth(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().suicidalThoughts}
            </label>
            <input
              type="text"
              value={suicidalThoughts}
              onChange={(e) => setSuicidalThoughts(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-[610px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading3}</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
              {renderLabels().familyMentalHealth}
            </label>
            <input
              type="text"
              value={familyMentalHealth}
              onChange={(e) => setFamilyMentalHealth(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().relationshipWithFamily}
            </label>
            <input
              type="text"
              value={relationshipWithFamily}
              onChange={(e) => setRelationshipWithFamily(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-1/2 gap-7">
          <div className="w-1/2 mr-2">
            <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
              {renderLabels().childhoodAndYouth}
            </label>
            <input
              type="text"
              value={childhoodAndYouth}
              onChange={(e) => setChildhoodAndYouth(e.target.value)}
              className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-[550px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading4}</h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().birthAndEarlyChildhood}
          </label>
          <textarea
            value={birthAndEarlyChildhood}
            onChange={(e) => setBirthAndEarlyChildhood(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().educationalAndCareerDevelopment}
          </label>
          <textarea
            value={educationalAndCareerDevelopment}
            onChange={(e) => setEducationalAndCareerDevelopment(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-1/2">
          <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
            {renderLabels().significantLifeEvents}
          </label>
          <textarea
            value={significantLifeEvents}
            onChange={(e) => setSignificantLifeEvents(e.target.value)}
            className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center mr-[570px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading5}</h1>
      </div>
      <div className="flex justify-center items-center">
  <div className="flex w-1/2 gap-7">
    <div className="w-1/2 mr-2">
      <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
        {renderLabels().typicalDiet}
      </label>
      <input
        type="text"
        value={typicalDiet}
        onChange={(e) => setTypicalDiet(e.target.value)}
        className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
      />
    </div>
    <div className="w-1/2 ml-2">
      <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
        {renderLabels().regularExercise}
      </label>
      <input
        type="text"
        value={regularExercise}
        onChange={(e) => setRegularExercise(e.target.value)}
        className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
      />
    </div>
  </div>
</div>
<div className="flex justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
      {renderLabels().consumptionHabits}
    </label>
    <input
      type="text"
      value={consumptionHabits}
      onChange={(e) => setConsumptionHabits(e.target.value)}
      className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>
<div className="flex justify-center mr-[510px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading6}</h1>
      </div>
<div className="flex justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
      {renderLabels().stressManagement}
    </label>
    <input
      type="text"
      value={stressManagement}
      onChange={(e) => setStressManagement(e.target.value)}
      className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>

<div className="flex justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
      {renderLabels().relationshipDescription}
    </label>
    <input
      type="text"
      value={relationshipDescription}
      onChange={(e) => setRelationshipDescription(e.target.value)}
      className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>
<div className="flex justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
      {renderLabels().selfImage}
    </label>
    <input
      type="text"
      value={selfImage}
      onChange={(e) => setSelfImage(e.target.value)}
      className="w-full h-10 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>
<div className="flex justify-center mr-[550px] mt-5">
        <h1 className="font-semibold">{renderLabels().heading7}</h1>
      </div>
<div className="flex mb-4 justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2 mt-4">
      {renderLabels().therapyExpectations}
    </label>
    <textarea
      value={therapyExpectations}
      onChange={(e) => setTherapyExpectations(e.target.value)}
      className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>
<div className="flex mb-4 justify-center items-center">
  <div className="w-1/2">
    <label className="text-slate-700 text-xs font-normal font-Lato block mb-2">
      {renderLabels().specificGoals}
    </label>
    <textarea
      value={specificGoals}
      onChange={(e) => setSpecificGoals(e.target.value)}
      className="w-full h-20 px-4 border rounded-xl focus:outline-none focus:border-slate-700"
    />
  </div>
</div>
      <div className="flex justify-end items-end mt-8">
        <button
          onClick={handleSave}
          className={`w-1/4 h-12 bg-slate-700 text-white rounded-lg font-normal font-Lato`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AppProfile;
