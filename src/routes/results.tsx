import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, XCircle, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/results")({
  component: Results,
});

// Mock Data Types
type StudentResult = {
  rollNo: string;
  name: string;
  marks: {
    english: number;
    math: number;
    science: number;
    social: number;
    hindi: number;
  };
  total: number;
  percentage: number;
  grade: string;
  status: "Pass" | "Fail";
};

type ClassResults = {
  [key: string]: StudentResult[];
};

// Generate Mock Data Helper
const generateMockData = (): ClassResults => {
  const data: ClassResults = {};
  const subjects = ["english", "math", "science", "social", "hindi"];
  
  for (let i = 1; i <= 8; i++) {
    const className = i.toString();
    const students: StudentResult[] = [];
    
    // Generate 15-20 students per class
    const numStudents = 15;
    
    for (let j = 1; j <= numStudents; j++) {
      const marks: any = {};
      let total = 0;
      
      subjects.forEach(sub => {
        // Random marks between 35 and 100
        const mark = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
        marks[sub] = mark;
        total += mark;
      });
      
      const percentage = parseFloat((total / 5).toFixed(2));
      let grade = 'D';
      if (percentage >= 90) grade = 'A+';
      else if (percentage >= 80) grade = 'A';
      else if (percentage >= 70) grade = 'B';
      else if (percentage >= 60) grade = 'C';
      else if (percentage >= 50) grade = 'D';
      else grade = 'E';

      const student: StudentResult = {
        rollNo: `2024${i.toString().padStart(2, '0')}${j.toString().padStart(3, '0')}`,
        name: `Student ${j} of Class ${i}`, // In real app, real names
        marks: marks,
        total,
        percentage,
        grade,
        status: percentage >= 35 ? "Pass" : "Fail"
      };
      students.push(student);
    }
    data[className] = students;
  }
  return data;
};

const RESULTS_DATA = generateMockData();

function Results() {
  const [selectedClass, setSelectedClass] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = RESULTS_DATA[selectedClass]?.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNo.includes(searchQuery)
  ) || [];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return "bg-green-100 text-green-800 border-green-200";
    if (grade.startsWith('B')) return "bg-blue-100 text-blue-800 border-blue-200";
    if (grade === 'C') return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-slate-100 text-slate-800 border-slate-200";
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Academic Performance
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View annual examination results for all classes. 
            Select a class to view the detailed performance report.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Class Selector Sidebar/Top bar */}
          <div className="w-full lg:w-64 flex-shrink-0">
             <Card className="sticky top-24">
               <CardHeader>
                 <CardTitle className="text-lg">Select Class</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                   {[1, 2, 3, 4, 5, 6, 7, 8].map((cls) => (
                     <Button
                       key={cls}
                       variant={selectedClass === cls.toString() ? "default" : "outline"}
                       className={`w-full justify-start whitespace-nowrap ${
                         selectedClass === cls.toString()
                           ? "bg-blue-500 hover:bg-blue-600 text-white"
                           : "hover:bg-slate-100"
                       }`}
                       onClick={() => setSelectedClass(cls.toString())}
                     >
                       <FileText className="mr-2 h-4 w-4" />
                       Class {cls}
                     </Button>
                   ))}
                 </div>
               </CardContent>
             </Card>
          </div>

          {/* Results Display Area */}
          <div className="flex-1">
             <Card className="mb-6">
               <CardContent className="p-6">
                 <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                   <h2 className="text-2xl font-bold text-gray-800">
                     Class {selectedClass} Results
                   </h2>
                   <div className="relative w-full sm:w-72">
                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                     <Input 
                       placeholder="Search by name or roll number..." 
                       className="pl-10"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                     />
                   </div>
                 </div>

                 <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left">
                     <thead className="bg-slate-100 text-slate-600 font-medium">
                       <tr>
                         <th className="px-4 py-3 rounded-l-lg">Roll No</th>
                         <th className="px-4 py-3">Student Name</th>
                         <th className="px-4 py-3 text-center">Total Marks</th>
                         <th className="px-4 py-3 text-center">Percentage</th>
                         <th className="px-4 py-3 text-center">Grade</th>
                         <th className="px-4 py-3 text-center rounded-r-lg">Status</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                       {filteredStudents.length > 0 ? (
                         filteredStudents.map((student, idx) => (
                           <motion.tr 
                             key={student.rollNo}
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: idx * 0.05 }}
                             className="hover:bg-slate-50 transition-colors"
                           >
                             <td className="px-4 py-3 font-medium text-slate-900">
                               {student.rollNo}
                             </td>
                             <td className="px-4 py-3 text-slate-700">
                               {student.name}
                             </td>
                             <td className="px-4 py-3 text-center text-slate-700">
                               {student.total}/500
                             </td>
                             <td className="px-4 py-3 text-center font-semibold text-slate-900">
                               {student.percentage}%
                             </td>
                             <td className="px-4 py-3 text-center">
                               <Badge variant="secondary" className={getGradeColor(student.grade)}>
                                 {student.grade}
                               </Badge>
                             </td>
                             <td className="px-4 py-3 text-center">
                                {student.status === "Pass" ? (
                                  <div className="flex items-center justify-center text-green-600 font-medium">
                                    <CheckCircle2 className="h-4 w-4 mr-1" /> Pass
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center text-red-600 font-medium">
                                    <XCircle className="h-4 w-4 mr-1" /> Fail
                                  </div>
                                )}
                             </td>
                           </motion.tr>
                         ))
                       ) : (
                         <tr>
                           <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                             <div className="flex flex-col items-center justify-center">
                               <AlertCircle className="h-8 w-8 text-gray-300 mb-2" />
                               <p>No students found matching your search</p>
                             </div>
                           </td>
                         </tr>
                       )}
                     </tbody>
                   </table>
                 </div>
               </CardContent>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
