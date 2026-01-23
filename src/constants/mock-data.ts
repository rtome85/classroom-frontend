import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CSC101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introduction to fundamental concepts in computer science including algorithms, data structures, basic programming in Python, and problem-solving techniques.",
    createdAt: new Date("2023-01-01").toISOString(),
  },
  {
    id: 2,
    code: "MTH240",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Covers vector spaces, matrices, determinants, eigenvalues/eigenvectors, and applications to systems of linear equations and transformations.",
    createdAt: new Date("2023-01-01").toISOString(),
  },
  {
    id: 3,
    code: "HIS305",
    name: "Modern European History",
    department: "History",
    description:
      "Survey of major political, social, and cultural developments in Europe from the French Revolution through the twentieth century, with emphasis on primary sources and historiography.",
    createdAt: new Date("2023-01-01").toISOString(),
  },
];
