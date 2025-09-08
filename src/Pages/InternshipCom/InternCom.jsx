import React, { useState, useEffect } from "react";
import InternshipSection from "./InternshipSection";
import InternshipPlan from "./InternshipPlan";
import AvailablePrograms from "./AvailablePrograms";
import FAQ from "./FAQ";
import JoinUsSection from "./JoinUsSection";
import WhyChooseUs from "./WhyChooseUs";
import InternshipOverview from "./internshipOverview";
import AddInternshipForm from "./AddInternshipForm";
import {
  getAllInternships,
  applyForInternship,
  createInternship,
  updateInternship,
  deleteInternship,
} from "../../api/internshipApi";
import { getUserFromToken } from "../../api/authApi"; 

function InternCom() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrolledInternship, setEnrolledInternship] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [user, setUser] = useState(null);

  // Load user role from token
  useEffect(() => {
    const u = getUserFromToken();
    if (u) {
      setUser(u);
      setIsAdmin(u.role === "ADMIN");
    }
  }, []);

  // Effect to load internships and check user enrollment status
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllInternships();
        setInternships(data);

        if (user && user.uid) {
          // check if current user is already enrolled
          const enrolled = data.find((internship) =>
            internship.selectedStudent?.includes(user.uid)
          );
          if (enrolled) {
            setIsEnrolled(true);
            setEnrolledInternship(enrolled);
          }
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleRegister = async (internship) => {
    if (!user) return;
    setLoading(true);
    try {
      const result = await applyForInternship(internship.id, user.uid);
      setIsEnrolled(true);
      setEnrolledInternship(result);
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteInternship = async (internshipId) => {
    if (!window.confirm("Are you sure you want to delete this internship?")) return;
    setLoading(true);
    try {
      await deleteInternship(internshipId);
      const updatedInternships = await getAllInternships();
      setInternships(updatedInternships);
    } catch (error) {
      console.error("Failed to delete internship", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddInternshipSubmit = async (newInternship) => {
    setLoading(true);
    try {
      await createInternship(newInternship);
      const updatedInternships = await getAllInternships();
      setInternships(updatedInternships);
      setShowAddForm(false);
    } catch (error) {
      console.error("Failed to add internship", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading programs...</p>
      </div>
    );
  }

  return (
    <div>
      {showAddForm ? (
        <AddInternshipForm
          onSubmit={handleAddInternshipSubmit}
          onCancel={() => setShowAddForm(false)}
        />
      ) : isEnrolled && !isAdmin ? (
        // Student enrolled → show overview
        <InternshipOverview internship={enrolledInternship} />
      ) : (
        <>
          <InternshipSection
            internships={internships}
            isAdmin={isAdmin} // 👈 Admin sees Add/Delete buttons
            onAddInternshipClick={() => setShowAddForm(true)}
            onRegister={handleRegister}
            onDelete={handleDeleteInternship}
          />
          {/* Student sees plans & FAQs; Admin only sees internship management */}
          {!isAdmin && (
            <>
              <InternshipPlan />
              <AvailablePrograms />
              <FAQ />
              <JoinUsSection />
              <WhyChooseUs />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default InternCom;
