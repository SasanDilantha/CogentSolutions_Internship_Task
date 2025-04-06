"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

export function RegForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    jobTitle: "",
    company: "",
    number: "",
    email: "",
    url: "",
    agree:false,
  });

  const [agree, setAgree] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const { firstname, lastname, jobTitle, company, number, email, url } = formData;
    if (!firstname || !lastname || !jobTitle || !company || !number || !email || !url) {
      alert("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address.");
      return false;
    }
    const phoneRegex = /^\+94\s?\d{2}\s?\d{3}\s?\d{4}$/;
    if (!phoneRegex.test(number)) {
      alert("Invalid mobile number. Use format: +94 7X XXX XXXX");
      return false;
    }
    const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-]*)*\/?$/;
    if (!urlRegex.test(url)) {
      alert("Invalid website URL.");
      return false;
    }
    if (!agree) {
      alert("You must agree to the Privacy Policy.");
      return false;
    }
    return true;
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Ensure agree field is in formData
    console.log(formData); // This will log formData, check if 'agree' exists

    try {
      const res = await axios.post("http://127.0.0.1:5000/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        alert("Registration successful!");
        setFormData({
          firstname: "",
          lastname: "",
          jobTitle: "",
          company: "",
          number: "",
          email: "",
          url: "",
          agree: false, // Reset agree field as well
        });
        setAgree(false);
      } else {
        alert(`Error: ${res.data.message || "Something went wrong."}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert("Server error. Please try again later.");
        console.error(error);
      } else {
        alert("An unexpected error occurred.");
        console.error(error);
      }
    }
  };



  return (
    <div className="min-h-[20rem] shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Register Now</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Join us for an unforgettable experience!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" value={formData.firstname} onChange={handleChange} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" value={formData.lastname} onChange={handleChange} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" placeholder="ABC" type="text" value={formData.jobTitle} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="XYZ@fc.com" type="text" value={formData.company} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Mobile Number</Label>
          <Input id="number" placeholder="+94 7X XXX XXXX" type="text" value={formData.number} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={handleChange} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="url">Company Website URL</Label>
          <Input id="url" placeholder="www.xyz.com" type="text" value={formData.url} onChange={handleChange} />
        </LabelInputContainer>

        <div className="mb-6 flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600"
          />
          <label htmlFor="privacyPolicy" className="text-sm text-neutral-700 dark:text-neutral-300">
            By filling out the registration form to attend our event, you agree and consent to{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              Cogent Solutions Privacy Policy
            </a>.
          </label>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Register Now &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
