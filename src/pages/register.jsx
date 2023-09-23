import { useState } from "react";

import { useQuery, useMutation } from "@tanstack/react-query";

import axiosClient from "../api/axiosclient";

import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

import mansitting from "../assets/webps/mansitting.png";

import purpleflare from "../assets/webps/purpleflare.png";

import ladyman from "../assets/webps/ladyman.png";

import RegisterConfirmModal from "../components/registerConfirmModal";

export default function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeamName] = useState("");
  const [groupSize, setGroupSize] = useState();
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState("Select your Category");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const teamInfo = {
    email: email,
    phone_number: phone,
    team_name: teamName,
    group_size: groupSize,
    project_topic: projectTopic,
    category: category,
    privacy_policy_accepted: privacyPolicy,
  };

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axiosClient.get("/hackathon/categories-list").then((res) => res.data),
  });

  const {
    mutate,
    isLoading: teamIsLoading,
    isSuccess: teamIsSuccess
  } = useMutation({
    mutationFn: (newTeam) => {
      return axiosClient.post("/hackathon/registration", newTeam);
    },
    onSuccess: () => {
      setEmail("");
      setPhone("");
      setCategory("");
      setPrivacyPolicy(false);
      setProjectTopic("");
      setTeamName("");
      setGroupSize("");
    },
  });

  const handleRegisterTeam = (e) => {
    e.preventDefault();
    mutate(teamInfo);
  };

  const popMessage = `Congratulations you have successfully Registered!`;
  const popSubMessage = `
  Yes, it was easy and you did it!
  Check your mail box for next step`;

  return (
    <div className="flex h-[89vh] w-screen items-center justify-between overflow-hidden bg-[#150E28] px-32 font-montserrat text-white  bxl:px-20 xl:px-14 blend:overflow-y-scroll ham:h-auto ham:flex-col ham:items-center ham:gap-3 xs:px-3">
      {teamIsSuccess && (
        <RegisterConfirmModal
          popMessage={popMessage}
          popSubMessage={popSubMessage}
        />
      )}
      <img
        src={purpleflare}
        alt=""
        className=" absolute -left-16 -top-44 z-0 xs:-top-8 "
      />
      <img
        src={purpleflare}
        alt=""
        className="absolute -bottom-56 -right-16 z-0 rotate-180 xs:hidden"
      />
      <div className="relative w-5/12">
        <img src={purplestar} alt="" className="absolute left-9 top-16 w-4  " />
        <img
          src={purplestar}
          alt=""
          className="absolute bottom-52 right-16 w-4  "
        />
        <img
          src={star}
          alt=""
          className="absolute bottom-32 left-9 w-4 opacity-30  "
        />
        <div className="flex justify-center ham:w-full">
          <img
            src={mansitting}
            alt=""
            className="w-full min-w-[25rem] xs:min-w-[15rem]  "
          />
        </div>
      </div>
      <div className="relative my-5 flex h-fit w-[35rem] flex-col gap-4 rounded-md bg-white/5 px-9 py-8 shadow-md  xs:w-full xs:bg-transparent xs:px-2 xs:shadow-none ">
        <img src={purplestar} alt="" className="absolute right-32 top-8 w-5 " />
        <img src={star} alt="" className="absolute -bottom-2 right-12 w-2 " />
        <h3 className="font-clashbold text-[24px] text-[#D434FE] ">Register</h3>

        <p className="flex items-end gap-1.5 text-sm">
          <span className="">Be part of this movement!</span>
          <img src={ladyman} alt="" className="pb-1" />
        </p>
        <p className="font-bold">CREATE YOUR ACCOUNT</p>

        <form
          className="flex flex-col gap-5 font-montserrat font-semibold "
          onSubmit={handleRegisterTeam}
        >
          <div className="grid grid-cols-2 gap-5 text-sm xs:grid-cols-1 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="teamName" className="w-fit">
                {`Team's Name`}
              </label>
              <input
                name="teamName"
                id="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter the name of your group"
                className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs    placeholder:text-white/20 focus:border-[#D434FE]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="w-fit">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="rounded-md border-2 border-white bg-transparent p-2 text-white  outline-none placeholder:text-xs placeholder:text-white/20   focus:border-[#D434FE]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="w-fit">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="rounded-md border-2 border-white bg-transparent p-2 text-white  outline-none placeholder:text-xs placeholder:text-white/20 focus:border-[#D434FE]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className="w-fit">
                Project Topic
              </label>
              <input
                name="topic"
                id="topic"
                type="text"
                value={projectTopic}
                onChange={(e) => setProjectTopic(e.target.value)}
                placeholder="What is your group project topic"
                className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none placeholder:text-xs   placeholder:text-white/20 focus:border-[#D434FE]"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="w-fit">
                Category
              </label>
              <select
                name="category"
                id="category"
                defaultValue={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none  placeholder:text-xs  placeholder:text-white/20 focus:border-[#D434FE]"
                required
              >
                <option value="select" className="">
                  Select your Category
                </option>
                {data &&
                  data.map((category) => (
                    <option value={category.id} className="" key={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="groupSize" className="w-fit">
                Group Size
              </label>
              <input
                name="groupSize"
                id="groupSize"
                type="number"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                placeholder="What is your group project topic"
                className="rounded-md border-2 border-white bg-transparent p-2 text-white outline-none [appearance:textfield] placeholder:text-xs placeholder:text-white/20 focus:border-[#D434FE]   [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                required
              />
            </div>
          </div>

          <p className="text-sm font-normal italic text-[#FF26B9] ">
            Please review your registration details before submitting
          </p>

          <div className="flex items-center gap-2">
            <input
              id="checkbox"
              type="checkbox"
              value=""
              checked={privacyPolicy}
              onChange={(e) => setPrivacyPolicy(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-[#D434FE] focus:ring-2 focus:ring-[#D434FE] dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-[#D434FE]"
              required
            />
            <label htmlFor="checkbox" className="text-sm font-normal">
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
          <button
            type="submit"
            className="register w-full disabled:cursor-not-allowed"
            disabled={teamIsLoading}
          >
            {`Register Now `}
            {"  "}
            {teamIsLoading && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="mr-2 h-5 w-5 animate-spin fill-gray-900 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
