import { createContext, useState } from "react";
import { nanoid } from "nanoid";

const SectionContext = createContext();

// eslint-disable-next-line react/prop-types
const SectionContextProvider = ({ children }) => {
  const [sections, setSections] = useState([
    {
      id: nanoid(),
      title: "Professional Summary",
      children: [
        {
          id: nanoid(),
          type: "paragraph",
          value:
            "2-3 sentences describing your previous work experience and your current transition.",
        },
      ],
    },
    {
      id: nanoid(),
      title: "Professional Skills",
      children: [
        {
          id: nanoid(),
          type: "paragraph",
          value:
            "Front-end: HTML, CSS (including Bootstrap), JavaScript (ES6), React. Back-end: NodeJS, Express, SQL, MongoDB, Firebase, Heroku (Dyno). Other relevant skills: REST APIs, Unit-Testing, Git.",
        },
      ],
    },
    {
      id: nanoid(),
      title: "Professional Experience",
      children: [
        {
          id: nanoid(),
          type: "experience",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
          id: nanoid(),
          type: "experience",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
          id: nanoid(),
          type: "experience",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
      ],
    },
    {
      id: nanoid(),
      title: "Education",
      children: [
        {
          id: nanoid(),
          type: "education",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
          id: nanoid(),
          type: "education",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
          id: nanoid(),
          type: "education",
          value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
      ],
    },
    {
      id: nanoid(),
      title: "Military Service (if applicable)",
      children: [
        {
          id: nanoid(),
          type: "paragraph",
          value:
            "Years, title or main assignment, rank (only if you were an officer)",
        },
      ],
    },
    {
      id: nanoid(),
      title: "Additional Information",
      children: [
        {
          id: nanoid(),
          type: "paragraph",
          value:
            "Languages spoken, level. (Native, Fluent, Intermediate, Basic).",
        },
      ],
    },
  ]);

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        id: nanoid(),
        title: "New section",
        children: [],
      },
    ]);
  };

  const deleteSection = (id) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  const resetSections = () => {
    setSections([]);
  };

  const addParagraph = (sectionId, paragraphId, type) => {
    const sectionIndex = sections.findIndex(
      (section) => section.id === sectionId
    );
    const paragraphIndex = sections[sectionIndex].children.findIndex(
      (child) => child.id === paragraphId
    );
    setSections((prev) => {
      const updatedSections = [...prev];
      updatedSections[sectionIndex].children.splice(paragraphIndex + 1, 0, {
        id: nanoid(),
        type,
        value: "value",
      });
      return updatedSections;
    });
  };

  const addParagraphToEmptySection = (sectionId, type) => {
    const sectionIndex = sections.findIndex(
      (section) => section.id === sectionId
    );
    setSections((prev) => {
      const updatedSections = [...prev];
      updatedSections[sectionIndex].children.push({
        id: nanoid(),
        type,
        value: "value",
      });
      return updatedSections;
    });
  };

  const deleteParagraph = (sectionId, paragraphId) => {
    const sectionIndex = sections.findIndex(
      (section) => section.id === sectionId
    );
    const paragraphIndex = sections[sectionIndex].children.findIndex(
      (child) => child.id === paragraphId
    );
    setSections((prev) => {
      const updatedSections = [...prev];
      updatedSections[sectionIndex].children.splice(paragraphIndex, 1);
      return updatedSections;
    });
  };

  const values = {
    sections,
    addSection,
    deleteSection,
    resetSections,
    addParagraph,
    addParagraphToEmptySection,
    deleteParagraph,
  };

  return (
    <SectionContext.Provider value={values}>{children}</SectionContext.Provider>
  );
};

export { SectionContext, SectionContextProvider };
