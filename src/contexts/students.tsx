import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';

import {IStudents} from '../models/Istudents';
import { IStudenScore } from '../models/IstudentScore';
import {
  searchResponsibleStudents,
  getStudentScores,
} from '../services/students';

interface StudentsContextData {
  students: IStudents[] | null;
  studentSelected: IStudents;
  loading: boolean;
  studentScore: IStudenScore[];
  setStudentSelected(student: IStudents): void;
}

const StudentsContext = createContext<StudentsContextData>(
  {} as StudentsContextData,
);

function useStudents() {
  const context = useContext(StudentsContext);

  return context;
}

export const StudentsProvider = ({children}) => {
  const [studentSelected, setStudentSelected] =
    useState<IStudents | null>(null);
  const [students, setStudents] = useState(null);
  const [studentScore, setStudentsScore] = useState(null);
  const [loading, setLoading] = useState(false);

  function setStudent(student: IStudents) {
    setStudentSelected(student);
  }

  useEffect(() => {
    setStudentsScore(() => []);
    
    async function getStudentScore() {
      const response = await getStudentScores(studentSelected.id);

      setStudentsScore(() => response.scores);
    }

    if (studentSelected) {
      getStudentScore();
    }
  }, [studentSelected]);

  useEffect(() => {
    async function searchStudents() {
      setLoading(() => true);
      const response = await searchResponsibleStudents();

      setStudents(() => response.students);
      setLoading(() => false);
    }

    searchStudents();
  }, []);

  return (
    <StudentsContext.Provider
      value={{
        setStudentSelected: setStudent,
        studentSelected,
        students,
        loading,
        studentScore,
      }}>
      {children}
    </StudentsContext.Provider>
  );
};

export default useStudents;
