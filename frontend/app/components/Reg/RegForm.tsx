"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { div } from "framer-motion/client";

export function RegForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    jobTitle: "",
    company: "",
    number: "",
    email: "",
    url: "",
    agree: false,
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

    //console.log(formData);

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
          agree: false,
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
    <div className="relative mx-auto w-full max-w-2xl bg-white/80 dark:bg-black/50 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12">
      <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-neutral-400">
        Register for Finastra
      </h1>
      <p className="text-center mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
        Fill out the form to secure your spot at our exclusive event!
      </p>

      <form className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" value={formData.firstname} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" placeholder="Durden" type="text" value={formData.lastname} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" placeholder="Software Engineer" type="text" value={formData.jobTitle} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="XYZ Pvt Ltd" type="text" value={formData.company} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="number">Mobile Number</Label>
          <Input id="number" placeholder="+94 7X XXX XXXX" type="text" value={formData.number} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="you@example.com" type="email" value={formData.email} onChange={handleChange} />
        </LabelInputContainer>
        <LabelInputContainer className="sm:col-span-2">
          <Label htmlFor="url">Company Website</Label>
          <Input id="url" placeholder="https://yourcompany.com" type="text" value={formData.url} onChange={handleChange} />
        </LabelInputContainer>
        <div className="sm:col-span-2 flex items-start space-x-3 text-sm text-neutral-700 dark:text-neutral-300">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 dark:bg-neutral-800 dark:border-neutral-600"
          />
          <label htmlFor="privacyPolicy">
            By registering, you agree to our{" "}
            <a href="https://cogentsolutions.ae/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              Privacy Policy
            </a>.
          </label>
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group relative h-12 w-full rounded-lg bg-gradient-to-br from-black to-neutral-600 font-semibold text-white shadow-inner dark:from-zinc-900 dark:to-zinc-900"
          >
            Register Now →
            <BottomGradient />
          </button>
        </div>
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
