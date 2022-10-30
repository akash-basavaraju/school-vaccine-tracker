import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { readCSV } from "../components/CSVParser";
import { addStudentFormData } from "../service/service";

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await addStudentFormData(data);
    setIsSubmitting(false);
    alert("Submission Completed!");
  };

  if (isSubmitting) {
    return (
      <div
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Submitting...
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        lineHeight: "2",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700" }}>Student Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          Student Name:{" "}
          <input {...register("studentName", { required: true })} />
          <br />
          {errors.studentName && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          Student Class:{" "}
          <input {...register("studentClass", { required: true })} />
          <br />
          {errors.studentClass && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          Student Vaccinated:{" "}
          <input {...register("isVaccinated")} type="checkbox" />
          <br />
          {errors.isVaccinated && (
            <span style={{ color: "red", lineHeight: "0", fontSize: "12px" }}>
              This field is required
            </span>
          )}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {/* <div>
        <div style={{ fontSize: "22px", fontWeight: "700" }}>OR</div>
        <div>Upload a CSV file</div>
        <input
          id="fileForUpload"
          type="file"
          onChange={async () => {
            const file = document.getElementById("fileForUpload").files[0];
            const data = await readCSV(file);
            console.log(data);
          }}
          accept=".csv"
        />
      </div> */}
    </div>
  );
}
