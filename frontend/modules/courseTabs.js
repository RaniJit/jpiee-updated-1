import coursesData from "../data/coursesData/coursesData.js";

const tabsContainer = document.querySelector(".tabs");
const contentContainer = document.querySelector(".courseTabs-content");

// Mapping of category names to abbreviations
const categoryAbbreviations = {
  "College of Nursing": "nursing",
  "School of Pharmacy": "pharmacy",
  "School of Medical Technical Education": "alliedMedSc",
};

const courseAbbreviations = {
  "B.Sc Nursing": "bsc",
  "General nursing & Midwifery (GNM)": "gnm",
  "Auxiliary Nursing & Midwifery (ANM)": "anm",
  "Diploma in Pharmacy (D. Pharma)": "diplomaInPharmacy",
  "Diploma in Medical Laboratory Technology (DMLT)": "dmlt",
  "Diploma in Medical Radiation Technology (DMRT)": "dmrt",
  "Diploma in Perfusion Technology (DPT)": "dpt",
  "Diploma in Radiation Therapy Technology (DRTT)": "drtt",
  "Certified Ophthalmic Assistant (COA)": "coa",
  "Certified Ophthalmic Surgical Assistant (COSA)": "cosa",
  "Certified Cath Lab Technician (CCLT)": "cclt",
  "Certified Dialysis Technician (CDT)": "cdt",
  "Certified Neuro Technician (CNT)": "cnt",
  "Certified OT Technician (COTT)": "cott",
  "Certified Respiratory Therapist (CRT)": "crt",
  "Certified ECG Technicians (CECGT)": "cegt",
  "Certified EEG Technicians (CEEGT)": "ceegt",
  "Certified EMG Technicians (CEMGT)": "cemgt",
  "Certified Blood Collection Assistant (CBCA)": "cbca",
  "Certified Course in First Aid (CCFA)": "ccfa",
  "Certified Ward Technicians (CWT)": "cwt",
};

// Dynamically generate tabs and content based on data
coursesData.forEach((categoryData, index) => {
  const tab = document.createElement("button");
  tab.classList.add("tab", "btn", "btn-outline-light");
  tab.textContent = categoryData.category;

  tab.addEventListener("click", () => showContent(index));

  tabsContainer.appendChild(tab);

  // Initialize content for the first tab
  if (index === 0) {
    showContent(0);
  }
});

function showContent(index) {
  // Clear previous content
  contentContainer.innerHTML = "";

  coursesData[index].courses.forEach((course) => {
    const courseBox = document.createElement("div");
    const courseLink = document.createElement("a"); // Create anchor tag
    courseLink.classList.add("courseTabs-outerBox");
    // Generate the correct path based on category and course name
    const categorySlug = categoryAbbreviations[coursesData[index].category]; // Get the abbreviation from the mapping
    const courseSlug = courseAbbreviations[course.name]; // Get the abbreviation from the mapping

    // Set the href to the desired page URL
    courseLink.href = `./courses/${categorySlug}/${courseSlug}.html`;
    courseLink.innerHTML = `<span class="courseTabs-courseName">${course.name}</span>`;
    courseBox.appendChild(courseLink); // Append the anchor tag to the div
    contentContainer.appendChild(courseBox);
  });

  // Update active tab
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add("active-tab");
    } else {
      tab.classList.remove("active-tab");
    }
  });
}
