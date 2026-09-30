
import { createContext, useContext } from "react";

const StudentContext = createContext();

export const student = {
  name: "Pooja R",
  regNo: "1PO24",
  department: "B.E. Computer Science and Engineering",
  year: "2nd Year",
  dob: "24-11-2006",
};

export const semester1 = [
  { code: "24TA101", name: "Heritage of Tamils", credits: 1, grade: "A+", result: "P" },
  { code: "24BS151", name: "Physics and Chemistry Laboratory", credits: 2, grade: "A", result: "P" },
  { code: "24CH101", name: "Engineering Chemistry", credits: 3, grade: "A", result: "P" },
  { code: "24PH101", name: "Engineering Physics", credits: 3, grade: "B+", result: "P" },
  { code: "24AC101", name: "Indian Constitution and Freedom Movement", credits: 0, grade: "A+", result: "P" },
  { code: "24EN101", name: "Technical English - I", credits: 3, grade: "A+", result: "P" },
  { code: "24MA102", name: "Matrices and Differential Equations", credits: 4, grade: "A", result: "P" },
  { code: "24CS192", name: "Design for Developers", credits: 4, grade: "A+", result: "P" },
  { code: "24CS193", name: "Logic Building using Java", credits: 4, grade: "A+", result: "P" },
];

export const semester2 = [
  { code: "24EN291", name: "Technical English - II", credits: 3, grade: "A+", result: "P" },
  { code: "24TA201", name: "Tamils and Technology", credits: 1, grade: "A", result: "P" },
  { code: "24MA292", name: "Probability Distributions and Statistics", credits: 4, grade: "B", result: "P" },
  { code: "24EE293", name: "Basics of Electrical and Electronics for Computer Engineers", credits: 3, grade: "B+", result: "P" },
  { code: "24CS292", name: "Web Technology", credits: 4, grade: "A", result: "P" },
  { code: "24CS293", name: "Problem Solving using Python for Computer Engineers", credits: 4, grade: "B+", result: "P" },
  { code: "24CS294", name: "Object Oriented Programming using Java", credits: 4, grade: "C", result: "P" },
];

export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider
      value={{ student, semester1, semester2 }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}